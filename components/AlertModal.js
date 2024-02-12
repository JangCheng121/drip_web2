import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import * as System from "../redux/modules/system";
import {connect} from "react-redux";
import {Router} from "../server/pageRoutes";
import PropTypes from "prop-types";
import { i18n, withTranslation } from '../i18n';

class AlertModal extends React.Component {

    goPage() {
        const {toggleFunc, goStatus, funcBtnOkCallback} = this.props;
        toggleFunc();
        if (goStatus === 'login' || goStatus === 'advert_login') {
            Router && Router.pushRoute('/login');
            return;
        } else if (goStatus === 'charge') {
            Router.pushRoute('profile',{ go_state: 'charge' });
            return;
        }
        funcBtnOkCallback();
    }

    notShowAgainChange(e) {
        const {goStatus, funcCheckedCallback} = this.props;
        let noShowChecked = e.target.checked;
        funcCheckedCallback(noShowChecked, goStatus)
    }

    render() {

        const {
            toggleFunc, alertStr, t,
            checkStatus, btnOkStr, modalStatus, funcBtnOkCallback, goStatus
        } = this.props;
        return (
            <Dialog
                fullWidth={true}
                open={modalStatus}
                onClose={toggleFunc}
            >
                <DialogTitle>
                    {t('ALERT')}
                </DialogTitle>
                <DialogContent>
                    {alertStr}
                </DialogContent>
                <DialogActions>
                    {checkStatus ?
                        <FormControlLabel
                            control={
                                <Checkbox
                                    // checked={state.checkedB}
                                    onChange={this.notShowAgainChange.bind(this)}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="DONTSHOW"
                        />
                        : null
                    }
                    <Button variant={'contained'} onClick={() => this.goPage()} color="primary">
                        {btnOkStr}
                    </Button>
                    <Button variant={'contained'} onClick={toggleFunc} color="secondary" autoFocus>
                        {t('CANCEL')}
                    </Button>
                    {goStatus === 'advert_login' ?
                        <Button variant={'contained'} color="primary" onClick={funcBtnOkCallback}>
                            {t('CONTINUE')}
                        </Button>
                        : null
                    }
                </DialogActions>
            </Dialog>
        );
    }
}
AlertModal.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

AlertModal.propTypes = {
    t: PropTypes.func.isRequired,
}
export default withTranslation('common')(connect(
    dispatch => ({
        notShowAlert_System: (data) => dispatch(System.updateMI(data)),
    })
)(AlertModal));
