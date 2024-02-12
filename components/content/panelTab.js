import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import EditIcon from '@material-ui/icons/BorderColor';
import NoSSR from 'react-no-ssr'
import SocialPannel from './panel'
import * as Contents from "../../redux/modules/contents";
import * as PopupAction from "../../redux/modules/popup";
import * as CONST from "../../model/Const";
import Loading from '../../components/Spinner';
import AlertModal from '../../components/AlertModal';
import {dataService} from "../../model/DataService";
import ClearIcon from '@material-ui/icons/Clear'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TopModal from "./TopModal";
import _lodash from 'lodash';
import {i18n} from '../../i18n';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMedal} from '@fortawesome/free-solid-svg-icons';
import PostPage from './post';
import Box from "@material-ui/core/Box";
import {connect} from "react-redux";
// import Loading from '../../components/Spinner';
// import NoSSR from 'react-no-ssr'
// import MainTab from '../MainTab';
// import PropTypes from 'prop-types';
// import loadable from "@loadable/component";

let vm = null;

// const AsyncPage = loadable(props => import(`./${props.page}`));
class PanelTab extends Component {
    constructor(props) {
        super(props);
        const {page} = this.props;
        vm = this;
        this.toggleTab = this.toggleTab.bind(this);
        let activePage = dataService.panStatus.page;
        let activePageTab = dataService.panStatus.activeTab;
        this.state = {
            activeTab: activePage === page && activePageTab !== '' ? activePageTab : page,
            isShowTop: false,

            popupModal: false,
            popupModalData: {},

            loginModalState: false,
            alertModalStr: '',
            alertModalGoStatus: '',
            alertModalBtnStr: '',

            topModalState: false,
        };
        this.popupData = dataService.popupData;
    }

    componentDidMount() {
        const {contents, getCategories} = this.props;
        if (Object.keys(contents.categories).length <= 0)
            getCategories();
        if (!this.popupData.length) {
            dataService.getPopup().then(
                function (response) {
                    vm.popupData = response;
                }
            )
        }
    }

    toggleTopModal() {
        this.setState({topModalState: !this.state.topModalState});
    }

    funcCancelShowTop() {
        this.setState({isShowTop: false});
        dataService.isShowTopState = false;
    }

    funcSelectTop(data) {
        this.setState({
            isShowTop: true,
            selectTopType: data.selectTopType,
            selectTopTypeStr: data.selectTopTypeStr,
            selectTopBeforeDate: data.selectTopBeforeDate,
            selectTopBeforeDateStr: data.selectTopBeforeDateStr,
        });
    }

    popupToggle(modalData) {
        this.setState({popupModal: !this.state.popupModal, popupModalData: modalData});
    }

    modalCheckStatus(e) {
        this.props.setPopupBlockDate(this.state.popupModalData.id)
        this.setState({popupModal: false});
    }

    onClickPopup(item) {
        let popupUrl = item.url;
        if (popupUrl) {
            window.open(
                popupUrl,
                '_blank' // <- This is what makes it open in a new window.
            );
        }
    }

    toggleTab(index, value) {
        const {mi, page} = this.props;
        if (!mi.member && value === 'post') {
            this.toggleModal('login');
            return;
        } else if (value === 'top') {
            this.toggleTopModal();
            return;
        }
        this.setState({activeTab: value, isShowTop: value === page ? this.state.isShowTop : false,});
        dataService.isShowTopState = value === page ? this.state.isShowTop : false;
        dataService.panStatus.page = this.props.page;
        dataService.panStatus.activeTab = value
    }

    panLoadMoreData(category_id, type) {
        const {getContents, getTopContents} = this.props;
        const {isShowTop} = this.state;
        if (!isShowTop) {
            getContents(category_id, CONST.LOAD_TYPE_MORE, type);
        } else {
            getTopContents(category_id, CONST.LOAD_TYPE_MORE, this.type, this.state.selectTopType, this.state.selectTopBeforeDate);
        }
    }

    funcClickPostBack() {
        this.toggleTab(12, 4);
    }

    toggleModal(type) {//type='login','charge'
        const {t} = this.props;
        this.setState({
            loginModalState: !this.state.loginModalState,
            alertModalStr: t('LOGINWARNING'),
            alertModalBtnStr: type === 'login' ? t('LOGIN') : t("POINTIN"),
            alertModalGoStatus: type,
        })
    }

    renderCategories(item, index) {
        let {page, contents: {categories}, t} = this.props;
        let lang = i18n.language;
        let info = categories[item];
        if (info) {
            return (
                <Tab value={info.id} key={index}
                     label={(info.id === page ? t('SQUARETOTAL')
                         : info.trans.length && _lodash.filter(info.trans, {lang: lang})[0] ? _lodash.filter(info.trans, {lang: lang})[0].str
                             : info.name)
                     }
                />
            );
        }
    }

    renderTabContent(categoryId, page) {//categoryId:'image', 'video', db's category_id(광장:4, video:2 ....
        const {contents: {panels, categories, topPanels}, mi} = this.props;
        const {isShowTop} = this.state;
        let panel = {};
        let model = null;
        let category = {};
        let realCategoryId = categoryId;
        let wPanels = isShowTop ? topPanels : panels;

        if (categoryId === Contents.CONTENT_TYPE_IMAGE || categoryId === Contents.CONTENT_TYPE_VIDEO) {
            panel = wPanels[Contents.SQUARE_CATEGORY];
            realCategoryId = Contents.SQUARE_CATEGORY;
            this.type = categoryId;
        } else {
            panel = wPanels[categoryId];
            category = categories[categoryId] ? categories[categoryId] : {};
            this.type = Contents.CONTENT_TYPE_TOTAL;
        }

        if (categoryId === 'video' || categoryId === 'image' || category.isBuyedTicked) {
            return (
                <div id='contentPanel'>
                    <SocialPannel
                        panel={panel}
                        language_props={i18n.language}
                        selectTopType={this.state.selectTopType}
                        selectTopBeforeDate={this.state.selectTopBeforeDate}
                        contentType={this.type}//video, image => total, social=>total, image, video
                        realCategoryId={realCategoryId} //광장일 때 Contents.SQUARE_CATEGORY
                        {...this.props}
                        category_id={categoryId} //tab 이동시....
                        isShowTop={this.state.isShowTop}
                        popupToggleFunc={this.popupToggle.bind(this)}
                        loadMoreFunc={this.panLoadMoreData.bind(this, realCategoryId, this.type)}
                    />
                </div>
            )
        } else if (categoryId === 'post') {
            return (
                <PostPage {...this.props}
                          funcPostBack={this.funcClickPostBack.bind(this)}/>
            )
        } else if (category.id !== undefined && !category.isBuyedTicked) {
            return (
                <>
                    {/*<AsyncPage page="BuyTicked" {...this.props} />*/}
                </>
            )
        }
    }

    render() {
        const {contents, page, contents: {panels}, t} = this.props;
        const categories = contents.categories;
        let items = [];
        items = categories[page] && categories[page].children ? categories[page].children.slice() : [];
        items.unshift(page);
        return (
            <>
                <AppBar position="relative" style={{zIndex: 2, backgroundColor: "white", color: "black"}}>
                    {page === Contents.SQUARE_CATEGORY ?
                        <Tabs
                            value={this.state.activeTab}
                            onChange={(e, v) => this.toggleTab(e, v)}
                            variant="scrollable"
                            scrollButtons="auto"
                        >
                            <Tab value={Contents.SQUARE_CATEGORY} label={t('SQUARETOTAL')}/>
                            <Tab value={Contents.CONTENT_TYPE_VIDEO} label={t('VIDEO')}/>
                            <Tab value={Contents.CONTENT_TYPE_IMAGE} label={t('IMAGE')}/>
                            <Tab value='top' label={
                                <FontAwesomeIcon icon={faMedal} style={{fontSize: 30}}/>
                            }
                                 style={{
                                     marginLeft: 'auto',
                                     marginRight: 10,
                                     minWidth: "fit-content",
                                     display: this.state.activeTab === page ? "flex" : "none"
                                 }}
                            />
                            <Tab value='post' style={{
                                minWidth: "fit-content",
                                marginRight: 10,
                                marginLeft: this.state.activeTab === page ? "unset" : "auto"
                            }}
                                 label={<EditIcon/>}
                            />
                        </Tabs>
                        : <Tabs value={this.state.activeTab}
                                onChange={(e, v) => this.toggleTab(e, v)}
                                variant="scrollable"
                                scrollButtons="auto">
                            {items.map((itemData, index) => {
                                return this.renderCategories(itemData, index);
                            })}
                            <Tab value='top' label={
                                <FontAwesomeIcon icon={faMedal} style={{fontSize: 30}}/>
                            }
                                 style={{
                                     marginLeft: 'auto',
                                     marginRight: 10,
                                     minWidth: "fit-content",
                                     display: this.state.activeTab === page ? "flex" : "none"
                                 }}
                            />
                        </Tabs>
                    }
                </AppBar>

                <Typography role="tabpanel" component="div" style={{padding: 1 * 3}}>
                    <NoSSR onSSR={<Loading/>}>
                        {this.state.isShowTop ?
                            <div className='align-items-center justify-content-center d-flex show_top_alert' >
                                <h6 style={{color: 'white', width: 'fit-content', marginRight:5, marginTop:2, marginBottom:2}}>
                                    {t(this.state.selectTopTypeStr)} Top ({t(this.state.selectTopBeforeDateStr)})
                                </h6>
                                <div className='ghost ml-2'
                                     style={{
                                         color: 'white',
                                         position: 'absolute',
                                         top: '-4px',
                                         right: 0,
                                     }}
                                     onClick={()=>{this.funcCancelShowTop()}}>
                                    {/*{this.context.t('CANCEL')}*/}
                                    <ClearIcon />
                                </div>
                            </div>
                            :null
                        }
                        <Box component="div" className='panel_tab_content' id="contentPanel">
                            {this.renderTabContent(this.state.activeTab, page)}
                        </Box>
                        <AlertModal {...this.props}
                                    modalStatus={this.state.loginModalState}
                                    toggleFunc={this.toggleModal.bind(this)}
                                    goStatus={this.state.alertModalGoStatus}
                                    alertStr={this.state.alertModalStr}
                                    btnOkStr={this.state.alertModalBtnStr}
                        />
                        <TopModal toggleModal={this.toggleTopModal.bind(this)}
                                  modalState={this.state.topModalState}
                                  selectTop={this.funcSelectTop.bind(this)}
                                  page={page}
                        />
                        {this.state.popupModalData.media && this.state.popupModalData.media.length ?
                            <Dialog open={this.state.popupModal}
                                    onClose={this.popupToggle.bind(this)}
                            >
                                <DialogContent className='p-0 border-0' style={{padding:0}}>
                                    <div style={{lineHeight:0}} onClick={() => {this.onClickPopup(this.state.popupModalData)}}>
                                        <img alt='advert Popup Image.'
                                             src={this.state.popupModalData.media[0].src}/* + '?token=' + ai.token*/
                                             width={'100%'}
                                             style={{minHeight:200}}
                                        />
                                    </div>
                                    <div style={{display:"flex", justifyContent:"center"}} className=''>
                                        <FormControlLabel
                                            style={{margin:0}}
                                            control={
                                                <Checkbox
                                                    // checked={state.checkedB}
                                                    onChange={this.modalCheckStatus.bind(this)}
                                                    value="checkedB"
                                                    color="primary"
                                                />
                                            }
                                            label={t("DONTSHOW24H")}
                                        />
                                    </div>
                                    <div className='popupModalClose'
                                         onClick={this.popupToggle.bind(this)}>
                                        <ClearIcon />
                                    </div>
                                </DialogContent>
                            </Dialog>
                            :null
                        }
                    </NoSSR>
                </Typography>
            </>
        )
    }
}

export default connect(
    state => ({
        blockedPopupDates: state.popup.blockedPopupDates,
    }),
    dispatch => ({
        setPopupBlockDate: (id) => dispatch(PopupAction.setPopupBlockDate(id)),
    })
)(PanelTab);
