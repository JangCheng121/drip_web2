import React from 'react';
import '../../static/css/photo.css';
import {connect} from "react-redux";
import * as Contents from "../../redux/modules/contents";
import EyeIcon from '@material-ui/icons/RemoveRedEye';
import StarIcon from '@material-ui/icons/StarBorder';
import StarIconFull from '@material-ui/icons/Star';
import ThumbUpOut from '@material-ui/icons/ThumbUpOutlined';
import ThumbUpFull from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/MessageOutlined';
import _ from 'lodash';
import * as Tools from "../../lib/tool";

class Bar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    clickStar(content_id) {
        const {doAddFavour, toggleModal} = this.props;
        if (!this.props.mi.member) {
            toggleModal();
            return;
        }
        if (!content_id|| !doAddFavour) return;
        doAddFavour(content_id);
    }

    doLike(id){
        const {toggleModal} = this.props;
        if (!this.props.mi.member) {
            toggleModal();
            return;
        }
        this.props.doLikeContent(id);
    }

    render() {
        let { data, type, position, mi, is_phone_video} = this.props;
        let view_cnt = data && data.views;//data.stat.view;
        let like_cnt = data && data.likers && data.likers.length ? data.likers.length : 0;//data.stat.like;
        let save_cnt = data && data.savers && data.savers.length ? data.savers.length : 0;//data.stat.save;
        let review_cnt = data && data.review_cnt;//data.stat.review;
        let is_saved = data.isSaved;
        if (type==='detail') {
            return (
                <div style={{flexDirection:'row', display:'flex', backgroundColor:'white', padding:10}} className='ml-0 mr-0 bg-white p-2'>
                    <div className="bar_content_0">
                        <CommentIcon className='bar_icon_font_0' />
                        <span className='bar_cnt_font_0'>
                            {review_cnt !== undefined ? Tools.abbrNum(review_cnt): 0}
                        </span>
                    </div>
                    <div className="bar_content_0">
                        <EyeIcon className='bar_icon_font_0' />
                        <span className='bar_cnt_font_0'>
                            {view_cnt !== undefined ? Tools.abbrNum(view_cnt): 0}
                        </span>
                    </div>
                    <div className="bar_content_0" onClick={() => this.doLike(data.id)}>
                        {data.isLiked ? <ThumbUpFull className='bar_icon_font_0' /> :
                            <ThumbUpOut className='bar_icon_font_0' />
                        }
                        <span className='bar_cnt_font_0'>
                            {like_cnt !== undefined ? Tools.abbrNum(like_cnt): 0}
                        </span>
                    </div>
                    <div className="bar_content_0" onClick={() => this.clickStar(data.id)}>
                        {is_saved
                            ? <StarIconFull className='bar_icon_font_0' />
                            : <StarIcon className='bar_icon_font_0' />
                        }
                        <span className='bar_cnt_font_0'>
                            {save_cnt !== undefined ? Tools.abbrNum(save_cnt): 0}
                        </span>
                    </div>
                </div>
            )
        }
        return (
                <div style={{display:'flex',flexDirection:'row',alignItems:'center', color:"white"}} className={` bar_position ${position==='absolute'?'bar-bg':'position-static bar_bg_total_video'}`} >
                    {is_phone_video ? null :
                        <div style={{marginLeft: 10}} className="bar_content">
                            <CommentIcon style={{fontSize: 22}}/>
                            <span style={{fontSize: 12}}>
                                {review_cnt !== undefined ? Tools.abbrNum(review_cnt) : 0}
                            </span>
                        </div>
                    }

                    <div style={{marginLeft:is_phone_video?10:0}} className='bar_content' >
                        <EyeIcon style={{fontSize:22}} />
                        <span style={{fontSize:12}}>
                            {view_cnt !== undefined ? Tools.abbrNum(view_cnt): 0}
                        </span>
                    </div>

                    <div className="bar_content" onClick={() => this.doLike(data.id)}>
                        {data.isLiked ? <ThumbUpFull style={{fontSize:22}} /> :
                            <ThumbUpOut style={{fontSize:22}} />
                        }
                        <span style={{fontSize:12}}>
                            {like_cnt !== undefined ? Tools.abbrNum(like_cnt): 0}
                        </span>
                    </div>
                    {is_phone_video ? null :
                        <div className="bar_content" onClick={() => this.clickStar(data.id)}>
                            {is_saved
                                ? <StarIconFull style={{fontSize: 22}}/>
                                : <StarIcon style={{fontSize: 22}}/>
                            }
                            <span style={{fontSize: 12}}>
                                {save_cnt !== undefined ? Tools.abbrNum(save_cnt) : 0}
                            </span>
                        </div>
                    }
                </div>
        );
    }

}

export default connect(
    state => ({
        users: state.users,
        mi: state.system.mi,
        contents: state.contents,
    }),
    dispatch => ({
        doLikeContent: (index) => dispatch(Contents.doLikeAsync("content", index)),
        doAddFavour: (index) => dispatch(Contents.doAddFavoure(index)),
    })
)(Bar);
