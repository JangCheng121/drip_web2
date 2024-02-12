/**
 * Chatting Pane
 * */

import React from "react";
import PaneHeader from "./PaneHeader";
import PaneFooter from "./PaneFooter";
import * as actions from "../../../redux/modules/chat/actions/actions"
import {httpReq} from "../../../model/Req";
import {connect} from "react-redux";
import Card from "@material-ui/core/Card/index";
import * as CONST from "../../../model/Const";
import _ from "lodash";
import {config} from "../../../config/config";
import Grid from "@material-ui/core/Grid";
import RtmpPublisher from "./RtmpPublisher";
import RtmpPlayer from "./RtmpPlayer";
import Button from "@material-ui/core/Button";
import ContainedTabs from "../../../components/ContainedTabs";
import AlertModal from "../../../components/AlertModal";
import ListItem from "@material-ui/core/ListItem";
import MessageItem from "./MessageItem";
import UserList from "../../../components/UserList";
import GiftList from "./GiftList";
import List from "@material-ui/core/List";
import {isMobile} from 'react-device-detect';
import {dataService} from "../../../model/DataService";
import '../../../static/css/chat.css';
import '../../../static/css/bootstrap/bootstrap-grid.min.css';

let vm = null;
class Index extends React.Component {

    constructor(props) {
        super(props);
        vm = this;
        this.state = {
            presentData: [],
            activeTab: 0,
            rtmpPublisher_state : false,
            loginModalState: false,
        }
        // this.props.dispatch(actions.fetchMessages());
        this.props.dispatch(actions.initMessage(props.activeChannel));
        this.loadPresentData();
    }

    componentDidMount() {
        const {activeChannel, channels, mi, t, updateChannelUser} = this.props;
        let activeChannelInfo = _.filter(channels && channels.data, {id: activeChannel})[0];
        if (activeChannelInfo && mi.id !== activeChannelInfo.creator) {//열람자는 방에 들어오면서 join 신호를 보낸다...
            dataService.sendSocket('joinChannel', {channel_id:activeChannel, user_id:mi.id});
            updateChannelUser({channel_id:activeChannel, user_id:mi.id, isAdd:true})
        }
    }

    componentDidUpdate() {
        const messageList = this.refs.messageList;
        if (!messageList) {
            return;
        }
        messageList.scrollTop = messageList.scrollHeight;
        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(event, index) {
        this.setState({
            activeTab: index
        })
    }

    loadPresentData() {
        httpReq('/api/gift', 'get').then(
            res => {
                if (!res) return;
                else {
                    this.setState({
                        presentData: res
                    });
                }
            }, err => {
                console.log(err);
            })
    }

    sendMessage(type, send_data) {
        const {activeChannel, channels, mode, updateChannelInfo} = this.props;
        let activeChannelInfo = _.find(channels && channels.data, {id: activeChannel});
        let {presentData} = this.state;

        this.props.dispatch(actions.sendMessage(type, send_data, mode));
        if (type === CONST.CHAT_CONTENT_PRESENT) {
            let gift_data = _.find(presentData, {id: send_data.data.gift_id});
            updateChannelInfo(activeChannel, {nLike: activeChannelInfo.nLike + gift_data.price * send_data.data.cnt})
        }
    }




    rtmpPublisher_state_change(return_data) {
        if (return_data.result==='ok') {
            vm.setState({rtmpPublisher_state:!vm.state.rtmpPublisher_state});
        }
    }

    startLive() {
        const {activeChannel, mi} = this.props;
        dataService.sendSocket('startChannel', {channel_id:activeChannel, user_id:mi.id}, this.rtmpPublisher_state_change);
        dataService.sendSocket('pauseChannel', {channel_id:activeChannel, isPause:false});
    }
    stopLive() {
        console.log("PaneBody.stoplive/////////////////////////");
        const {activeChannel} = this.props;
        dataService.sendSocket('pauseChannel', {channel_id:activeChannel, isPause:true});
        vm.rtmpPublisher_state_change({result:'ok'})
    }

    setLoginModalState() {
        this.setState({loginModalState:!this.state.loginModalState})
    }

    renderPanel(index) {
        const {activeChannel, messages, channels, mi, updateChannelInfo} = this.props;
        const channelMessages = _.filter(messages, {channel_id: activeChannel});
        const channelGiftHistory = _.filter(messages, {channel_id:activeChannel, type:CONST.CHAT_CONTENT_PRESENT});
        let activeChannelInfo = _.filter(channels && channels.data, {id: activeChannel})[0];

        let content;

        if (index === 0) {//messageList
            content = channelMessages.map((message, index) => (
                <ListItem key={index}>
                    <MessageItem message={message} {...this.props}
                                 activeChannelInfo={activeChannelInfo}
                                 key={message.id}/>
                </ListItem>
            ))
        } else if (index === 1) {
            content = <UserList t={this.props.t}
                                activeChannelInfo={activeChannelInfo}
                                mi={mi}
                                updateChannelInfo={updateChannelInfo}
                                toggleLoginModal={this.setLoginModalState.bind(this)}
            />
        } else if (index === 2) {//giftList
            content =
                <GiftList
                    {...this.props}
                    activeChannelInfo={activeChannelInfo}
                />
        }
        return (
            <List id="ListItemContent" subheader={<li/>} style={{overflow: 'auto', height: isMobile ? window.innerHeight - 493 : 600}}>
                <li style={{backgroundColor: 'inherit'}}>
                    <ul style={{backgroundColor: 'white', padding: 0}}>
                        {content}
                    </ul>
                </li>
            </List>
        )
    }

    renderPaneBody() {
        const {activeChannel, messages, channels, mi, t} = this.props;
        const {activeTab} = this.state;
        const channelMessages = _.filter(messages, {channel_id: activeChannel});
        let activeChannelInfo = _.filter(channels && channels.data, {id: activeChannel})[0];
        if (!channelMessages || !activeChannelInfo) {
            return null;
        }
        const rtmpUrl = (activeChannelInfo.streamKey && activeChannelInfo.streamKey.toString().indexOf('http') === 0) ? activeChannelInfo.streamKey : config.rtmpUrl + '/' + activeChannelInfo.streamKey;
        return (
            <>
                <Grid container wrap={'wrap'} justify={'flex-start'}>
                    <Grid item sm={8} xs={12} style={{maxHeight:720}} className={'d-flex flex-column'}>
                        <div style={{flex: 1, height: '100%'}}>
                            <RtmpPlayer streamKey={activeChannelInfo.streamKey}
                                        channel={activeChannelInfo}
                            />
                            {activeChannelInfo.isPause ?
                                <div style={{
                                    width:'100%',
                                    height:'100%',
                                    position:"absolute",
                                    backgroundColor:"rgba(157,157,157,0.42)",
                                    zIndex:2}}
                                >
                                            <span style={{position:"absolute", top:'50%', left:'50%', marginRight:'-50%', transform: 'translate(-50%, -50%)' }}>
                                                {t("LIVE_PAUSE")}
                                            </span>
                                </div>
                                :null
                            }
                        </div>
                        {/*{*/}
                        {/*    mi.id === activeChannelInfo.creator ?*/}
                        {/*        <RtmpPublisher //createLive={createLive} exitLive={exitLive}*/}
                        {/*            streamKey={activeChannelInfo.streamKey}*/}
                        {/*            startLive={this.startLive.bind(this)}*/}
                        {/*            stopLive={this.stopLive.bind(this)}*/}
                        {/*            start_state={this.state.rtmpPublisher_state}*/}
                        {/*        />*/}
                        {/*        :*/}
                        {/*        <div style={{display:"flex", position:"relative", height:'90%'}}>*/}
                        {/*            <RtmpPlayer streamKey={activeChannelInfo.streamKey}*/}
                        {/*                        channel={activeChannelInfo}*/}
                        {/*            />*/}
                        {/*            {activeChannelInfo.isPause ?*/}
                        {/*                <div style={{*/}
                        {/*                    width:'100%',*/}
                        {/*                    height:'100%',*/}
                        {/*                    position:"absolute",*/}
                        {/*                    backgroundColor:"rgba(157,157,157,0.42)",*/}
                        {/*                    zIndex:2}}*/}
                        {/*                >*/}
                        {/*                    <span style={{position:"absolute", top:'50%', left:'50%', marginRight:'-50%', transform: 'translate(-50%, -50%)' }}>*/}
                        {/*                        {t("LIVE_PAUSE")}*/}
                        {/*                    </span>*/}
                        {/*                </div>*/}
                        {/*                :null*/}
                        {/*            }*/}
                        {/*        </div>*/}
                        {/*}*/}

                        {
                            mi.id === activeChannelInfo.creator &&
                            <div className={'chat-addition-container'}>
                                <div className={'chat-actions'}>
                                {
                                    !this.state.rtmpPublisher_state ?
                                        <Button variant={'contained'} onClick={() => this.startLive()} color="primary">{t("LIVE_START")}</Button> :
                                        <Button variant={'contained'} onClick={() => this.stopLive()} color="primary">{t("LIVE_STOP")}</Button>
                                }
                                </div>
                                <div className={'chat-server-address'}>
                                    <strong>{t("SERVER_ADDRESS")}:</strong> {rtmpUrl}
                                </div>
                                <div>
                                    <a href={'https://obsproject.com/download'} target={'_blank'}>{t("OBS_PROGRAM")}</a>
                                </div>
                            </div>
                        }

                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <ContainedTabs
                            style={{alignSelf: 'flex-start', padding: '0 10px'}}
                            tabs={[
                                {label: t('CHATTING')},
                                {label: t('ONLINE_MEMBER')},
                                {label: t('GIFT')}
                            ]}
                            value={activeTab}
                            onChange={(e, i) => this.changeTab(e, i)}
                            panel={this.renderPanel(activeTab)}
                        />
                        <PaneFooter {...this.props}
                                    presentData={this.state.presentData}
                                    sendMessage={this.sendMessage.bind(this)}
                                    showNotice={this.props.showNotice}
                        />
                    </Grid>
                </Grid>
                <AlertModal {...this.props}
                            modalStatus={this.state.loginModalState}
                            goStatus={'login'}
                            toggleFunc={()=>this.setLoginModalState()}
                            alertStr={t('LOGINWARNING')}
                            btnOkStr={t('LOGIN')}
                />
            </>
        );
    }

    render() {
        const {showNotice, mode} = this.props;
        if (mode === 'live') {
            return (
                <div>
                    <PaneHeader {...this.props}/>
                    <>
                        {/*<PaneBody {...this.props} presentData={this.state.presentData}/>*/}
                        {this.renderPaneBody()}
                        {/*<div className='p-0' style={{*/}
                        {/*    position: "sticky",*/}
                        {/*    width: '100%',*/}
                        {/*    bottom: 0,*/}
                        {/*    zIndex: 3,*/}
                        {/*    flexDirection: 'column',*/}
                        {/*    display: 'flex'*/}
                        {/*}}>*/}
                        {/*    <PaneFooter {...this.props}*/}
                        {/*                presentData={this.state.presentData}*/}
                        {/*                sendMessage={this.sendMessage.bind(this)}*/}
                        {/*                showNotice={showNotice}*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </>
                </div>
            );
        } else {
            return (
                <Card style={{marginLeft: 10, marginRight: 10}}>
                    {/*<PaneBody {...this.props}/>*/}
                    {this.renderPaneBody()}
                    {/*<PaneFooter {...this.props}*/}
                    {/*            presentData={this.state.presentData}*/}
                    {/*            sendMessage={this.sendMessage.bind(this)}*/}
                    {/*            showNotice={showNotice}*/}
                    {/*/>*/}
                </Card>
            );
        }

    }
}


function mapStateToProps(state) {
    return {
        messages: state.chat.messages.data,
        channels: state.chat.channels,
        activeChannel: state.chat.channels.activeChannel,
        mi: state.system.mi,
        users: state.users,
    }
}

export default connect(mapStateToProps)(Index)
