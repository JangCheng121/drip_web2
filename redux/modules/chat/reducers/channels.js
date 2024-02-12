import {
    ADD_CHANNEL,
    REMOVE_CHANNEL,
    LOAD_CHANNELS,
    LOAD_CHANNELS_SUCCESS,
    LOAD_CHANNELS_FAIL,
    CHANNEL_USER_UPDATE,
    CHANNEL_USER_SET,
    CHANGE_CHANNEL,
    CHANNEL_EXTEND,
    CHANNEL_WILL_EXPIRE,
    INIT_EXPIRE_STATE,
    CHANNEL_EXPIRED,
    CHANGE_NOTIFICATION,
    UPDATE_CHANNEL_INFO,
} from '../constants/ActionTypes';
import * as CONST from '../../../../model/Const'
import _lodash from 'lodash';
// import produce from 'immer';

const initialState = {
    loaded: false,
    loading: false,
    expired: false,
    willExpire: false,
    activeChannel: CONST.DEFAULT_ACTIVE_CHANNEL,
    expiredChannel: CONST.DEFAULT_EXPIRED_CHANNEL,
    willExpireChannel: CONST.DEFAULT_EXPIRE_CHANNEL,
    data: []
};
export default function channels(state = initialState, action) {
    switch (action.type) {
        case ADD_CHANNEL:

            if (state.data.filter(channel => channel.name === action.channel.name).length !== 0) {
                return state;
            }

            return {
                ...state,
                data: [...state.data, action.channel]
            };
        case REMOVE_CHANNEL:
            if (state.data.filter(channel => channel.id === state.expiredChannel).length !== 0) {
                state.data.splice(_lodash.findIndex(state.data, {id:state.expiredChannel}), 1);
            }
            return {
                ...state,
                expired: false,
                expiredChannel: CONST.DEFAULT_EXPIRED_CHANNEL,
                data: state.data
            };
        case CHANGE_CHANNEL:
            if (!action.time) {
                return {
                    ...state,
                    activeChannel: action.channel_id,
                };
            }
            state.data.filter(item => {
                if (item.id === action.channel_id) item.time = action.time;
                return item
            })
            return {
                ...state,
                activeChannel: action.channel_id,
                data: state.data
            };
        case CHANGE_NOTIFICATION:
            state.data.filter(item => {
                if (item.id === action.channel_id) item.notification = action.notification;
                return item
            })
            return {
                ...state,
                data: state.data
            };
        case CHANNEL_EXPIRED:
            return {
                ...state,
                expired: true,
                expiredChannel: action.channel_id
            }
        case CHANNEL_WILL_EXPIRE:
            return {
                ...state,
                willExpire: true,
                willExpireChannel: action.channel_id
            };
        case INIT_EXPIRE_STATE:
            return {
                ...state,
                willExpire: false,
                willExpireChannel: CONST.DEFAULT_EXPIRE_CHANNEL
            }
        case LOAD_CHANNELS:
            return {
                ...state,
                loading: true
            };
        case LOAD_CHANNELS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: [...action.channelData]
            };
        case LOAD_CHANNELS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.error,
                data: [...state.data]
            };
        case CHANNEL_USER_UPDATE:
            state.data.filter(item => {
                if (item.id === action.channel_id) {
                    if (!item.others) {
                        item.others = [];
                    }
                    if (item.users && action.isAdd && _.indexOf(item.users, action.user_id) === -1) {
                        item.users.push(action.user_id);//한번이라도 가입한적이 있는 가입자목록이므로 leaveChannel 시에 삭제하지 않는다.
                    }
                    if (action.isAdd && _.findIndex(item.others, {user_id: action.user_id}) === -1) {
                        item.others.push({user_id:action.user_id, allow:true});
                    } else if (!action.isAdd && _.findIndex(item.others, {user_id: action.user_id}) !== -1) {
                        item.others.splice(_.findIndex(item.others, {user_id: action.user_id}), 1);
                    }
                }
                return item
            });
            return {
                ...state,
                data: state.data
            };
        case CHANNEL_USER_SET:
            state.data.filter(item => {
                if (item.id === action.channel_id) item.others = action.users;
                return item
            })
            return {
                ...state,
                data: state.data
            };
        case CHANNEL_EXTEND:
            console.log('channels CHANNEL_EXTEND=========data===', state.data);
            state.data.filter(item => {
                if (item.id === action.data.channel_id) {
                    item.time += action.data.delayTime;
                    item.point += action.data.delayPoint;
                }
                return item
            });
            return {
                ...state,
                data: state.data
            };
        case UPDATE_CHANNEL_INFO:
            state.data.filter(item => {
                if (item.id === action.channel_id && action.data) {
                    Object.keys(action.data).map((key) => {
                        return item[key] = action.data[key];
                    })
                }
                return item
            });
            return {
                ...state,
                data: state.data
            };

        default:
            return state;
    }
}
