import React, { Component } from 'react';
import {connect} from "react-redux";
import PanelTab from '../../components/content/panelTab';
import * as Contents from "../../redux/modules/contents";
import * as System from "../../redux/modules/system";
import * as Users from "../../redux/modules/users";
import PropTypes from "prop-types";
import {withTranslation} from "../../i18n";

class Image extends Component {

    render () {
        return (
            <>
                <PanelTab {...this.props} page={Contents.IMAGE_CATEGORY} />
            </>
        )
    }
}
Image.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

Image.propTypes = {
    t: PropTypes.func.isRequired,
}
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
)(Image))