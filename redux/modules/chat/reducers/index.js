import messages from './messages';
import channels from './channels';
import {combineReducers} from 'redux';

const chat = combineReducers({
    messages,
    channels,
});

export default chat;
