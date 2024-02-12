import {handleActions, createAction} from 'redux-actions';
import produce from 'immer';
import {drip_log} from "../../lib/tool";
import {httpReq} from "../../model/Req";
import * as bPromise from 'bluebird'
import * as ProtoType from "../common/PropoTypes"
// import {dataService} from '../../model/DataService';
// import {getServerUrl} from "../../model/Req";
// import * as Tool from '../../lib/tool';

export const NAME = 'users';
/* Action Types*/
export const GET = `${NAME}/GET`;
export const ADD_NEW = `${NAME}/ADD_NEW`;
export const GET_START = `${NAME}/GET_START`;
export const GET_SUCCESS = `${NAME}/GET_SUCCESS`;
export const GET_ERROR = `${NAME}/GET_ERROR`;
export const ACT_UPDATE_USER = `${NAME}/ACT_UPDATE_USER`;
export const ACT_SET_DATA = `${NAME}/ACT_SET_DATA`;


export const ActSetData = createAction(ACT_SET_DATA);
/* Actions */
export const addNew = (id) => {
    return {type: ADD_NEW, payload: {id: id}}
}

export const getStart = (id) => {
    return {type: GET_START, payload: {id: id}}
}

export const onSuccess = (data) => {
    return {type: GET_SUCCESS, payload: {data: data}}
}

export const onError = (id, error) => {
    return {type: GET_ERROR, payload: {id: id, error: error}}
}

export const get_user = (id, type = '') => {
    return new Promise(function (resolve, reject) {
        if (!id) return resolve({});
        httpReq('/api/user/' + id, 'get').then(
            (res) => {
                res.member = (res.role !== 'guest');
                resolve(res);
            },
            (err) => {
                reject(err);
            }
        )
    });
}

export const get = (id) => {
    return (dispatch, getState) => {
        const state = getState();
        const users = state.users;

        if (!id || id <= 0)
            return Promise.reject();

        if (!users[id])
            dispatch(addNew(id));
        else if (users[id].status === GET_SUCCESS) {
            return Promise.resolve();
        } else if (users[id].status === GET_START) {
            return Promise.resolve();
        }

        dispatch(getStart(id));

        get_user(id)
            .then((userData) => {
                dispatch(onSuccess(userData));
            })
            .catch((err) => {
                drip_log(1, err.message)
                dispatch(onError(id, err));
            })
    }
}

export const set = (id, info) => {
    return (dispatch, getState) => {
        let user = {}
        if (!id || id <= 0)
            return Promise.reject();
        get_user(id, 'init')
            .then((res) => {
                for (let i in info) {
                    res[i] = info[i];
                }
                user = res;
                let reqParam = {
                    isCustom: true,
                    filter: `{"id":"${id}"}`,
                    update: JSON.stringify(info),
                };
                return httpReq('/api/user/' + id, 'put', reqParam);
            })
            .then((resp) => {
                if (resp.result === 'fail') throw new Error('UserUpdateError');
                dispatch(onSuccess(user))
            })
            .catch((e) => {
                if (e.message === 'prohibitted string!') {
                    // dataService.showToast(i18n.t('editInfo.NAMEFAIL'));
                }
                drip_log(1, e.message);
                dispatch(onError(id, e))
            })
    }
};

export const updateUser = (id, userInfo) => {
    return (dispatch, getState) => {
        if (!id || !userInfo)
            return Promise.reject();

        let users = getState().users;
        if (!users[id]) {
            dispatch(onSuccess(userInfo));
            return Promise.reject();
        }

        let payload = {
            parentKey: [id],
            data: userInfo,
        };
        dispatch(ActSetData(payload))
    }
}

/**
 * Reducer
 * export const ADD_NEW        = `${NAME}/ADD_NEW`;
 export const DOWN_START     = `${NAME}/DOWN_START`;
 export const DOWN_FINISH    = `${NAME}/DOWN_FINISH`;
 export const DOWN_PROGRESS  = `${NAME}/DOWN_PROGRESS`;
 export const DOWN_ERROR     = `${NAME}/DOWN_ERROR`;
 * */

const initUsersState = {};

export default handleActions(
    {
        [ADD_NEW]: (state, action) => {
            const {payload: {id}} = action;
            let user = Object.create({});
            user.status = "ADD_NEW";
            user.error = "";
            return {
                ...state,
                [id]: user,
            }
        },
        [GET_START]: (state, action) => {
            const {payload: {id}} = action;
            return {
                ...state,
                [id]: {
                    ...state[id],
                    'status': GET_START
                },
            }
        },
        [GET_SUCCESS]: (state, action) => {
            const {payload: {data}} = action;
            if (!data.id)
                return state;

            let user = Object.assign({}, data);
            user.status = GET_SUCCESS;
            return {
                ...state,
                [data.id]: user
            }
        },
        [GET_ERROR]: (state, action) => {
            const {payload: {id, error}} = action;
            return {
                ...state,
                [id]: {
                    ...state[id],
                    'error': error
                },
            }
        },
        [ACT_UPDATE_USER]: (state, action) =>
            produce(state, draft => {
                const {payload: {data}} = action;

                Object.keys(data).map((key, index) => {
                    return draft.mi[key] = data[key];
                })

            }),

        [ACT_SET_DATA]: (state, action) => ProtoType.ActSetData(state, action),
    },
    initUsersState
)



