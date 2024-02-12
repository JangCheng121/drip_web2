import {createAction, handleActions} from 'redux-actions'
import produce from 'immer';
import {httpReq} from "../../model/Req";
import * as Tool from '../../lib/tool';
import * as User from './users'
import * as System from './system'
import * as Proto from "../common/PropoTypes";
import * as CONST from "../../model/Const"
import { i18n } from '../../i18n'
import {dataService} from "../../model/DataService";

export const ROOT_CATEGORY = 1;
export const VIDEO_CATEGORY = 2;
export const IMAGE_CATEGORY = 3;
export const SQUARE_CATEGORY = 4;
export const PERSON_CATEGORY = 10001;
export const SEARCH_CATEGORY = 10002;

export const NAME = 'content';

/* Action Types*/
export const ACT_NEW_CONTENT_PANEL = `${NAME}/ACT_NEW_CONTENT_PANEL`;

export const ACT_RESET_CONTENT_PANEL_MODEL = `${NAME}/ACT_RESET_CONTENT_PANEL_MODEL`;
export const ACT_UPDATE_CONTENT_PANEL_MODEL = `${NAME}/ACT_UPDATE_CONTENT_PANEL_MODEL`;
export const ACT_ADDITEM_CONTENT_PANEL_MODEL = `${NAME}/ACT_ADDITEM_CONTENT_PANEL_MODEL`;

export const ACT_ADD_ONE_ITEM = `${NAME}/ACT_ADD_ONE_ITEM`;
export const ACT_UPDATE_ONE_ITEM = `${NAME}/ACT_UPDATE_ONE_ITEM`;

export const ACT_RESET_REVIEW_MODEL = `${NAME}/ACT_RESET_REVIEW_MODEL`;
export const ACT_UPDATE_REVIEW_MODEL = `${NAME}/ACT_UPDATE_REVIEW_MODEL`;


export const ACT_RESET = `${NAME}/ACT_RESET`;
export const ACT_RESET_CATEGORIES = `${NAME}/ACT_RESET_CATEGORIES`;
export const ACT_RESET_CONTENTS = `${NAME}/ACT_RESET_CONTENTS`;
export const ACT_RESET_REVIEWS = `${NAME}/ACT_RESET_REVIEWS`;
export const ACT_SET_ONE_CATEGORY = `${NAME}/ACT_SET_ONE_CATEGORY`;
export const ACT_SET_ONE_CONTENT = `${NAME}/ACT_SET_ONE_CONTENT`;
export const ACT_SET_ONE_REVIEW = `${NAME}/ACT_SET_ONE_REVIEW`;
export const ACT_UPDATE = `${NAME}/ACT_UPDATE`;
export const ACT_UPDATE_ONE_CATEGORY = `${NAME}/ACT_UPDATE_ONE_CATEGORY`;
export const ACT_UPDATE_ONE_CONTENT = `${NAME}/ACT_UPDATE_ONE_CONTENT`;
export const ACT_UPDATE_ONE_REVIEW = `${NAME}/ACT_UPDATE_ONE_REVIEW`;

export const ACT_SET_DATA = `${NAME}/ACT_SET_DATA`;
export const ACT_LIST_ADD_ITEM = `${NAME}/ACT_LIST_ADD_ITEM`;
export const ACT_OBJECT_ADD_ITEM = `${NAME}/ACT_OBJECT_ADD_ITEM`;
export const ACT_LIST_DELETE_ITEM = `${NAME}/ACT_LIST_DELETE_ITEM`;
export const ACT_OBJECT_DELETE_ITEM = `${NAME}/ACT_OBJECT_DELETE_ITEM`;

export const CONTENT_TYPE_TOTAL = `total`;
export const CONTENT_TYPE_VIDEO = `video`;
export const CONTENT_TYPE_IMAGE = `image`;
export const CONTENT_TYPE_AUDIO = `audio`;
export const CONTENT_TYPE_TEXT = `text`;
export const CONTENT_TYPE_PERSON = `person`;

export const CONTENT_PERSON_CONTENT = "content";
export const CONTENT_PERSON_REVIEW = "review";
export const CONTENT_PERSON_FAVOUR = "favour";
export const CONTENT_PERSON_LIKE = "like";
export const CONTENT_PERSON_FOLLOW = "follow";

const Proto_MODEL = {
    type:"",
    data:[],
    lastId:0,
    length:0,
    status:CONST.STATUS_REQ_IDLE,
    loadType:CONST.LOAD_TYPE_INIT,
    protoItem : {},
    totalLength: 0,
};

export const ContentPanel = {
    categoryId: -1,
    [CONTENT_TYPE_TOTAL]: Tool.createObjectAndCopy(Proto_MODEL, {type: CONTENT_TYPE_TOTAL}),
};

export const SquareContentPanel = {
    ...ContentPanel,
    categoryId: SQUARE_CATEGORY,
    [CONTENT_TYPE_VIDEO]: Tool.createObjectAndCopy(Proto_MODEL, {type: CONTENT_TYPE_VIDEO}),
    [CONTENT_TYPE_IMAGE]: Tool.createObjectAndCopy(Proto_MODEL, {type: CONTENT_TYPE_IMAGE}),
    [CONTENT_TYPE_AUDIO]: Tool.createObjectAndCopy(Proto_MODEL, {type: CONTENT_TYPE_AUDIO}),
    [CONTENT_TYPE_TEXT]: Tool.createObjectAndCopy(Proto_MODEL, {type: CONTENT_TYPE_TEXT}),
    [CONTENT_TYPE_PERSON]: Tool.createObjectAndCopy(Proto_MODEL, {type: CONTENT_TYPE_PERSON}),
};

export const PersonContentPanel = {
    categoryId: PERSON_CATEGORY,
    userId: -1,
    [CONTENT_PERSON_CONTENT]: Tool.createObjectAndCopy(Proto_MODEL, {type: CONTENT_PERSON_CONTENT}),
    [CONTENT_PERSON_REVIEW]: Tool.createObjectAndCopy(Proto_MODEL, {type: CONTENT_PERSON_REVIEW}),
    [CONTENT_PERSON_FAVOUR]: Tool.createObjectAndCopy(Proto_MODEL, {type: CONTENT_PERSON_FAVOUR}),
    [CONTENT_PERSON_LIKE]: Tool.createObjectAndCopy(Proto_MODEL, {type: CONTENT_PERSON_LIKE}),
    [CONTENT_PERSON_FOLLOW]: Tool.createObjectAndCopy(Proto_MODEL, {type: CONTENT_PERSON_FOLLOW}),
};

export const SearchContentPanel = {
    categoryId: SEARCH_CATEGORY,
    data: Tool.createObjectAndCopy(Proto_MODEL, {type: CONTENT_PERSON_CONTENT}),
    searchData : {},
};

const ContentState = {
    categories: {}, // 카테고리
    contents: {},    //콘텐츠
    reviews: {},    //리뷰 댓글들
    panels: {},
    topPanels: {},
    // person:Tool.createObject(PersonContentPanel), // 개인프로파일,
}

/*****
 * Actions
 */
export const ActNewContentPanel = createAction(ACT_NEW_CONTENT_PANEL);
export const ActResetContentPanelModel = createAction(ACT_RESET_CONTENT_PANEL_MODEL);
export const ActUpdateContentPanelModel = createAction(ACT_UPDATE_CONTENT_PANEL_MODEL);
export const ActAddItemContentPanelModel = createAction(ACT_ADDITEM_CONTENT_PANEL_MODEL);
export const ActAddOneItem = createAction(ACT_ADD_ONE_ITEM);
export const ActUpdateOneItem = createAction(ACT_UPDATE_ONE_ITEM);
export const ActUpdateCategoryItem = createAction(ACT_UPDATE_ONE_CATEGORY);

export const ActSetData = createAction(ACT_SET_DATA);
export const ActListAddItem = createAction(ACT_LIST_ADD_ITEM);
export const ActObjectAddItem = createAction(ACT_OBJECT_ADD_ITEM);
export const ActListDeleteItem = createAction(ACT_LIST_DELETE_ITEM);
export const ActObjectDeleteItem = createAction(ACT_OBJECT_DELETE_ITEM);

/*****
 * Async Actions
 */

export const getCategoriesAsync = () => {
    return (dispatch, getState) => {
        const globalState = getState();
        const categories = globalState.contents.categories;
        const mi = globalState.system.mi;

        if (categories.status === CONST.STATUS_REQ_START) return Promise.resolve();
        dispatch(ActUpdateOneItem({type: 'categories', item: {status: CONST.STATUS_REQ_START}}));

        dataService.requestCategories()
            .then((res) => {
                let categories = {};
                for (let idx in res) {
                    let resItem = res[idx];

                    let item = Tool.createObjectAndCopy(Proto.CATEGORY, resItem);
                    item.children = [];

                    // 표를 샀는가?
                    if (!Tool.isValidArray(item.enter_points)) {
                        item.isBuyedTicked = true; // 이건 무료카테고리이다.
                    } else if (mi.member && Tool.isValidArray(mi.enter_categories)) {
                        for (let key in mi.enter_categories) {
                            let ticket = mi.enter_categories[key];
                            if (ticket.category_id === item.id && Tool.isDateBetween(ticket.from, ticket.to)) {
                                item.isBuyedTicked = true;
                                break;
                            }
                        }
                    }
                    categories[item.id] = item;
                }

                //다 얻은 다음에는 한번 더 정리를 한다.
                for (let key in categories) {
                    let item = categories[key];
                    if (categories[item.parent_id]) {
                        let parent = categories[item.parent_id];
                        parent.children.push(item.id);
                    }
                }

                // 반영해준다.
                for (let key in categories) {
                    dispatch(ActAddOneItem({type: 'categories', item: categories[key]}));
                }
            })
            .catch((err) => {
                return Promise.resolve();
                // dispatch(ActUpdateOneItem({type: 'categories', item : {status: CONST.STATUS_REQ_FAIL}}));
            })
    }
};

export const doBuyTicket = (categoryId) => {
    return (dispatch) => {
        dispatch(ActUpdateCategoryItem({id: categoryId, data: {isBuyedTicked: true}}));
    }
};


const requestContentPanelModel = (model, param, store) => {//last_id, param={categoryId,contentType,userId}, store={dispatch,getState,state}
    let reqParam = {};
    reqParam.mediaType = [];
    reqParam.length = model.length;
    if (param.categoryId) reqParam.category_id = param.categoryId;
    if (param.loadType === CONST.LOAD_TYPE_MORE) {
        if (model.lastId <= 0) return Promise.reject('err') ;
        reqParam.bottom = model.lastId;
    } else {
        reqParam.length = 0;
    }

    if (param.searchFilter) {
        reqParam.searchQuery = param.searchFilter;
    }

    if (param.type !== CONTENT_TYPE_TOTAL) {
        reqParam.mediaType.push(param.type);
        // if (param.type === CONTENT_TYPE_AUDIO)
        //     reqParam.mediaType.push(CONTENT_TYPE_TEXT);
    } else {
        reqParam.mediaType.push(CONTENT_TYPE_IMAGE);
        reqParam.mediaType.push(CONTENT_TYPE_VIDEO);
    }
    reqParam.lang = i18n.language?i18n.language:'cn';
    reqParam.perPage = param.onePageCnt;

    // return httpReq('/api/content/get_list', 'get', reqParam, true)
    return dataService.requestGetContents(reqParam, true)
};

export const createContentItem = (item, param, store) => {

    let newItem = Tool.createObjectAndCopy(Proto.CONTENT, item);
    if (item.type !== CONTENT_TYPE_TEXT && !Tool.isValidArray(item.media))
        return null;

    if (!store) return newItem;
    let user = store.state.users[newItem.user_id];
    if (!user) {
        newItem.user_id && store.dispatch(User.get(newItem.user_id));
    }

    let mi = store.state.system.mi;
    if (mi.member) {
        newItem.isLiked = Tool.getIndexByValue(newItem.likers, mi.id) !== -1;
        newItem.isSaved = Tool.getIndexByValue(newItem.savers, mi.id) !== -1;
    }
    newItem.reviews = Tool.createObject(Proto_MODEL);

    if (!item.category_id) {
        newItem.id = "ad_" + item.id;
        newItem.is_advert = true;
        newItem.advert_id = item.id;
    }
    return newItem;
}

/*****************************************************************************************
 *                     댓글을 얻는 액션
 *                          @param contentId
 *                          @param loadType
 ******************************************************************************************/
export const getReviewsAsync = (id, loadType = CONST.LOAD_TYPE_INIT) => {
    console.log('getReviewsAsync ???????????????????????');
    return (dispatch, getState) => {
        const state = getState();
        const store = Tool.createObjectAndCopy(Proto.STORE_GETMODEL, {dispatch: dispatch, state: state});
        const param = Tool.createObjectAndCopy(Proto.PARAM_GETMODEL, {loadType: loadType});
        if (!state.contents.contents[id])
            return Promise.reject();
        let model = state.contents.contents[id].reviews;
        param.contentId = id;

        Proto.getModel(
            store, model, param,
            funcReviewRequest,
            funcReviewCreateItem,
            funcReviewInitModel,
            funcReviewSetModel,
            funcReviewAddItem,
        );
        return Promise.resolve();
    }
};

export const funcReviewRequest = (model, param, store) => {
    let reqParam = {};
    let reqFilter = {};
    if (param.contentId) reqFilter.parent_content = parseInt(param.contentId);

    if (param.userId) reqFilter.user_id = param.userId;
    if (param.loadType === CONST.LOAD_TYPE_MORE) reqFilter.id = {"$lt": model.lastId};
    reqParam.range = JSON.stringify([0, param.onePageCnt]);
    reqParam.filter = reqFilter;

    return  httpReq('/api/review', 'get', reqParam, true);
}

export const funcReviewCreateItem = (item, param, store) => {
    let newItem = Tool.createObjectAndCopy(Proto.REVIEW, item);

    if (!store) return newItem;
    if (newItem.user_id) {
        let user = store.state.users[newItem.user_id];
        if (!user) {
            store.dispatch(User.get(newItem.user_id));
        }
    }
    let mi = store.state.system.mi;
    if (mi.member) {
        newItem.isLiked = Tool.getIndexByValue(newItem.likers, mi.id) !== -1;
    }
    return newItem;
}

const funcReviewInitModel = (param, store) => {
    let newModelReview = Tool.createObject(Proto_MODEL);
    funcReviewSetModel(newModelReview, param, store);
}

const funcReviewSetModel = (modelInfo, param, store) => {
    if (!param.contentId && !param.userId) return;
    let payloadInit = {};
    if (param.contentId) {
        payloadInit.parentKey = ['contents', param.contentId, 'reviews'];
    } else if (param.userId) {
        payloadInit.parentKey = ['panels', 'user_'+ param.userId, CONTENT_PERSON_REVIEW];
    } else {
        return;
    }
    payloadInit.data = modelInfo;
    store && store.dispatch && store.dispatch( ActSetData(payloadInit));
}

const funcReviewAddItem = (item, param, store) => {
    if (!item.id) return;
    if (!store || !store.dispatch) return;
    //내려온 자식댓글에 대한 정리...즉 [{}, {}] 형식의 자료를 redux 의 reviews 에 추가후 [id, id, ....]
    let re_reviews = item.reviews;
    if (re_reviews) {
        let new_reviews = [];
        for (let index in re_reviews) {
            new_reviews.push(re_reviews[index].id);
            store.dispatch(ActObjectAddItem({parentKey: ['reviews'], itemKey: re_reviews[index].id, item: re_reviews[index]}))
        }
        item.reviews = new_reviews;
    }
    let payloadList = {};
    if (param.contentId) {
        payloadList.listKey = ['contents', param.contentId, 'reviews', 'data'];
    } else if (param.userId) {
        payloadList.listKey = ['panels', 'user_'+param.userId, CONTENT_PERSON_REVIEW, 'data'];
    } else
        return;
    payloadList.item = item.id;
    store.dispatch(ActListAddItem(payloadList));
    store.dispatch(ActObjectAddItem({parentKey: ['reviews'], itemKey: item.id, item: item}))
}

/**
 * 한개 콘텐트패널에 대한 자료를 요청한다.
 * @param categoryId : 카테고리아이디
 * @param loadType  : 로드방식 (초기적재, 더보기인가)
 * @param contentType : 콘텐트의 타입(전체, 비디오, 이미지, 오디오, 텍스트)
 * @param userId : 유저아이디
 * @returns {Function}
 */
export const ActGetContentPanelAsync = (categoryId, loadType = CONST.LOAD_TYPE_INIT, contentType = CONTENT_TYPE_TOTAL, filter = '') => {
    return (dispatch, getState) => {
        const globalState = getState();
        const state = globalState;
        const lang = i18n.language?i18n.language:'cn';
        const store = Tool.createObjectAndCopy(Proto.STORE_GETMODEL, {dispatch: dispatch, state: state});
        const param = Tool.createObjectAndCopy(Proto.PARAM_GETMODEL, {loadType: loadType});
        param.lang = lang;
        param.type = contentType;
        param.categoryId = categoryId;
        if (filter !== '') {
            param.searchFilter = filter;
        }
        if (!state.contents.panels[categoryId]) {
            dispatch(ActNewContentPanel(categoryId));
            // 추가를 해주고 다시 이 액션을 재귀호출한다.
            // 생성이 안된 자료때문에 골쓰기 싫다.
            dispatch(ActGetContentPanelAsync(categoryId, loadType, contentType));
            return Promise.resolve();
        }

        const panel = state.contents.panels[categoryId];
        const model = panel[contentType];
        // const param = {categoryId: categoryId, contentType: contentType, userId: userId};
        // const store = {dispatch: dispatch, getState: getState, state: globalState};

        Proto.getModel(
            store,
            model,
            param,
            requestContentPanelModel,
            createContentItem,
            funcPanelInitModel,
            funcPanelSetModel,
            funcPanelAddItem,
            loadType
        ).then(() => {

        })
    }
};

const funcPanelInitModel = (param, store) => {
    if (!param.categoryId || !param.type) return;
    let initData = {type:param.type};
    if (param.searchFilter !== '') {
        initData.filterStr = param.searchFilter;
    }
    store && store.dispatch && store.dispatch(
        ActSetData({
                parentKey: ['panels', param.categoryId, param.type],
                data: Tool.createObjectAndCopy(Proto.MODEL, initData)
            }
        ))
}

const funcPanelSetModel = (modelInfo, param, store) => {
    if (!param.categoryId || !param.type) return;
    store && store.dispatch && store.dispatch(
        ActSetData({parentKey: ['panels', param.categoryId, param.type], data: modelInfo})
    );
}

const funcPanelAddItem = (item, param, store) => {
    if (!item.id || !param.categoryId || !param.type) return;
    if (!store || !store.dispatch) return;

    store.dispatch(ActObjectAddItem({parentKey: ['contents'], itemKey: item.id, item: item}))
    store.dispatch(ActListAddItem({listKey: ['panels', param.categoryId, param.type, 'data'], item: item.id}));
}
/******
 * modelInfo:change state(Object)
 * category:categoryId
 * type:type(total, image, video....)
 * */
export const ActSetContentPanel = (modelInfo, category, type) => {
    return (dispatch, getState) => {
        const state = getState();
        const store = Tool.createObjectAndCopy(Proto.STORE_GETMODEL, {dispatch: dispatch, state: state});
        if (!category || !type) {
            return Promise.resolve();
        }
        funcPanelSetModel(modelInfo, {categoryId:category, type:type}, store);
    }
}

/***************************************************************************
 * TopPanel 에 대한 자료를 얻어오는 액션이다.
 ***************************************************************************/
export const getTopPanelAsync = (categoryId, loadType = CONST.LOAD_TYPE_INIT, contentType = CONTENT_TYPE_TOTAL, topType='view', topBeforeDate=0) => {

    return (dispatch, getState) => {
        const globalState = getState();
        const state = globalState;
        // const system = globalState.system;
        const store = Tool.createObjectAndCopy(Proto.STORE_GETMODEL, {dispatch: dispatch, state: state});
        const param = Tool.createObjectAndCopy(Proto.PARAM_GETMODEL, {loadType: loadType});
        param.type = contentType;
        param.categoryId = categoryId;
        param.topType = topType;
        param.topBeforeDate = topBeforeDate;
        if (!state.contents.topPanels[categoryId]) {
            dispatch(ActNewContentPanel(categoryId));
            // 추가를 해주고 다시 이 액션을 재귀호출한다.
            // 생성이 안된 자료때문에 골쓰기 싫다.
            dispatch(getTopPanelAsync(categoryId, loadType, contentType));
            return Promise.resolve();
        }

        const topPanel = state.contents.topPanels[categoryId];
        const model = topPanel[contentType];

        Proto.getModel(
            store,
            model,
            param,
            requestTopPanel,
            createContentItem,
            funcTopPanelInitModel,
            funcTopPanelSetModel,
            funcTopPanelAddItem,
            loadType
        ).then(() => {

        })
    }
};

/************************************
reqParam={
    type : view,  //like, review
    days : 0,     //0:total, 1:day, 7:week, 30:month
    start: number,//skip
    perPage: number
}
***********************************/
const requestTopPanel = (model, param, store) => {//last_id, param={categoryId,contentType,userId}, store={dispatch,getState,state}

    let reqParam = {};
    if (!param.categoryId || !param.topType || param.topBeforeDate===undefined) return;
    reqParam.category_id = param.categoryId;
    reqParam.type = param.topType;//views, nLike, review_cnt
    reqParam.days = param.topBeforeDate;//0, 1, 7, 30

    reqParam.start = 0;
    if (param.categoryId) reqParam.category_id = param.categoryId;
    if (param.loadType === CONST.LOAD_TYPE_MORE) {
        reqParam.start = model.data.length;
    }

    reqParam.perPage = param.onePageCnt;
    // return new Promise((resolve, reject) => {
    //     resolve([]);
    // })

    return httpReq('/api/get_top_content', 'get', reqParam, true)

};

const funcTopPanelInitModel = (param, store) => {
    if (!param.categoryId || !param.type) return;
    store && store.dispatch && store.dispatch(
        ActSetData({
                parentKey: ['topPanels', param.categoryId, param.type],
                data: Tool.createObjectAndCopy(Proto_MODEL, {type: param.type})
            }
        ))
};

const funcTopPanelSetModel = (modelInfo, param, store) => {
    if (!param.categoryId || !param.type) return;
    store && store.dispatch && store.dispatch(
        ActSetData({parentKey: ['topPanels', param.categoryId, param.type], data: modelInfo})
    );
};

const funcTopPanelAddItem = (item, param, store) => {
    if (!item.id || !param.categoryId || !param.type) return;
    if (!store || !store.dispatch) return;

    store.dispatch(ActObjectAddItem({parentKey: ['contents'], itemKey: item.id, item: item}));
    store.dispatch(ActListAddItem({listKey: ['topPanels', param.categoryId, param.type, 'data'], item: item.id}));
};

/**
 * 좋아요 참 좋아요 아주 좋아요 싫어요 참 싫어요 아주 싫어요...ㅠㅠㅠㅠㅠㅠ
 * @param type "content" 또는 "review"
 * @param id
 */
export const doLikeAsync = (type, id) => {
    return (dispatch, getState) => {
        const globalState = getState();
        const contents = globalState.contents;
        const system = globalState.system;

        if (!system.mi.member) {  //가입한 사용자이여야만 한다.
            // alert('Guest account. Please register as a full member.');
            return Promise.resolve();
        }

        let itemType = `${type}s`; // review => reviews
        // let collection = type;

        if (type !== "content" && type !== 'review') {
            return Promise.resolve();
        }

        // 새자료결정
        if (!contents[itemType][id] || !contents[itemType][id].likers)
            return Promise.resolve();

        let isLiked = !contents[itemType][id].isLiked;
        let pushedArray = Tool.pushArray(contents[itemType][id].likers, system.mi.id, isLiked);
        dispatch(ActUpdateOneItem({
            type: itemType,
            item: {
                id: id,
                likers: pushedArray.array,
                isLiked: isLiked
            }
        }));

        // dispatch(System.doLikeAsync(type, id, isLiked));
        dataService.sendMesLike(type, id, isLiked);
    }
};

export const doAddFavoure = (id) => {
    return (dispatch, getState) => {
        const globalState = getState();
        const contents = globalState.contents.contents;
        const system = globalState.system;

        if (!system.mi.member || !contents[id]) {  //가입한 사용자이여야만 한다.
            return Promise.resolve();
        }

        let isSaved = !contents[id].isSaved;
        let pushedArray = Tool.pushArray(contents[id].savers, system.mi.id, isSaved);
        dispatch(ActUpdateOneItem({
            type: "contents",
            item: {
                id: id,
                savers : pushedArray.array,
                isSaved: isSaved
            }
        }));

        // dispatch(System.doAddFavoure(id, isSaved));
        dataService.sendMesAddFavoure(id, isSaved);
    }
};

/**
 * 뭘 하나 봤다.
 * @param id
 * @returns {Function}
 */
export const doViewContentAsync = (id) => {
    return (dispatch, getState) => {
        const globalState = getState();
        const contents = globalState.contents.contents;
        let contentData = contents[id];
        if (!contentData) return;

        let views = Tool.parseInteger(contents[id]['views']);
        views++;

        dispatch(ActUpdateOneItem({
            type: "contents",
            item: {id: id, views: views}
        }));
        let content_point = contents[id].point,
            content_coin = contents[id].coin;
        if (!contentData.is_advert && content_point) {
            dispatch(System.doIncreasePoint(contents[id].point, false));
        } else if (contentData.is_advert && content_coin) {
            dispatch(System.doIncreaseCoin(content_coin, true));
        }

        dataService.sendMesContentViewed(contentData.is_advert ? contentData.advert_id : id, contentData.is_advert ? 'advert' : 'content');
    }
};


/**
 * 나의 작품도 올린다.
 * @param contentItem
 * @returns {Function}
 */
export const addMyContentAsync = (contentItem) => {
    return (dispatch, getState) => {
        dispatch(ActAddItemContentPanelModel(
            {
                categoryId: SQUARE_CATEGORY,
                contentType: contentItem.type,
                item: contentItem,
                isUnshift: true
            }
        ))
    }
}

export const removeContent = (contentId) => {
    return (dispatch, getState) => {
        const state = getState().contents;
        const store = Tool.createObjectAndCopy(Proto.STORE_GETMODEL, {dispatch: dispatch, state: state});
        store.dispatch(ActObjectDeleteItem({parentKey: ['contents'], itemKey: contentId}));
        Object.keys(state.panels).map((categoryId) => {
            let category = state.panels[categoryId];
            if (!Tool.isObject(category)) return;
            Object.keys(category).map((type)=>{
                let panel = category[type];
                if (type === 'categoryId' || type === 'userId') return ;
                if (!Tool.isObject(panel) || !panel['data']) return;
                let index = Tool.getIndexByValue(panel.data, contentId);
                if (index !== -1) store.dispatch(ActListDeleteItem({listKey: ['panels', categoryId, type, 'data'], index: index}));
                return null;
            });
            return null;
        });
    }
};

export const removeReview = (reviewId, contentId) => {
    return (dispatch, getState) => {
        const state = getState().contents;
        const store = Tool.createObjectAndCopy(Proto.STORE_GETMODEL, {dispatch: dispatch, state: state});
        let contentItem = state.contents[contentId];
        //댓글을 지우기 전에 정돈작업....
        //어미댓글을 지울경우 자식댓글도 같이..., 자식댓글을 지울경우 어미에서 자기 아이디 삭제.
        let parentReview = {};
        let reviewItem = state&&state.reviews&&state.reviews[reviewId];
        if (reviewItem&&reviewItem.parent_review!==-1) {
            parentReview = state && state.reviews && state.reviews[reviewItem.parent_review]
        }
        if (contentItem && contentItem.review_cnt !== undefined && reviewItem&&reviewItem.parent_content !== -1) {
            store.dispatch(ActUpdateOneItem({
                type: "contents",
                item: {id: contentId, review_cnt: contentItem.review_cnt-1}
            }));
        } else if (parentReview) {
            dispatch(ActListDeleteItem({
                listKey: ['reviews', parentReview.id, 'reviews'],
                index: reviewId,
            }));
        }
        store.dispatch(ActObjectDeleteItem({parentKey: ['reviews'], itemKey: reviewId}));
    }
};

/**
 * @param type 어디에 댓글을 추가하겠는가 content / review
 * @param itemId 댓글을 매달 아이템
 * @param strReview 댓글 내용
 * @returns {Function}
 */
export const addMyReviewAsync = (type, itemId, strReview, parentReviewId = -1) => {
    return (dispatch, getState) => {
        const state = getState();
        const contents = state.contents;
        const users = state.users;
        const mi = state.system.mi;

        /*나의 자료가 Users 에 없다면 추가한다.*/
        if (!users[mi.id]) {
            dispatch(User.addNew(mi.id));
            dispatch(User.onSuccess(mi));
        }

        if (type !== 'content' && type !== 'review')
            return Promise.resolve();

        const itemType = `${type}s`;
        let item = null;
        if (!contents[itemType][itemId])
            return Promise.resolve();
        item = contents[itemType][itemId];

        let reviewItem = Tool.createObject(Proto.REVIEW);
        reviewItem.comment = strReview;
        reviewItem.ctime = new Date();
        reviewItem.user_id = mi.id;
        reviewItem.parent_content = type === 'content' ? itemId : -1;
        reviewItem.parent_review = type === 'review' ? itemId : -1;
        reviewItem.reply_to = type === 'review' ? item.user_id : -1;
        delete reviewItem.id;
        delete reviewItem.reply_to_name;
        dataService.requestAddReview(reviewItem, type, itemId)
            .then(
                (res) => {
                    reviewItem.id = res.id;
                    console.log('contents.addMyReview======requestAddReview======', res);
                    if (type === 'review') {
                        // reviewItem.depth = parseInt(contents.reviews[itemId].depth) + 1;
                        dispatch(ActListAddItem({
                            listKey: ['reviews', itemId, 'reviews'],
                            item: reviewItem.id,
                            isUnshift: true,
                        }));
                    } else if (type === 'content') {
                        dispatch(ActListAddItem({
                            listKey: ['contents', itemId, 'reviews', 'data'],
                            item: reviewItem.id,
                            isUnshift: true,
                        }));
                        dispatch(ActSetData({
                            parentKey: ['contents', itemId],
                            data: {review_cnt: item.review_cnt + 1}
                        }))
                    }

                    // let reviewArray = [].concat(item.reviews);
                    // reviewArray.push(reviewItem.id);
                    //
                    // dispatch(ActUpdateOneItem({
                    //     type: itemType,
                    //     item: {id: itemId, reviews: reviewArray}
                    // }));
                    let review_user_name = users&&users[item.user_id]&&users[item.user_id].name;
                    reviewItem.reply_to_name = review_user_name;
                    dispatch(ActAddOneItem({type: 'reviews', item: reviewItem}));
                }
            )
            .catch(
                (error) => {
                    return Promise.resolve();
                }
            )
    }
};

/*****************************************************************************************
 *              유저에 관한 콘텐츠관련 정보를 얻는 액션.
 ******************************************************************************************/
export const getPersonContentAsync = (loadType = CONST.LOAD_TYPE_INIT, type = CONTENT_PERSON_CONTENT, userId = -1) => {

    const wFuncRequest = (model, param, store) => {
        let reqParam = {};
        reqParam.mediaType = [CONTENT_TYPE_VIDEO, CONTENT_TYPE_IMAGE];
        reqParam.length = model.length;
        if (param.loadType === CONST.LOAD_TYPE_MORE) reqParam.bottom = model.lastId;
        if (type === CONTENT_PERSON_FAVOUR || type === CONTENT_PERSON_LIKE || type === CONTENT_PERSON_REVIEW || type === CONTENT_PERSON_FOLLOW) {
            reqParam[type] = true;
        }
        reqParam.user_id = userId;
        reqParam.perPage = param.onePageCnt;
        // return httpReq('/api/content/get_list', 'get', reqParam, true)
        return dataService.requestGetContents(reqParam, true)
    };
    const wFuncCreateItem = (item, param, store) => {
        // if (type === CONTENT_PERSON_CONTENT || type === CONTENT_PERSON_FAVOUR || type === CONTENT_PERSON_LIKE || type === CONTENT_PERSON_REVIEW)
            return createContentItem(item, param, store);
    };

    const wFuncPanelAddItem = (item, param, store) => {
        // if (type !== CONTENT_PERSON_REVIEW) {
            funcPanelAddItem(item, param, store);
        // }
    };

    return (dispatch, getState) => {
        if (userId === -1) return;
        let categoryId = `user_${userId}`;

        const state = getState();
        if (!state.contents.panels[categoryId]) {
            let categoryUser = Tool.createObjectAndCopy(PersonContentPanel, {categoryId: categoryId, userId: userId});
            dispatch(ActObjectAddItem({parentKey: ['panels'], itemKey: categoryId, item: categoryUser}));
            dispatch(getPersonContentAsync(loadType, type, userId));
            return Promise.resolve();
        }

        const store = Tool.createObjectAndCopy(Proto.STORE_GETMODEL, {dispatch: dispatch, state: state});
        const param = Tool.createObjectAndCopy(Proto.PARAM_GETMODEL, {loadType: loadType});
        param.type = type;
        param.categoryId = categoryId;

        const users = state.users;
        if (!users[userId]) return Promise.reject('no user');

        const model = state.contents.panels[categoryId][type];
        Proto.getModel(
            store, model, param,
            wFuncRequest,
            wFuncCreateItem,
            funcPanelInitModel,
            funcPanelSetModel,
            wFuncPanelAddItem,
        );
        return Promise.resolve();
    }
};
/**
 * searchData:{
 *      type : 'total',
 *      search_str : '....'
 * }
 * ***/
export const getSearchContentAsync = (loadType = CONST.LOAD_TYPE_INIT, searchData) => {

    const wFuncRequest = (model, param, store) => {
        let reqParam = {};
        reqParam.mediaType = [CONTENT_TYPE_VIDEO, CONTENT_TYPE_IMAGE];///?????
        reqParam.length = model.length;
        if (param.loadType === CONST.LOAD_TYPE_MORE) reqParam.bottom = model.lastId;
        /*if (type === CONTENT_PERSON_FAVOUR || type === CONTENT_PERSON_LIKE || type === CONTENT_PERSON_REVIEW || type === CONTENT_PERSON_FOLLOW) {
            reqParam[type] = true;
        }*/
        reqParam.category_id = searchData.type==='total'?4:searchData.type==='video'?VIDEO_CATEGORY:IMAGE_CATEGORY;
        reqParam.searchQuery = searchData.search_str;
        reqParam.perPage = param.onePageCnt;
        // return httpReq('/api/content/get_list', 'get', reqParam, true)
        return dataService.requestGetContents(reqParam, true);
    };
    const wFuncCreateItem = (item, param, store) => {
        return createContentItem(item, param, store);
    };

    const wFuncPanelAddItem = (item, param, store) => {
        funcPanelAddItem(item, param, store);
    };

    return (dispatch, getState) => {
        let categoryId = SEARCH_CATEGORY;

        const state = getState();
        if (!state.contents.panels[categoryId]) {
            let categoryUser = Tool.createObjectAndCopy(SearchContentPanel, {categoryId: categoryId});
            dispatch(ActObjectAddItem({parentKey: ['panels'], itemKey: categoryId, item: categoryUser}));
            dispatch(getSearchContentAsync(loadType, searchData));
            return Promise.resolve();
        }

        const store = Tool.createObjectAndCopy(Proto.STORE_GETMODEL, {dispatch: dispatch, state: state});
        const param = Tool.createObjectAndCopy(Proto.PARAM_GETMODEL, {loadType: loadType});
        param.type = 'data';
        param.categoryId = categoryId;

        const model = state.contents.panels[categoryId]['data'];
        console.log('getSearchContentAsync///////////model///////////', model);
        Proto.getModel(
            store, model, param,
            wFuncRequest,
            wFuncCreateItem,
            funcPanelInitModel,
            funcPanelSetModel,
            wFuncPanelAddItem,
        );
        return Promise.resolve();
    }
};

const initState = Object.assign({}, ContentState);
export default handleActions(
    {
        [ACT_NEW_CONTENT_PANEL]: (state, action) =>
            produce(state, draft => {
                const {payload} = action;
                const categoryId = payload;

                if (categoryId === SQUARE_CATEGORY) {
                    draft.panels[categoryId] = Object.assign({}, SquareContentPanel, {categoryId: categoryId});
                    draft.topPanels[categoryId] = Object.assign({}, SquareContentPanel, {categoryId: categoryId});
                } else {
                    draft.panels[categoryId] = Object.assign({}, ContentPanel, {categoryId: categoryId});
                    draft.topPanels[categoryId] = Object.assign({}, ContentPanel, {categoryId: categoryId});
                }
            }),

        [ACT_RESET_CONTENT_PANEL_MODEL]: (state, action) =>
            produce(state, draft => {
                const {payload: {categoryId, contentType}} = action;
                if (!draft.panels[categoryId][contentType])
                    return;
                draft.panels[categoryId][contentType] = Tool.createObjectAndCopy(Proto_MODEL, {type: contentType});
                draft.topPanels[categoryId][contentType] = Tool.createObjectAndCopy(Proto_MODEL, {type: contentType});
            }),
        [ACT_UPDATE_CONTENT_PANEL_MODEL]: (state, action) =>
            produce(state, draft => {
                const {payload: {categoryId, contentType, model}} = action;
                if (!draft.panels[categoryId][contentType])
                    return;

                let dstModel = draft.panels[categoryId][contentType];
                let keys = Object.keys(model);
                for (let i in keys) {
                    let key = keys[i];
                    dstModel[key] = model[key];
                }
            }),
        [ACT_ADDITEM_CONTENT_PANEL_MODEL]: (state, action) =>
            produce(state, draft => {
                let {payload: {categoryId, contentType, item, isUnshift}} = action;
                if (!draft.panels[categoryId] || !draft.panels[categoryId][contentType])
                    return;

                draft.contents[item.id] = item;
                /*if (contentType === CONTENT_TYPE_TEXT)
                    contentType = CONTENT_TYPE_AUDIO;*/

                let dstModel = draft.panels[categoryId][contentType];

                if (isUnshift) {
                    dstModel.data.unshift(item.id);
                    draft.panels[categoryId][CONTENT_TYPE_TOTAL].data.unshift(item.id);
                } else {
                    dstModel.data.push(item.id);
                }
            }),
        [ACT_ADD_ONE_ITEM]: (state, action) =>
            produce(state, draft => {
                const {payload: {type, item}} = action;
                if (!draft[type])
                    return;

                let data = draft[type];
                if (!item.id)
                    return;

                data[item.id] = item;
            }),
        [ACT_UPDATE_ONE_ITEM]: (state, action) =>
            produce(state, draft => {
                const {payload: {type, item}} = action;
                if (!draft[type])
                    return;

                let data = draft[type];
                if (!item.id || !data[item.id])
                    return;

                Object.keys(item).map((key, index) => {
                    return data[item.id][key] = item[key];
                })

                // let targetItem = data;
                //
                // if (item.id && !data[item.id]) {
                //     targetItem = data[item.id];
                // }
                //
                // Object.keys(item).map((key, index) => {
                //     targetItem[key] = item[key];
                // })

            }),
        [ACT_UPDATE_ONE_CATEGORY]: (state, action) =>
            produce(state, draft => {
                const {payload: {id, data}} = action;
                if (!draft.categories || !draft.categories[id])
                    return;

                let category = draft.categories[id];
                Object.keys(data).map((key, index) => {
                    return category[key] = data[key];
                })

            }),

        [ACT_SET_DATA]: (state, action) => {
                return Proto.ActSetData(state, action);
            },
        [ACT_LIST_ADD_ITEM]:(state, action) => {
                return Proto.ActListAddItem(state, action);
            },
        [ACT_OBJECT_ADD_ITEM]: (state, action) => {
                return Proto.ActObjectAddItem(state, action);
            },
        [ACT_LIST_DELETE_ITEM]: (state, action) => {
                return Proto.ActListDeleteItem(state, action);
            },
        [ACT_OBJECT_DELETE_ITEM]: (state, action) => {
                return Proto.ActObjectDeleteItem(state, action);
            },
    }, initState
)
