import { handleActions} from 'redux-actions'
import produce from 'immer';
import * as Tool from '../../lib/tool';
import * as CONST from '../../model/Const';
import {httpReq} from "../../model/Req";
// import {ADD_MEDIA, RESET} from "./post";

export const NAME = 'note';
/* Action Types*/
export const ADD_NOTE = `${NAME}/ADD_NOTE`;
export const REMOVE_NOTE = `${NAME}/REMOVE_NOTE`;
export const RECEIVE_NOTE = `${NAME}/RECEIVE_NOTE`;
export const UPDATE_NOTE = `${NAME}/UPDATE_NOTE`;
export const RESET_NOTE = `${NAME}/RESET_NOTE`;
export const SET_STATUS = `${NAME}/SET_STATUS`;
export const ADD_UNREAD_NOTE_IDS = `${NAME}/ADD_UNREAD_NOTE_IDS`;

/* Actions */
export const addNote = (data, unshift=false) => {
    return {type: ADD_NOTE, payload: {data: data, unshift:unshift}}
};

export const reset = () => {
    return {type: RESET_NOTE}
};

export const setStatus = (status) => {
    return {type: SET_STATUS, payload: {status: status}}
};

export const addUnreadNoteId = (ids) => {
    return {type: ADD_UNREAD_NOTE_IDS, payload: {ids: ids}}
};

export const updateNote = (data) => {
    return {type: UPDATE_NOTE, payload: {data: data}}
};

export const reqReadMyNote = (loadType=CONST.LOAD_TYPE_INIT, perpage=10, filter={}, sort=[]) => {
    return (dispatch, getState) => {
        const globalState = getState();
        const mi = globalState.system.mi,
            note = globalState.note;
        let reqParams = {filter:{receiver:mi.id}},
            // length = 0,
            unreadNoteIds = JSON.parse(JSON.stringify(note.unReadNoteIds));
        if (loadType === CONST.LOAD_TYPE_INIT) {
            dispatch(reset());
        }else if (loadType === CONST.LOAD_TYPE_MORE && note.lastId) {
            reqParams.filter.id = {$lt: note.lastId};
            // length = note.data.length;
        }
        Object.keys(filter).map((key)=>{
            return reqParams.filter[key] = filter[key];
        });
        if (sort.length===2 && sort[0] && sort[1]) {
            reqParams.sort = JSON.stringify(sort);
        }
        reqParams.range = JSON.stringify([0, perpage]);
        dispatch(setStatus(CONST.STATUS_REQ_START));
        return httpReq('/api/note', 'get', reqParams, true).then(
            (res)=>{
                const { headers, data} = res;
                let contentRange = headers['content-range'];
                let total = parseInt(contentRange.split('/').pop(), 10);
                if (loadType === CONST.LOAD_TYPE_INIT) {
                    dispatch(updateNote({totalLength: total}));
                }
                let lastId = -1;
                for (let index in data) {
                    // length += 1;
                    lastId = data[index].id;
                    let unreadNoteIndex = Tool.getIndexByValue(unreadNoteIds, lastId);
                    if (unreadNoteIndex !== -1) {//읽지 못한 쪽지이면...
                        unreadNoteIds.splice(unreadNoteIndex, 1);
                    }
                    if (!data[index].state) {
                        data[index].state = true;
                    }
                    dispatch(addNote(data[index]));
                }
                if (data.length < perpage) {
                    dispatch(setStatus(CONST.STATUS_REQ_NOMORE));
                } else {
                    dispatch(setStatus(CONST.STATUS_REQ_SUCCESS));
                }
                dispatch(updateNote({lastId:lastId, unReadNoteIds:unreadNoteIds}));
            },
            (err)=> {
                dispatch(setStatus(CONST.STATUS_REQ_FAIL));
            }
        )
    }
};

export const requestUnreadNote = () => {
    return (dispatch, getState) => {
        const globalState = getState();
        const mi = globalState.system.mi;
        if(!mi.id) return;
        let reqParams = {filter:{receiver:mi.id,state:false}};
        httpReq('/api/note', 'get', reqParams).then(
            (response)=>{
                let pushIds = [];
                for (let index in response) {
                    pushIds.push(response[index].id);
                }
                dispatch(addUnreadNoteId(pushIds));
            },
            (err)=>[

            ]
        )
    }
};

const NoteState = {
    loaded : false,
    data : [],
    lastId : -1,
    unReadNoteIds : [],
    status : CONST.STATUS_REQ_IDLE,
    totalLength : -1,
};

const initState = Object.assign({}, NoteState);

export default handleActions(
    {
        [ADD_NOTE]: (state, action) =>
            // const {payload: {data}} = action;
            // return {
            //     ...state,
            //     data: [...state.data, data],
            // }
            produce(state, draft => {
                const {payload: {data, unshift}} = action;
                if (unshift) {
                    draft.data.unshift(data);
                } else {
                    draft.data.push(data);
                }
            }),
        [RESET_NOTE]: (state, action) =>
            produce(state, draft => {
                return Tool.createObject(NoteState);
            }),
        [SET_STATUS]: (state, action) =>
            produce(state, draft => {
                const {payload: {status}} = action;
                draft.status = status;
            }),
        [ADD_UNREAD_NOTE_IDS]: (state, action) =>
            produce(state, draft => {
                const {payload: {ids}} = action;
                if(!Tool.isValidArray(ids)) return;
                ids.map((index)=>{
                    draft.unReadNoteIds.push(index);
                });
            }),
        [UPDATE_NOTE]: (state, action) =>
            produce(state, draft => {
                const {payload: {data}} = action;
                Object.keys(data).map((key)=>{
                    return draft[key] = data[key];
                });
            }),
    },
    initState
)



