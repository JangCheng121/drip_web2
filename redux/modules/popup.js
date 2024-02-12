import * as CONST from "../../model/Const";
import HttpManager from "../../model/Req";

export const NAME = 'popup';
export const SET_BLOCK_POPUP = `${NAME}/SET_BLOCK_POPUP`;

const initialState = {
    blockedPopupDates: {}
};

export default function popup(state = initialState, action) {
    switch (action.type) {
        case SET_BLOCK_POPUP:
            return {
                ...state,
                blockedPopupDates: action.payload
            };
        default:
            return state;
    }
}

export const setPopupBlockDate = (id) => (dispatch, getState) => {
    const blockedPopupDates = getState().popup.blockedPopupDates;

    // block 1 day
    let blockDate = new Date();
    blockDate.setDate(blockDate.getDate() + 1)
    // blockDate.setMinutes(blockDate.getMinutes() + 10);
    blockedPopupDates[id] = blockDate;
    dispatch({
        type: SET_BLOCK_POPUP,
        payload: blockedPopupDates,
    });
}