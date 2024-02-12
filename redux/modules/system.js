import {createAction, handleActions} from 'redux-actions'
import produce from 'immer';
import * as Proto from '../common/PropoTypes';
import * as Tool from '../../lib/tool';
import * as CONST from '../../model/Const';
import {dataService} from "../../model/DataService";
import {httpReq} from "../../model/Req"

export const NAME = 'system';
/* Action Types*/
export const SET_MI = `${NAME}/SET_MI`;
export const SET_AI = `${NAME}/SET_AI`;
export const SET_INFO = `${NAME}/SET_INFO`;
export const UPDATE_MI = `${NAME}/UPDATE_MI`;
export const SET_SETTING = `${NAME}/SET_SETTING`;

export const ACT_SET_DATA = `${NAME}/ACT_SET_DATA`;
export const ACT_LIST_ADD_ITEM = `${NAME}/ACT_LIST_ADD_ITEM`;
export const ACT_OBJECT_ADD_ITEM = `${NAME}/ACT_OBJECT_ADD_ITEM`;


export const SYS_INFO_STATUS_EMPTY = `${NAME}/SYS_INFO_STATUS_EMPTY`;
export const SYS_INFO_STATUS_LANGUAGE_CHANGED = `${NAME}/SYS_INFO_STATUS_LANGUAGE_CHANGED`;
export const SYS_INFO_STATUS_LOGOUT = `${NAME}/SYS_INFO_STATUS_LOGOUT`;
export const SYS_INFO_STATUS_LOGIN = `${NAME}/SYS_INFO_STATUS_LOGIN`;
export const SYS_INFO_STATUS_GUEST = `${NAME}/SYS_INFO_STATUS_GUEST`;

export const HIS_TYPE_CHARGE = "HIS_TYPE_CHARGE";
export const HIS_TYPE_EXCHANGE = "HIS_TYPE_EXCHANGE";
export const HIS_TYPE_COIN = "HIS_TYPE_COIN";
export const HIS_TYPE_POINT = "HIS_TYPE_POINT";

export const POINT_STATUS_NOTENOUGH = "POINT_STATUS_NOTENOUGH";
export const ActSetData = createAction(ACT_SET_DATA);
export const ActListAddItem = createAction(ACT_LIST_ADD_ITEM);

/* Actions */
export const setAI = (data) => {
    return {type: SET_AI, payload: {data: data}}
};

export const setMI = (data) => {
    return {type: SET_MI, payload: {data: data}}
};

export const setInfo = (data) => {
  return {type: SET_INFO, payload: {data: data}}
};

export const updateMI = (data) => {
    return {type: UPDATE_MI, payload: {data:data}}
};

export const ActSetSetting = createAction(SET_SETTING);

export const doBuyTicket = (ticket, point) => {
    return (dispatch, getState) => {
        const globalState = getState();
        const mi = globalState.system.mi;
        if (!mi.member)
            return Promise.resolve();

        dispatch(doIncreasePoint(point, false));
        let enter_categories = [].concat(mi.enter_categories);
        let bProcessed = false;
        for (let key in enter_categories) {
            let catTicket = enter_categories[key];
            if (catTicket.category_id === ticket.categoryId) {
                catTicket.from = ticket.from;
                catTicket.to = ticket.to;
                bProcessed = true;
                break;
            }
        }

        if (!bProcessed)
            enter_categories.push(ticket);

        dispatch(updateMI({enter_categories: enter_categories}));
    }
}

export const doIncreasePoint = (point, isAdd) => {
    return (dispatch, getState) => {
        const globalState = getState();
        let mi = globalState.system.mi;
        if (!mi.member)
            return Promise.resolve();

        let myPoint = mi.point;
        point = Tool.parseInteger(point);
        if (isAdd)
            myPoint += point;
        else
            myPoint -= point;

        if (myPoint < 0)
            myPoint = 0;
        let newMi = JSON.parse(JSON.stringify(mi));
        newMi.point = myPoint;
        dispatch(updateMI({point: myPoint}));
    }
}
export const doIncreaseCoin = (coin, isAdd) => {
    return (dispatch, getState) => {
        dispatch(doAddMI('coin', coin, isAdd));
    }
}
export const doAddMI = (type, value, isAdd) => {
    return (dispatch, getState) => {
        const globalState = getState();
        const mi = globalState.system.mi;
        if (!mi.member && !mi[type])
            return Promise.resolve();

        let originValue = mi[type]
        value = Tool.parseInteger(value);
        if (isAdd)
            originValue += value;
        else
            originValue -= value;

        if (originValue < 0)
            originValue = 0;

        dispatch(updateMI({[type]: originValue}));
    }
}

export const doFollowAsync = (followerId, isFollow) => {
    return (dispatch, getState) => {
        const globalState = getState();
        const system = globalState.system;
        const mi = system.mi;

        if (!mi.member)
            return Promise.resolve();

        // 새자료결정
        let pushedArray = Tool.pushArray(mi.follow, followerId, isFollow);
        dispatch(updateMI({follow: pushedArray.array}));
        dataService.sendMesFollow(followerId, isFollow);
    }
}


export const setLikes = (type, array) => {
    return (dispatch, getState) => {
        // let key = `liked_${type}s`;
        let data = {key: array};
        dispatch(updateMI(data));
    }
};

export const setEnterChannel = (channel_id,isPush) => {
    return (dispatch, getState) => {
        let globalState = getState();
        let mi = globalState.system.mi;
        if (!mi.member)
            return Promise.resolve();

        let pushedArray = Tool.pushArray(mi.channels, channel_id, isPush);
        dispatch(updateMI({channels: pushedArray.array}));

    }
}

export const addHistory = (type, history) => {
    return (dispatch) => {
        let payloadList = {
            listKey : [type, 'data'],
            item: history,
            isUnshift : true
        };
        dispatch(ActListAddItem(payloadList));
    }
};

export const getSettingAsync = (loadType = CONST.LOAD_TYPE_MORE) => {
    return (dispatch, getState) => {
        const store = {dispatch: dispatch, getState: getState};
        const state = getState();
        const item = state.system.setting?state.system.setting:Proto.ITEM;
        let  param = {loadType: loadType};
        const reqSetting = () => {
            return new Promise((resolve, reject) => {
                dataService.requestSetting().then(
                    (res)=>{
                        if (Tool.isValidArray(res)) {
                            resolve(res[0])
                        } else {
                            reject("no data");
                        }
                    },
                    (err) => {
                        reject(err);
                    }
                )
            })
        };
        return Proto.getItem(store, item, param, reqSetting, ActSetSetting);
    }
}

/*****************************************************************************************
 *                  리력정보를 얻는 액션(충전, 환전, 무료포인트, 무료코인)
 *                          @param type
 *                          @param loadType
 ******************************************************************************************/
export const getHistoryAsync = (type, loadType=CONST.LOAD_TYPE_INIT, filter={}, perpage=10, sort=[], page=CONST.COUNT_ONE_PAGE) => {
    return async (dispatch, getState) => {
        const state = getState();
        const store = Tool.createObjectAndCopy(Proto.STORE_GETMODEL, {dispatch: dispatch, state: state});
        const param = Tool.createObjectAndCopy(Proto.PARAM_GETMODEL, {loadType: loadType});
        param.type = type;
        param.onePageCnt = perpage;
        param.page = page;
        param.filter = {};
        if (sort.length && sort.length === 2) {
            param.sort = sort;
        }
        Object.keys(filter).map((key)=>{
            return param.filter[key] = filter[key];
        });
        if (!state.system[type]) return Promise.reject('invalid type');
        const mi = state.system.mi;
        if (!mi.member) return Promise.reject('unregistered user');
        const model = state.system[type];
        let resolve_data = await Proto.getModel(
            store,model, param,
            funcHistoryRequest, funcHistoryCreateItem,
            funcHistoryInitModel, funcHistorySetModel, funcHistoryAddItem,

        );
        return Promise.resolve(resolve_data);
    }
};

export const funcHistoryRequest = (model, param, store) => {
    let reqParam = {};
    let reqFilter = {};
    if (param.filter) {
        Object.keys(param.filter).map((key)=>{
            return reqFilter[key] = param.filter[key];
        })
    }
    let reqUrl = '';
    let data_range = [param.page*param.onePageCnt, param.onePageCnt];
    // reqParam.range = JSON.stringify([0, param.onePageCnt]);
    if (store.state.system.mi.id) reqFilter.user_id= store.state.system.mi.id;
    // if (param.loadType === CONST.LOAD_TYPE_MORE) data_range[0] = model.data.length; //reqFilter.id = {"$lt": model.lastId};
    if (param.type === HIS_TYPE_COIN) {
        reqUrl = '/api/coin_history'
    } else if (param.type === HIS_TYPE_POINT) {
        reqUrl = '/api/point_history'
    } else {
        reqUrl = '/api/cash_history';
        if (param.type === HIS_TYPE_EXCHANGE)
            reqFilter.type = CONST.CASH_OUT;
        else
            reqFilter.type = CONST.CASH_IN;
    }
    if (param.sort && param.sort.length === 2) {
        reqParam.sort = JSON.stringify(param.sort);
    }
    reqParam.range = JSON.stringify(data_range);
    reqParam.filter = reqFilter;
    return  httpReq(reqUrl, 'get', reqParam, true);
}

export const funcHistoryCreateItem = (item, param, store, model) => {
    let newItem = Tool.createObjectAndCopy(model.protoItem, item);
    return newItem;
}

const funcHistoryInitModel = (param, store, model) => {
    let newModelReview = Tool.createObjectAndCopy(Proto_model, {type: param.type, protoItem: model.protoItem});
    funcHistorySetModel(newModelReview, param, store);
}

const funcHistorySetModel = (modelInfo, param, store) => {
    if (!param.type) return;
    store && store.dispatch && store.dispatch( ActSetData({
        parentKey : [param.type],
        data: modelInfo
    }));
}

const funcHistoryAddItem = (item, param, store) => {
    if (!item.id) return;
    if (!store || !store.dispatch) return;

    let payloadList = {
        listKey : [param.type, 'data'],
        item: item,
    };
    store.dispatch(ActListAddItem(payloadList));
}

const Proto_model = {
    type:"",
    data:[],
    lastId:0,
    length:0,
    status:CONST.STATUS_REQ_IDLE,
    loadType:CONST.LOAD_TYPE_INIT,
    protoItem : {},
    totalLength: 0,
};
const Proto_CachHistory = {
    id: 0,
    type: CONST.CASH_IN, //1:충전, 2:환전
    messages: [], //쪽지글 배렬
    cash: 0, //현금액
    money: 0, //충전인 경우 포인트수, 환전인 경우 코인수
    ctime: Date.now(), //충전신청날자
    utime: Date.now(), //충전처리날자
    state: 'pending' //요청처리상태
}
const Proto_CoinHistory ={
    id: 0,
    coin: 0, //거래된 머니수
    type: CONST.CASH_IN, //1:입력, 2:출력
    info: '', //거래내용 ...
    extra: '', //기타 필요한 자료 보관
    ctime: Date.now(), //거래날자
};
const Proto_PointHistory ={
    id: 0,
    point: 0, //거래된 포인트수
    type: CONST.CASH_IN, //1:입력, 2:출력
    info: '', //거래내용 ...
    extra: '', //기타 자료, 콘텐트열람일때 content id 등...
    ctime: Date.now()  , //거래날자
};

const initState = {
    ai: {}, //인증정보
    mi: {}, //나의정보
    info: {
        netState: Object.assign({}, CONST.NET_INFO),
        isLogined: false,
        isMember: false,
        status: SYS_INFO_STATUS_EMPTY,
    }, //기타 체계정보

    setting:{
        type: "",
        data: {},
        status:CONST.STATUS_REQ_IDLE,
    },

    [HIS_TYPE_CHARGE]:Tool.createObjectAndCopy(Proto_model, {type: HIS_TYPE_CHARGE, protoItem: Proto_CachHistory}),
    [HIS_TYPE_EXCHANGE]: Tool.createObjectAndCopy(Proto_model, {type: HIS_TYPE_EXCHANGE, protoItem: Proto_CachHistory}),
    [HIS_TYPE_COIN]: Tool.createObjectAndCopy(Proto_model, {type: HIS_TYPE_COIN, protoItem: Proto_CoinHistory}),
    [HIS_TYPE_POINT]: Tool.createObjectAndCopy(Proto_model, {type: HIS_TYPE_POINT, protoItem: Proto_PointHistory}),
};

export default handleActions(
    {
        [SET_MI]: (state, action) => {
            const {payload: {data}} = action;
            return {
                ...state,
                mi: Object.assign({}, data),
            }
        },
        [SET_AI]: (state, action) => {
            const {payload: {data}} = action;
            return {
                ...state,
                ai: Object.assign({}, data),
            }
        },
        [SET_INFO]: (state, action) => {
            const {payload: {data}} = action;
            return {
                ...state,
                info: Object.assign({}, data),
            }
        },
        [UPDATE_MI]: (state, action) =>
            produce(state, draft => {
                const {payload: {data}} = action;
                Object.keys(data).map((key, index) => {

                    if (key === 'stat') {
                        Object.keys(data[key]).map((item, index) => {
                            return draft.mi[key][item] = data[key][item];
                        })
                    } else {
                        return draft.mi[key] = data[key];
                    }
                })

            }),

        [SET_SETTING]: (state, action) => Proto.reducerSetItem(state, action, 'setting'),

        [ACT_SET_DATA]: (state, action) => Proto.ActSetData(state, action),
        [ACT_LIST_ADD_ITEM]: (state, action) => Proto.ActListAddItem(state, action),
        [ACT_OBJECT_ADD_ITEM]: (state, action) => Proto.ActObjectAddItem(state, action),
    },
    initState
)



