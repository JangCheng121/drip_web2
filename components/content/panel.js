import React from 'react';
import Button from '@material-ui/core/Button';
import StackGrid from "react-stack-grid";
import Photo from './photo'
import Video from './video'
import Bar from './bar';
import '../../static/css/content.css';
import * as CONST from "../../model/Const";
import * as System from "../../redux/modules/system";
import {dataService} from "../../model/DataService";
import InfiniteScroll from "react-infinite-scroller";
import AlertModal from "../../components/AlertModal";
import Avatar from "../../components/Avatar";
import PropTypes from "prop-types";
import * as Tool from "../../lib/tool";
import _ from 'lodash';
import {Router} from '../../server/pageRoutes';
import Empty from "../../components/Empty";
import Spinner from "../Spinner";
import {connect} from "react-redux";

let HtmlToReactParser = require('html-to-react').Parser;
const gridColumnMinWidth = 250;

class Panel extends React.Component {
    width = 0;

    constructor(props) {
        super(props);
        this.state = {
            loginModalState: false,
            alertModalStr: '',
            goStatus: 'login',
            clickedItemId: -1,
            modalBtnStr: '',
            isShowTop: true,
            scrollState: false,//이전 스크롤 상태가 있는가?
        };
        const {popupToggleFunc, category_id} = this.props;
        this.popupData = dataService.popupData;
        this.categoryIsIncludePopup = false;
        let includePopupDatas = [];
        for (let index in this.popupData) {
            if (Tool.getIndexByValue(this.popupData[index].positions, category_id) !== -1) {
                includePopupDatas.push(this.popupData[index]);
                this.categoryIsIncludePopup = this.categoryIsIncludePopup || Tool.getIndexByValue(this.popupData[index].positions, category_id);
            }
        }
        if (this.categoryIsIncludePopup !== -1) {
            const tempPopup = includePopupDatas.filter((v) => (!this.props.blockedPopupDates[v.id] || new Date(this.props.blockedPopupDates[v.id]) < new Date()));
            if(tempPopup.length > 0) {
                popupToggleFunc && popupToggleFunc(tempPopup[Math.floor(Math.random() * tempPopup.length)]);
            }
        }
        let documentData = document.querySelector('#contentPanel');
        this.width = documentData ? documentData.offsetWidth : window.innerWidth * 0.8 - 10;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {panel, contentType, realCategoryId, getContents, getTopContents, isShowTop, selectTopType, selectTopBeforeDate} = nextProps;
        let model = panel && panel[contentType],
            dataList = model && model.data ? model.data : [],
            modelStatus = model && model.status;
        if (nextProps.category_id !== this.props.category_id && (!panel || !model || !dataList.length) && (modelStatus !== CONST.STATUS_REQ_NOMORE && modelStatus !== CONST.STATUS_REQ_START)) {
            getContents(realCategoryId, CONST.LOAD_TYPE_INIT, contentType)
        }
        if (
            isShowTop &&
            (!panel || !model || !dataList.length || selectTopType !== this.props.selectTopType || selectTopBeforeDate !== this.props.selectTopBeforeDate) &&
            (modelStatus !== CONST.STATUS_REQ_NOMORE && modelStatus !== CONST.STATUS_REQ_START)
        )
        {
            getTopContents(realCategoryId, CONST.LOAD_TYPE_INIT, contentType, selectTopType, selectTopBeforeDate);
        }
        let next_lang = nextProps.language_props,
            this_lang = this.props.language_props;
        if (next_lang !== this_lang) {//언어가 바뀔 때...
            getContents(realCategoryId, CONST.LOAD_TYPE_INIT, contentType);
        }

        if (this.width === 0) {
            let documentData = document.querySelector('#contentPanel');
            this.width = documentData ? documentData.offsetWidth : window.innerWidth * 0.8 - 10;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // Are we adding new items to the list?
        // Capture the scroll position so we can adjust scroll later.
        let documentData = document.querySelector('#contentPanel');
        let panelHeight = documentData&&documentData.scrollHeight;
        if (panelHeight >= (dataService.panStatus&&dataService.panStatus.scrollY)) {
            // return dataService.panStatus.scrollY;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot !== null) {
            window.scrollTo(0, snapshot);
        }
    }

    componentDidMount() {
        const {panel, contentType, realCategoryId, getContents, getTopContents, isShowTop, selectTopType, selectTopBeforeDate} = this.props;
        let model = panel && panel[contentType],
            dataList = model && model.data ? model.data : [],
            modelStatus = model && model.status;
        if ((!panel || !model || !dataList.length) && (modelStatus !== CONST.STATUS_REQ_NOMORE && modelStatus !== CONST.STATUS_REQ_START)) {
            if (isShowTop) {
                getTopContents(realCategoryId, CONST.LOAD_TYPE_INIT, contentType, selectTopType, selectTopBeforeDate);
            } else {
                getContents(realCategoryId, CONST.LOAD_TYPE_INIT, contentType)
            }
        }

        let documentData = document.querySelector('#contentPanel');
        this.width = documentData ? documentData.offsetWidth : window.innerWidth * 0.8 - 10;
        window.scrollTo(0, dataService.panStatus.scrollY);
    }

    clickCellItem(data) {
        if (!data) return;
        dataService.panStatus.scrollY = window.pageYOffset;
        let mi = this.props.mi;

        if (data.point === 0 || data.user_id === mi.id) {
            this.goDetailView(data.id);
            return;
        }
        if (data.point > 0) {
            if (!mi || !mi.member) {
                !data.is_advert ? this.toggleModal('login') : this.toggleModal('advert_login', data);
                return;
            } else if ((!mi.notShowContentAlert && !data.is_advert) || (!mi.notShowAdvertAlert && data.is_advert && data.coin > 0)) {
                data.is_advert ? this.toggleModal('alertGetting', data) : this.toggleModal('alertPayment', data);
                return;
            } else if (data.point > mi.point && !data.is_advert) {
                this.toggleModal('charge');
                return;
            }
            this.goDetailView(data.id)
        }
    }

    goDetailView(id) {
        const {contents, mi} = this.props;
        let dataItem = contents.contents[id];
        if (dataItem.user_id !== mi.id) {
            this.props.doShowContent(id);
        }
        /*if (dataItem && dataItem.is_advert && dataItem.url && dataItem.url !== '') {
            if (dataItem.url.search('http') === 0) {
                window.open(
                    dataItem.url,
                    '_blank'
                );
                return;
            }
        }*/
        this.setState({scrollState:true});
        // Router.pushRoute('/detailView')
        Router && Router.pushRoute('detailView', {id: id ? id : -1})
    }

    loadMoreData(modelStatus) {
        const {loadMoreFunc} = this.props;
        if (!loadMoreFunc || modelStatus === CONST.STATUS_REQ_NOMORE) return;
        loadMoreFunc();
    }

    funcModalNoShowCheck(checked, status) {
        if (status === 'alertPayment') {
            dataService.dispatchAction(System.updateMI, {notShowContentAlert: checked});
        } else if (status === 'alertGetting') {
            dataService.dispatchAction(System.updateMI, {notShowAdvertAlert: checked});
        }
    }

    funcClickFollow(userId) {
        const {mi, users, doFollow, updateUser} = this.props;
        if (!mi.member) {
            this.toggleModal();
            return;
        }

        let isFollow = Tool.getIndexByValue(mi.follow, userId),
            user = users[userId],
            followed = [].concat(user.followed),
            idx = Tool.getIndexByValue(followed, mi.id);

        if (idx === -1) {
            followed.push(mi.id);
        } else {
            followed.splice(idx, 1);
        }

        if (!userId) return;
        doFollow && doFollow(userId, isFollow === -1 ? true : false);
        updateUser && updateUser(userId, {followed: followed})
    }

    toggleModal(state = '', data = {}) {
        let {t} = this.props;
        let str = '', btnStr = '';
        if (state === 'login') {
            str = t('NO_MEMBER_CANT_VIEW');
            btnStr = t('LOGIN');
        } else if (state === 'advert_login') {
            str = t('ADD_COIN_ALERT', {coin: data.coin ? data.coin : 123}) + t("COIN_EQUAL_CASH") + t('NOGETADVERT');
            btnStr = t('LOGIN');
        } else if (state === 'charge') {
            str = t('HAVENOPOINT');
            btnStr = t('POINTIN');
        } else if (state === 'alertPayment') {
            str = t('DELL_POINT_ALERT', {point: data.point ? data.point : 123});
            btnStr = t('PAY&SHOW');
        } else if (state === 'alertGetting') {
            str = t('PAY&SHOW', {coin: data.coin ? data.coin : 123}) + t("COIN_EQUAL_CASH");
            btnStr = t('DONE');
        } else {
            str = t('LOGINWARNING');
            btnStr = t('LOGIN');
        }
        this.setState({
            loginModalState: !this.state.loginModalState,
            alertModalStr: str,
            goStatus: (state === 'login' || state === '') ? 'login' : state === 'charge' ? 'charge' : state,
            modalBtnStr: btnStr,
            clickedItemId: data.id ? data.id : 123
        });
    }

    random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgba(" + x + "," + y + "," + z + ", 0.5)";
        return bgColor;
    }

    boldString(str, find) {
        var re = new RegExp(find, 'g');
        return str.replace(re, '<span style="font-size: 18px;color: black;">' + find + '</span>');
    }

    funcStrDiv2React(str, searchStr) {
        let htmlToReactParser = new HtmlToReactParser();
        return htmlToReactParser.parse(this.boldString(str, searchStr));
    }

    render() {
        const {contents, users, mi, t, panel, contentType, isSearch, searchStr, realCategoryId, page, loadMoreProps, isHomeView} = this.props;//dataList, modalStatus,
        let model = panel && panel[contentType],
            dataList = model && model.data ? model.data : [],
            modelStatus = model && model.status,
            is_phone_video = this.width <= 500 && (page === 2 || contentType === 'video'),
            is_phone_video_total = this.width <= 500 && contentType === 'total' && realCategoryId === 4;

        let columnWidthMode = this.width % gridColumnMinWidth;
        let num = parseInt(this.width / gridColumnMinWidth);

        let columnWidth = this.width !== 0 ? ((columnWidthMode - (num + 1) * 10) / num + gridColumnMinWidth) : gridColumnMinWidth;
        if (is_phone_video) {
            columnWidth = columnWidth / 2 - 5;
        }

        if (!dataList.length && (modelStatus === CONST.STATUS_REQ_NOMORE)) {
            return (<Empty/>);
        } else if (!dataList.length && modelStatus !== CONST.STATUS_REQ_NOMORE) {
            return ( <Spinner /> )
        }
        if (isHomeView) {
            dataList = dataList.slice(0, num*2);
        }
        return (
            <div style={{minHeight: '100%', overflow: "hidden"}} ref={(ref) => this.scrollParentRef = ref}>
                <InfiniteScroll
                    pageStart={0}
                    hasMore={modelStatus !== CONST.STATUS_REQ_NOMORE && !loadMoreProps}
                    loader={<Spinner key={0} />}
                    threshold={200}
                    // useWindow={false}
                    // getScrollParent={() => this.scrollParentRef}
                    loadMore={() => this.loadMoreData(modelStatus)}
                >
                    <StackGrid columnWidth={columnWidth}
                               gutterWidth={10}
                               gutterHeight={20}
                               style={{margin: '0 auto'}}
                    >
                        {dataList.map((item, index) => {
                            let data = contents.contents[item],
                                user = users[data.user_id],
                                is_follow = Tool.getIndexByValue(mi.follow, data.user_id) !== -1;
                            if (!data || !data.media || !data.media.length || !user || !user.id)
                                return null;
                            return (
                                <div key={index} style={is_phone_video_total?{minWidth: columnWidth, backgroundColor:"whitesmoke"}:{minWidth: columnWidth}} className='photo_div'>
                                    {!data.is_advert ?
                                        <div className={is_phone_video_total?'content_header content_header_del':'content_header content_header_add' } >
                                            <Avatar src={user.picture} id={user.id} size={30} shape={'circle'}/>
                                            {is_phone_video_total?
                                                <>
                                                    <span style={{marginLeft:10}}>{user.name}</span>
                                                    <Button variant="outlined"
                                                            style={{marginLeft: "auto", marginRight:10, padding:2, marginTop:10}}
                                                            onClick={() => {this.funcClickFollow(user.id)}}
                                                            color='secondary'>
                                                        {is_follow?t('CANCEL_FOLLOW'):t('FOLLOW')}
                                                    </Button>
                                                </>
                                                :null
                                            }
                                        </div>
                                        : null
                                    }
                                    {data.text !== '' ?
                                        <div style={!is_phone_video_total?{backgroundColor: this.random_bg_color()}:{display:"flex"}}
                                             className={is_phone_video_total ? "" : 'content_detail_text'}
                                        >
                                            <small className={is_phone_video_total?'content_text_total_video':'content_text_ellipse'}>
                                                {isSearch ? this.funcStrDiv2React(data.text, searchStr) : data.text}
                                            </small>
                                        </div>
                                        : null
                                    }
                                    {!data.is_advert ?
                                        <div className='advert_img justify-content-between'>
                                            {data.point > 0 ?
                                                <div className='crown_img'>
                                                    <img alt='' src='../../static/img/common/point.png'
                                                         style={{marginLeft: 4}}/>
                                                    <span style={{color: 'white'}} className='ml-1 mr-2'>
                                                        {data.point}
                                                    </span>
                                                </div>
                                                : null
                                            }
                                        </div>
                                        : data.is_advert ?
                                            <div className='advert_img justify-content-between'>
                                                <div style={{
                                                    width: 50,
                                                    height: 50,
                                                    backgroundColor: 'rgba(255, 0, 12, 0.63)'
                                                }}>
                                                    <img alt='' src='../../static/img/common/advert1.png' style={{width:'100%', height:'100%'}} />
                                                </div>
                                                {data.coin ?
                                                    <div className='crown_img'>
                                                        <img alt='' src='../../static/img/common/coin.png'
                                                             style={{width: 25, height: 25}}/>
                                                        <span style={{color: 'white'}} className='ml-1 mr-2'>
                                                            {_.floor(data.coin, 2)}
                                                        </span>
                                                    </div>
                                                    : null
                                                }
                                            </div>
                                            : null
                                    }
                                    {/*<Link key={index} to={`/detailView/${!data.id ? -1 : data.id}`}>*/}
                                    <div onClick={() => this.clickCellItem(data)}
                                         style={is_phone_video_total?{borderBottomStyle:"dotted", borderColor:"darkgray", paddingBottom:5}:{}}
                                    >
                                        {data.state === 'delete' ?
                                            <div className='delete_content'>
                                                <i className="cui-ban icons font-5xl d-block"
                                                   style={{marginTop: '43%'}}/>
                                            </div>
                                            : null
                                        }
                                        {data.type === 'image' ?
                                            <Photo
                                                {...this.props}
                                                data={data}
                                            />
                                            :
                                            <div
                                                style={{width: (this.width <= 500 && contentType === 'total' && realCategoryId === 4) ? this.width / 2 : '100%'}}>
                                                <Video {...this.props}
                                                       data={data}
                                                       playBtnLeft={is_phone_video_total ? 27 : 50}
                                                />
                                            </div>
                                        }
                                    </div>
                                    {/*</Link>*/}
                                    {!data.is_advert ?
                                        <Bar {...this.props}
                                             data={data}
                                             is_phone_video={is_phone_video}
                                             type={'panel'}
                                             toggleModal={this.toggleModal.bind(this)}
                                             position={is_phone_video_total ? "" : 'absolute'}
                                        />
                                        : null
                                    }
                                </div>
                            )
                        })}
                    </StackGrid>
                </InfiniteScroll>
                {modelStatus === CONST.STATUS_REQ_NOMORE ?
                    <div style={{alignItems: "center", display: "flex", justifyContent: "center"}}>
                        <h4 style={{display: "block"}}>{t('NO_DATA')}</h4>
                    </div>
                    : null
                }
                <AlertModal {...this.props}
                            modalStatus={this.state.loginModalState}
                            goStatus={this.state.goStatus}
                            toggleFunc={this.toggleModal.bind(this)}
                            alertStr={this.state.alertModalStr}
                            btnOkStr={this.state.modalBtnStr}
                            checkStatus={this.state.goStatus !== 'login' && this.state.goStatus !== 'charge'}
                            funcCheckedCallback={this.funcModalNoShowCheck.bind(this)}
                            funcBtnOkCallback={this.goDetailView.bind(this, this.state.clickedItemId)}
                />
            </div>
        )
    }
}

Panel.propTypes = {
    items: PropTypes.array.isRequired
};
Panel.defaultProps = {
    items: []
};

export default connect(
    state => ({
        blockedPopupDates: state.popup.blockedPopupDates,
    })
)(Panel);
