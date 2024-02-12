import React from "react";
import Channels from "./channels"
import Spinner from "../../components/Spinner"
import Warning from "../../components/Warning"
import {dataService} from "../../model/DataService";
import * as actions from "../../redux/modules/chat/actions/actions";
import * as System from "../../redux/modules/system"
import * as CONST from "../../model/Const"
import _ from "lodash";
import {connect} from "react-redux";
import {withRouter} from "next/router";
import PropTypes from "prop-types";
import {i18n, withTranslation} from "../../i18n";
import {Router} from '../../server/pageRoutes';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noticeName: '',
            noticeContent: '',
            channelName: '',
            delayTime: 0,
            delayPoint: 0,
            activeChannelId: -1,
            delayIndex: 0
        }
        this.currentLanguage = i18n.language;
    }

    componentDidMount() {
        this.props.dispatch(actions.fetchChannels());
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.currentLanguage !== i18n.language) {
            this.currentLanguage = i18n.language;
            this.props.dispatch(actions.fetchChannels());
        }
        return true;
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

    closeNotice() {
        this.setState({
            noticeName: '',
            noticeContent: ''
        })
    }

    closeExtendDialog() {
        this.props.dispatch(actions.initExpireState());
    }

    extendChannel(channel_id) {
        const {dispatch, mi, channels} = this.props;
        let data = {
            delayTime: this.state.delayTime,
            delayPoint: this.state.delayPoint,
            channel_id: channel_id
        };
        if (mi.point < this.state.delayPoint) {
            this.showNotice('point', true);
            return;
        }
        let channel = _.filter(channels.data, {id: channel_id})[0];
        this.remainTime = channel && (channel.time + this.state.delayTime) * 60;
        dataService.sendSocket('extendChannel', data);
        dispatch(actions.extendChannel(data));
        // dispatch(System.doIncreasePoint(this.state.delayPoint, false));
        this.closeExtendDialog();
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

    receiveChannelUsers(channel_id, time, users, msg = 'ok') {
        if (msg !== 'ok' && channel_id !== CONST.CUSTOM_SERVICE_CHANNEL) {
            console.log('receiveChannelUsers channel error');
            return;
        }
        const {dispatch} = this.props;
        dispatch(actions.setChannelUsers(channel_id, users));
        dispatch(actions.changeChannel(channel_id, time));
        Router && Router.pushRoute('Chatting');
    }

    changeActiveChannel() {
        const {mi, dispatch, channels} = this.props;
        const channelInfo = _.filter(channels.data, {id: parseInt(this.state.activeChannelId)})[0];
        let sendData = {channel_id: this.state.activeChannelId, user_id: mi.id, isNew: false};

        if (channelInfo.type === CONST.CHAT_ROOM_PAY && mi.id !== channelInfo.id) {
            if (mi.channels.indexOf(channelInfo.id) === -1) {
                dispatch(System.setEnterChannel(channelInfo.id, true));
                sendData.isNew = true;
            }
        }
        dataService.sendSocket('joinChannel', sendData, this.receiveChannelUsers.bind(this));
    }

    render() {
        const {channels, activeChannel, mi, dispatch, setting, t} = this.props;
        const {noticeName, noticeContent, delayTime, delayIndex} = this.state;
        let expireChannelInfo, activeChannelInfo;
        if (!channels.loaded) {
            return <Spinner/>
        }

        activeChannelInfo = _.filter(channels.data, {id: activeChannel})[0];
        if (!activeChannelInfo) {
            activeChannelInfo = {};
        }
        if (channels.willExpire) {
            expireChannelInfo = _.filter(channels.data, {id: channels.willExpireChannel})[0];
            this.remainTime = expireChannelInfo && expireChannelInfo.time ? expireChannelInfo.time : 0;
        }

        if (channels.expired) {
            dataService.showNotification('info', t("ROOMEXPIREDNOTI", {channel_id: channels.expiredChannel}));
            dispatch(actions.removeChannel());
        }

        return (
            <>
                <Channels
                    {...this.props}
                    showNotice={this.showNotice.bind(this)}
                />
                <Warning {...this.props}
                         isOpen={noticeName.length > 0}
                         context_t={t}
                         content={noticeContent}
                         close={this.closeNotice.bind(this)}
                         action={noticeName}
                         onSubmit={this.changeActiveChannel.bind(this)}
                />
            </>
        );
    }
}
Index.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

Index.propTypes = {
    t: PropTypes.func.isRequired,
};
function mapStateToProps(state) {
    return {
        categories: state.categories.chat,
        messages: state.chat.messages.data,
        channels: state.chat.channels,
        activeChannel: state.chat.channels.activeChannel,
        mi: state.system.mi,
        users: state.users,
        setting: state.system.setting,
    }
}
export default withRouter(withTranslation('common')(connect(mapStateToProps)(Index)));
