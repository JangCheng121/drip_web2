import * as CONST from "../../model/Const";
import * as Tool from "../../lib/tool";
import produce from 'immer';
import HttpManager from "../../model/Req";

export const TYPE_RESET_REDUX = 'TYPE_RESET_REDUX';
export const TYPE_RESET_REDUX_STATE = 'TYPE_RESET_REDUX_STATE';
export const resetRedux = () => {
    return {type: TYPE_RESET_REDUX}
};
export const resetReduxState = (state_key) => {
    return {type: TYPE_RESET_REDUX_STATE, state_key : state_key}
};

export const MODEL = {
    type:"",
    data:[],
    lastId:0,
    length:0,
    status:CONST.STATUS_REQ_IDLE,
    loadType:CONST.LOAD_TYPE_INIT,
    protoItem : {},
    totalLength: 0,
    filterStr : '',
};

export const ITEM = {
    type: "",
    data: {},
    status:CONST.STATUS_REQ_IDLE,
};

export const getItem = (
    store, item, param, reqFunc, actSet, createData,
) => {
    if (!store || !param || !item || !reqFunc || !actSet)
        return Promise.reject('invalid params');
    return new Promise((resolve, reject) => {
        if (item.status === CONST.STATUS_REQ_START) return resolve();
        if (param.loadType !== CONST.LOAD_TYPE_INIT && item.status === CONST.STATUS_REQ_SUCCESS) return resolve();

        store.dispatch(actSet({item:item, key: 'status', value: CONST.STATUS_REQ_START}));
        reqFunc(store, param, item)
            .then((res) => {
                let data = res;
                createData && (data = createData(res));
                store.dispatch(actSet({item:item, key: 'data', value:data}))
                store.dispatch(actSet({item:item, key: 'status', value: CONST.STATUS_REQ_SUCCESS}));
                resolve();
            })
            .catch((error) => {
                store.dispatch(actSet({item:item, key: 'data', value:error}));
                store.dispatch(actSet({item:item, key: 'status', value: CONST.STATUS_REQ_FAIL}));
                reject(error);
            })
    })
}

export const reducerSetItem = (state, action, keyItem) =>
    produce(state, draft=> {
        const {payload:{key, value, item}} = action;
        if (!key || !value || !item)
            return;

        if (!draft[keyItem])
            return;

        let wItem = draft[keyItem];
        wItem[key] = value;
    })


export const ActSetData = (state, action) => {
    const {payload: {parentKey, data}} = action;
    return _act_set_data(state, parentKey, data);
};
const _act_set_data = (state, parentKey, data) =>
    produce(state, draft => {
        let parent = Tool.getObjVal(draft, parentKey);
        if (!parent || !Tool.isObject(parent))
            return;

        Object.keys(data).map((key) => {
            return parent[key] = data[key];
        })
    });


export const ActObjectAddItem = (state, action) => {
    const {payload: {parentKey, itemKey, item}} = action;
    return _act_object_add_item(state, parentKey, itemKey, item);
};

const _act_object_add_item = (state, parentKey, itemKey, item) =>
    produce(state, draft => {
        let parent = Tool.getObjVal(draft, parentKey);
        if (!parent || !Tool.isObject(parent) /*|| !Tool.isObject(item)*/)
            return;

        parent[itemKey] = item;
    });

export const ActObjectDeleteItem = (state, action) => {
    const {payload: {parentKey, itemKey}} = action;
    return _act_object_delete_item(state, parentKey, itemKey);
}

const _act_object_delete_item = (state, parentKey, itemKey) =>
    produce(state, draft => {
        let parent = Tool.getObjVal(draft, parentKey);
        if (!parent || !Tool.isObject(parent) || !parent[itemKey])
            return;

        delete parent[itemKey];
    })

export const ActListAddItem = (state, action) => {
    const {payload: {listKey, item, isUnshift}} = action;
    return _act_list_add_item(state, listKey, item, isUnshift);
};
const _act_list_add_item = (state, listKey, item, isUnshift = false) =>
    produce(state, draft => {
        let list = Tool.getObjVal(draft, listKey);
        if (!list)
            return;
        if (isUnshift) {
            list.unshift(item)
        } else {
            list.push(item);
        }
    });

export const ActListDeleteItem = (state, action) => {
    const {payload: {listKey, index}} = action;
    return _act_list_delete_item(state, listKey, index);
}

const _act_list_delete_item = (state, listKey, index) =>
    produce(state, draft => {
        let list = Tool.getObjVal(draft, listKey);
        if (!list || !Tool.isValidArray(list) || !list[index])
            return;
        list.splice(index, 1);
    })

//
//
export const STORE_GETMODEL = {
    dispatch: null,
    state : null,
}
export const PARAM_GETMODEL = {
    onePageCnt : CONST.COUNT_ONE_PAGE,
    countType : CONST.GET_TYPE_LASTID,
    loadType : CONST.LOAD_TYPE_INIT
}

export const getModel =(
    store,
    model,
    param,
    reqFunc,
    createModelDataObj,
    actModelInit,
    actionSetModel,
    actionAddDataToModel,
) => {
    if (!store.dispatch || !model ||
        !reqFunc || !actModelInit ||
        !actionSetModel || !actionAddDataToModel ||
        !param.loadType || !param.onePageCnt || !param.countType ||
        !store.dispatch || !store.state
    )
        return Promise.reject("invalid Params");

    const wFuncSetModel = (modelInfo) => {
        actionSetModel && actionSetModel(modelInfo, param, store);
    }

    const wFuncModelAddData = (itemInfo) =>{
        actionAddDataToModel && actionAddDataToModel(itemInfo, param, store);
    }

    return new Promise((resolve, reject) => {
        if (model.status === CONST.STATUS_REQ_START) return resolve();
        if (param.loadType === CONST.LOAD_TYPE_MORE && model.status === CONST.STATUS_REQ_NOMORE) return resolve();
        let lastId = model.lastId;
        let length = model.length;
        if (param.loadType === CONST.LOAD_TYPE_INIT) {
            lastId = 0;
            length = 0;
            actModelInit && actModelInit(param, store, model);
        } else {
            wFuncSetModel({loadType: CONST.LOAD_TYPE_MORE})
        }

        wFuncSetModel({status: CONST.STATUS_REQ_START});
        reqFunc(model, param, store)//loadType
            .then((response) =>{
                if (!response) return reject('response undefined');
                const { headers, data} = response;
                let res = data;
                let totalLength = 0;
                if (headers) {
                    let contentRange = headers['content-range'];
                    if (contentRange)
                        totalLength = parseInt(contentRange.split('/').pop(), 10);
                }
                if (!res || res.result === 'fail') {
                    wFuncSetModel({status: CONST.STATUS_REQ_FAIL});
                    return reject('res undefined');
                }
                let wCreateDataItemFunc = createModelDataObj ? createModelDataObj : Tool.createObject;

                for (let i in res) {
                    if (res.result && res.result === 'fail') break;
                    let newDataItem = wCreateDataItemFunc(res[i], param, store, model);
                    if (!newDataItem)
                        continue;
                    if (newDataItem && !isNaN(newDataItem.id)) {
                        ///광고일때는 last_id 설정을 하지 않는다.
                        lastId = res[i].id;
                        length += 1;
                    }
                    if (res[i].type === 'audio') continue;///음성일때는 제외
                    wFuncModelAddData(newDataItem);
                }
                wFuncSetModel({totalLength: totalLength});
                if (res.length < (param.onePageCnt?param.onePageCnt:CONST.COUNT_ONE_PAGE)) {
                    wFuncSetModel({status: CONST.STATUS_REQ_NOMORE});
                } else {
                    wFuncSetModel({lastId: lastId, length: length});
                    wFuncSetModel({status: CONST.STATUS_REQ_SUCCESS});
                }
                resolve({totalLength:totalLength, data:res});
            })
            .catch((error) => {
                // store.dispatch(actionSetModel({...param,  model:{status:CONST.STATUS_REQ_FAIL}}));
                wFuncSetModel({status: CONST.STATUS_REQ_FAIL});
                reject(error);
            })
    })
}

export const CATEGORY = {
    "id" : -1,
    "name" : "",
    "parent_id" : -1,
    "allow_funcs" : [],
    "enter_points" : [],
    "type" : "image",
    "enter_level" : 0,
    "trans":[],
    children:[],
}

export const REVIEW = {
    "likers" : [],
    "point" : 0,
    "user_id" : -1,
    "content_id" : -1,
    "delete_reason" : "",
    "comment" : "",
    "id" : -1,
    "ctime" : "",
    "reviews" : [],
    "parent_content": -1,
    "parent_review": -1,
    "reply_to": -1,
    "reply_to_name":"",

    isLiked: false,
    depth: 0,
}

export const CONTENT = {
    "state" : "pending",
    "category_id" : -1,
    "id" : -1,
    "ctime" : new Date(),
    "description" : "",
    "name" : "",
    "type" : "",
    "text" : "",
    "media" : [],
    "delete_point" : 0,
    "delete_reason" : '',
    "first_page" : true,
    "likers" : [],
    "savers" : [],
    "point" : 0,
    "coin" : 0,
    "review_cnt" : 0,
    "user_id" : -1,
    "views" : 0,
    "like" : 0,
    "advert_id" : -1,
    "url": "",

    is_advert: false,
    isLiked: false,
    isSaved: false,
    reviews: MODEL,
};

export const CASH_HISTORY = { //현금결제 리력
    id: 0,
    type: CONST.CASH_IN, //1:충전, 2:환전
    messages: [], //쪽지글 배렬
    cash: 0, //현금액
    money: 0, //충전인 경우 포인트수, 환전인 경우 코인수
    ctime: Date.now(), //충전신청날자
    utime: Date.now(), //충전처리날자
    state: 'pending' //요청처리상태
};

export const POINT_HISTORY = { //포인트 거래리력
    id: 0,
    point: 0, //거래된 포인트수
    type: CONST.CASH_IN, //1:입력, 2:출력
    info: '', //거래내용 ...
    extra: '', //기타 자료, 콘텐트열람일때 content id 등...
    ctime: Date.now()  , //거래날자
};

export const COIN_HISTORY = { //금화 (gold coin) 거래리력
    id: 0,
    coin: 0, //거래된 머니수
    type: CONST.CASH_IN, //1:입력, 2:출력
    info: '', //거래내용 ...
    extra: '', //기타 필요한 자료 보관
    ctime: Date.now(), //거래날자
};

export const NOTE_ITEM = { //쪽지
    id: -1,
    sender: -1, //쪽지송신자id
    receiver: -1, //쪽지수신자id -1:전체, -2:온라인회원에게만
    type: 'text', //글 type
    content: {}, //쪽지 내용
    state: false, //false:미확인, ture: 확인함
    ctime: new Date(),
};

export const addPrefixForServer = (url) => {
    if (!url || typeof url !== 'string') {
        return '';
    }

    if (!url.startsWith('/')) {
        url = '/' + url;
    }
    url = HttpManager.getStaticServerUrl() + url;
    return url;
};

// export const ContentTypePanel = {
//     ...MODEL,
// }

