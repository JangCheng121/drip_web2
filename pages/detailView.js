import React, {Suspense} from 'react'
import {connect} from "react-redux";
import * as CONST from "../model/Const";
import * as Users from "../redux/modules/users";
import * as Contents from "../redux/modules/contents";
import * as System from "../redux/modules/system";
import Avatar from '../components/Avatar';
import Back from '../components/back';
import * as Tools from "../lib/tool";
import '../static/css/detailView.css';
import PhotoSwipeGallery from 'photoswipe';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import 'emoji-mart/css/emoji-mart.css'
import Bar from "../components/content/bar";
import InfiniteScroll from "react-infinite-scroller";
import AlertModal from "../components/AlertModal";
import Button from '@material-ui/core/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faListUl, faGripHorizontal, faMars, faVenus} from '@fortawesome/free-solid-svg-icons'
import DeletePostIcon from '@material-ui/icons/DeleteForever'
import {withRouter} from 'next/router'
import DeleteIcon from '@material-ui/icons/Block'
import CommentInputBar from '../components/CommentInputBar';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import {withTranslation} from '../i18n';
import {dataService} from "../model/DataService";
import {NextSeo} from 'next-seo';
import Head from 'next/head'
import Spinner from "../components/Spinner";
import Grid from '@material-ui/core/Grid/index';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ImageGallery from 'react-image-gallery';
import {httpReq, reqInit} from "../model/Req";
import {auth} from "../model/Auth"
import * as Proto from "../redux/common/PropoTypes";
import "react-image-gallery/styles/css/image-gallery.css";
// import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

let vm = null;

class DetailViewPage extends React.Component {

    constructor(props) {
        super(props);
        vm = this;
        const dataId = this.props.router.query.id;
        const {contentsData, mi, router, initial_content} = this.props;
        const itemData = contentsData.contents[dataId] ? contentsData.contents[dataId] : initial_content;
        if (!dataId || !itemData) {
            router && router.back();
            return;
        }
        if (!itemData || !itemData.media || !itemData.media.length) {
            return;
        }
        this.state = {
            renderItemsData:[
                {
                    original: itemData.media[0].thumb,
                    thumbnail: itemData.media[0].thumb,
                    renderItem: ()=> this.renderItemCell(itemData,0)
                }
                ],
            modalStatus: false,
            replyStatus: false,
            displayStatus: true,
            commentTo: 'content',
            commentId: this.props.router.query.id,
            inputPlaceHolderStr: '',
            gallery: null,
            emojiShow: false,
            commentData: '',

            modalGoStatus: 'page',
            modalState: false,
            deleteType: 'content',
            deleteItemId: -1,
            emojiCategories: {},
        };

        if (itemData.is_advert && itemData.coin > 0 && itemData.user_id !== mi.id) {
            const {updateAdvertItem} = this.props;
            updateAdvertItem({id: dataId, coin: 0});
        }
        let reviewData = itemData.reviews;
        if (reviewData && reviewData.data && !reviewData.data.length &&
            reviewData.status !== CONST.STATUS_REQ_NOMORE &&
            reviewData.status !== CONST.STATUS_REQ_START && !itemData.is_advert
        ) {
            this.props.getReview(dataId, CONST.LOAD_TYPE_INIT);
        }
        this.videoItem = [];
        this.commentContent = [];

    }

    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick.bind(this));

        const dataId = this.props.router.query.id;
        const {contentsData, mi, router, initial_content, getPersonContents} = this.props;
        const itemData = contentsData.contents[dataId] ? contentsData.contents[dataId] : initial_content;
        if (!dataId || !itemData) {
            router && router.back();
            return;
        }
        if (itemData.user_id) {
            let reqParam = {};
            reqParam.mediaType = [Contents.CONTENT_TYPE_VIDEO, Contents.CONTENT_TYPE_IMAGE];
            reqParam.length = 0;
            reqParam.bottom = 0;
            reqParam.user_id = itemData.user_id;
            reqParam.perPage = 10;
            dataService.requestGetContents(reqParam).then(
                (res) => {
                    let buf_contents = [];
                    for (let index in res) {
                        let content_item = res[index];
                        if (content_item && content_item.id !== itemData.id) {
                            buf_contents.push({
                                original: content_item.media[0] && content_item.media[0].thumb,
                                thumbnail: content_item.media[0] && content_item.media[0].thumb,
                                renderItem: ()=> vm.renderItemCell(content_item, index+1)
                            })
                        }
                    }
                    this.setState({renderItemsData:this.state.renderItemsData.concat(buf_contents)})
                },
                (err) => {
                    console.log('detailView getPersonContents error====', err);
                }
            )
        }
    }

    componentWillUnmount = () => {
        document.removeEventListener('click', this.handleOutsideClick.bind(this));
        this.closeGallery();
        this.commentInput = null;
    };

    handleOutsideClick(e) {
        for (let index in this.commentContent) {
            if (this.commentContent[index] && this.commentContent[index].contains(e.target)) {
                return;
            }
        }
        if (this.commentInput && this.commentInput.contains(e.target)) {
            return;
        }
        this.clickComment();
    }

    openGallery = (item, itemList, index) => {
        const {ai} = this.props;
        let token = ai.token;
        const items = [];
        for (var num in itemList) {
            items[num] = {src: itemList[num].src + '?token=' + token, w: 0, h: 0}
        }
        const pswpElement = this.pswpElement;
        const options = {index: index};
        this.gallery = new PhotoSwipeGallery(pswpElement, PhotoswipeUIDefault, items, options);
        this.gallery.listen('gettingData', (index, item) => {
            if (item.w < 1 || item.h < 1) { // unknown size
                var img = new Image();
                img.onload = function () { // will get size after load
                    item.w = this.width; // set image width
                    item.h = this.height; // set image height
                    vm.gallery.invalidateCurrItems(); // reinit Items
                    vm.gallery.updateSize(true); // reinit Items
                };
                img.src = item.src; // let's download image
            }
        });
        this.gallery.init();
    };
    closeGallery = () => {
        if (!this.gallery) return;
        this.gallery.close();
        this.gallery = null;
    };

    clickComment() {
        this.setState({
            inputPlaceHolderStr: '',
            commentTo: 'content',
            commentId: this.props.router.query.id
        })
    }

    clickReply(commentId, user_name) {
        this.setState({
            inputPlaceHolderStr: 'Reply the Comment...' + user_name,
            commentTo: 'review',
            commentId: commentId
        })
    }

    sendComment(commentData) {
        const {mi} = this.props;
        if (!mi.member) {
            this.funcToggleModal('login');
            return;
        }
        if (commentData === '' || this.state.commentId === -1) {
            this.clickReply();
            return;
        }
        this.props.addComment(this.state.commentTo, this.state.commentId, commentData);
        // this.setState({commentData : ''});
        this.clickComment()
    }

    changeDisplay() {
        this.setState({displayStatus: !this.state.displayStatus});
    }

    followUser(userId) {
        const {mi, users, doFollow, updateUser} = this.props;
        if (!mi.member) {
            this.funcToggleModal('login');
            return;
        }

        let isFollow = Tools.getIndexByValue(mi.follow, userId),
            user = users[userId],
            followed = [].concat(user.followed),
            idx = Tools.getIndexByValue(followed, mi.id);

        if (idx === -1) {
            followed.push(mi.id);
        } else {
            followed.splice(idx, 1);
        }

        if (!userId) return;
        doFollow && doFollow(userId, isFollow === -1 ? true : false);
        updateUser && updateUser(userId, {followed: followed})
    }

    history_goBack() {
        const {router} = this.props;
        router.back();
    }

    loadMoreReviewData() {
        const dataId = this.props.router.query.id;
        this.props.getReview(dataId, CONST.LOAD_TYPE_MORE);
    }

    funcToggleModal(type, itemId = this.props.router.query.id) {
        if (type === 'login') {
            this.setState({
                modalState: !this.state.modalState,
                modalGoStatus: 'login',
            })
        } else {
            this.setState({
                modalState: !this.state.modalState,
                modalGoStatus: 'page',
                deleteType: type,
                deleteItemId: itemId,
            })
        }
    }

    funcDeleteThisPost() {
        const dataId = this.props.router.query.id;
        dataService.deletePost(this.state.deleteItemId, this.state.deleteType, dataId).then(
            (res) => {
                vm.history_goBack();
            },
            (err) => {
                console.log(err);
            }
        )
    }

    renderReplies(data, key, parent_user_id=0) {//댓글의 댓글...
        const {users, contentsData, mi} = this.props;

        const item = contentsData.reviews[data];
        if (!item || !item.comment || !item.user_id) {
            return <div/>;
        }
        const user = users[item.user_id];
        if (!user || user.status !== Users.GET_SUCCESS) {
            return null
        }
        return (
            <Grid component={"div"} container justify={"flex-start"} wrap={"wrap"} spacing={1} direction={"row"}>
                <Grid item justify={'flex-start'}  wrap={"nowrap"}>
                    <Avatar src={user.picture} id={user.id} size={35} shape={'circle'}/>
                </Grid>
                <Grid item justify={'flex-start'}  wrap={"nowrap"} style={{maxWidth:'80%', display:'grid', alignItems:'center'}}>
                    <Typography variant="subtitle1" style={{display:'flex', justifyContent: 'flex-start', alignItems:"center"}}>
                        <div style={{color: '#6b4250', fontSize: 16, marginRight: 5}}>{user.name}</div>
                        {parent_user_id && parent_user_id !== item.reply_to ?
                            <div style={{
                                color: '#404ff0',
                                fontSize: 16,
                                marginRight: 5
                            }}>Reply=> {item.reply_to_name}</div>
                            : null
                        }
                        {item.user_id === mi.id ?
                            <div style={{minWidth: 15}} className="ml-3 p-0"
                                 onClick={() => this.funcToggleModal('review', item.id)}>
                                <DeletePostIcon style={{fontSize: 20}}/>
                            </div>
                            : null
                        }
                    </Typography>
                    <Paper style={{backgroundColor: '#f5f5f5', width:"fit-content", fontSize:16, padding:3}}>
                        {item.comment}
                    </Paper>
                </Grid>
                <Grid item justify='flex-end'>
                    <small style={{color:'#686868'}}>{Tools.getCurrentTime(parseInt(new Date(item.ctime).getTime()))}</small>
                </Grid>
            </Grid>
        )
    }

    renderComment(data, key) {
        const {users, contentsData, mi} = this.props;

        const item = contentsData.reviews[data];
        if (!item || !item.comment || !item.user_id) {
            return <div key={key}/>;
        }
        const user = users[item.user_id];
        if (!user || user.status !== Users.GET_SUCCESS) {
            return null
        }
        return (
            <div key={key} className='comment_main'>
                {this.renderReplies(data, key)}
                <div style={{marginLeft: 30}}>
                    {item.reviews && item.reviews.length ? item.reviews.map((dataItem, index) => {
                        return (
                            <div key={index}>
                                {this.renderReplies(dataItem, index, item.user_id)}
                            </div>
                        )
                    }) : null}
                    <Divider style={{width: '100%', height: 1, margin: 5}}/>
                </div>
            </div>
        )
    }

    renderImageCell(data, key, dataList) {
        return (
            <img alt='' key={key} className='img_cell' onClick={() => this.openGallery(data, dataList, key)}
                 src={data}/>
        )
    }

    renderItemCell(item, id) {
        const {ai, t} = this.props;
        let token = ai.token;
        if (item.type==='image') {
            return (
                <div className='img_content'
                     style={{flexDirection: this.state.displayStatus ? 'column' : 'row'}}
                >
                    {item.media.map((data, key) => {
                        return (
                            <div className={this.state.displayStatus?'img_content_col_item':'img_content_row_item'}
                                 key={key}
                            >
                                {this.renderImageCell(data.src + '?token=' + token, key, item.media)}
                            </div>
                        )
                    })}
                    {item.is_advert && item.url.startsWith('http') ?
                        <Button variant="outlined"
                                style={{position: "absolute", bottom: 0, right: 0}}
                                onClick={() => {
                                    window.open(
                                        item.url,
                                        '_blank'
                                    );
                                }}
                                color='secondary'>
                            {t('ADVERT_LINK_TITLE')}
                        </Button>
                        :null
                    }
                </div>
            )
        } else if ((item.type === 'video')) {
            return (
                <video
                    ref={(item) => {this.videoItem[id] = item}}
                    style={{backgroundColor:'#626262'}}
                    width={'100%'}
                    height={window.innerHeight - 150}
                    controls
                    // autoPlay
                    controlsList='nodownload'
                >
                    <source src={item.media[0].src + '?token=' + token}/>
                </video>
            )
        }
    }

    render() {
        const dataId = this.props.router.query.id;
        const {users, contentsData, mi, ai, t, initial_content, initial_user} = this.props;
        const item = contentsData.contents[dataId] ? contentsData.contents[dataId] : initial_content;
        let token = ai.token;
        if (!item || !item.media || item.media.length <= 0) {
            return <div/>;
        }
        const user = users[item.user_id] ? users[item.user_id] : initial_user;
        if ((!user || !user.id) && item.category_id === 4) {
            return null
        }
        let is_follow = Tools.getIndexByValue(mi.follow, item.user_id) !== -1;
        return (
            <div>
                <NextSeo
                    title={item.text}
                    description={"Drip content image title" + item.text}
                    canonical={"https://ad-lib.live/detailView/" + item.id}
                />
                <Head>
                    <meta name="title1" content={"Peaky Blinder's " + item.text}/>
                    <meta name="description1" content={item.text}/>
                </Head>
                <div style={{margin: 10}}>
                    <div className='header_content'>
                        <div onClick={this.changeDisplay.bind(this)}
                             className='back_header'
                        >
                            {this.state.displayStatus ?
                                <FontAwesomeIcon icon={faGripHorizontal} style={{fontSize: 25}}/>
                                : <FontAwesomeIcon icon={faListUl} style={{fontSize: 25}}/>
                            }
                        </div>
                        {user.id === mi.id && !item.is_advert ?
                            <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex'}}
                                 title={'DELETE_MY_POST'} onClick={() => {
                                this.funcToggleModal('content')
                            }}
                                 className='mr-3 mt-2 p-1 align-items-center justify-content-center d-flex back_header'>
                                <DeletePostIcon style={{fontSize: 25}}/>
                            </div>
                            : null
                        }
                        <Back props={this.props}/>
                    </div>
                    {item.state === 'delete' ?
                        <div className='delete_reason_content'>
                            <DeleteIcon className='delete_icon' />
                            <h5 className=''>{('DELETE_CONTENT_BY_ADMIN')}</h5>
                            <h5>{('DELETE_REASON')} : {item.delete_reason}</h5>
                        </div>
                        : null
                    }
                    <div style={{flexDirection: 'column', display: 'flex', marginBottom: 15}} className='pr-0 pl-0'>
                        {!item.is_advert ?
                            <div style={{flexDirection: 'column', display: 'flex', marginBottom: 5}}
                                 className='pl-0 pr-0'>
                                <div style={{flexDirection: 'row', display: 'flex'}}
                                     className='d-flex mt-1 ml-0 mr-0 align-items-center'>
                                    <Avatar src={user.picture} id={user.id} size={35} shape={'circle'}/>
                                    <div style={{flexDirection: 'column', display: 'flex', marginLeft: 15}}
                                         className='col-auto'>
                                        <div style={{flexDirection: 'row', display: 'flex'}} className='ml-0 mr-0'>
                                            <span style={{fontFamily: 'cursive', marginRight: 10}}>{user.name}</span>
                                            {user.sex ?
                                                <FontAwesomeIcon icon={faMars} style={{color: 'blue', fontSize: 25}}/>
                                                : <FontAwesomeIcon icon={faVenus} style={{color: "red", fontSize: 25}}/>
                                            }
                                        </div>
                                        <small>{Tools.getCurrentTime(parseInt(new Date(item.ctime).getTime()))}</small>
                                    </div>
                                    {item.user_id !== mi.id ?
                                        <Button variant="outlined"
                                                style={{marginLeft: 15, zIndex: 2}}
                                                onClick={() => {
                                                    this.followUser(item.user_id)
                                                }}
                                                color='secondary'>
                                            {is_follow?t('CANCEL_FOLLOW'):t('FOLLOW')}
                                        </Button>
                                        : null
                                    }
                                </div>
                                {item.text !== '' ?
                                    <h4 className='ml-4' style={{color: '#33a4b8', margin:'5px 0'}}>--{item.text}--</h4>
                                    : null
                                }
                            </div>
                            : null
                        }
                        {/*{this.renderItemCell(item, token)}*/}
                        <ImageGallery
                            showPlayButton={false}
                            thumbnailPosition='right'
                            items={this.state.renderItemsData}
                            showFullscreenButton={false}
                            /*renderLeftNav={(onClick, disabled)=>{
                                return (
                                    <FaChevronLeft
                                        style={{position:"absolute", top:'50%', transform:'translateY(-50%)', zIndex:2, color:"white", fontSize:40}}
                                        disabled={disabled}
                                        onClick={onClick}
                                    />
                                )
                            }}*/
                            onSlide={(e)=>{
                                for (let index in this.videoItem) {
                                    this.videoItem[index].pause();
                                }
                            }}
                        />
                    </div>


                    {item.reviews.data.map((data, key) => {
                        return (
                            <InfiniteScroll
                                key={key}
                                pageStart={0}
                                loadMore={() => this.loadMoreReviewData()}
                                hasMore={item.reviews.status !== CONST.STATUS_REQ_START && item.reviews.status !== CONST.STATUS_REQ_NOMORE && !item.is_advert}
                                loader={
                                    item.reviews.status !== CONST.STATUS_REQ_NOMORE ?
                                        <Spinner key={key} />
                                        : null
                                }
                                className="animated fadeIn"
                            >
                                {this.renderComment(data, key)}
                            </InfiniteScroll>
                        )
                    })}

                    <div className='p-0' style={{
                        position: "sticky",
                        width: '100%',
                        bottom: 0,
                        zIndex: 3,
                        flexDirection: 'column',
                        display: 'flex'
                    }}>
                        {!item.is_advert ?
                            <Bar {...this.props}
                                 data={item}
                                 toggleModal={this.funcToggleModal.bind(this, 'login')}
                                 type={'detail'}
                                 position={'unset'}
                            />
                            : null
                        }
                        {!item.is_advert && item.user_id !== mi.id ?
                            <div ref={node => this.commentInput = node}>
                                <CommentInputBar
                                    context_t={t}
                                    sendComment={this.sendComment.bind(this)}
                                    placeHolderStr={this.state.inputPlaceHolderStr}
                                />
                            </div>
                            : null
                        }
                    </div>

                    <AlertModal {...this.props}
                                modalStatus={this.state.modalState}
                                goStatus={this.state.modalGoStatus}
                                toggleFunc={this.funcToggleModal.bind(this)}
                                alertStr={this.state.modalGoStatus === 'page' ? t('CONFIRM_DELETE') : t("LOGINWARNING")}
                                btnOkStr={this.state.modalGoStatus === 'page' ? t('DELETE') : t('LOGIN')}
                                funcBtnOkCallback={this.funcDeleteThisPost.bind(this)}
                    />
                    <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true" ref={(div) => {
                        this.pswpElement = div;
                    }}>
                        <div className="pswp__bg"/>
                        <div className="pswp__scroll-wrap">
                            <div className="pswp__container">
                                <div className="pswp__item"/>
                                <div className="pswp__item"/>
                                <div className="pswp__item"/>
                            </div>
                            <div className="pswp__ui pswp__ui--hidden">
                                <div className="pswp__top-bar">
                                    <div className="pswp__counter"/>
                                    <button className="pswp__button pswp__button--close" title="Close (Esc)"/>
                                    <button className="pswp__button pswp__button--share" title="Share"/>
                                    <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"/>
                                    <button className="pswp__button pswp__button--zoom" title="Zoom in/out"/>
                                    <div className="pswp__preloader">
                                        <div className="pswp__preloader__icn">
                                            <div className="pswp__preloader__cut">
                                                <div className="pswp__preloader__donut"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                    <div className="pswp__share-tooltip"/>
                                </div>
                                <button className="pswp__button pswp__button--arrow--left"
                                        title="Previous (arrow left)"/>
                                <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"/>
                                <div className="pswp__caption">
                                    <div className="pswp__caption__center"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

DetailViewPage.getInitialProps = async (req) => {
    const redux_state = req.reduxStore && req.reduxStore.getState();
    let content_id = req && req.query && req.query.id,
        content_user = {},
        ai_token = auth.ai.token?auth.ai.token:redux_state.system&&redux_state.system.ai&&redux_state.system.ai.token?redux_state.system.ai.token:'',
        content_data = redux_state && redux_state.contents && redux_state.contents.contents && redux_state.contents.contents[content_id]?redux_state.contents.contents[content_id]:{};
    try {
        if (content_id && !content_data.id) {
            reqInit(ai_token);
            let item = await httpReq('/api/content/' + content_id, 'get');
            content_data = Tools.createObjectAndCopy(Proto.CONTENT, item);
            if (content_data && content_data.user_id) {
                content_user = await httpReq('/api/user/' + content_data.user_id, 'get');
            }
        }
    }
    catch (e) {
        console.log('DetailViewPage.getInitialProps get data error====',e)
    }
    return {initial_content: content_data, initial_user: content_user}
};

DetailViewPage.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('common')(withRouter(connect(
    state => ({
        users: state.users,
        contentsData: state.contents,
        mi: state.system.mi,
        ai: state.system.ai,
    }),
    dispatch => ({
        getReview: (contentId, loadType) => dispatch(Contents.getReviewsAsync(contentId, loadType)),
        updateAdvertItem: (info) => dispatch(Contents.ActUpdateOneItem({type: 'contents', item: info})),
        getPersonContents: (loadType, type, userId) => dispatch(Contents.getPersonContentAsync(loadType, type, userId)),
        addComment: (type, itemId, strReview) => dispatch(Contents.addMyReviewAsync(type, itemId, strReview)),
        // getUser: (id) => dispatch(Users.get_user(id)),
        doFollow: (id, isFollow) => dispatch(System.doFollowAsync(id, isFollow)),
        updateUser: (id, userInfo) => {
            dispatch(Users.updateUser(id, userInfo))
        },
    })
)(DetailViewPage)));
