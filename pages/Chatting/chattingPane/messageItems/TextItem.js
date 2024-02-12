/**
 * TextItem
 * */

import React from "react";
import * as Tools from '../../../../lib/tool';
import {connect} from "react-redux";

class TextItem extends React.Component {

    render() {
        const {message} = this.props;
        let msg_content_data = message.content&&message.content.data,
            render_text = '';
        if (Tools.isString(msg_content_data)) {
            render_text = msg_content_data;
        }
        return (
             <div style={{padding:'10px 20px',wordBreak:'break-word'}}>{render_text}</div>
        )
    }
}

export default connect(
    state => ({
        // setting : state.system.setting.data,
    })
)(TextItem);
