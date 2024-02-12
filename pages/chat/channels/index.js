import React from 'react';
import CreateChannel from './CreateChannel'
import _ from "lodash";
import * as CONST from "../../../model/Const";
import * as actions from "../../../redux/modules/chat/actions/actions";
import * as System from "../../../redux/modules/system";
import {dataService} from "../../../model/DataService";
import AlertModal from '../../../components/AlertModal'
import {httpReq} from '../../../model/Req';
import MainTab from "../../../components/MainTab";
import ChannelPane from "./ChannelPane";
import {Router} from "../../../server/pageRoutes";
import {BrowserView, MobileView, isBrowser, isMobile} from "react-device-detect";

export default class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: CONST.CATEGORY_ALL,
            createBtnState: false,
            deleteModalState: false,
        };
        this.delete_channel_id = -1;
        this.changeActiveChannel = this.changeActiveChannel.bind(this);
    }

    componentDidMount() {

        if (this.props.router && this.props.router.query && this.props.router.query.id) {
            const channel_id = this.props.router.query.id;
            this.handleChangeChannel(channel_id);
        }
    }

    toggle(event, newValue) {
        const {mi, showNotice} = this.props;
        if (!mi.member && newValue === CONST.TAB_CREATE_VALUE) {
            showNotice('login');
            return;
        }
        this.setState({
            activeTab: newValue,
        });
    }

    changeActiveChannel(channel_id) {
        const {mi, dispatch, channels} = this.props;
        const channelInfo = _.filter(channels.data, {id: parseInt(channel_id)})[0];
        let sendData = {channel_id: channel_id, user_id: mi.id, isNew: false};

        if (channelInfo.type === CONST.CHAT_ROOM_PAY && mi.id !== channelInfo.id) {
            if (mi.channels.indexOf(channelInfo.id) === -1) {
                dispatch(System.setEnterChannel(channelInfo.id, true));
                sendData.isNew = true;
            }
        }
        // dataService.sendSocket('joinChannel', sendData, this.receiveChannelUsers);
        //join 신호는 방에 들어가서 라이브 시작시에 보낸다...
        dispatch(actions.setChannelUsers(channel_id, channelInfo.others));
        dispatch(actions.changeChannel(channel_id));
        Router && Router.pushRoute('/Chatting');
    }

    handleChangeChannel(channel_id) {
        const {mi, channels, showNotice} = this.props;
        const channelInfo = _.filter(channels.data, {id: parseInt(channel_id)})[0];
        if (!channelInfo) {
            return null;
        }
        if (channelInfo.join_enable && (!mi || !mi.member)) {    //(false:모든 유저, true:로그인 유저) 손님도 채팅방에 들어가 볼수는 있다...
            // showNotice('login');
            return;
        }

        if (channelInfo.type === CONST.CHAT_ROOM_PAY && mi.id !== channelInfo.id && mi.point < channelInfo.perPay) {
            showNotice('point', false);
            return;
        }

        if (mi.showChatDialog === false) {
            this.changeActiveChannel(channelInfo.id);
            return;
        }
        if (mi.id !== channelInfo.creator && channelInfo.perPay > 0) {
            showNotice("viewConfirm", false, channelInfo);
        } else if (mi.id === channelInfo.creator || channelInfo.creator === 1 || channelInfo.perPay === 0) {
            this.changeActiveChannel(channelInfo.id);
        }
    }

    receiveCreateChannel(channel) {
        const {dispatch} = this.props;
        if (channel === 'create error') {
            dataService.showNotification('error', t("NETERROR"));
            return;
        }
        dispatch(actions.addChannel(channel));
        this.handleChangeChannel(channel.id);
        this.setState({channelName: '', createBtnState: false});
    }

    createChannel(data, channel_id=-1) {
        const {mi} = this.props;
        let newChannel = {
            others: [],
            private: false,
            creator: mi.id,
        };
        for (let key in data) {
            newChannel[key] = data[key];
        }

        this.setState({createBtnState: true});

        if (channel_id !== -1) {
            dataService.updateDbField('channel', channel_id, {id:channel_id}, newChannel)
                .then((res) => {
                    newChannel.id = channel_id;
                    newChannel.ctime = new Date();
                    this.receiveCreateChannel(newChannel);
                })
                .catch((err) => {
                    console.log('dataService.updateDbField ============error==========', err);
                })
        } else {
            httpReq('/api/channel', 'post', newChannel).then(res => {
                this.receiveCreateChannel(res);
            }, err => {
                console.log('channel Create Error', err);
            })
        }
    }

    funcClickDeleteBtn(channel_id) {
        this.delete_channel_id = channel_id;
        this.funcDeleteModal();
    }

    funcDeleteChannel() {
        if (this.delete_channel_id === -1) return;
        dataService.deletePost(this.delete_channel_id, 'channel')
            .then((res) => {
                let result = res;
            })
            .catch((err) => {
                console.log('delete channel err. Reason=>' + err);
            })
    }

    funcDeleteModal() {
        this.setState({deleteModalState: !this.state.deleteModalState});
    }

    cancelCreateChannel() {
        this.setState({
            activeTab: CONST.CATEGORY_ALL
        })
    }


    renderTabPanel(activeTab) {
        const channels = this.props.channels.data;
        let channelsBuff = _.orderBy(channels, ['others'], ['desc']);
        let content;
        if (activeTab === CONST.TAB_CREATE_VALUE) {
            content = <CreateChannel
                {...this.props}
                createBtnState={this.state.createBtnState}
                createChannel={this.createChannel.bind(this)}
                cancelCreateChannel={this.cancelCreateChannel.bind(this)}
            />;
        } else if (activeTab === CONST.CATEGORY_ALL) {
            content =
                <ChannelPane
                    {...this.props}
                    data={channelsBuff}
                    joinChannel={this.handleChangeChannel.bind(this)}
                    deleteChannel={this.funcClickDeleteBtn.bind(this)}
                />
        } else {
            content =
                <ChannelPane
                    {...this.props}
                    data={channelsBuff.filter(item => item.category_id === activeTab)}
                    joinChannel={this.handleChangeChannel.bind(this)}
                    deleteChannel={this.funcClickDeleteBtn.bind(this)}
                />
        }
        return content;
    }

    render() {

        const {categories, t} = this.props;
        const {activeTab} = this.state;
        return (
            <>
                <MainTab
                    type={'category'}
                    totalstr={t('TOTALTOP')}
                    tabs={categories}
                    value={activeTab}
                    onChange={this.toggle.bind(this)}
                    panel={this.renderTabPanel(activeTab)}
                    btn_add={true && !isMobile}
                />
                <AlertModal {...this.props}
                            modalStatus={this.state.deleteModalState}
                            goStatus={'page'}
                            toggleFunc={this.funcDeleteModal.bind(this)}
                            alertStr={t('CONFIRM_CHANNEL_DELETE')}
                            funcBtnOkCallback={this.funcDeleteChannel.bind(this)}
                            btnOkStr={t("YES")}
                />
            </>
        )
    }
}

