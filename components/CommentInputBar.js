import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/SentimentSatisfied';
import DirectionsIcon from '@material-ui/icons/Send';
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots} from "@fortawesome/free-solid-svg-icons";
import {NimblePicker} from "emoji-mart";
import data from "emoji-mart/data/messenger";

class CommentInputBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            commentData : '',
        }
    }

    componentDidMount() {
        const {context_t} = this.props;
        document.addEventListener('click', this.handleOutsideClick.bind(this));
        this.setState({
            emojiCategories:{
                categories: {
                    recent: context_t("RECENT"),
                    people: context_t("PEOPLE"),
                    nature: context_t("NATURE"),
                    foods: context_t("FOODS"),
                    activity: context_t("ACTIVITY"),
                    places: context_t("PLACES"),
                    objects: context_t("OBJECTS"),
                    symbols: context_t("SYMBOLS"),
                    flags: context_t("FLAGS"),
                }
            }
        })

    }
    componentWillUnmount = () => {
        document.removeEventListener('click', this.handleOutsideClick.bind(this));
    };

    changeCommentText(target) {
        this.setState({commentData : target.value});
        this.target = target;
    }

    handleOutsideClick(e) {
        const {context_t} = this.props;
        if (this.emoji_btn && this.emoji_btn.contains(e.target)) {
            this.setState({
                emojiShow: !this.state.emojiShow,
                emojiCategories:{
                    categories: {
                        recent: context_t("RECENT"),
                        people: context_t("PEOPLE"),
                        nature: context_t("NATURE"),
                        foods: context_t("FOODS"),
                        activity: context_t("ACTIVITY"),
                        places: context_t("PLACES"),
                        objects: context_t("OBJECTS"),
                        symbols: context_t("SYMBOLS"),
                        flags: context_t("FLAGS"),
                    }
                }})
        } else if (this.emojiPanel_modal && this.emojiPanel_modal.contains(e.target)) {
            this.setState({
                emojiShow: this.state.emojiShow,
                emojiCategories:{
                    categories: {
                        recent: context_t("RECENT"),
                        people: context_t("PEOPLE"),
                        nature: context_t("NATURE"),
                        foods: context_t("FOODS"),
                        activity: context_t("ACTIVITY"),
                        places: context_t("PLACES"),
                        objects: context_t("OBJECTS"),
                        symbols: context_t("SYMBOLS"),
                        flags: context_t("FLAGS"),
                    }
                }})
        } else {
            this.setState({
                emojiShow: false
            })
        }
    }

    onEmoji(emoji) {
        this.setState({commentData : this.state.commentData + emoji.native});
    }

    sendComment() {
        const {sendComment} = this.props;
        if (this.commentData === '') {
            return;
        }
        sendComment&&sendComment(this.state.commentData);
        this.setState({commentData:''});

    }

    render() {
        const {context_t, placeHolderStr} = this.props;
        return (
            <>
                <Paper style={{display:'flex', alignItems:"center"}}>
                    <IconButton disabled style={{padding:10}} aria-label="menu">
                        <FontAwesomeIcon icon={faCommentDots} />
                    </IconButton>
                    <InputBase
                        onChange={(e) => this.changeCommentText(e.target)}
                        value={this.state.commentData}
                        style={{flex:1, marginLeft:8}}
                        placeholder={placeHolderStr?placeHolderStr:context_t('INPUT')}
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton  ref={node => this.emoji_btn = node} style={{padding:10}} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <Divider style={{width:1, height:28, margin:5}} />
                    <IconButton onClick={()=>this.sendComment()} color="primary" style={{padding:10}} aria-label="directions">
                        <DirectionsIcon />
                    </IconButton>
                </Paper>
                {this.state.emojiShow ?
                    <div style={{position: 'absolute', bottom: 90, right: 0}} ref={node => this.emojiPanel_modal = node}>
                        <NimblePicker
                            set='messenger'
                            data={data}
                            onClick={this.onEmoji.bind(this)}
                            i18n={this.state.emojiCategories}
                        />
                    </div>
                    : null
                }
            </>
        )
    }
}
export default CommentInputBar