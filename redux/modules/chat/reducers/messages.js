import {
    ADD_MESSAGE,
    RECEIVE_MESSAGE,
    LOAD_MESSAGES,
    LOAD_MESSAGES_SUCCESS,
    LOAD_MESSAGES_FAIL,
    SET_UNREADCOUNT,
    LOAD_MESSAGES_INIT
} from '../constants/ActionTypes';

export const initialState = {
    loaded: false,
    data: [],
    unreadCount: 0
};
export default function messages(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                data: [...state.data, action.message]
            };
        case RECEIVE_MESSAGE:
            return {
                ...state,
                data: [...state.data, action.message]
            };
        case LOAD_MESSAGES:
            return {
                ...state,
                loading: true
            };
        case LOAD_MESSAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: [...action.json]
            };

        case LOAD_MESSAGES_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.error,
                data: [...state.data]
            };
        case SET_UNREADCOUNT:
            return {
                ...state,
                unreadCount:action.count
            };

        case LOAD_MESSAGES_INIT:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: [{
                    channel_id: action.activeChannel,
                    content: {text: 'live_chat_alert'},
                    ctime: new Date(),
                    mode: "live",
                    sender: 1,
                    type: "live_chat_alert"
                }]
            };

        default:
            return state;
    }
}
