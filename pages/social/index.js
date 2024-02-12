import React, { Component } from 'react';
import SocialPage from '../../components/content/panelTab';
import {connect} from "react-redux";
import * as Contents from "../../redux/modules/contents";
import * as System from "../../redux/modules/system";
import * as Users from "../../redux/modules/users";
import {withTranslation} from '../../i18n';
import PropTypes from "prop-types";

class Social extends Component {
    
    render () {
        return (
            <>
                <SocialPage {...this.props} page={Contents.SQUARE_CATEGORY} />
            </>
        )
    }
}
Social.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

Social.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('common')(connect(
    state => ({
        users: state.users,
        mi: state.system.mi,
        ai: state.system.ai,
        contents: state.contents,
    }),
    dispatch => ({
        doShowContent: (index) => dispatch(Contents.doViewContentAsync(index)),
        getCategories: () => dispatch(Contents.getCategoriesAsync()),
        getContents: (categoryId, loadType, type) => dispatch(Contents.ActGetContentPanelAsync(categoryId, loadType, type)),
        getTopContents: (categoryId, loadType, type, topType = 'view', topBeforeDate = 0) => dispatch(Contents.getTopPanelAsync(categoryId, loadType, type, topType, topBeforeDate)),
        doFollow: (id, isFollow) => dispatch(System.doFollowAsync(id, isFollow)),
        updateUser: (id, userInfo) => {
            dispatch(Users.updateUser(id, userInfo))
        },
    })
)(Social))