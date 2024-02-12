/**
 * Pane Footer
 * */

import React from "react";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grid from '@material-ui/core/Grid'
import SendIcon from '@material-ui/icons/Send'
import EmojiIcon from '@material-ui/icons/Mood'
import {NimblePicker} from "emoji-mart";
import data from "emoji-mart/data/messenger";
import 'emoji-mart/css/emoji-mart.css'
import * as CONST from "../../../model/Const";
import {dataService} from "../../../model/DataService";
import {getStaticServerUrl} from "../../../model/Req";
import GiftBar from "./GiftBar";
import _ from "lodash";
// import AddIcon from '@material-ui/icons/AddCircleOutline'

export default class PaneFooter extends React.Component {

    constructor(props, context) {
        super(props, context);
        const {t} = props;
        this.state = {
            text: '',
            emojiShow: false,
            onSendState: false,
            emojiCategories: {
                categories: {
                    recent: t('RECENT'),
                    people: t('PEOPLE'),
                    nature: t('NATURE'),
                    foods: t('FOODS'),
                    activity: t('ACTIVITY'),
                    places: t('PLACES'),
                    objects: t('OBJECTS'),
                    symbols: t('SYMBOLS'),
                    flags: t('FLAGS'),
                }
            }
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick);
    }

    handleClickOutSide(e) {
        if (this.emojiPanel_modal && this.emojiPanel_modal.contains(e.target)) return;
        this.setState({emojiShow: false})
    }

    handleSubmit(event) {
        const key = event.key;
        if (key === 'Enter' && this.state.text.length) {
            event.preventDefault();
            this.sendMessage(CONST.CHAT_CONTENT_TEXT, this.state.text);
            this.setState({
                onSendState: false,
                text: ''
            })
        }
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
        if (event.target.value.length > 0) {
            this.setState({onSendState: true});
        } else {
            this.setState({onSendState: false});
        }
    }

    onEmoji(emoji) {
        let text = this.state.text + emoji.native;
        this.setState({
            text: text,
            onSendState: true,
        });
    }

    async onSelectFile(e) {
        const {mi, showNotice} = this.props;
        if (!mi.member) {
            showNotice('login');
            return;
        }
        let file = this.input.files[0];
        if (!file) {
            return;
        }
        let type = '';
        let contentType;
        if (file.type)
            type = dataService.getMediaType(file.type);
        if (!type) {
            return;
        }
        if (type === 'image') contentType = CONST.CHAT_CONTENT_IMAGE;
        else if (type === 'video') contentType = CONST.CHAT_CONTENT_VIDEO;
        else if (type === 'audio') contentType = CONST.CHAT_CONTENT_AUDIO;
        else contentType = CONST.CHAT_CONTENT_OTHER;
        let progressFunc = function (progress) {

        }
        const filename = dataService.getUniqueFileName();
        let upResult = await dataService.uploadFile(type, 'chat', file, filename, progressFunc);
        if (upResult && !upResult.fname) {
            return;
        } else {
            // let content = {data:`${getServerUrl()}/${upResult.fname}`}
            this.sendMessage(contentType, `${getStaticServerUrl()}/${upResult.fname}`)
        }
    }

    sendMessage(type, data) {
        const {mi, showNotice, sendMessage, activeChannel, channels, setAppModalState} = this.props;
        if (!mi.member) {
            showNotice('login');
            return;
        }
        let activeChannelInfo = _.filter(channels && channels.data, {id: activeChannel})[0];
        let others = activeChannelInfo && activeChannelInfo.others;
        let isChatAllow = (_.find(others, {user_id:mi.id})&&_.find(others, {user_id:mi.id}).allow) || activeChannelInfo.creator === mi.id;
        if (isChatAllow) {
            sendMessage(type, data);
        } else {
            setAppModalState&&setAppModalState('alert', 'CHATUNABLE');
        }
        this.setState({text: '', onSendState: false});
    }

    render() {
        const {text} = this.state;
        const {activeChannel, channels, mi, t} = this.props;
        let activeChannelInfo = _.filter(channels && channels.data, {id: activeChannel})[0];
        if ( !activeChannelInfo) {
            return null;
        }
        const isCreator = activeChannelInfo.creator === mi.id;
        return (
            <Card style={{padding: 5}}>
                    <Grid container wrap='wrap' justify='flex-start'>
                        {isCreator ? null :
                            <Grid item xs={12}>
                                <GiftBar {...this.props}/>
                            </Grid>
                        }
                        <Grid item sm={12} style={{display:'flex', alignItems:'center', paddingLeft:10}}>
                            <TextField
                                ref="messageComposer"
                                name="message"
                                placeholder={t("INPUT")}
                                value={text}
                                style={{flex: 1}}
                                onChange={this.handleChange.bind(this)}
                                onKeyPress={this.handleSubmit.bind(this)}
                            />
                            <ClickAwayListener onClickAway={this.handleClickOutSide.bind(this)}>
                                <Button
                                    ref={node => this.emoji = node}
                                    onClick={() => this.setState({emojiShow: true})}
                                >
                                    <EmojiIcon style={{fontSize: 32}}/>
                                </Button>
                            </ClickAwayListener>
                            {/*{!this.state.onSendState ?
                                <div>
                                    <label htmlFor="upload"
                                           style={{display: 'flex', alignItems: 'center', marginRight: 5}}>
                                        <AddIcon style={{fontSize: 32, cursor: 'pointer'}}/>
                                    </label>
                                    <input
                                        ref={e => this.input = e}
                                        type="file"
                                        id="upload"
                                        name="file"
                                        multiple={false}
                                        style={{display: 'none'}}
                                        onChange={this.onSelectFile.bind(this)}
                                    />
                                </div>
                                :*/}
                                <Button disabled={!this.state.onSendState} onClick={() => this.sendMessage(CONST.CHAT_CONTENT_TEXT, text)}>
                                    <SendIcon style={{fontSize: 32}}/>
                                </Button>
                            {/*}*/}
                        </Grid>
                    </Grid>

                {this.state.emojiShow ?
                    <div style={{position: 'absolute', bottom: 70, right: 0}} ref={node => this.emojiPanel_modal = node}>
                        <NimblePicker
                            set='messenger'
                            data={data}
                            onClick={this.onEmoji.bind(this)}
                            i18n={this.state.emojiCategories}
                            name='emojiInput'
                        />
                    </div> : null}
            </Card>
        );
    }
}
