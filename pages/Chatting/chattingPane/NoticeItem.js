/**
 * Notice Item
 * */

import React from "react";
import Typography from '@material-ui/core/Typography/index';
import _ from "lodash";

export default class NoticeItem extends React.Component {

    render() {
        const {channels, activeChannel} = this.props;
        const activeChannelInfo = _.filter(channels.data, {id: activeChannel})[0];
        if (!activeChannelInfo) {
            return null;
        }

        return (

            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: 5,
            }}>
                <Typography variant={'h6'}>
                    공지사항:
                </Typography>
                <Typography variant={'body1'}>
                    {'  '}{activeChannelInfo.notification}
                </Typography>
            </div>

        );
    }
}
