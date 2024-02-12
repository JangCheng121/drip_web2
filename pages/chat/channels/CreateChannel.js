/**
 * Create Channel
 * */
import React, {Component} from 'react';
import {
    Button, TextField, Radio, RadioGroup, FormHelperText, FormControlLabel, FormControl, FormGroup, MenuItem, Select, FormLabel, Grid, Container
} from "@material-ui/core";
import MultiSelect from 'react-select';
import UploadImage from "../../../components/UploadImage";
import * as CONST from '../../../model/Const'
import {getServerUrl, getStaticServerUrl, httpReq} from '../../../model/Req';
import {dataService} from '../../../model/DataService';
import ContainedTabs from "../../../components/ContainedTabs";
import * as Tool from "../../../lib/tool";
import {i18n} from '../../../i18n';
import _lodash from "lodash";
import AlertModal from "../../../components/AlertModal";
import '../../../static/css/widget.css';

export default class CreateChannel extends Component {

    constructor(props, context) {
        super(props, context);
        const {default_info} = props;

        this.state = {
            activeTab: CONST.CHAT_ROOM_FREE,
            channelName: default_info&&default_info.name?default_info.name:'',
            point: default_info&&default_info.point?default_info.point:0,
            notification: default_info&&default_info.notification?default_info.notification:'',
            perPay: default_info&&default_info.perPay?default_info.perPay: 0,
            note: default_info&&default_info.note?default_info.note: '',
            roomType: default_info&&default_info.point?'other': 'free',
            roomLang:default_info&&default_info.lang?default_info.lang:[],
            cnt: default_info&&default_info.cnt?default_info.cnt: 0,
            time: default_info&&default_info.time?default_info.time: 0,
            category_id: default_info&&default_info.category_id?default_info.category_id: 0,
            error: {},
            image: default_info&&default_info.image?default_info.image:this.props.mi.picture,
            imageChanged: false,
            enableUser: default_info&&default_info.join_enable?'login':'total',
            liveType: default_info&&default_info.mode===4?CONST.CHAT_TYPE_AUDIO:CONST.CHAT_TYPE_LIVE,
            channel_history: default_info?default_info:{},
            modalState: false,
            startBtnState: false,
        };

        this.roomLangList = [
            {value: 'all', label: props.t("ROOM_ALL_REGION")},
            {value: 'ko', label: props.t("ROOM_KO_REGION")},
            {value: 'cn', label: props.t("ROOM_CN_REGION")},
            {value: 'en', label: props.t("ROOM_EU_REGION")},
        ];

        this.handleChangeLang = this.handleChangeLang.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderTabPane = this.renderTabPane.bind(this);
        this.validateChannelName = this.validateChannelName.bind(this);
        this.toggle = this.toggle.bind(this);
        this.detectDevice = this.detectDevice.bind(this);
        this.setError = this.setError.bind(this);
        this.resetError = this.resetError.bind(this);
    }

    componentDidMount() {
        const {categories, setting, mi} = this.props;
        this.setState({
            cnt: setting.data.chat_free_cnt,
            time: setting.data.chat_free_time,
            category_id: categories[0].id,
        })
        this.detectDevice();
        if (this.state.channel_history.id === undefined) {
            httpReq('/api/channel', 'get', {filter: {creator: mi.id}})
                .then((res) => {
                    if (res && res.length && res[0].creator) {
                        this.setState({channel_history: res[0]});
                        this.funcToggleModal();
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    async detectDevice() {
        let medias = [];
        let inputDevices = {
            video: [],
            audio: []
        };
        if(navigator.mediaDevices){
            medias = await navigator.mediaDevices.enumerateDevices();
        }
        inputDevices.video = medias.filter(item => item.kind === 'videoinput');
        inputDevices.audio = medias.filter(item => item.kind === 'audioinput');
        let error = {}, errorMessage = {};
        let liveType = this.state.liveType;
        if (!medias.length) {
            this.setError('device');
            liveType = '';
        } else {
            if (!inputDevices.video.length) {
                this.setError('camera');
                liveType = CONST.CHAT_TYPE_AUDIO;
            }
            if (!inputDevices.audio.length) {
                this.setError('audio');
            }
        }
        this.setState({
            liveType: liveType
        })

    }

    funcToggleModal() {
        this.setState({modalState:!this.state.modalState});
    }
    funcUseChannelHistory() {
        let channel_his = this.state.channel_history;

        const roomLang = [];
        if(channel_his.lang) {
            for(let i = 0; i < channel_his.lang.length; i++) {
                const tmp = this.roomLangList.find((v) => v.value === channel_his.lang[i]);
                if(tmp !== undefined) roomLang.push(tmp);
            }
        }
        if (channel_his) {
            this.setState({
                activeTab: channel_his.type,
                channelName: channel_his.name,
                notification: channel_his.notification,
                perPay: channel_his.perPay,
                note: channel_his.note,
                point: channel_his.point,
                roomLang,
                roomType: channel_his.point===0?'free':'other',
                cnt: channel_his.cnt,
                category_id: channel_his.category_id,
                image: channel_his.image,
                enableUser: channel_his.join_enable?'login':'total',
                liveType: channel_his.mode===1?CONST.CHAT_TYPE_LIVE:CONST.CHAT_TYPE_AUDIO,
            })
        }
    }

    toggle(tab) {
        const {setting} = this.props;
        this.setState({
            activeTab: tab,
            cnt: setting.data.chat_free_cnt,
            time: setting.data.chat_free_time,
            point: 0,
            roomType: 'free',
            perPay: 0
        });
    }

    handleChangeLang(langList) {
        this.setState({roomLang: langList});
    }

    handleChange(e) {
        const {setting} = this.props;

        let value = e.target.value;
        if (e.target.name === 'channelName') {
            this.resetError('name')
            if (!this.validateChannelName(value)) {
                this.setError('name');
            }
            this.setState({channelName: value});
        } else if (e.target.name === 'category') {
            this.setState({category_id: value});
        } else if (e.target.name === 'roomType') {
            if (value === 'free') {
                this.setState({
                    cnt: setting.data.chat_free_cnt,
                    time: setting.data.chat_free_time,
                    point: 0,
                    roomType: value
                })
            } else {
                const settingData = setting.data.chat_pay_point[0];
                this.setState({
                    cnt: settingData.cnt,
                    time: settingData.time,
                    point: settingData.point,
                    roomType: value,
                    settingIdx: 0
                })
            }

        } else if (e.target.name === 'setting') {
            const settingData = setting.data.chat_pay_point[value];
            this.setState({
                cnt: settingData.cnt,
                time: settingData.time,
                point: settingData.point,
                settingIdx: value
            })
        } else if (e.target.name === 'perPay') {
            let invalid = !isNaN(value) ? false : true;
            if (!invalid) {
                this.resetError("payPoint")
                if (!Tool.isInteger(value)) {
                    this.setError('payPoint')
                }
                this.setState({perPay: value});
            }
        } else if (e.target.name === 'notification') {
            this.resetError('notification')
            if (value.length > CONST.CHAT_NOTI_MAX_LENGTH) {
                this.setError('notification')
            } else {
                this.setState({notification: value});
            }

        } else if (e.target.name === 'note') {
            this.resetError('note')
            if (value.length > CONST.CHAT_NOTE_MAX_LENGTH) {
                this.setError('note')
            } else {
                this.setState({note: value});
            }

        } else if (e.target.name === 'enableUser') {
            this.setState({
                enableUser: value
            })
        } else if (e.target.name === 'liveType') {
            this.setState({
                liveType: value
            });
        }
    }

    setError(type) {
        const {t} = this.props;
        let error = this.state.error;
        if (type === 'name') {
            error.name = t("CHATROOMNAMEERROR");
        } else if (type === 'upload') {
            error.upload = t("FAIL");
        } else if (type === 'notification') {
            error.notification = t("MAX_WORDS", {word_length:500});
        } else if (type === 'note') {
            error.note = t("MAX_WORDS", {word_length:500});
        } else if (type === 'payPoint') {
            error.payPoint = t('INVALID_COST_FORMAT');
        } else if (type === 'device') {
            error.device = t('NO_LIVE_DEVICE');
        } else if (type === 'camera') {
            error.camera = t('NO_CAMERA_DEVICE');
        } else if (type === 'audio') {
            error.audio = t('NO_AUDIO_DEVICE');
        }
        this.setState({
            error: error
        })
    }

    resetError(type) {
        const error = this.state.error;
        delete error[type];
        this.setState({
            error: error
        })
    }

    onChangeImage(image, changeStatus) {
        if (changeStatus) {
            this.setState({
                image: image,
                imageChanged: true,
            });
        } else {
            this.setState({image: image});
        }
    }

    validateChannelName(name) {
        const channels = this.props.channels.data;
        if (channels.filter(channel => {
            return channel.name === name;
        }).length > 0) {
            return false;
        }
        return true;
    }

    progress(progress) {
        console.log(progress);
    }

    async createChannel() {
        try {
            const {mi} = this.props;
            const {enableUser, channelName, activeTab, category_id, time, cnt, point, notification, perPay, roomLang, note, image, imageChanged, liveType, channel_history} = this.state;
            let channelImage = image;
            if (mi.point < point) {
                this.props.showNotice('point');
                return;
            }

            if (activeTab === CONST.CHAT_ROOM_FREE && perPay && mi.point < CONST.CHAT_POINT_LIMIT) {
                this.props.showNotice('point');
                return;
            }

            this.setState({startBtnState:true});

            if (imageChanged) {
                let file = dataService.dataURLtoFile(channelImage, 'channel.png');
                let channel_image = await dataService.uploadFile('image', 'channel', file, '', this.progress);
                channelImage = getStaticServerUrl()+"/" + channel_image.fname + `?timestemp=${new Date().getTime()}`
                console.log('createChannel image change===========', channelImage)
            }

            let info = {
                name: channelName,
                mode: liveType === 'video' ? 1 : liveType === 'audio' ? 4 : -1,
                type: activeTab,
                category_id: category_id,
                time: time,
                cnt: cnt,
                point: point,
                notification: notification,
                perPay: perPay,
                lang: roomLang.map((v) => v.value),
                autoNote: note.length ? true : false,
                note: note,
                join_enable: enableUser === 'total' ? false : true,
                image: channelImage,
                streamKey: mi.id,
                timeCount: 0,
                nLike: channel_history.nLike?channel_history.nLike:0,
                users: channel_history.users?channel_history.users:[],
                gifts: channel_history.gifts?channel_history.gifts:[],
            };
            if (info.mode === -1) return;//입력장치(camera, audio)가 없으면 창조할수 없다...
            this.props.createChannel(info, channel_history.id ? channel_history.id : -1);
            this.resetState();
        } catch(e) {
            console.log('createChannel err=======', e)
        }
    }

    progress(progress){
        console.log(progress)
    }

    resetState() {
        this.setState({
            error: '',
            channelName: '',
            notification: '',
            perPay: 0,
            startBtnState: false,
        })
    }

    renderError(message) {
        return (
            <FormLabel component="legend" error style={{marginTop: 5}}>
                {message}
            </FormLabel>
        )
    }

    renderTabPane(channelType) {
        const {categories, setting, t} = this.props;
        let language = i18n&&i18n.language?i18n.language:'cn';
        const {channelName, perPay, notification, roomLang, roomType, note, category_id, settingIdx, enableUser, liveType, error, errorMessage} = this.state;
        let freeElemData, payElemData, payString;
        if (channelType === CONST.CHAT_ROOM_FREE) {
            freeElemData = {
                time: setting.data.chat_free_time,
                cnt: setting.data.chat_free_cnt,
                point: 0
            };
            payElemData = setting.data.chat_free_point;
            payString = {
                title: t('PAY_POINT'),
                helperText: t('CHATFREESPECIAL') + '(' + t('CHATFREESPECIALTEXT') + t('CHANNEL_CREAT_LIMIT_POINT', {channel_limit_point:CONST.CHAT_POINT_LIMIT} ) + ')'
            }
        } else if (channelType === CONST.CHAT_ROOM_PAY) {
            freeElemData = {
                time: setting.data.chat_pay_time,
                cnt: setting.data.chat_pay_cnt
            };
            payElemData = setting.data.chat_pay_point;
            payString = {
                title: t('CHATENTERPOINT'),
                helperText: t('CHATENTERPOINTTEXT')
            }
        } else if (channelType === CONST.CHAT_ROOM_TIME) {
            freeElemData = {
                time: setting.data.chat_pay_time,
                cnt: setting.data.chat_pay_cnt
            };
            payElemData = setting.data.chat_pay_point;
            payString = {
                title: t('CHATROOMUSEPOINT'),
                helperText: t('CHATROOMUSEPOINTTEXT')
            }
        }
        return (
            <Grid container justify='flex-start' spacing={1} component={"div"}>
                <Grid className='label_align_c' item sm={2}>
                    {t('CHATROOMNAME')}
                </Grid>
                <Grid item sm={10}>
                    <FormControl component="div" fullWidth={true}>
                        <TextField
                            ref="channelName"
                            type="text"
                            name="channelName"
                            placeholder={t("CHATROOMNAME")}
                            value={channelName}
                            maxLength={18}
                            onChange={this.handleChange}
                            error={error.name}
                        />
                        {this.renderError(error.name)}
                    </FormControl>
                </Grid>
                <Grid item sm={2}>
                    {t('CHANNEL_IMG')}
                </Grid>
                <Grid item sm={10}>
                    <UploadImage default_image={this.state.image} noCamera={error.camera || error.device} onChangeImage={this.onChangeImage.bind(this)}/>
                    {this.renderError(error.name)}
                </Grid>
                <Grid className='label_align_c' item sm={2}>
                    {t('LIVE_TYPE')}
                </Grid>
                <Grid className='label_align_c' item sm={10}>
                    <FormControl component="div" fullWidth={true}>
                        <RadioGroup
                            name="liveType"
                            row
                            value={liveType}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel
                                value={CONST.CHAT_TYPE_LIVE}
                                control={<Radio/>}
                                label={t("VIDEO")}
                                disabled={error.camera || error.device}
                            />
                            <FormControlLabel
                                value={CONST.CHAT_TYPE_AUDIO}
                                control={<Radio/>}
                                label={t("AUDIO")}
                                disabled={error.audio || error.device}
                            />
                        </RadioGroup>
                        {this.renderError(error.device ? error.device : error.camera ? error.camera : error.audio)}
                    </FormControl>
                </Grid>
                <Grid className='label_align_c' item sm={2}>
                    {t('CATEGORY')}
                </Grid>
                <Grid className='label_align_c' item sm={10}>
                    <FormControl component="div" fullWidth={true}>
                        <Select
                            name="category"
                            value={category_id}
                            onChange={this.handleChange}
                            displayEmpty
                        >
                            {categories.map((item, index) => {
                                let render_label = item.trans.length && _lodash.filter(item.trans, {lang: language})[0] ? _lodash.filter(item.trans, {lang: language})[0].str
                                    : item.label;
                                return (
                                    <MenuItem key={index} value={item.id}>{render_label}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Grid>
                {/*방지역*/}
                <Grid className='label_align_c' item sm={2}>
                    {t("CHATROOMREGION")}
                </Grid>
                <Grid item sm={10}>
                    <MultiSelect
                        name={'roomLang'}
                        value={roomLang}
                        options={this.roomLangList}
                        isMulti
                        onChange={this.handleChangeLang}
                    />
                </Grid>

                {/*방류형*/}
                <Grid className='label_align_c' item sm={2}>
                    {t("CHATROOMKIND")}
                </Grid>
                <Grid item sm={10}>
                    <FormGroup row>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="roomType"
                                row
                                value={roomType}
                                onChange={this.handleChange}
                            >
                                <FormControlLabel value="free" control={<Radio/>}
                                                  label={t('ROOM_TYPE_RADIO', {people_cnt:freeElemData.cnt, minute:freeElemData.time})}/>
                                <FormControlLabel value="other" control={<Radio/>} label={t("CHATKINDOTHER")}/>
                            </RadioGroup>
                        </FormControl>
                        {
                            roomType === 'other' ?
                                <FormControl component="div" fullWidth={true}>
                                    <Select
                                        name="setting"
                                        value={settingIdx}
                                        onChange={this.handleChange}
                                    >
                                        {
                                            payElemData.map((item, index) => (
                                                <MenuItem key={index} value={index}>
                                                    {item.cnt}유저 {item.time}분 {item.point}포인트
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl> : null
                        }
                    </FormGroup>
                </Grid>
                {/*입장가능*/}
                <Grid className='label_align_c' item sm={2}>
                    {t("JOIN_ENABLE")}
                </Grid>
                <Grid item sm={10}>
                    <FormControl component="div" fullWidth={true}>
                        <RadioGroup
                            aria-label="gender"
                            name="enableUser"
                            row
                            value={enableUser}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel value="total" control={<Radio/>} label={t('TOTAL_USER')}/>
                            <FormControlLabel value="login" control={<Radio/>} label={t("LOGIN_USER")}/>
                        </RadioGroup>
                    </FormControl>
                </Grid>
                {/*지불포인트*/}
                <Grid title={payString.helperText} className='label_align_c' item sm={2}>
                    {payString.title}
                </Grid>
                <Grid item sm={10}>
                    <FormControl component="div" fullWidth={true}>
                        <TextField
                            title={payString.helperText}
                            type="text"
                            name="perPay"
                            placeholder={"0"}
                            value={perPay}
                            onChange={this.handleChange}
                            error={error.payPoint}
                        />
                    </FormControl>
                    {/*<FormHelperText>{payString.helperText}</FormHelperText>*/}
                    {this.renderError(error.payPoint)}
                </Grid>
                {/*공지*/}
                <Grid item sm={2}>
                    {t('NOTICE')}
                </Grid>
                <Grid item sm={10} component={"div"}>
                    <FormControl component="div" fullWidth={true}>
                        <TextField
                            component={"div"}
                            name="notification"
                            value={notification}
                            multiline
                            rows={2}
                            placeholder={t('INPUT')}
                            variant="outlined"
                            onChange={this.handleChange}
                            error={error.notification}
                        />
                        {this.renderError(error.notification)}
                    </FormControl>
                </Grid>
                {/*자동쪽지*/}
                <Grid item sm={2}>
                    {t('AUTO_NOTE')}
                </Grid>
                <Grid item sm={10} component={"div"}>
                    <FormControl component="div" fullWidth={true}>
                        <TextField
                            component={"div"}
                            name="note"
                            value={note}
                            multiline
                            rows="2"
                            placeholder={t('INPUT_NOTE_CONTENT')}
                            variant="outlined"
                            onChange={this.handleChange}
                            error={error.note}
                        />
                        <FormHelperText/>
                        {this.renderError(error.note)}
                    </FormControl>
                </Grid>
            </Grid>
        )

    }

    createBtnState() {
        const {channelName, error} = this.state;
        const {createBtnState} = this.props;
        const errorList = Object.assign({}, error);
        if(errorList.camera){
            delete errorList['camera']
        }
        if(errorList.audio){
            delete errorList['audio']
        }
        if (!channelName.length || createBtnState || errorList.length) {
            return true;
        }
        return false;
    }

    render() {
        const { point, activeTab} = this.state;
        const {mi, cancelCreateChannel, t} = this.props;


        return (
            <Container>
                <ContainedTabs
                    tabs={[
                        {label: t('CHATFREEROOM'), value: CONST.CHAT_ROOM_FREE},
                        {label: t('CHATPAYROOM'), value: CONST.CHAT_ROOM_PAY},
                        {label: t('CHATTIMEROOM'), value: CONST.CHAT_ROOM_TIME}
                    ]}
                    value={activeTab}
                    panel={this.renderTabPane(activeTab)}
                    onChange={(e, value) => this.toggle(value)}

                />

                {
                    point > 0 ?
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            {mi.point > point ?
                                <p>
                                    {t('PAY_POINT_ALERT', {need_point:point, own_point:mi.point, remain_point:(parseInt(mi.point) - parseInt(point))})}
                                </p>
                                : <p style={{color: '#ff0000'}}>
                                    {t('PAY_POINT_NO_ENOUGH', {need_point:point, own_point:mi.point, require_point:(parseInt(point) - parseInt(mi.point))})}
                                </p>
                            }
                        </div>
                        : null
                }
                <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom:10}}>
                    <Button
                        color="secondary"
                        variant="contained"
                        disabled={this.createBtnState() && !this.state.startBtnState}
                        onClick={this.createChannel.bind(this)}
                    >
                        {this.props.default_info?t('CHANGE'):t('START')}
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        style={{marginLeft: 10}}
                        onClick={cancelCreateChannel}
                    >
                        {t('CANCEL')}
                    </Button>
                </div>
                <AlertModal {...this.props}
                            modalStatus={this.state.modalState}
                            goStatus={'page'}
                            toggleFunc={this.funcToggleModal.bind(this)}
                            alertStr={t('LIVE_SETTING')}
                            btnOkStr={t('YES')}
                            funcBtnOkCallback={this.funcUseChannelHistory.bind(this)}
                />
            </Container>
        );
    }
}
