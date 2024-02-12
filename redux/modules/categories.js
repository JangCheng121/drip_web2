/**
 * Categories Redux
 * **/

import HttpManager from "../../model/Req";
import * as CONST from '../../model/Const'

export const NAME = 'categories';
/* Action Types*/
export const LOAD_CATEGORIES = `${NAME}/LOAD_CATEGORIES`;
export const LOAD_CATEGORIES_FAIL = `${NAME}/LOAD_CATEGORIES_FAIL`;
export const LOAD_CATEGORIES_SUCCESS = `${NAME}/LOAD_CATEGORIES_SUCCESS`;

/* Actions */
const requestCategories = () => {
    return {
        type: LOAD_CATEGORIES
    }
}
const receiveCategories = (json) => {
    return {
        type: LOAD_CATEGORIES_SUCCESS,
        json
    }
}
const receiveCategoriesFail = (error) => {
    return {
        type: LOAD_CATEGORIES_FAIL,
        error
    }
}

export function getCategoriesAsync() {
    return dispatch => {
        dispatch(requestCategories());
        return HttpManager.req('/api/category', 'get')
            .then(res => {
                const result = res.slice(0);
                for(let key in result){
                    const item = result[key];
                    item.value = result[key].id;
                    item.label = result[key].name;
                }
                dispatch(receiveCategories(result));
            }, err => {
                dispatch(receiveCategoriesFail(err));
            })
    }
}

const initialState = {
    loaded: false,
    chat: [],
    image: [],
    video: [],
    live: [],
};
export default function categories(state = initialState, action) {
    switch (action.type) {
        case LOAD_CATEGORIES:
            return {
                ...state,
                loading: true
            };
        case LOAD_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                chat: [...action.json.filter(item => item.parent_id === CONST.CATEGORY_CHAT_ID)],
                image: [...action.json.filter(item => item.parent_id === CONST.CATEGORY_IMAGE_ID)],
                video: [...action.json.filter(item => item.parent_id === CONST.CATEGORY_VIDEO_ID)],
                live: [...action.json.filter(item => item.parent_id === CONST.CATEGORY_LIVE_ID)]
            };
        case LOAD_CATEGORIES_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.error,
            };

        default:
            return state;
    }
}
