import {httpReq, getServerUrl, reqInit} from "./Req";
import * as Medias from "../redux/modules/medias";
import * as Contents from "../redux/modules/contents";
import * as Users from "../redux/modules/users";
import * as actions from "../redux/modules/chat/actions/actions";
import * as System from "../redux/modules/system";
import * as Note from '../redux/modules/note';
import * as Categories from '../redux/modules/categories';
import * as ReduxProto from '../redux/common/PropoTypes'
import HttpManager from "./Req";
import * as CONST from '../model/Const';
import socketIOClient from "socket.io-client";
import {NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import moment from "moment";
import _lodash from 'lodash';
import Router from 'next/router';
import {auth} from "./Auth"
import {i18n} from '../i18n';

let vm = null;
export default class DataService {
    static instance = null;

    store = {};
    _appSetModalState = null;
    openLiveFinishModal = null;
    currentRoute = '';
    chargeHistory = [];
    chargeSetting = [];
    exchangeSetting = [];
    panStatus = {
        page: '',
        activeTab: '',
        scrollY: 0,
        pageNumber: 1
    };
    popupData = [];

    selectTopTypeStr = 'TOPCLICK';
    selectTopBeforeDateStr = 'TOTALTOP';

    static getInstance() {

        if (DataService.instance == null) {
            DataService.instance = new DataService();
            vm = DataService.instance;
        }
        return this.instance;
    }

    init(store) {
        let system_ai_token;
        if (store) {
            vm.store = store;
        }
        if (!auth.ai || !auth.ai.token) {
            system_ai_token = vm.store.getState().system.ai.token;
            if (!system_ai_token) {
                let local_persist = JSON.parse(localStorage.getItem('persist:HLive'));
                let system_ai = local_persist&&local_persist.system && JSON.parse(local_persist.system).ai;
                system_ai_token = local_persist&&local_persist.system&&system_ai&&system_ai.token;
            }
            auth.ai.token = system_ai_token;
        }
        vm.initConnect();
        vm.loadInitData();
    }

    loadInitData() {
        console.log("Loading...");
        const dispatch = vm.store.dispatch;
        dispatch(System.getSettingAsync());//설정정보
        dispatch(Categories.getCategoriesAsync());//카테고리자료
        dispatch(Note.requestUnreadNote());//unread 쪽지적재
        // dispatch(actions.fetchChannels());//채팅자료적재
    }

    initConnect() {
        // const ai = vm.store.getState().system.ai;
        const ai = auth.ai;
        const token = ai.token;
        reqInit(token);
        vm.socket_connect();
    }

    getMediaType(mime) {
        if (!mime) {
            return 'invalid';
        }
        let array = mime.split('/');
        if (array && array[0].length) {
            return array[0];
        } else {
            return 'invalid';
        }
    }

    showNotification(state, str, callBack) {
        // if (str !== 'timeout of 15000ms exceeded') return;
        NotificationManager[state](
            i18n&&i18n.t?i18n.t(str):str,//content string
            '',//title
            5000,//duration time
            () => {//callBack function
                if (callBack) {
                    callBack();
                }
            }
        );

    }

    /*
    * =============charge=====================
    * */
    getChargeHistory(charge_exchange, loadType = 'init', perPage = 10) {
        return new Promise(function (resolve, reject) {
            let param = {};
            param.filter = {
                user_id: dataService.mi.id,
                type: charge_exchange === 'charge' ? 1 : 2,
            };
            param.range = JSON.stringify([loadType === 'loadMore' ? vm.chargeHistory.length : 0, perPage]);
            httpReq('/api/cash_history', 'get', param)
                .then((res) => {
                    resolve(res);
                    charge_exchange === 'charge' ?
                        vm.chargeHistory = res
                        : vm.exchangeHistory = res;

                })
                .catch((err) => reject(err))
        })
    }

    getChargeSet() {
        return new Promise(async (resolve, reject) => {
            let settingRes = await httpReq(
                '/api/cash_set',
                'get'
            );
            resolve(settingRes);
        })
    }

    requestCoinToPoint(coin, point) {
        return new Promise((resolve, reject) => {
            let reqParam = {
                coin: coin,
                point: point,
            };
            HttpManager.req('/api/coin_to_point', 'post', reqParam)
                .then((res) => {
                    if (res.coin_history) vm.addHistory(System.HIS_TYPE_COIN, res.coin_history);
                    if (res.point_history) vm.addHistory(System.HIS_TYPE_POINT, res.point_history);
                    if (res.user) {
                        vm.dispatchAction(System.updateMI, {point: res.user.point, coin: res.user.coin});
                    }
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                })
        })
    }

    /*********
     * chargeState:충전일때'point', 환전일때'coin'
     * settingId:묶음처리일 때 settingId,
     * money:변환할 현금(충전), 금화(환전),
     * exchangeResult:변환된 결과 포인트(충전), 현금(환전)
     * *************/
    charge(chargeState, settingId = -1, money = 0, exchangeResult = 0) {
        return new Promise(function (resolve, reject) {

            const cash_setting = {
                point: vm.chargeSetting,
                coin: vm.exchangeSetting
            };
            const mi = vm.store.getState().system.mi;
            let params = {},
                setting_data = cash_setting[chargeState][_lodash.findIndex(cash_setting[chargeState], {id: settingId})];

            if (settingId !== -1) {
                params.settingId = settingId;
            } else {
                params.type = chargeState === 'point' ? 1 : 2;
                params[chargeState === 'point' ? 'cash' : 'money'] = money
            }
            httpReq('/api/charge_exchange', 'post', params)
                .then((response) => {
                    let cash_history = {
                        user_id: mi.id,
                        type: settingId !== -1 ? setting_data.type : chargeState === 'point' ? 1 : 2,
                        cash: settingId !== -1 ? setting_data.cash : chargeState === 'point' ? money : exchangeResult,
                        money: settingId !== -1 ? setting_data.money : chargeState === 'point' ? exchangeResult : money,
                        ctime: new Date(),
                        utime: new Date(),
                        state: 'done'
                    };
                    let point_coin_history = {
                        user_id: mi.id,
                        [chargeState]: settingId !== -1 ? setting_data.money : chargeState === 'point' ? exchangeResult : money,
                        type: chargeState === 'point' ? 1 : 2,
                        info: `${chargeState}`,
                        ctime: new Date()
                    };

                    mi[chargeState] = mi[chargeState] + ((chargeState === 'point' ? exchangeResult : money) * (chargeState === 'point' ? 1 : -1));

                    vm.dispatchAction(System.updateMI, {[chargeState]: mi[chargeState]});

                    if (cash_history) {
                        chargeState === 'point' ?
                            vm.addHistory(System.HIS_TYPE_CHARGE, cash_history)
                            : vm.addHistory(System.HIS_TYPE_EXCHANGE, cash_history)
                    }
                    if (point_coin_history) {
                        chargeState === 'point' ?
                            vm.addHistory(System.HIS_TYPE_POINT, point_coin_history)
                            : vm.addHistory(System.HIS_TYPE_COIN, point_coin_history)
                    }
                    resolve(true);
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    get_free_point_info() {
        return new Promise(function (resolve, reject) {
            const mi = vm.store.getState().system.mi;
            if (mi.id) {
                httpReq('/api/money/get_free_point_info', 'get', {user_id:mi.id}).then(
                    (response) => {
                        resolve(response);
                    },
                    (error) => {
                        console.log('get_free_point_info err==============', error);
                        reject(error);
                    }
                )
            }
        })
    }

    addHistory(historyType, history) {
        vm.store && vm.store.dispatch(System.addHistory(historyType, history));
    }

    postContentAdvertData(data, modelType) {
        return new Promise((resolve, reject) => {
            httpReq(`/api/${modelType}`, 'post', data).then(
                (res) => {
                    resolve(res);
                },
                (err) => {
                    reject(err);
                })
        })
    }

    /****
     * uploadMedia: 다매체화일을 서버에 업로드한다.
     *           로컬에서 올린 자료는 다시 다운할 필요가 없으므로 앱의 자료등록부에 옮겨놓고 그것을 업로드한다.
     * type: 다매체 종류 image, voice, video,
     * path: 원본화일의 경로
     * from: 매체를 올리는 대상, chat, social, userprofile, ...
     * bOriginName: 원본이름을 유지하겠는가?    서버에 올릴때 로컬에 복사하면서 이름을 변경하겠는가 하는것을 결정한다.
     * cbPath : 경로를 결정한 후에 호출되는 콜백함수이다.
     * ******/
    dataURLtoFile(data, filename) {
        let arr = data.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type: mime});
    }

    uploadMedia(type, srcPath, duration = 0, from, bOriginName = false, file, cbPath = null, index) {
        return new Promise(async (resolve, reject) => {
            // 파일이름을 결정한다.
            let srcPathElem = vm.splitPath(file.name);
            let dstFileName = !bOriginName ? `${vm.getUniqueFileName(index + 1)}` : srcPathElem.filename;
            let dstFullName = `${dstFileName}${srcPathElem.extension}`;
            let dstDirPath = '/assets/content';

            let url = `${dstDirPath}/${dstFullName}`;
            if (cbPath)
                cbPath(srcPath, url, duration, type);

            let newMedia = Object.assign({}, Medias.MEDIA);
            newMedia.path = srcPath;
            newMedia.duration = duration;
            newMedia.direction = Medias.DIRECTION_UP;
            newMedia.type = type;
            newMedia.from = from;
            newMedia.file = file;

            vm.dispatchAction(Medias.addNew, {url: url, value: newMedia});
            vm.dispatchAction(Medias.setStatus, {url: url, status: Medias.STATUS_REQUEST});

            try {
                let progressFunc = function (progress) {
                    vm.dispatchAction(Medias.setProgress, {url: url, progress: progress});
                };
                let upResult = await vm.uploadFile(type, from, file, dstFileName, progressFunc);

                vm.dispatchAction(Medias.setSuccess, {url: url});
                resolve(upResult);
            } catch (e) {
                vm.dispatchAction(Medias.setError, url);
                reject();
            }
        })
    }

    uploadFile(type, from, file, filename, progressFunc) {
        return new Promise((resolve, reject) => {
            const state = vm.store.getState();
            let uploader = new XMLHttpRequest();
            let data = new FormData();
            data.append("file", file);
            let params = "field=file";
            uploader.open('POST', getServerUrl() + '/api/system/file_upload?' + params, true);
            uploader.setRequestHeader('type', type);
            uploader.setRequestHeader('from', from);
            let mi = state&&state.system&&state.system.mi;
            uploader.setRequestHeader('user_id', mi.id);
            uploader.setRequestHeader('filename', filename);
            const token = state.system.ai.token;
            console.log('DataService.uploadFile=====mi.id=====', token);
            uploader.setRequestHeader('authorization', token);

            uploader.onprogress = (e) => {
                let progress = parseInt(e.loaded / e.total * 100, 10);

                progressFunc(progress);
            };
            uploader.onerror = (e) => {
                console.log('upload Error', e);
                reject(e);
            };
            uploader.ontimeout = (e) => {
                console.log('upload timeout', e);
                reject(e);
            };
            uploader.onabort = (e) => {
                console.log('upload aborted', e);
                reject(e);
            };
            uploader.onload = (e) => {

                let res = JSON.parse(uploader.responseText);
                if (typeof res !== 'object' || !res.result || res.result !== "ok" || !res.fname) {
                    reject('upload result error');
                } else {
                    res.fname = res.fname.replace('./', '');
                    resolve(res);
                }

            };
            uploader.send(data);
        })
    }

    /*
    * common
    * */
    splitPath = function (path) {
        let result = path.replace(/\\/g, "/").match(/(.*\/)?(\..*?|.*?)(\.[^.]*?)?(#.*$|\?.*$|$)/);
        return {
            dirname: result[1] || "",
            filename: result[2] || "",
            extension: result[3] || "",
            params: result[4] || ""
        };
    };

    getUniqueFileName(index = 1) {
        const state = vm.store.getState();
        let mi = state&&state.system&&state.system.mi;
        return `${mi.id}_${moment(new Date()).format("YYYYMMDDhhmmss")}_${index}`;
    }

    dispatchAction(action, payload) {
        vm.store.dispatch(action(payload));
    }

    /*해당 id 를 가지는 contents 자료를 가져온다.
    * 이미 적재된 contents 목록에 요구하는 자료가 없는 경우 개별적으로 호출한다.*/
    getContentById = (id) => {
        if (!id) return;
        id = parseInt(id);
        httpReq('/api/content/' + id, 'get').then(
            (res) => {
                vm.dispatchAction(Contents.ActAddOneItem, {type: 'contents', item: res});
                let state = vm.store.getState();//.users[res.user_id]
                let users = state.users;
                let user = users[res.user_id];
                if (!user) {
                    vm.dispatchAction(Users.get, res.user_id);
                }
            },
            (err) => {
                console.log(err)
            }
        )
    };

    //dataId=>콘텐트 or 댓글 아이디, type=> content or review
    deletePost(dataId, type, contentId) {//dataId: content id
        return new Promise(async (resolve, reject) => {
            if (!dataId) return reject('invalid dataId');
            console.log('delete Post===========', type);
            httpReq('/api/' + type + '/' + dataId, 'delete').then(
                (res) => {
                    // let state = vm.store.getState();
                    if (type === 'content') {
                        vm.store && vm.store.dispatch(Contents.removeContent(dataId));
                    } else if (type === 'review') {
                        vm.store && vm.store.dispatch(Contents.removeReview(dataId, contentId));
                    } else if (type === 'channel') {
                        vm.store && vm.dispatchAction(actions.channelExpired, parseInt(dataId))
                    }
                    resolve(res);
                },
                (err) => {
                    reject(err);
                }
            );
        })
    }

    /*
    * 소켓
    * */
    socket_connect() {

        console.log('Connect to Socket.', getServerUrl())

        vm.socket = socketIOClient(getServerUrl());
        vm.socket.on('connect', function (p_socket) {
            const token = vm.store.getState().system.ai.token;
            const ai_token = auth.ai&&auth.ai.token;
            if (!ai_token) {
                return;
            }
            vm.socket.emit('mesSockInfo', {token: ai_token});
        });
        vm.socket.on('reconnect', function (data) {
            const token = vm.store.getState().system.ai.token;
            const ai_token = auth.ai&&auth.ai.token;
            if (!ai_token) {
                return;

            }
            vm.socket.emit('mesSockInfo', {token: ai_token});
        });

        vm.socket.on('token error', function (data) {
            console.log('dataService.socket.on token error============');
            vm.dispatchAction(ReduxProto.resetRedux);
            Router.pushRoute('/login');
        });

        vm.socket.on('disconnect', function (p_socket) {
            // vm.showNotification('error', 'socket disconnect');
        });

        //다른데서 내 id 로 가입.....
        vm.socket.on('mesExit', function () {
            console.log('socket.on mesExit...............');
            Router.pushRoute('/login');
        });

        //채팅관련
        vm.socket.on('userLeaveChannel', data => {
            const {channel_id, user_id, type} = data;
            if (!channel_id || !user_id)
                return;
            data.isAdd = false;
            vm.dispatchAction(actions.updateChannelUser, data);
            const state = vm.store.getState();
            const mi = state&&state.system&&state.system.mi;
            const channels = state.chat&&state.chat.channels;
            let activeChannelInfo = _lodash.filter(channels.data, {id: channel_id})[0];
            if (type==='kickout' && user_id === mi.id && activeChannelInfo && activeChannelInfo.creator !== mi.id) {
                vm._appSetModalState&&vm._appSetModalState('alert', 'CHATEXIT', 'DONE', Router.back);
                vm.store.dispatch(actions.updateChannelInfo(channel_id, {kickOuted: true}))
            }
        });

        vm.socket.on('userJoinChannel', data => {
            if (!data.channel_id || !data.user_id)
                return;
            data.isAdd = true;
            vm.dispatchAction(actions.updateChannelUser, data);
        });
        vm.socket.on('newChannel', channel => {
            vm.dispatchAction(actions.addChannel, channel)
        });
        vm.socket.on('newMessage', async (message, callback) => {
            console.log('newMessage=======start......=========', message);
            if (message.mode === 'private') {//mode:channel='기타', live, private:'1:1'
                message.channel_id = CONST.CUSTOM_SERVICE_CHANNEL;
            }
            if (message.type==='gift' && message.content && message.content.data && message.content.data.gift_id) {
                let gift_id = message.content.data.gift_id;
                let gift_cnt = message.content.data.cnt;
                let gift_data = await httpReq('/api/gift/'+gift_id, 'get');
                message.content.data.img = gift_data.img;
                const channels = vm.store.getState().chat.channels;
                let activeChannelInfo = _lodash.filter(channels.data, {id: message.channel_id})[0];
                let new_gifts = activeChannelInfo&&activeChannelInfo.gifts?activeChannelInfo.gifts:[];
                new_gifts.push({gift_id:gift_id, sender:message.sender});
                vm.store.dispatch(actions.updateChannelInfo(message.channel_id, {nLike: activeChannelInfo&&activeChannelInfo.nLike + (gift_data.price * gift_cnt), gifts: new_gifts}))
            }
            if (message.type==='text' && message.content && message.content.data === '') {
                return ;
            }
            message.ctime = new Date();
            console.log('newMessage================', message);
            vm.store.dispatch(actions.addMessage(message));
            if (vm.currentRoute === CONST.ROUTE_CONSULTATION) {
                callback(message.id);
            } else {
                vm.store.dispatch(actions.setUnreadCount(vm.store.getState().chat.messages.unreadCount + 1));
            }
        });
        vm.socket.on('channelExpired', channel_id => {
            vm.dispatchAction(actions.channelExpired, parseInt(channel_id));
            vm.store.dispatch(System.setEnterChannel(channel_id, false));
        });
        vm.socket.on('stopChannel', data => {
            const {channel_id, type, block_reason} = data;
            const channels = vm.store.getState().chat.channels;
            console.log('accept socket.on stopChannel======', data.channel_id);
            vm.dispatchAction(actions.channelExpired, parseInt(data.channel_id));
            vm.store.dispatch(System.setEnterChannel(data.channel_id, false));
            if (channels && channels.activeChannel && channels.activeChannel === channel_id) {
                vm.openLiveFinishModal && vm.openLiveFinishModal(channel_id, type, block_reason);
            }
        });
        vm.socket.on('channelWillExpire', channel_id => {
            vm.dispatchAction(actions.channelWillExpire, channel_id);
        });
        vm.socket.on('commandChannel', data => {
            const {channel_id, user_id, command} = data;
            const state = vm.store.getState();
            const mi = state.system.mi;

            if (mi.id !== user_id) return;
            const channels = state.chat.channels;
            const channelId = actions.getChannelIdWithRawId(channel_id, vm.store);

            if (!channelId) return;

            const active_channel = channels.data[channelId];
            let others = active_channel.others;
            let managers = active_channel.managers;
            let alertStr = '';
            console.log('commandChannel first managers=======', {managers, command, user_id});
            if (command === CONST.CHAT_ADD_MANAGER_USER || command === CONST.CHAT_DELL_MANAGER_USER) {
                let manager_includes = _lodash.includes(managers, user_id);
                if (command === CONST.CHAT_ADD_MANAGER_USER && !manager_includes ) {
                    managers.push(user_id);
                } else if(manager_includes) {
                    managers = _lodash.without(managers, user_id);
                }
                alertStr = command===CONST.CHAT_ADD_MANAGER_USER?'ROOMMANAGER':'DELMANAGER';
                vm.store.dispatch(actions.updateChannelInfo(channel_id, {managers: managers}))
            } else if (command === CONST.CHAT_ALLOW_USER || command === CONST.CHAT_DISALLOW_USER) {
                for (let key in others) {
                    let item = others[key];
                    if (item.user_id === user_id) {
                        item.allow = command === 'allowChat' ? true : false;
                        break;
                    }
                }
                alertStr = command===CONST.CHAT_ALLOW_USER?'CHATENABLE':'CHATUNABLE';
                vm.store.dispatch(actions.updateChannelInfo(channel_id, {others: others}))
            }
            vm._appSetModalState&&vm._appSetModalState('alert', alertStr);
        });
        vm.socket.on('changeNotification', data => {
            vm.store.dispatch(actions.changeNotification(data.channel_id, data.notification));
        });
        vm.socket.on('newNote', data => {
            vm.store.dispatch(Note.addNote(data, true));
            vm.store.dispatch(Note.addUnreadNoteId([data.id]));
            vm.showNotification('info', '새 쪽지가 왔습니다.');
        });
        vm.socket.on('pointChange', data => {
            const {historyItem, unit, amount} = data;
            // vm.store.dispatch(System.doIncreasePoint(data.point, data.isAdd));
            vm.showNotification('info', 'point change.');
            vm.store.dispatch(System.updateMI({[unit]:amount}));
        });
        vm.socket.on('pointNotEnough', () => {
            vm.store.dispatch(System.updateMI({pointStatus: System.POINT_STATUS_NOTENOUGH}))
        });
        vm.socket.on('autoNoteStopped', data => {
            vm.showNotification('warning', '보유머니부족으로 당신이 개설한 xxx 방의 자동쪽지전송이 중지되였습니다.');
        });
        vm.socket.on('autoNoteSend', data => {
            vm.store.dispatch(actions.updateChannelInfo(data.channel_id, {send_note_cnt: data.send_note_cnt}))
        });

        //라이브

        vm.socket.on('likeLive', data => {
            const channels = vm.store.getState().chat.channels;
            let activeChannelInfo = _lodash.filter(channels.data, {id: data.channel_id})[0];
            vm.store.dispatch(actions.updateChannelInfo(data.channel_id, {nLike: activeChannelInfo.nLike + 1}))
        })
        vm.socket.on('channelUpdate',async (data) => {
            const {id} = data;
            const channels = vm.store.getState().chat.channels;
            let activeChannelInfo = _lodash.filter(channels.data, {id: id})[0];
            if (activeChannelInfo) {
                vm.store.dispatch(actions.updateChannelInfo(id, data))
            } else {
                vm.dispatchAction(actions.addChannel, data)
            }
        })
    }

    sendSocket(type, data, callback) {

        if (!vm.socket) {
            Router.pushRoute('/');
            return;
        }
        console.log('Sending Socket Data..', type, data);
        if (!vm.socket || !vm.socket.connected) {
            vm.socket_connect();
        }
        vm.socket.emit(type, data, callback);
    }

    // 뭘 하나 봤당
    sendMesContentViewed(contentId, contentType = 'content') {
        const state = vm.store.getState();
        if (!state || !state.system || !state.system.mi || !state.system.mi.id) {
            return;
        }
        vm.sendSocket(
            CONST.SOCK_MES_TYPE_SYS,
            {
                type: "View",
                user_id: state.system.mi.id,
                content_id: contentId,
                content_type: contentType
            })
    }

    //좋아요/안좋아요
    sendMesLike(dstType, dstId, isLike) {
        const state = vm.store.getState();
        if (!state || !state.system || !state.system.mi ||!state.system.mi.id) {
            return;
        }
        vm.sendSocket(
            CONST.SOCK_MES_TYPE_SYS,
            {
                type: "Like",
                user_id: state.system.mi.id,
                dest_type: dstType,
                dest_id: dstId,
                is_like: isLike
            }
        )
    }

    // 콘텐츠를 즐겨찾기에 보관했다.
    sendMesAddFavoure(contentId, isAdd) {
        const state = vm.store.getState();
        if (!state || !state.system || !state.system.mi ||!state.system.mi.id) {
            return;
        }
        vm.sendSocket(
            CONST.SOCK_MES_TYPE_SYS,
            {
                type: "Favour",
                user_id: state.system.mi.id,
                content_id: contentId,
                is_favour: isAdd
            }
        )
    }

    // 팔로잉했다.
    sendMesFollow(followerId, isFollow) {
        const state = vm.store.getState();
        if (!state || !state.system || !state.system.mi ||!state.system.mi.id) {
            return;
        }
        vm.sendSocket(
            CONST.SOCK_MES_TYPE_SYS,
            {
                type: "Follow",
                user_id: state.system.mi.id,
                follower_id: followerId,
                is_follow: isFollow
            }
        )
    }

    requestReviews(idArray) {
        return HttpManager.getArray('review', 'id', idArray)
    }

    requestSetting() {
        return HttpManager.req('/api/setting', 'get');
    }

    requestCategories() {
        return httpReq('/api/category', 'get')
    }

    requestGetContents(reqParam, haveHeader=false) {
        return httpReq('/api/content/get_list', 'get', reqParam, haveHeader);
    }

    requestAddReview(reviewItem, type, dstItemId) {
        return new Promise((resolve, reject) => {
            if (type !== "review" && type !== "content")
                reject('invalid type');
            if (!dstItemId)
                reject('invalid item id');

            HttpManager.req('/api/review', 'post', reviewItem)
                .then(
                    (res) => {
                        HttpManager.updateArray(type, "add", dstItemId, "reviews", res.id);
                        resolve(res);
                    }
                )
                .catch((err) => {
                    reject(err);
                })
        })
    }

    requestBuyTicket(categoryId, ticketId, userId) {
        let path = '/api/user/enter_category';
        let reqParam = {
            category_id: categoryId,
            id: ticketId,
        };

        return HttpManager.req(path, 'post', reqParam);
    }

    /*
    * 광고자료를 얻어온다.
    * */
    // getAdverts() {
    //     return new Promise(async (resolve, reject) => {
    //         let res = await httpReq(
    //             '/api/advert',
    //             'get',
    //         );
    //         vm.advertsData = res;
    //         vm.getSetting();
    //         resolve(res);
    //     })
    // }

    getSetting() {
        return new Promise(async (resolve, reject) => {
            let settingRes = await httpReq(
                '/api/setting',
                'get'
            );
            vm.settingData = settingRes[0];
            resolve(vm.settingData);
        })
    }

    getPopup() {
        return new Promise(async (resolve, reject) => {
            if (vm.popupData.length) {
                return resolve(vm.popupData);
            }
            let popupRes = await httpReq(
                '/api/popup',
                'get'
            );
            if (!popupRes.length) reject('error');
            vm.popupData = popupRes;
            resolve(vm.popupData);
        })
    }

    //receivers:쪽지받을 유저들의 아이디 배렬, noteContent={data: 'noteContent'}
    funcSendNote(receivers, noteContent) {
        const state = vm.store.getState();
        let mi = state&&state.system&&state.system.mi;
        for (let i = 0; i < receivers.length; i++) {
            let data = {
                sender: mi.id,
                receiver: receivers[i],
                type: 'text',
                content: noteContent,
                ctime: new Date(),
            };
            vm.sendSocket('newNote', data);
        }

    }

    updateMyAdvert(advertId, updateData) {
        return new Promise(async (resolve, reject) => {
            if (!advertId || !updateData) return;
            let reqParam = {
                isCustom: true,
                filter: `{"id":"${advertId}"}`,
                update: JSON.stringify(updateData),
            };
            httpReq('/api/advert/' + advertId, 'put', reqParam).then(
                (res) => {
                    resolve(res);
                },
                (err) => {
                    console.log(err);
                    reject(err);
                }
            )
        })
    }

    updateDbField(db_collection, db_item_id, filter_key, update_data) {
        return new Promise(async (resolve, reject) => {
            if (!db_collection || !filter_key || !update_data) {
                reject('fail update data....');
                return;
            }
            let filterField = {}, updateData = {};
            Object.keys(filter_key).map((key) => {
                return filterField[key] = filter_key[key];
            });
            Object.keys(update_data).map((key) => {
                return updateData[key] = update_data[key];
            });

            let reqParam = {
                isCustom: true,
                filter: JSON.stringify(filterField),
                update: JSON.stringify(updateData),
            };
            httpReq('/api/' + db_collection + '/' + db_item_id, 'put', reqParam).then(
                (res) => {
                    resolve(res);
                },
                (err) => {
                    console.log(err);
                    reject(err);
                }
            )
        })
    }

    funcGetMoneyState() {
        return new Promise(async (resolve, reject) => {
            httpReq('/api/money/get_money_stat', 'get').then(
                (res) => {
                    resolve(res);
                },
                (err) => {
                    console.log(err);
                    reject(err);
                }
            )
        })
    }
}
export const dataService = DataService.getInstance()
