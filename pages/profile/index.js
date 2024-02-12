import React, { Component } from 'react'
import * as Contents from '../../redux/modules/contents'
import {connect} from "react-redux";
import * as System from "../../redux/modules/system";
import * as CONST from "../../model/Const";
import * as Note from "../../redux/modules/note";
import * as Users from "../../redux/modules/users";
import {Router} from "../../server/pageRoutes";
import PropTypes from "prop-types";
import { i18n, withTranslation } from '../../i18n';
import GetPoint from './GetPoint';
import MyIncome from './MyIncome';
import MyAdvert from './MyAdvert';
import MyNote from './MyNote';
import ChargeExchange from './ChargeExchange';
import ProfileEdit from './ProfileEdit';
import ProfilePost from './ProfilePost';
import MainTab from "../../components/MainTab";
import {withRouter} from "next/router";

class Index extends Component {
    constructor(props) {
        super(props);
        const go_state = this.props.router.query.go_state;
        let profile_state = go_state==='note'?9:go_state === 'charge'?10:0;
        this.state = {
            activeTab: profile_state,
            profileEditState : false,
            selectTopType : 'view', //like, review
            selectTopBeforeDate : 0,  //0:total, 1:day, 7:week, 30:month
        };
        const {setting} = this.props;
        if (setting.status !== CONST.STATUS_REQ_START) {
            this.props.getSetting();
        }
    }

    componentDidMount() {
        const {mi, getUser} = this.props;
        if (!mi || !mi.member) {
            Router&&Router.pushRoute('/');
            return;
        }
        getUser(mi.id);
    }

    toggleTab (index, value) {
        this.setState({ activeTab: value })
    }
    funcClickEdit() {
        this.setState({
            profileEditState : !this.state.profileEditState,
        })
    }
    
    renderTabContent (activeTab) {
        let content = null;
        if (activeTab === 0 ) {
            return (
                <div style={{display:"flex", alignItems:"center", justifyContent:"center"}} >
                    {/*{this.state.profileEditState?*/}
                        <ProfileEdit page="ProfileEdit"
                                     {...this.props}
                                     funcBackEdit={this.funcClickEdit.bind(this)}
                        />
                        {/*:<MainProfile page="MainProfile" {...this.props}
                                     goCharge={this.toggleTab.bind(this, 'charge', 6)}
                                     goFreePoint={this.toggleTab.bind(this, 'charge', 8)}
                                     goGetPoint={this.toggleTab.bind(this, 'charge', 9)}
                                   funcClickEdit={this.funcClickEdit.bind(this)}/>
                    }*/}
                </div>
            )
        } else if (activeTab === 1 || activeTab === 2 || activeTab === 3 || activeTab === 4 || activeTab===5) {
            let sendType = Contents.CONTENT_PERSON_CONTENT;
            if (activeTab === 1) {
                sendType = Contents.CONTENT_PERSON_CONTENT;
            }
            if (activeTab === 2) {
                sendType = Contents.CONTENT_PERSON_REVIEW;
            } else if (activeTab === 3) {
                sendType = Contents.CONTENT_PERSON_LIKE;
            } else if (activeTab === 4) {
                sendType = Contents.CONTENT_PERSON_FAVOUR;
            } else if (activeTab === 5) {
                sendType = Contents.CONTENT_PERSON_FOLLOW;
            }
            return (
                <ProfilePost page="ProfilePost"
                           type={sendType}
                           user_id={this.props.mi.id}
                           {...this.props}
                />
            )
        } else if (activeTab === 6) {
            return (
                <GetPoint page="GetPoint" {...this.props} />
            )
        } else if (activeTab === 7) {
            return (
                <MyIncome page="MyIncome" {...this.props} />
            )
        } else if (activeTab === 8) {
            return (
                <MyAdvert page="MyAdvert" {...this.props} />
            )
        } else if (activeTab === 9) {
            return (
                <MyNote page="MyNote" {...this.props} />
            )
        } else if (activeTab === 10) {
            return (
                <ChargeExchange {...this.props}/>
            )
        }
    }
    
    render() {
        let tabs = ['MAINDATA', 'MYPOST', 'COMMENTPOST', 'LIKEPOST', 'BOOKMARKPOST', 'FOLLOWPOST', 'GETPOINT', 'MYGETTINGPOINT', 'MY_ADVERT', 'NOTE'];//
        const {t} = this.props,
            tabData = [
                {label:t('MAINDATA')},
                {label:t('MYPOST')},
                {label:t('COMMENTPOST')},
                {label:t('LIKEPOST')},
                {label:t('BOOKMARKPOST')},
                {label:t('FOLLOWPOST')},
                {label:t('GETPOINT')},
                {label:t('MYGETTINGPOINT')},
                {label:t('MY_ADVERT')},
                {label:t('NOTE')},
                {label:t('MONEYCHARGE')},
            ];
        return (
            <MainTab
                type={'profile'}
                tabs={tabData}
                value={this.state.activeTab}
                onChange={(e, v)=>this.toggleTab(e, v)}
                panel={this.renderTabContent(this.state.activeTab)}
                btn_add={false}
            />
        );
    }
}

Index.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

Index.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('common')(withRouter(connect(
    state => ({
        mi: state.system.mi,
        setting : state.system.setting,
        contents: state.contents,
        note: state.note,
        system: state.system,
        users: state.users,
    }),
    dispatch => ({
        doShowContent: (index) => dispatch(Contents.doViewContentAsync(index)),
        setAI: (info) => dispatch(System.setAI(info)),
        setInfo: (info) => dispatch(System.setInfo(info)),
        updateMi: (data) => dispatch(System.updateMI(data)),
        getContents: (loadType, type, userId) => dispatch(Contents.getPersonContentAsync(loadType, type, userId)),
        getReview: (info) => dispatch(Contents.getReviewsAsync(info)),
        getHistory: (type, loadType=CONST.LOAD_TYPE_INIT, filter={}, perPage=10, sort=[], page=CONST.COUNT_ONE_PAGE) => dispatch(System.getHistoryAsync(type, loadType, filter, perPage, sort, page)),
        getSetting: () => dispatch(System.getSettingAsync()),
        getUser: (id) => dispatch(Users.get(id)),
        resetUnreadNote: () => dispatch(Note.updateNote({unReadNoteIds:[]})),
    })
)(Index)));
