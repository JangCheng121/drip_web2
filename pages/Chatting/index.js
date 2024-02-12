import React, { Component } from 'react';
import {connect} from "react-redux";
import * as Contents from "../../redux/modules/contents";
import {withTranslation} from '../../i18n';
import PropTypes from "prop-types";
import ChattingPane from "../Chatting/chattingPane";
import * as actions from "../../redux/modules/chat/actions/actions";
import * as CONST from "../../model/Const";
import * as System from '../../redux/modules/system';
import {dataService} from "../../model/DataService";
import Warning from "../../components/Warning";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Spinner from "../../components/Spinner";
import _ from "lodash";
import {Router} from "../../server/pageRoutes";
import AlertModal from "../../components/AlertModal";
import * as Tools from "../../lib/tool";
import {getBriefTimeGap} from "../../lib/tool";

class Chatting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noticeName: '',
            noticeContent: '',
            channelName: '',
            delayTime: 60,
            delayPoint: 500,
            activeChannelId: -1,
            delayIndex: 0,
            alertModalState: false,

            finishModalState: false,
            finishReason: props.t('LIVERESULT'),
            liveRank: 1,
        }
        this.openFinishModal = this.openFinishModal.bind(this);
        dataService.openLiveFinishModal = this.openFinishModal;
    }

    componentDidMount() {
        window.addEventListener('onpopstate', this.funcBrowserBack.bind(this));

        const {channels, activeChannel, mi} = this.props;
        let activeChannelInfo = _.filter(channels.data, {id: activeChannel})[0];

        if (!activeChannelInfo) {
            return;
        }
        const isCreator = activeChannelInfo.creator === mi.id ? true : false;
        if (isCreator) {
            if (!this.timer) {
                this.remainTime = (activeChannelInfo.time?activeChannelInfo.time:0 + activeChannelInfo.etime?activeChannelInfo.etime:0 - activeChannelInfo.timeCount?activeChannelInfo.timeCount:0) * 60;
                this.timeCount = activeChannelInfo.timeCount;
                this.timer = setInterval(function (that) {
                    that.remainTime--;
                    that.timeCount++;
                    that.setState({
                        remainTime: that.remainTime
                    });
                    if (that.state.remainTime <= 0) {
                        clearInterval(that.timer);
                        that.timer = null;
                    }
                }, 1000, this);
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener('onpopstate', this.funcBrowserBack.bind(this));
        clearInterval(this.timer);
        dataService.openLiveFinishModal = null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {channels} = this.props;
        if (channels.willExpire) {
            setTimeout(() => {
                this.closeExtendDialog();
            }, 10000);
        }
    }

    openFinishModal(channel_id, type, reason) {
        const {channels, activeChannel, mi, t} = this.props;
        if (channel_id !== activeChannel) return;
        let activeChannelInfo = _.find(channels.data, {id: channel_id});
        let is_creator = activeChannelInfo && activeChannelInfo.creator && activeChannelInfo.creator===mi.id;
        let live_rank = _.findIndex(_.sortBy(channels&&channels.data?channels.data:[], ['nLike']).reverse(), {id:channel_id}) + 1;
        let finish_reason_str =
            is_creator ?
                type === CONST.CHANNEL_STOP_EXPIRE ?
                    t("CHANNEL_STOP_EXPIRE") :
                    type === CONST.CHANNEL_STOP_POINT ?
                        t("CHANNEL_STOP_POINT") :
                        type === CONST.CHANNEL_STOP_ADMIN ?
                            t('CHANNEL_STOP_ADMIN', {reason: t('REASON_' + reason)})
                            : t("LIVERESULT")
                : t("LIVERESULT");
        this.setState({
            finishModalState: true,
            finishReason: finish_reason_str,
            liveRank: live_rank,
        });
    }
    closeFinishModal() {
        const {removeChannel} = this.props;
        this.setState({finishModalState:false});
        this.onBack();
        removeChannel();
    }

    funcBrowserBack() {
        console.log('click browser back button===========================');
    }

    showExtendDialog() {
        // this.remainTime = remainTime;
        const {activeChannel, channelWillExpire} = this.props;
        channelWillExpire(activeChannel);
    }

    onBack() {
        const {channels, activeChannel, mi, updateChannelUser, changeChannel, channelExpired} = this.props;
        let activeChannelInfo = _.filter(channels.data, {id: activeChannel})[0];
        const isCreator = activeChannelInfo&&activeChannelInfo.creator === mi.id;
        clearInterval(this.timer);
        this.timer = null;
        if (activeChannel !== CONST.CUSTOM_SERVICE_CHANNEL) {
            dataService.sendSocket('leaveChannel', {channel_id: activeChannel, user_id: mi.id, type:'exit'});
            updateChannelUser({channel_id: activeChannel, user_id: mi.id, isAdd: false});
        }
        changeChannel(CONST.DEFAULT_ACTIVE_CHANNEL);
        if (isCreator) {//방 창조자일 때 방에서 나가면서 방을 stop...
            dataService.sendSocket('stopChannel', {channel_id:activeChannel, type:'exit'});
            channelExpired(activeChannel);
        }
        Router && Router.back();
    }

    showNotice(name, isCreator, data = '') {
        const {t} = this.props;
        let content = '';
        if (name === 'login') {
            content = t("LOGINWARNING");
        } else if (name === 'expired') {
            content = t("ROOMEXPIREDUSER");
            if (isCreator) {
                content = t("ROOMEXPIREDCREATOR");
            }
        } else if (name === 'point') {
            content = t("POINTNOTI");
        } else if (name === 'viewConfirm') {
            if (data.type === CONST.CHAT_ROOM_FREE) {
                content = t('CHATJOINFREE',{point:data.perPay});
            } else if (data.type === CONST.CHAT_ROOM_PAY) {
                content = t('CHATJOINPAY' ,{point:data.perPay});
            } else if (data.type === CONST.CHAT_ROOM_TIME) {
                content = t('CHATJOINTIME' ,{point:data.perPay});
            }

        }
        this.setState({
            noticeName: name,
            noticeContent: content,
            activeChannelId: data.id,
        })
    }

    handleChange(e) {
        let value = e.target.value;
        if (e.target.name === 'delay') {
            const delayData = this.props.setting.data.chat_delay_point[value]
            this.setState({
                delayTime: delayData.time,
                delayPoint: delayData.point,
                delayIndex: parseInt(value)
            })
        } else if (e.target.name === 'notification') {
            this.setState({notification: value})
        } else if (e.target.name === 'note') {
            this.setState({note: value})
        }
    }

    extendChannel(channel_id) {
        const {mi, channels, extendChannel, doIncreasePoint} = this.props;
        let send_data = {
            setting_id: this.state.delayIndex,
            channel_id: channel_id
        };
        if (mi.point < this.state.delayPoint) {
            this.showNotice('point', true);
            return;
        }
        let channel = _.filter(channels.data, {id: channel_id})[0];
        this.remainTime = this.remainTime + (this.state.delayTime * 60);
        dataService.sendSocket('extendChannel', send_data);
        extendChannel({
            delayTime: this.state.delayTime,
            delayPoint: this.state.delayPoint,
            channel_id: channel_id
        });
        doIncreasePoint(this.state.delayPoint, false);
        this.closeExtendDialog();
    }

    closeExtendDialog() {
        this.props.initExpireState();
    }

    closeNotice() {
        if (this.state.noticeName==='expired') {
            this.onBack();
        }
        this.setState({
            noticeName: '',
            noticeContent: ''
        })
    }

    funcToggleAlertModal(isCreator=false) {
        const {channels, activeChannel, mi} = this.props;
        let activeChannelInfo, join_users;
        activeChannelInfo = _.filter(channels.data, {id: activeChannel})[0];
        join_users = activeChannelInfo&&activeChannelInfo.others&&activeChannelInfo.others.length;
        if (isCreator && join_users) {
            this.setState({alertModalState: !this.state.alertModalState});
        } else {
            this.onBack();
            // this.openFinishModal(activeChannel, CONST.CHANNEL_STOP_EXIT);
        }
    }

    render () {
        const {channels, activeChannel, mi, setting, t, removeChannel} = this.props;
        const {noticeName, noticeContent, delayTime, delayIndex, remainTime} = this.state;
        let expireChannelInfo, activeChannelInfo, render_extend_time;
        if (!channels.loaded) {
            return <Spinner/>
        }

        activeChannelInfo = _.find(channels.data, {id: activeChannel});
        if (!activeChannelInfo) {
            activeChannelInfo = {};
        }
        const isCreator = activeChannelInfo.creator === mi.id ? true : false;
        if (channels.willExpire) {
            expireChannelInfo = _.find(channels.data, {id: channels.willExpireChannel});
        }

        if (channels.expired) {
            if (channels.expiredChannel === activeChannel) {
                // this.showNotice('expired', isCreator);
                // this.onBack()
            } else {
                // dataService.showNotification('info', t("ROOMEXPIREDNOTI", {channel_id: channels.expiredChannel}));
            }
            // removeChannel();
        }
        return (
            <>
                <ChattingPane {...this.props}
                              showExtendDialog={this.showExtendDialog.bind(this)}
                              onBack={this.funcToggleAlertModal.bind(this, isCreator)}
                              isCreator={isCreator}
                              mode={'live'}
                              showNotice={this.showNotice.bind(this)}
                              remainTime={isCreator&&remainTime}
                />
                <Warning {...this.props}
                         isOpen={noticeName.length > 0}
                         context_t={t}
                         content={noticeContent}
                         close={this.closeNotice.bind(this)}
                         action={noticeName}
                         // onSubmit={this.changeActiveChannel.bind(this)}
                />
                {/*방연장모달*/}
                <Dialog open={channels.willExpire} className="modal-primary">
                    <DialogTitle>
                        {t('CHATEXTEND')}
                    </DialogTitle>
                    <DialogContent>
                        <div className="m-2">
                            <p>
                                <b>{expireChannelInfo && expireChannelInfo.name}</b>
                                {t('CHANNEL_WILL_EXPIRED')}
                            </p>
                            <p>{t('AFTER_EXPIRED')}</p>
                        </div>

                        <FormControl component="fieldset">
                            <RadioGroup
                                name="delay"
                                value={delayIndex.toString()}
                                onChange={this.handleChange.bind(this)}
                            >{
                                setting.data&&setting.data.chat_delay_point&&setting.data.chat_delay_point.map((item, index) => {
                                    return (
                                        <FormControlLabel key={index} value={index.toString()} control={<Radio/>}
                                                          label={item.time + t('MINUTE') + item.point + t('POINT')}/>
                                    )
                                })
                            }
                            </RadioGroup>
                        </FormControl>

                    </DialogContent>
                    <DialogActions>
                        <Button
                            color="secondary"
                            onClick={this.extendChannel.bind(this, activeChannel)}
                            disabled={delayTime === 0 ? true : false}
                        >
                            {t("CHATEXTEND")}
                        </Button>
                        <Button
                            color="primary"
                            onClick={this.closeExtendDialog.bind(this)}>
                            {t('NO')}
                        </Button>
                    </DialogActions>
                </Dialog>
                <AlertModal {...this.props}
                            modalStatus={this.state.alertModalState}
                            goStatus={'page'}
                            toggleFunc={this.funcToggleAlertModal.bind(this, isCreator)}
                            alertStr={t('CLOSE_LIVE_ALERT', {user_cnt:activeChannelInfo&&activeChannelInfo.others&&activeChannelInfo.others.length})}
                            btnOkStr={t('DONE')}
                            funcBtnOkCallback={this.openFinishModal.bind(this, activeChannel, CONST.CHANNEL_STOP_EXIT)}
                />

                <Dialog open={this.state.finishModalState} className="modal-primary" fullWidth>
                    <DialogTitle style={{justifyContent:"center", display:"flex"}}>
                        <div style={{flexDirection:"column", display:"flex", justifyContent:"center", textAlign:"center"}}>
                            {/*<img src={activeChannelInfo.image} style={{borderRadius:'50%', margin:"auto"}} width={100}/>*/}
                            <div>{activeChannelInfo.name}</div>
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <h2 style={{textAlign:"center"}}>
                            {this.state.finishReason}
                        </h2>
                        <div style={{
                                borderBottom:'1px solid #6d6d6d',
                                borderTop:'1px solid #6d6d6d',
                                display:"flex",
                                flexDirection:"row",
                                justifyContent:"space-between",
                                textAlign:"center"
                            }}
                        >
                            <div>
                                <p>{activeChannelInfo&&activeChannelInfo.others&&activeChannelInfo.others.length}</p>
                                <p>{t('VISITOR')}</p>
                            </div>
                            <div>
                                <p>{activeChannelInfo&&activeChannelInfo.nLike?Tools.abbrNum(activeChannelInfo.nLike):123}</p>
                                <p>{t('LIKES')}</p>
                            </div>
                            <div>
                                <p>{getBriefTimeGap((new Date() - new Date(activeChannelInfo.ctime)))}</p>
                                <p>{t('LIVETIME')}</p>
                            </div>
                        </div>
                        <p style={{textAlign:"center", fontSize:20}}>{t('LIVERANK', {rank:this.state.liveRank})}</p>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            color="primary"
                            onClick={this.closeFinishModal.bind(this)}>
                            {t('DONE')}
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    }
}
Chatting.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

Chatting.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('common')(connect(
    state => ({
        categories: state.categories.chat,
        messages: state.chat.messages.data,
        channels: state.chat.channels,
        activeChannel: state.chat.channels.activeChannel,
        mi: state.system.mi,
        users: state.users,
        setting: state.system.setting,
    }),
    dispatch => ({
        doShowContent: (index) => dispatch(Contents.doViewContentAsync(index)),
        updateChannelUser: (data) => dispatch(actions.updateChannelUser(data)),
        changeChannel: () => dispatch(actions.changeChannel(CONST.DEFAULT_ACTIVE_CHANNEL)),
        removeChannel: () => dispatch(actions.removeChannel()),
        channelWillExpire: (activeChannel) => dispatch(actions.channelWillExpire(activeChannel)),
        extendChannel: (data) => dispatch(actions.extendChannel(data)),
        initExpireState: () => dispatch(actions.initExpireState()),
        doIncreasePoint: (point, isAdd) => dispatch(System.doIncreasePoint(point, isAdd)),
        channelExpired: (channel_id) => dispatch(actions.channelExpired(channel_id)),
        updateChannelInfo: (channel_id, data) => dispatch(actions.updateChannelInfo(channel_id, data))
    })
)(Chatting))