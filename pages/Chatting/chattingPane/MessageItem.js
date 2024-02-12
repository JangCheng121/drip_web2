/**
 * MessageItem
 * */

import React, {useEffect} from "react";
import Grid from '@material-ui/core/Grid/index';
import Typography from '@material-ui/core/Typography/index';
import Paper from '@material-ui/core/Paper/index'
// import UserAvatar from "../../../components/Avatar";
import Avatar from '@material-ui/core/Avatar';
import * as CONST from "../../../model/Const"
import {getCurrentTime} from "../../../lib/tool";
import VideoItem from './messageItems/VideoItem';
import ImageItem from './messageItems/ImageItem';
import AudioItem from './messageItems/AudioItem';
import PresentItem from './messageItems/PresentItem';
import TextItem from './messageItems/TextItem';
import OtherItem from './messageItems/OtherItem';
import {makeStyles} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRobot} from "@fortawesome/free-solid-svg-icons";
import Badge from '@material-ui/core/Badge';
import _lodash from "lodash";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    avatar: {
        backgroundColor: '#d8d8d8'
    }
}));
export default (props) => {
    const classes = useStyles();
    useEffect(() => {
        let ListItemContent = document.getElementById('ListItemContent');
        if (ListItemContent) {
            ListItemContent.scrollTop = ListItemContent.scrollHeight + 500;
        }
    }, []);
    const {message, mi, users, t, isCreator, setting, i18n} = props,
        userInfo = users[message.sender],
        reverse = message.sender === mi.id ? true : false;
    if (!message || !message.content || message.content.data === '' || !userInfo || !userInfo.id) {
        return null
    }
    let messageItem;
    if (message.type === CONST.CHAT_CONTENT_TEXT) {
        messageItem = <TextItem message={message} />
    } else if (message.type === CONST.CHAT_CONTENT_IMAGE) {
        messageItem = <ImageItem message={message}/>
    } else if (message.type === CONST.CHAT_CONTENT_VIDEO) {
        messageItem = <VideoItem message={message}/>
    } else if (message.type === CONST.CHAT_CONTENT_AUDIO) {
        messageItem = <AudioItem message={message}/>
    } else if (message.type === CONST.CHAT_CONTENT_PRESENT) {
        messageItem = <PresentItem message={message}/>
    } else if (message.type === CONST.CHAT_CONTENT_OTHER) {
        messageItem = <OtherItem message={message}/>
    } else if (message.type === CONST.CHAT_USET_JOIN_LEAVE) {
        messageItem = <OtherItem t={t} message={message} userInfo={userInfo}/>
    } else if (message.type === 'live_chat_alert') {
        message.content.text =
            _lodash.find(setting&&setting.data&&setting.data.msg_live, {lang: i18n&&i18n.language})
                ? _lodash.find(setting&&setting.data&&setting.data.msg_live, {lang: i18n&&i18n.language}).str : 'welcome live...';
        messageItem = <OtherItem t={t} message={message} userInfo={userInfo}/>
    }

    return (
        <Grid wrap='wrap' justify='flex-start' container spacing={1} direction={reverse ?"row-reverse":"row"}>
            <Grid item>
                <Badge
                    overlap="circle"
                    anchororigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    badgeContent={isCreator&&userInfo&&userInfo.role==='virtual'?<FontAwesomeIcon style={{color:'#f95452'}} icon={faRobot} />:null}
                >
                    <Avatar className={classes.avatar} id={userInfo.id} src={userInfo.picture} size={40} shape={'circle'}/>
                </Badge>
            </Grid>
            <Grid item justify={reverse ? 'flex-start' : 'flex-end'}  wrap="nowrap" style={{maxWidth:'80%', display:'grid', alignItems:'center'}}>
                {message.type === CONST.CHAT_USET_JOIN_LEAVE?null
                    :<Typography variant="subtitle1" style={{display:'flex', justifyContent: reverse ? 'flex-end' : 'flex-start'}}>
                        {userInfo.name}
                    </Typography>
                }
                <Paper style={{backgroundColor: reverse ? '#3f51b5' : '#f5f5f5', width:"fit-content"}}>
                    {messageItem}
                </Paper>
            </Grid>
            <Grid item justify='flex-end'>
                <small style={{color:'#b4b4b4', }}>{getCurrentTime(parseInt(new Date(message.ctime).getTime()), 'HH:mm')}</small>
            </Grid>
        </Grid>
    );
}
