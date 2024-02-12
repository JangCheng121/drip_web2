import * as types from '../constants/ActionTypes';
import * as User from '../../users';
import * as CONST from '../../../../model/Const';
import {httpReq} from "../../../../model/Req";
import {dataService} from "../../../../model/DataService";
import * as Tools from "../../../../lib/tool";
import {createUUID} from "../../../../lib/tool";
import {i18n} from "../../../../i18n";

const _ = require('lodash');

export function addMessage(message) {
    const state = dataService.store.getState();
    message.sender && message.sender !== state.system.mi.id && dataService.store.dispatch(User.get(message.sender));
    return {
        type: types.ADD_MESSAGE,
        message
    };
}

export function addChannel(channel) {
    return {
        type: types.ADD_CHANNEL,
        channel
    };
}

export function removeChannel() {
    return {
        type: types.REMOVE_CHANNEL,
    }
}

export function channelExpired(channel_id) {
    return {
        type: types.CHANNEL_EXPIRED,
        channel_id
    }
}

export function updateChannelUser(data) {
    const user_id = data.user_id;
    const channel_id = data.channel_id;
    const mi = dataService.store.getState().system.mi;
    dataService.store.dispatch(User.get(user_id));
    const activeChannel = dataService.store.getState().chat.channels.activeChannel;
    let user_join_leave_message = {
        sender:user_id,
        channel_id: activeChannel,
        type: 'user_join_leave',
        content: {is_join:data.isAdd},
        ctime: new Date(),
        mode: 'live'
    };
    if (mi.id !== user_id) {
        dataService.store.dispatch(addMessage(user_join_leave_message));
    }
    return {
        type: types.CHANNEL_USER_UPDATE,
        isAdd: data.isAdd,
        channel_id:channel_id,
        user_id:user_id
    }
}

export const getChannelIdWithRawId = (id, store) => {
    if (!store)
        return;

    const state = store.getState();
    const channels = state.chat.channels;
    const channelKeys = Object.keys(channels&&channels.data);
    let channelId = 0;
    for (let i = 0; i < channelKeys.length; i++) {
        const key = channelKeys[i];
        const lChannel = channels.data[key];
        if (lChannel && lChannel.id && lChannel.id === id) {
            channelId = key;
            break;
        }
    }
    return channelId;
}

export function setChannelUsers(channel_id, users) {
    for (let i = 0; i < users.length; i++) {
        dataService.store.dispatch(User.get(users[i]));
    }
    return {
        type: types.CHANNEL_USER_SET,
        channel_id,
        users
    }
}

export function changeChannel(channel_id, time) {
    return {
        type: types.CHANGE_CHANNEL,
        channel_id: channel_id,
        time: time
    };
}

export function changeNotification(channel_id, notification) {
    return {
        type: types.CHANGE_NOTIFICATION,
        channel_id,
        notification
    }
}

export function extendChannel(data) {
    return {
        type: types.CHANNEL_EXTEND,
        data
    }
}

export function channelWillExpire(channel_id) {
    return {
        type: types.CHANNEL_WILL_EXPIRE,
        channel_id
    }
}

export function initExpireState() {
    return {
        type: types.INIT_EXPIRE_STATE
    }
}

/**
 * fetch Chat Data actions
 * */

export function fetchChannels() {
    return dispatch => {
        dispatch(requestChannels());
        httpReq('/api/channel', 'get', {filter:{state:true, lang: {$in: ['all', i18n.language]}}}).then(res => {
            dispatch(receiveChannels(res))
        })

    }
}

function requestChannels() {
    return {
        type: types.LOAD_CHANNELS
    }
}

function receiveChannels(json) {
    let channelData = [];
    _.forEach(json, item => {
        dataService.store.dispatch(User.get(item.creator));
        channelData.push(item);
    });
    return {
        type: types.LOAD_CHANNELS_SUCCESS,
        channelData
    }
}

export function fetchMessages(type = '') {
    return (state, dispatch) => {
        dispatch(requestMessages());
        if (type === 'unread') {
            let reqParam = {};
            reqParam.filter = {};
            reqParam.filter.sender = 1;
            reqParam.filter.receiver = state.system.mi.id;
            reqParam.filter.state = false;
            reqParam.sort = JSON.stringify(['id', 'asc']);

            httpReq('/api/message', 'get', reqParam).then(res => {
                dispatch(receiveMessages(res));
                dispatch(setUnreadCount(res.length));
            }, err => {
                console.log('getUnreadMessage Error');
            })
        } else {

            let messages = [];
            dispatch(receiveMessages(messages))
        }

    }
}

export function initMessage(activeChannel) {
    return {
        type: types.LOAD_MESSAGES_INIT,
        activeChannel: activeChannel
    }
}

function requestMessages() {
    return {
        type: types.LOAD_MESSAGES
    }
}

function receiveMessages(json) {
    for (let i = 0; i < json.length; i++) {
        json[i].sender && dataService.store.dispatch(User.get(json[i].sender));
    }
    return {
        type: types.LOAD_MESSAGES_SUCCESS,
        json,
    }
}

export function setUnreadCount(count) {
    return {
        type: types.SET_UNREADCOUNT,
        count
    }
}

function changeIsMobile(isMobile) {
    return {
        type: types.CHANGE_IS_MOBILE,
        isMobile
    };
}

function changeWidthAndHeight(screenHeight, screenWidth) {
    return {
        type: types.CHANGE_WIDTH_AND_HEIGHT,
        screenHeight,
        screenWidth
    };
}

export function initEnvironment() {
    return dispatch => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile) {
            document.body.style.overflow = 'hidden';
        }

        dispatch(changeIsMobile(isMobile));
        dispatch(changeWidthAndHeight(window.innerHeight, window.innerWidth));

        window.onresize = () => {
            dispatch(changeWidthAndHeight(window.innerHeight, window.innerWidth));
        }
    };
}

export function updateChannelInfo(channel_id, data) {
    return {
        type: types.UPDATE_CHANNEL_INFO,
        channel_id: channel_id,
        data: data
    }
}

export function sendMessage(type, data, mode) {

    return (dispatch, getState) => {
        const mi = getState().system.mi;
        const activeChannel = getState().chat.channels.activeChannel;
        console.log('actions sendMessage==========type===', {type:type, data:data});
        if (type !== CONST.CHAT_CONTENT_PRESENT) {
            data = {data: data}
        }

        let message = {
            id: createUUID(),
            sender: mi.id,
            channel_id: activeChannel,
            type: type,
            content: data,
            ctime: new Date(),
            mode: mode
        };
        console.log('actions sendMessage==========state===', message);
        if (mode === 'private') {
            message.receiver = CONST.CUSTOM_SERVICE_ID;
        }

        dataService.sendSocket('newMessage', message);
        dispatch(addMessage(message));
    }
}
