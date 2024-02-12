/**
 * Pane Header
 * */
import React, {Component, Suspense} from "react";
import Button from '@material-ui/core/Button/index';
import Input from '@material-ui/core/Input/index';
import Avatar from '@material-ui/core/Avatar/index';
import Dialog from '@material-ui/core/Dialog/index';
import DialogTitle from '@material-ui/core/DialogTitle/index';
import DialogActions from '@material-ui/core/DialogActions/index';
import DialogContent from '@material-ui/core/DialogContent/index';
import Typography from '@material-ui/core/Typography/index';
import BackIcon from '@material-ui/icons/KeyboardArrowLeft';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import TimeIcon from '@material-ui/icons/AccessTime'
import CardHeader from "@material-ui/core/CardHeader/index";
import Tabs from '@material-ui/core/Tabs/index';
import Tab from '@material-ui/core/Tab/index';
import FormControlLabel from '@material-ui/core/FormControlLabel/index';
import Checkbox from '@material-ui/core/Checkbox/index';
import Grid from '@material-ui/core/Grid/index'
import Box from '@material-ui/core/Box/index'
import Card from '@material-ui/core/Card'
import ChannelUsers from './ChannelUsers'
import _ from "lodash";
import {isMobile} from 'react-device-detect';
import {getBriefTimeGap, pushArray} from "../../../lib/tool";
import {dataService} from "../../../model/DataService";
import * as actions from "../../../redux/modules/chat/actions/actions";
import ChannelStatusBar from "../../chat/channels/ChannelStatusBar";
import NoticeItem from "./NoticeItem";
import LikeBtn from '../../../components/LikeBtn'
import CreateChannel from "../../chat/channels/CreateChannel";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCogs} from '@fortawesome/free-solid-svg-icons';


class NoteModalContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0,    //auto
            note: '',
            auto_note: this.props.activeChannelInfo.note,
            auto_note_state: this.props.activeChannelInfo.autoNote,
        };
    }

    toggleTab(event, tabName) {
        this.setState({
            activeTab: tabName,
        });
    }

    handleInputChange(e) {
        let value = e.target.value;
        if (e.target.name === 'note') {
            this.setState({note: value})
        } else if (e.target.name === 'auto_note') {
            this.setState({auto_note: value})
        }
    }

    sendMyNote() {
        const {selectedUsers, toggleNoteModal} = this.props;
        if (this.state.note !== '') {
            for (let i = 0; i < selectedUsers.length; i++) {
                let data = {
                    sender: this.props.mi.id,
                    receiver: selectedUsers[i].user_id,
                    type: 'text',
                    content: this.state.note,
                    ctime: new Date(),
                };
                dataService.sendSocket('newNote', data);
            }
        }
        this.setState({note: ''});
        toggleNoteModal();
    }

    updateAutoNote() {
        const {channels, activeChannel, toggleNoteModal} = this.props;
        let activeChannelInfo = _.filter(channels.data, {id: activeChannel})[0];
        let updateChannelData = {};
        if (this.state.auto_note !== activeChannelInfo.note) {
            updateChannelData.note = this.state.auto_note;
        }
        if (this.state.auto_note_state !== activeChannelInfo.autoNote) {
            updateChannelData.autoNote = this.state.auto_note_state;
        }
        dataService.updateDbField('channel', activeChannel, {id: activeChannel}, updateChannelData).then(
            (res) => {
                this.props.dispatch(actions.updateChannelInfo(activeChannel, updateChannelData));
                toggleNoteModal();
            },
            (err) => {
                console.log('db update error....');
            }
        );
    }

    changeAutoNoteCheck(checked) {
        this.setState({auto_note_state: checked});
    }

    renderTabContent(activeTab) {
        const {placeHolderStr, activeChannelInfo, setting, t} = this.props;
        let note_per_point = setting && setting.data && setting.data.note_point,
            send_point = (activeChannelInfo && activeChannelInfo.send_note_cnt ? activeChannelInfo.send_note_cnt : 0) * (note_per_point ? note_per_point : 0);
        if (activeTab === 0) {
            return (
                <Grid container wrap='wrap' justify='flex-start' spacing={2}>
                    <Grid item xs={12}>
                        <Input
                            name='note'
                            value={this.state.note}
                            onChange={(e) => {
                                this.handleInputChange(e)
                            }}
                            placeholder={placeHolderStr}
                            fullWidth
                        />
                    </Grid>
                    {/*<Grid item xs={12}>
                        <ChannelUsers {...this.props}
                                      type={'note'}
                                      funcSelectAllUser={funcSelectAllUser}
                                      funcSelectUser={funcSelectUser}
                                      selectedUsers={selectedUsers}
                        />
                    </Grid>*/}
                </Grid>
            )
        }
        return (
            <Grid container wrap='wrap' justify='flex-start' spacing={2}>
                <Grid item xs={12}>
                    <Input
                        name='auto_note'
                        value={this.state.auto_note}
                        onChange={(e) => {
                            this.handleInputChange(e)
                        }}
                        placeholder={placeHolderStr}
                        fullWidth={true}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name={"auto_note_check"}
                                // value="checkedB"
                                color="primary"
                                checked={this.state.auto_note_state}
                                onChange={(e) => {
                                    this.changeAutoNoteCheck(e.target.checked)
                                }}
                            />
                        }
                        label={t("AUTO_SEND")}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" gutterBottom>
                        {`${activeChannelInfo && activeChannelInfo.send_note_cnt ? activeChannelInfo.send_note_cnt : 0}건 전송, `}
                        {t('SEND_NOTE_POINT_STR')}
                    </Typography>
                </Grid>
            </Grid>
        )
    }

    renderFooter(activeTab) {
        const {activeChannelInfo, toggleNoteModal, t } = this.props;
        return (
            <DialogActions>
                {activeTab === 0 ?
                    <Button color="primary"
                            variant={"contained"}
                            disabled={this.state.note === ''}// || !selectedUsers.length
                            onClick={this.sendMyNote.bind(this)}
                    >
                        {t('SENDNOTE')}
                    </Button>
                    : <Button color="primary"
                              variant={"contained"}
                              disabled={
                                  this.state.auto_note_state === activeChannelInfo.autoNote &&
                                  this.state.auto_note === activeChannelInfo.note
                              }
                              onClick={this.updateAutoNote.bind(this)}
                    >
                        {t("DONE")}
                    </Button>
                }
                <Button color="secondary"
                        variant={"contained"}
                        onClick={() => {
                            toggleNoteModal()
                        }}
                >
                    {t('CANCEL')}
                </Button>
            </DialogActions>
        )
    }

    render() {
        const {t} = this.props;
        return (
            <>
                <DialogTitle>
                    {t('NOTE')}
                </DialogTitle>
                <DialogContent>
                    <Tabs
                        variant="fullWidth"
                        value={this.state.activeTab}
                        onChange={this.toggleTab.bind(this)}
                    >
                        <Tab label={t("MANUAL_NOTE")}/>
                        <Tab label={t("AUTO_NOTE")}/>
                    </Tabs>
                    <TabPanel value={this.state.activeTab} index={this.state.activeTab}>
                        {this.renderTabContent(this.state.activeTab)}
                    </TabPanel>
                </DialogContent>
                {this.renderFooter(this.state.activeTab)}
            </>
        );
    }
}

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

export default class PaneHeader extends React.Component {

    constructor(props) {
        super(props);
        const {channels, activeChannel} = this.props;
        let activeChannelInfo = _.filter(channels && channels.data, {id: activeChannel})[0];
        this.state = {
            showNotiDialog: false,
            showNoteDialog: false,
            notification: activeChannelInfo && activeChannelInfo.notification ? activeChannelInfo.notification : '',
            selectUsers: [],
            changeSetModalState : false,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    showNotiDialog() {
        this.setState({
            showNotiDialog: true,
        })
    }

    showNoteDialog() {
        this.setState({
            showNoteDialog: !this.state.showNoteDialog,
        })
    }

    handleChange(e) {
        let value = e.target.value;
        if (e.target.name === 'notification') {
            this.setState({notification: value})
        } else if (e.target.name === 'note') {
            this.setState({note: value})
        } else if (e.target.name === 'auto_note') {
            this.setState({auto_note: value})
        }
    }

    changeNotification() {
        const channel_id = this.props.activeChannel;
        const notification = this.state.notification;
        dataService.sendSocket('changeNotification', {channel_id: channel_id, notification: notification});
        this.props.dispatch(actions.changeNotification(channel_id, notification));
        this.setState({
            showNotiDialog: false
        })
    }

    doLike(){
        const {activeChannel, mi, channels, updateChannelInfo} = this.props;
        let activeChannelInfo = _.filter(channels.data, {id: activeChannel})[0];
        updateChannelInfo(activeChannel, {nLike: activeChannelInfo.nLike + 1});
        dataService.sendSocket('likeLive', {channel_id: activeChannel, user_id: mi.id});
    }

    funcChangeRoomSet() {
        this.setState({changeSetModalState:!this.state.changeSetModalState});
    }

    funcUpdateSetting(info, channel_id) {
        dataService.updateDbField('channel', channel_id, {id:channel_id}, info)
            .then((res) => {
                this.funcChangeRoomSet();
                console.log('channel update success==================', res);
            })
            .catch((err) => {
                console.log('channel update Error===================', err)
            });
        console.log(info);
    }

    render() {
        const {channels, activeChannel, onBack, isCreator, mi, t, remainTime} = this.props;
        const {notification,} = this.state;//remainTime,
        let activeChannelInfo = _.filter(channels.data, {id: activeChannel})[0];

        if (!activeChannelInfo) {
            activeChannelInfo = {};
        }
        let channel_others = activeChannelInfo.others;

        return (
            <>
                <Card style={{padding: 0}}>
                    <CardHeader
                        style={{padding: 10}}
                        avatar={
                            <div style={{display: 'flex'}}>
                                <Button onClick={onBack} style={{minWidth:40}} >
                                    <BackIcon style={{fontSize: 32}}/>
                                </Button>
                                <Avatar alt={'room logo'} src={activeChannelInfo.image}
                                        style={{width: 50, height: 50}}/>
                            </div>

                        }
                        action={
                            isCreator ?
                                <div style={{marginTop: 15}}>
                                    <Button variant={"contained"}
                                            color="primary"
                                            onClick={this.funcChangeRoomSet.bind(this)}
                                    >
                                        <FontAwesomeIcon icon={faCogs} style={{fontSize: 20}}/>
                                    </Button>
                                    <Button variant={"contained"} color="primary" style={{marginLeft: 5}}
                                            onClick={() => this.props.showExtendDialog()}
                                    >
                                        {t('CHATEXTEND')}
                                    </Button>
                                    <Button variant={"contained"} color="primary" style={{marginLeft: 5}}
                                            onClick={this.showNotiDialog.bind(this)}
                                    >
                                        {t("NOTICE")}
                                    </Button>
                                    <Button variant={"contained"} color="primary" style={{marginLeft: 5}}
                                            onClick={this.showNoteDialog.bind(this)}
                                    >
                                        {t('NOTE')}
                                    </Button>
                                </div>
                                : <LikeBtn context_t={t}
                                           doLike = {this.doLike.bind(this)}
                                />
                        }
                        title={
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <Typography variant="h6" gutterBottom>
                                    {isMobile ? '' : activeChannelInfo.name}
                                </Typography>
                                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1}}>
                                    {isCreator?
                                        <>
                                            <TimeIcon style={{fontSize: 28, marginLeft: 10}}/>
                                            <Typography variant="body1" style={{marginLeft: 5}} gutterBottom>
                                                {getBriefTimeGap(remainTime * 1000)}
                                            </Typography>
                                            <img alt='' src="../../../static/img/common/point.png" width={25} height={25}
                                                 style={{marginLeft: 10}}/>
                                            <Typography variant="body1" style={{marginLeft: 5}} gutterBottom>
                                                {activeChannelInfo.perPay}
                                            </Typography>
                                        </>
                                        :null
                                    }
                                    <Typography component={'span'} variant="body1" style={{marginLeft: 10}} gutterBottom>
                                        <ChannelStatusBar channel={activeChannelInfo}
                                                          gift={mi.id === activeChannelInfo.creator ? true : false}/>
                                    </Typography>

                                </div>
                            </div>
                        }
                    />
                </Card>
                <NoticeItem {...this.props}/>
                {/*공지모달*/}
                <Dialog open={this.state.showNotiDialog} fullWidth
                        onClose={() => this.setState({showNotiDialog: false})}>
                    <DialogTitle>
                        {t('NOTICE')}
                    </DialogTitle>
                    <DialogContent>
                        <Input
                            fullWidth
                            name='notification'
                            value={notification}
                            onChange={this.handleChange}
                            placeholder={t('NOTICE')}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            variant={"contained"}
                            color="primary"
                            disabled={this.state.notification === activeChannelInfo.notification}
                            onClick={this.changeNotification.bind(this)}
                        >
                            {t('DONE')}
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => this.setState({showNotiDialog: false})}
                        >
                            {t('CANCEL')}
                        </Button>
                    </DialogActions>
                </Dialog>
                {/*쪽지모달*/}
                <Dialog open={this.state.showNoteDialog} onClose={() => this.setState({showNoteDialog: false})}
                        fullWidth>
                    <NoteModalContent
                        {...this.props}
                        activeChannelInfo={activeChannelInfo}
                        placeHolderStr={t("INPUT_NOTE_CONTENT")}
                        funcInputChange={this.handleChange.bind(this)}
                        // funcSelectAllUser={this.selectAllUser.bind(this)}
                        // funcSelectUser={this.selectUser.bind(this)}
                        selectedUsers={channel_others}//this.state.selectUsers
                        toggleNoteModal={this.showNoteDialog.bind(this)}
                    />
                </Dialog>
                <Dialog open={this.state.changeSetModalState}
                        onClose={() => this.funcChangeRoomSet()}
                        maxWidth='lg'
                        fullWidth>
                    <CreateChannel
                        {...this.props}
                        default_info={activeChannelInfo}
                        createBtnState={false}
                        createChannel={this.funcUpdateSetting.bind(this)}
                        cancelCreateChannel={this.funcChangeRoomSet.bind(this)}
                    />
                </Dialog>
            </>

        );
    }
}
