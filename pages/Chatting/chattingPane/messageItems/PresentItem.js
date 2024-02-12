/**
 * PresentItem
 * */
import React from "react";

export default (props)=> {

        const {message} = props;
        if (!message || !message.content || !message.content.data) {
            return null;
        }
        return (
            <>
                <img alt='present' src={message.content.data.img} style={{maxWidth:50}}/>
                <span>x{message.content.data.cnt}</span>
            </>
        )
}
