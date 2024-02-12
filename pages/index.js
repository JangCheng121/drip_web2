import React, {useEffect} from 'react'
import '../static/css/style.css'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {withTranslation} from '../i18n';
import * as System from "../redux/modules/system";
import loadable from "@loadable/component";

const AsyncPage = loadable(props => import(`./${props.page}`));
class Index extends React.Component {

    render() {
        const {setting} = this.props;
        let first_page = setting && setting.data && setting.data.first_page?setting.data.first_page:'social';
        if (first_page !== 'social' || first_page !== 'image' || first_page !== 'video' || first_page !== 'service' || first_page !== 'home') {
            first_page = 'social'
        }
        console.log('page/index.js render============setting.data.first_page======', setting && setting.data && setting.data.first_page);
        return (
            <React.Fragment>
                <AsyncPage page='home' {...this.props} />
            </React.Fragment>
        );
    }
}

Index.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

Index.propTypes = {
    t: PropTypes.func.isRequired,
};

export default withTranslation('common')(
    connect(
        state => ({
            mi: state.system.mi,
            ai: state.system.ai,
            setting: state.system.setting,
        }),
        dispatch => ({
            getSetting: () => dispatch(System.getSettingAsync()),
        })
    )(Index)
)