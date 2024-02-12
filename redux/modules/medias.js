import {handleActions} from 'redux-actions'
// import * as REDUX_TYPE from '../common/PropoTypes';
import {dataService} from '../../model/DataService';
// import {getServerUrl} from "../../model/Req";
// import type {ActionAsync} from "../common/PropoTypes";

export const NAME = 'medias';

// type MEDIA = {
//     path: string,
//     status: string,
//     progress: string,
//     type: string,
//     direction: string,
//     from: string,
//     duration: number,
//     file:object
// };

/*Action Types*/
export const ACT_GET = `${NAME}/ACT_GET`;
export const ACT_NEW = `${NAME}/ACT_NEW`;
export const ACT_DELETE = `${NAME}/ACT_DELETE`;
export const ACT_SET_STATUS = `${NAME}/ACT_SET_STATUS`;
export const ACT_PROGRESS = `${NAME}/ACT_PROGRESS`;
export const ACT_SUCCESS = `${NAME}/ACT_ERROR`;
export const ACT_ERROR = `${NAME}/ACT_ERROR`;
export const ACT_REQUEST = `${NAME}/ACT_START_REQUEST`;

/*Status */
export const STATUS_NEW = `${NAME}/STATUS_NEW`;
export const STATUS_REQUEST = `${NAME}/STATUS_REQUEST`;
export const STATUS_SUCCESS = `${NAME}/STATUS_SUCCESS`;
export const STATUS_ERROR = `${NAME}/STATUS_ERROR`;

export const DIRECTION_UP = `${NAME}/DIRECTION_UP`;
export const DIRECTION_DOWN = `${NAME}/DIRECTION_DOWN`;

export const initMedia = {
    path: "",
    status: STATUS_NEW,
    progress: 0,
    type: "",
    from: "",
    direction:DIRECTION_DOWN,
    duration : 0,
    file:{},
};

export const MEDIA = {
    path: '',
    status: STATUS_NEW,
    progress: '',
    type: '',
    direction: DIRECTION_DOWN,
    from: '',
    duration: 0,
    file:{}
};

/* Actions */
export const addNew = (payload) => {
    return { type: ACT_NEW, payload: payload }
}
export const removeMedia = (index) => {
    return { type: ACT_DELETE, payload: {index:index}}
}

export const setStatus = (payload) => {
    return { type: ACT_SET_STATUS, payload }
}

export const setProgress = (payload) => {
    return { type: ACT_PROGRESS, payload: payload }
}

export const setSuccess = (payload) => {
    return { type: ACT_SUCCESS, payload: payload }
}

export const setError = (url) => {
    return (dispatch) => {
        dispatch(setStatus({url:url, status:STATUS_ERROR}));
        // dataService.deleteFile(url);
    }
}
export const get = (url) => {
        return (dispatch, getState) => {
        const state = getState();
        const medias = state.medias;

        if (!medias[url])
            dispatch(addNew({url:url}));
        else if (medias[url].status === STATUS_REQUEST) {
            return Promise.resolve();
        } else if (medias[url].status === STATUS_SUCCESS) {  // 다운로드를 시작했다는거다.
            return Promise.resolve();
        } else if (medias[url].direction === DIRECTION_UP) {
            return Promise.resolve();//dataService.uploadMedia(media.type, media.path, media.from);
        }

        dispatch(setStatus({url:url, status:STATUS_REQUEST}));
        dataService.downloadFile(
            url,
            null, null, null,
            (percent) => {
                let progress = parseInt(Math.round(percent * 100))
                dispatch(setProgress({url:url, progress:progress}));
            }
        ).then(
            (filePath) => {
                dispatch(setSuccess({url:url, path:filePath}));
            }, (error) => {
                dispatch(setError({url:url, error: error}));
            }
        )
    }
}

const initialState = {};

export default handleActions(
    {
        [ACT_NEW]: (state, action) => {
            const {payload: {url, value}} = action;
            let newMedia = Object.assign({}, value? value:MEDIA);
            return {
                ...state,
                [url]: newMedia,
            }
        },
        [ACT_DELETE]: (state, action) => {
            const {payload: {index}} = action;
            let obj = state;
            delete obj[index];
            return state;
        },
        [ACT_SET_STATUS]: (state, action) => {
            const {payload: {url, status}} = action;
            return {
                ...state,
                [url]: {
                    ...state[url],
                    'status': status
                },
            }
        },
        [ACT_PROGRESS]: (state, action) => {
            const {payload: {url, progress}} = action;
            return {
                ...state,
                [url]: {
                    ...state[url],
                    'progress': progress
                },
            }
        },
        [ACT_SUCCESS]: (state, action) => {
            const {payload: {url}} = action;
            return {
                ...state,
                [url]: {
                    ...state[url],
                    'status': STATUS_SUCCESS,
                },
            }
        },
    },
    initialState
)
