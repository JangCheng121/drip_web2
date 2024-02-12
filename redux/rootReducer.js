import * as Proto from './common/PropoTypes'
import {combineReducers} from 'redux';
import {i18nState} from 'redux-i18n';
import users from './modules/users';
import system from './modules/system';
import medias from './modules/medias';
import post from './modules/post';
import contents from './modules/contents';
import chat from './modules/chat/reducers';
import note from './modules/note';
import categories from './modules/categories';
import popup from './modules/popup';

const reducer = combineReducers({
    i18nState,
    users,
    medias,
    system,
    post,
    contents,
    chat,
    note,
    categories,
    popup
});

const appReducer = (state, action) => {
    if (action.type === Proto.TYPE_RESET_REDUX) {
        state = undefined
    }
    return reducer(state, action)
}

const rootReducer = (state, action) => {
    if (action.type === Proto.TYPE_RESET_REDUX) {
        localStorage.clear();
        state = undefined
    } else if (action.type === Proto.TYPE_RESET_REDUX_STATE) {
        let state_key = action.state_key;
        if (state_key && state[state_key]) {
            state[state_key] = undefined;
        }
    }
    return appReducer(state, action)
}
export default rootReducer;
