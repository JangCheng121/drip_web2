/**
 * Channel Users
 * */
import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel/index';
import Checkbox from '@material-ui/core/Checkbox/index';
import Avatar from '../../../components/Avatar';
import * as CONST from '../../../model/Const'
import * as Tools from '../../../lib/tool';
import Grid from "@material-ui/core/Grid/index";

const _ = require('lodash');

const ChannelUsers = (props) => {
    const {activeChannel, users, type, funcSelectUser, mi, funcSelectAllUser, selectedUsers} = props;
    const channels = props.channels.data;
    if (activeChannel === CONST.CUSTOM_SERVICE_CHANNEL) {
        return null;
    }
    const channel = _.filter(channels, {id: activeChannel})[0];
    let userIDs = [];
    if (!channel || !channel.others) {
        return null;
    } else {
        userIDs = channel.others;
    }
    if (!Tools.isValidArray(userIDs)) {
        return null;
    }
    return (
        <div>
            {userIDs.length>1?  //나는 언제나 가입되여 있다...
                <div >
                    {
                        type === 'note' ?
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        id="selectUser"
                                        name="selectUser"
                                        color="primary"
                                        onChange={(e) => {funcSelectAllUser(e.target.checked)}}
                                    />
                                }
                                label="전체가입자"
                            />
                            : null
                    }
                </div>
                :null
            }
            {userIDs.map((id, index) => {
                if(mi.id === id){
                    return null;
                }
                const user = users[id];
                let isSelected = _.indexOf(selectedUsers, id) !== -1;
                return (
                    <div key={index}>
                        {
                            type === 'note' ?
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            id="selectUser"
                                            name="selectUser"
                                            color="primary"
                                            checked={isSelected}
                                            onChange={(e) => {funcSelectAllUser(e.target.checked)}}
                                        />
                                    }
                                    label={
                                        <div style={{display:'flex'}}>
                                            <Avatar src={user.picture} id={user.id} size={35} shape={'circle'} />
                                            <span className="ml-2">{user.name}</span>
                                        </div>
                                    }
                                    fullWidth
                                />
                                : null
                        }

                    </div>
                )
            })}
        </div>
    );
};

export default ChannelUsers;
