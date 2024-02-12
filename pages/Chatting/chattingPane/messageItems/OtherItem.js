/**
 * OtherItem
 * */

import React from "react";
import * as CONST from "../../../../model/Const"
import FileIcon from "@material-ui/icons/CloudDownload"
import * as Tools from "../../../../lib/tool";

export default (props) => {

    const {message, userInfo, t} = props;
    let message_type = message.type;
    let render_text = '';
    if (message_type === CONST.CHAT_USET_JOIN_LEAVE) {
        render_text = message.content&&message.content.is_join?t('ENTER_USER', {user_name:userInfo.name}):t('LEAVE_USER', {user_name:userInfo.name});
    } else if (message_type === 'live_chat_alert') {
        render_text = message.content&&message.content.text;
    }
    return (
        <div style={{wordBreak: 'break-word', display:'flex'}}>
            {message_type === CONST.CHAT_CONTENT_OTHER ?
                <a href={message.content.data} download
                   style={{color: '#000000', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <FileIcon style={{fontSize: 50, marginRight: 10}}/> file
                </a>
                :<div>{render_text}</div>
            }
        </div>
    )
}
