import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import PropTypes from "prop-types";
import * as System from '../redux/modules/system'
import {dataService} from "../model/DataService";
import {Router} from "../server/pageRoutes"
// import DialogContentText from '@material-ui/core/DialogContentText';
// import history from '../../history';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default class Notice extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    onCheck(e) {
        let state = e.target.checked;
        dataService.dispatchAction(System.updateMI, {showChatDialog: !state})
    }

    render() {
        let {isOpen, theme, title, content, action, onSubmit, close, context_t} = this.props;
        if (!title) {
            title = context_t("ALERT");
        }
        let footer = <Button color="primary" onClick={close}>
            {context_t('DONE')}
        </Button>;
        if (action === 'login') {
            footer = <>
                <Button color={"primary"} variant={"contained"}
                    onClick={() => Router.pushRoute('/login')}
                >
                    {context_t('LOGIN')}
                </Button>
                <Button color={"secondary"} variant={"contained"} onClick={close} >
                    {context_t('NO')}
                </Button>
            </>
        } else if (action === 'point') {
            footer = <>
                <Button
                    color="primary"
                    variant={"contained"}
                    onClick={() => Router.pushRoute('/profile')}
                >
                    {context_t('POINTIN')}
                </Button>
                <Button
                    variant={"contained"}
                    color="secondary"
                    onClick={close}
                >
                    {context_t('NO')}
                </Button>
            </>
        } else if (action === 'viewConfirm') {

            footer = <>
                <div className="mr-auto pl-2">
                    <input type="checkbox" id="notShowAgain"
                           name="notShowAgain"
                           onClick={this.onCheck}
                    />
                    <span className="form-check-label" check
                           htmlFor="notShowAgain"
                    >
                        {context_t('DONTSHOW')}
                    </span>
                </div>
                <Button
                    color="primary"
                    onClick={() => {
                        close();
                        onSubmit(content.split("/")[1])
                    }}
                >
                    {context_t('PAY&SHOW')}
                </Button>
                <Button onClick={close} >
                    {context_t('NO')}
                </Button>
            </>
        }
        return (
            <Dialog open={isOpen}
                    // keepMounted
                    onClose={close}
                    fullWidth={true}
            >
                <DialogTitle>
                    {title}
                </DialogTitle>
                <DialogContent>
                    {content.split("/")[0]}
                </DialogContent>
                <DialogActions>
                    {footer}
                </DialogActions>
            </Dialog>
        );
    }
}

Notice.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    theme: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired,
    action: PropTypes.string,
    onSubmit: PropTypes.func,
};
Notice.defaultProps = {
    theme: 'modal-primary',
    action: 'notice',
    onSubmit: () => {
        console.log('defaultProps')
    }
};


