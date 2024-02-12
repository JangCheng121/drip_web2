import {handleActions} from 'redux-actions'
import produce from 'immer';
import * as REDUX_TYPE from '../common/PropoTypes';
import {dataService} from '../../model/DataService';
import * as Contents from "./contents";
import * as System from "./system";
import {getStaticServerUrl} from "../../model/Req";
import * as Tool from '../../lib/tool';
import {i18n} from '../../i18n';

export const NAME = 'post';

/*Action Types*/
export const ADD_MEDIA = `${NAME}/ADD_MEDIA`;
export const REMOVE_MEDIA = `${NAME}/REMOVE_MEDIA`;
export const SET_STATUS = `${NAME}/SET_STATUS`;
export const SET_TITLE = `${NAME}/SET_TITLE`;
export const SET_TEXT = `${NAME}/SET_TEXT`;
export const SET_ITEM = `${NAME}/SET_ITEM`;
export const SET_UPDATE_POST = `${NAME}/SET_UPDATE_POST`;
export const SET_TYPE = `${NAME}/SET_TYPE`;
export const RESET = `${NAME}/RESET`;
export const DO_POST = `${NAME}/DO_POST`;

/* Status */
export const STATUS_IDLE = `${NAME}/STATUS_IDLE`;
export const STATUS_POSTING = `${NAME}/STATUS_POSTING`;
export const STATUS_END = `${NAME}/STATUS_END`;
export const STATUS_ERROR = `${NAME}/STATUS_ERROR`;
export const STATUS_SUCCESS = `${NAME}/STATUS_SUCCESS`;

export const POST_TYPE_CONTENT = 'POST_TYPE_CONTENT';
export const POST_TYPE_ADVERT = 'POST_TYPE_ADVERT';

/* Actions */
export const addMedia = (path)=> {
    return {type: ADD_MEDIA, payload: {path: path}}
};

export const removeMedia = (index)=> {
    return {type: REMOVE_MEDIA, payload: {index: index}}
}

export const setStatus = (status)=> {
    return {type: SET_STATUS, payload: {status: status}}
}
export const setTitle = (title)=> {
    return {type: SET_TITLE, payload: {title: title}}
}
export const setText = (text)=> {
    return {type: SET_TEXT, payload: {text: text}}
}
export const setItem = (prevPath, nextPath)=> {
    return {type: SET_ITEM, payload: {prevPath: prevPath, nextPath: nextPath}}
}

export const setType = (type) => {
    return {type: SET_TYPE, payload: {type: type}}
}

export const setUpdatePost = (data) => {
    return {type: SET_UPDATE_POST, payload: {data: data}}
};

export const reset = () => {
    return {type: RESET}
}

export const doPost = () => {
    return async (dispatch, getState) => {
        //
        const state = getState(),
            medias = state.medias,
            post = state.post,
            system = state.system,
            lang = i18n.language;

        if (post.items.size <= 0)
            return Promise.resolve();
        if (post.status === STATUS_POSTING)
            return Promise.resolve();

        let items = post.items;
        let contentType = 'text';
        let cbPath = function (path, url, duration, type) {
            dispatch(setItem(path, url));
            postData.media.push({
                src: getStaticServerUrl()+url,
            })
        }

        dispatch(setStatus(STATUS_POSTING));

        let postData = {};
        postData.media = [];
        postData.text = '';
        let isSuccess = true;
        if (post.text.length) {
            postData.text = post.text;
        }
        for (let idx in items) {
            let item = items[idx];
            if (!medias[item.path])
                continue;

            try {
                let media = medias[item.path];
                contentType = media.type;
                let ret = await dataService.uploadMedia(media.type, media.path, media.duration, media.from, false, media.file, cbPath,idx);
                if (ret.meta || ret.fname) {
                    if (!ret.fname.startsWith('/'))
                        ret.fname = `/${ret.fname}`;
                    let ret_url = getStaticServerUrl()+ret.fname;

                    if (postData.media[0].src === ret_url) {
                        if (ret.meta) postData.media[0].meta = ret.meta;
                        if (ret.thumb) postData.media[0].thumb = REDUX_TYPE.addPrefixForServer(ret.thumb);
                    }
                }
            } catch (e) {
                isSuccess = false;
                dispatch(setStatus(STATUS_ERROR));
                dispatch(reset());
                return;
            }
        }
        // dispatch(setStatus(STATUS_END));
        if (isSuccess) {
            let postDataObj = null;
            let modelType = 'content';
            let nowDate = new Date();
            if (post.type === POST_TYPE_CONTENT) {
                postDataObj = Contents.createContentItem({type: contentType, media: postData.media, point: post.cost});
                if (postDataObj["state"]) {//게시글을 올릴때는 state 마당을 보내지 않는다.
                    delete postDataObj["state"];
                }
                if (!postDataObj) {
                    dispatch(setStatus(STATUS_ERROR));
                    dispatch(reset());
                    return;
                }

                postDataObj.category_id = Contents.SQUARE_CATEGORY;
                postDataObj.ctime = new Date();
                postDataObj.from = nowDate;
                postDataObj.to = Tool.addDays(nowDate, 300);
                postDataObj.lang = lang;    //콘텐트 현시 언어...

            } else {
                modelType = 'advert';
                postDataObj = {
                    type: contentType, //종류: video, image ....
                    media: postData.media,
                    url: post.url,//광고소개 웹페지링크
                    point: post.cost, //콘텐트창에 표시할 코인값
                    guarantee: post.guarantee, //광고주가 광고에 할당한 총 포인트, 열람할때마다 감소하여 0이면 광고할수 없다.
                    ctime: nowDate, //광고등록날자
                    etime: Tool.addDays(nowDate, system.setting.data.advert_days),//광고배포 마감날자
                }
            }

            postDataObj.text = post.text;
            postDataObj.user_id = system.mi.id;

            delete postDataObj.id;//postContentAdvertData

            dataService.postContentAdvertData(postDataObj, modelType)
                .then(
                    (res) => {
                        let obj = Contents.createContentItem(res);
                        if (modelType === 'advert') {
                            obj.advert_id = res.id;
                            obj.is_advert = true;
                        }
                        dispatch(Contents.addMyContentAsync(obj));
                        dispatch(System.doIncreaseCoin(post.guarantee, false));
                        dataService.panStatus.activeTab = 4;//자료올리기가 끝나면 광장의 첫 페지로...
                        dispatch(setStatus(STATUS_SUCCESS));
                        dispatch(reset());
                        // dataService.showNotification('success', 'Post success...');
                    })
                .catch((err) => {
                    dispatch(setStatus(STATUS_ERROR));
                    dispatch(reset());
                })
        } else {
            dispatch(setStatus(STATUS_ERROR));
            dispatch(reset());
        }
    }
}

const Item = {
    path: '',
}

const PostState = {
    status: STATUS_IDLE,
    text: "",
    items: [],

    type:POST_TYPE_CONTENT,
    contentType : Contents.CONTENT_TYPE_IMAGE,
    cost:0,
    guarantee : 0,
    url: '',
};

const initState = Object.assign({}, PostState);
export default handleActions(
    {
        [RESET]: (state, action) =>
            produce(state, draft => {
                return Tool.createObject(PostState);
            }),
        [ADD_MEDIA]: (state, action) =>
            produce(state, draft => {
                const {payload: {path}} = action;
                let newItem = Object.assign({}, Item);
                newItem.path = path;
                draft.items.push(newItem);
            }),
        [REMOVE_MEDIA]: (state, action) =>
            produce(state, draft => {
                const {payload: {index}} = action;
                draft.items.splice(index, 1);
                // draft.status = draft.status;
            }),
        [SET_STATUS]: (state, action) =>
            produce(state, draft => {
                const {payload: {status}} = action;
                draft.status = status;
            }),
        [SET_TITLE]: (state, action) =>
            produce(state, draft => {
                const {payload: {title}} = action;
                draft.title = title;
            }),
        [SET_TEXT]: (state, action) =>
            produce(state, draft => {
                const {payload: {text}} = action;
                draft.text = text;
            }),
        [SET_TYPE]: (state, action) =>
            produce(state, draft => {
                const {payload: {type}} = action;
                draft.type = type;
            }),
        [SET_ITEM]: (state, action) =>
            produce(state, draft => {
                const {payload: {prevPath, nextPath}} = action;
                const item = draft.items.find(item => item.path === prevPath);
                item.path = nextPath;
            }),
        [SET_UPDATE_POST]: (state, action) =>
            produce(state, draft => {
                const {payload: {data}} = action;
                // draft.isAdvert = status;
                Object.keys(data).map((key, index) => {
                    return draft[key] = data[key];
                })
            }),
    },
    initState
);
