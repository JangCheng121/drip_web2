import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {connect} from 'react-redux';
import * as Users from '../redux/modules/users';
import * as CONST from "../model/Const";
import IconButton from '@material-ui/core/IconButton';
import RoomBossIcon from '@material-ui/icons/HowToRegOutlined';
import RoomUserIcon from '@material-ui/icons/Person';
import SpeakerNotesOff from '@material-ui/icons/SpeakerNotesOff';
import EnableChatIcon from '@material-ui/icons/RecordVoiceOver';
import ExitToApp from '@material-ui/icons/ExitToApp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faRobot} from '@fortawesome/free-solid-svg-icons';
import * as Tools from "../lib/tool";
import * as System from "../redux/modules/system";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Badge from '@material-ui/core/Badge';
import SendNoteDialog from "./SendNoteDialog";
import {dataService} from "../model/DataService";
import _lodash from 'lodash';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    avatar: {
        backgroundColor: '#d8d8d8'
    }
}));

const UserListItem = (props) => {
    const classes = useStyles();
    const {userInfo, t, is_follow, users, mi, isBoss, isCreator,
        doFollow, updateUser, setOpenSendNoteDialog, toggleLoginModal,
        activeChannelInfo, is_manager, allow_chatting, func_allow_chat, func_add_manager
    } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const user_id = userInfo.id;
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function funcExitRoom(user_id) {
        dataService.sendSocket('leaveChannel', {channel_id:activeChannelInfo.id, user_id:user_id, type:'kickout'})
    }

    function sendCommandChannel(user_id, command) {
        if (!activeChannelInfo || !user_id) {
            return;
        }
        let send_data = {channel_id:activeChannelInfo.id, command:command, user_id:user_id};
        dataService.sendSocket('commandChannel', send_data);
        if (command === CONST.CHAT_ADD_MANAGER_USER || command === CONST.CHAT_DELL_MANAGER_USER) {
            func_add_manager();
        } else if (command === CONST.CHAT_DISALLOW_USER || command === CONST.CHAT_ALLOW_USER) {
            func_allow_chat();
        }
    }

    function funcFollowUser(userId) {
        if (!mi.member) {
            toggleLoginModal();
            return;
        }

        let isFollow = Tools.getIndexByValue(mi.follow, userId),
            user = users[userId],
            followed = [].concat(user.followed),
            idx = followed.length?Tools.getIndexByValue(followed, mi.id):-1;

        if (idx === -1) {
            followed.push(mi.id);
        } else {
            followed.splice(idx, 1);
        }

        if (!userId) return;
        doFollow && doFollow(userId, isFollow === -1 ? true : false);
        updateUser && updateUser(userId, {followed: followed})
    }

    function funcClickNote(user_id) {
        setOpenSendNoteDialog()
    }

    return (
        <ListItem button>
            <ListItemAvatar>
                <Badge
                    overlap="circle"
                    anchororigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    badgeContent={isCreator&&userInfo&&userInfo.role==='virtual'?<FontAwesomeIcon style={{color:'#f95452'}} icon={faRobot} />:null}
                >
                    <Avatar className={classes.avatar} alt="user avatar" src={userInfo.picture} />
                </Badge>
            </ListItemAvatar>
            <ListItemText id={userInfo.name} primary={userInfo.name}/>
            <ListItemSecondaryAction>
                <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: 300,
                            width: 200,
                        },
                    }}
                >
                    <MenuItem onClick={() => {
                        funcFollowUser(user_id);
                        handleClose();
                    }}>
                        <ListItemIcon>
                            {is_follow?<FavoriteIcon />:<FavoriteBorderIcon />}
                        </ListItemIcon>
                        <ListItemText primary={is_follow?t('CANCEL_FOLLOW'):t('FOLLOW')}/>
                    </MenuItem>
                    {isCreator ?
                        <MenuItem onClick={() => {
                            funcClickNote(user_id);
                            handleClose();
                        }}>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </ListItemIcon>
                            <ListItemText primary={t('SENDNOTE')}/>
                        </MenuItem>
                        :null
                    }
                    {isCreator ?
                        <MenuItem onClick={() => {
                            sendCommandChannel(user_id, is_manager?CONST.CHAT_DELL_MANAGER_USER:CONST.CHAT_ADD_MANAGER_USER);
                            handleClose();
                        }}>
                            <ListItemIcon>
                                {is_manager ? <RoomUserIcon/> : <RoomBossIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={is_manager ? t('CANCEL_ROOM_BOSS') : t('SELECT_ROOM_BOSS')}/>
                        </MenuItem>
                        :null
                    }
                    {isCreator || isBoss?
                            <MenuItem onClick={() => {
                                sendCommandChannel(user_id, allow_chatting?CONST.CHAT_DISALLOW_USER:CONST.CHAT_ALLOW_USER);
                                handleClose();
                            }}>
                                <ListItemIcon>
                                    {allow_chatting ? <SpeakerNotesOff /> : <EnableChatIcon />}
                                </ListItemIcon>
                                <ListItemText primary={allow_chatting ? t('STOP_CHAT'):  t('ENABLE_CHAT')}/>
                            </MenuItem>
                        :null
                    }
                    {isCreator || isBoss?
                            <MenuItem onClick={() => {
                                funcExitRoom(user_id);
                                handleClose();
                            }}>
                                <ListItemIcon>
                                    <ExitToApp />
                                </ListItemIcon>
                                <ListItemText primary={t('EXIT_ROOM')}/>
                            </MenuItem>
                        :null
                    }
                </Menu>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

const UserList = (props) => {

    const { users, getUser, mi, t, activeChannelInfo, updateChannelInfo} = props;//, doFollow, updateUser, toggleLoginModal
    const classes = useStyles();
    const [sendNoteUserId, setSendNoteUserId] = React.useState(-1);
    const [sendNoteDialogState, setSendNoteDialogState] = React.useState(false);
    const channel_others = activeChannelInfo.others?activeChannelInfo.others:[];
    let channel_managers = activeChannelInfo.managers?activeChannelInfo.managers:[];
    const isBoss = Tools.getIndexByValue(channel_managers, mi.id) !== -1;
    const isCreator = mi.id === activeChannelInfo.creator;

    function setSendNoteDialog(user_id) {
        setSendNoteDialogState(true);
        setSendNoteUserId(user_id);
    }

    function func_allow_chat(user_id, is_allow) {
        let user = _lodash.find(channel_others, {user_id:user_id});
        user.allow = is_allow;
        updateChannelInfo(activeChannelInfo.id, {others:channel_others});
    }

    function func_add_manager(user_id, is_add) {
        let is_exit =Tools.getIndexByValue(channel_managers, user_id) !== -1;
        if (is_add && !is_exit) {
            channel_managers.push(user_id)
        } else if (is_exit) {
            channel_managers = _lodash.without(channel_managers, user_id);
        }
        updateChannelInfo(activeChannelInfo.id, {managers:channel_managers});
    }

    return (
        <List dense className={classes.root}>
            {channel_others.map((dataItem, index) => {
                let user_id = dataItem.user_id;
                if (user_id === mi.id) {
                    return null;
                }
                const userInfo = users[user_id];
                if (!userInfo) {
                    getUser(user_id);
                    return null;
                }
                let is_follow = Tools.getIndexByValue(mi.follow, user_id) !== -1;
                let is_manager = Tools.getIndexByValue(channel_managers?channel_managers:[], user_id) !== -1;
                let allow_chatting = _lodash.find(channel_others, { user_id:user_id }).allow?true:false;
                return (
                    <UserListItem
                        key={index}
                        isBoss={isBoss}
                        isCreator={isCreator}
                        userInfo={userInfo}
                        is_follow={is_follow}
                        is_manager={is_manager}
                        func_allow_chat={() => func_allow_chat(user_id, !allow_chatting)}
                        func_add_manager={() => func_add_manager(user_id, !is_manager)}
                        allow_chatting={allow_chatting}
                        setOpenSendNoteDialog={() => {setSendNoteDialog(user_id)}}
                        {...props}
                    />
                );
            })}
            <SendNoteDialog
                dialogState={sendNoteDialogState}
                setSendNoteDialogState={setSendNoteDialogState}
                placeholderStr={t("INPUT_NOTE_CONTENT")}
                user_id={sendNoteUserId}
            />
        </List>
    );
}

export default connect(
    state => ({
        users: state.users,
        mi: state.system.mi,
    }),
    dispatch=>({
        getUser: (id) => dispatch(Users.get(id)),
        doFollow: (id, isFollow) => dispatch(System.doFollowAsync(id, isFollow)),
        updateUser: (id, userInfo) => {dispatch(Users.updateUser(id, userInfo))},
    })
)(UserList)