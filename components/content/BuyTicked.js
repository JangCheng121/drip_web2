import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button';
import '../../static/css/mine.css'
import {dataService} from "../../model/DataService";
import * as Contents from "../../redux/modules/contents";
import * as Tools from "../../lib/tool";
import PropTypes from "prop-types";
import { i18n, withTranslation } from '../../i18n'
import * as CONST from "../../model/Const";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots, faThumbsUp, faEye, faStar} from "@fortawesome/free-solid-svg-icons";
import {DialogActions} from "@material-ui/core";
import Empty from "../Empty";

class BuyTicked extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalState : false,
        }
    }

    openModal() {
        const {mi} = this.props;
        if (!mi.member) {
            this.funcToggleAlertModal('login');
            return;
        }
        this.setState({modalState: !this.state.modalState});
    }

    funcToggleAlertModal(type) {

    }

    render() {
        // const { t } = this.props;
        return (
            <div className='div_column align-items-center' style={{margin:"auto"}}>
                {/*<div className='div_row' style={{justifyContent:"center"}}>
                    <div>
                        <h3>{('EMPTYCONTENTSNOTI')}</h3>
                    </div>
                </div>
                <div>
                    <Empty />
                </div>
                <div>
                    <Button variant='contained'
                            style={{margin:5, backgroundColor:"white",color:"black"}}
                            onClick={()=>{this.openModal()}}
                            className='align-items-center justify-content-center'>
                        <h4 style={{margin:0}}>
                            {('PAYMENT')}
                        </h4>
                    </Button>
                </div>
                <Dialog open={this.state.modalState}
                        onClose={this.funcToggleAlertModal.bind(this)}
                    // className='modal-primary border-0 top_modal_content'
                >
                    <DialogTitle style={{textAlign:"center"}}>
                        <FontAwesomeIcon style={{fontSize:30, color:"red"}} icon={faStar} />
                    </DialogTitle>
                    <DialogContent className=''>
                        DialogContent..
                    </DialogContent>
                    <DialogActions>
                        <div className='align-items-center mr-4'>
                            <img alt='' src='../../static/img/common/point.png' style={{width: 25}}/>
                            <label className='ml-2 mb-0'>{mi.point}</label>
                        </div>
                        <Button color="danger" onClick={this.openModal.bind(this)}>{('CANCEL')}</Button>
                    </DialogActions>
                </Dialog>*/}
                tickit
            </div>
        );
    }
}
export default BuyTicked;
