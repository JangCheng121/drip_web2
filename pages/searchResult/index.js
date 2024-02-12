import React, {Component, Suspense} from 'react';
import {withRouter} from "next/router";
import {connect} from "react-redux";
import * as Contents from "../../redux/modules/contents";
import * as System from "../../redux/modules/system";
import * as Users from "../../redux/modules/users";
import SocialPannel from "../../components/content/panel";
import * as CONST from "../../model/Const";
import PropTypes from "prop-types";
import {withTranslation} from "../../i18n";

class SearchResult extends Component {

    constructor(props) {
        super(props);
        const searchStr = this.props.router.query.searchData;
    }

    componentDidMount() {
        const {getContents} = this.props;
        const searchParam =  JSON.parse(this.props.router.query.searchData);
        getContents(CONST.LOAD_TYPE_INIT, searchParam);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {getContents} = this.props;
        const searchParam =  JSON.parse(nextProps.router.query.searchData);
        if (nextProps.router.query.searchData !== this.props.router.query.searchData) {
            getContents(CONST.LOAD_TYPE_INIT, searchParam);
        }
        return true;
    }

    panLoadMoreData() {
        const {getContents} = this.props;
        const searchParam =  JSON.parse(this.props.router.query.searchData);
        getContents(CONST.LOAD_TYPE_MORE, searchParam);
    }

    render() {
        const searchStr = JSON.parse(this.props.router.query.searchData);
        const {contents: {panels}, mi} = this.props;
        let panel = panels[Contents.SEARCH_CATEGORY];
        return (
            <div className="animated fadeIn">
                <Suspense fallback={<div>Loading...</div>}>
                    <SocialPannel
                        panel={panel}
                        isSearch={true}
                        searchStr={searchStr?searchStr.search_str:''}
                        contentType={'data'}//video, image => total, social=>total, image, video
                        realCategoryId={Contents.SEARCH_CATEGORY}
                        {...this.props}
                        category_id={Contents.SEARCH_CATEGORY}
                        isShowTop={false}
                        loadMoreFunc={this.panLoadMoreData.bind(this, Contents.SEARCH_CATEGORY, 'data')}
                    />
                </Suspense>
            </div>
        )
    }
}
SearchResult.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

SearchResult.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withRouter(withTranslation('common')(connect(
    state => ({
        users: state.users,
        mi: state.system.mi,
        ai: state.system.ai,
        contents: state.contents,
    }),
    dispatch => ({
        doShowContent: (index) => dispatch(Contents.doViewContentAsync(index)),
        getContents: (loadType, searchData) => dispatch(Contents.getSearchContentAsync(loadType, searchData)),
        doFollow: (id, isFollow) => dispatch(System.doFollowAsync(id, isFollow)),
        updateUser: (id, userInfo) => {
            dispatch(Users.updateUser(id, userInfo))
        },
    })
)(SearchResult)));