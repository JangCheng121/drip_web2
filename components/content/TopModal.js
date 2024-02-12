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
import { withTranslation } from '../../i18n'
import * as CONST from "../../model/Const";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots, faThumbsUp, faEye, faMedal} from "@fortawesome/free-solid-svg-icons";

const topContentItems = [
        {date:0, str:'TOTALTOP'},
        {date:1, str:'DAYTOP'},
        {date:7, str:'WEEKTOP'},
        {date:30, str:'MONTHTOP'}],
    topContentType = [
        {type:'view', icon:<FontAwesomeIcon style={{fontSize:23}} icon={faEye} />, str:'TOPCLICK'},
        {type:'like', icon:<FontAwesomeIcon style={{fontSize:25}} icon={faThumbsUp} />, str:'TOPLIKE'},
        {type:'review', icon:<FontAwesomeIcon style={{fontSize:25}} icon={faCommentDots} />, str:'TOPCOMMENT'}];
class TopModal extends React.Component {

    funcSelectTop(topType, topContentItem) {
        const { toggleModal, selectTop, page } = this.props;
        selectTop({
            selectTopType : topType.type,
            selectTopTypeStr : topType.str,
            selectTopBeforeDate : topContentItem.date,
            selectTopBeforeDateStr : topContentItem.str,
        });
        dataService.isShowTopState = true;
        dataService.selectTopTypeStr = topType.str;
        dataService.selectTopBeforeDateStr = topContentItem.str;
        dataService.store.dispatch(Contents.ActSetData({
            parentKey: ['topPanels', page, Contents.CONTENT_TYPE_TOTAL],
            data: Tools.createObjectAndCopy({
                type:"",
                data:[],
                lastId:0,
                length:0,
                status:CONST.STATUS_REQ_IDLE,
                loadType:CONST.LOAD_TYPE_INIT,
                protoItem : {},
                totalLength: 0,
            }, {type: Contents.CONTENT_TYPE_TOTAL})}));
        toggleModal();
    }

    render() {
        const { toggleModal, modalState, t } = this.props;
        return (
            <Dialog open={modalState}
                    onClose={toggleModal}
                    maxWidth='md'
                    classes={{paper:'top_modal_content_margin'}}
            >
                <DialogTitle style={{textAlign:"center"}}>
                    <FontAwesomeIcon style={{fontSize:30, color:"red"}} icon={faMedal} />
                </DialogTitle>
                <DialogContent className=''>
                    {topContentType.map((item, key) =>{
                        return(
                            <div key={key} className='m-3 div_row align-items-center justify-content-center' >
                                <div style={{marginRight:10, display:"flex"}}>{item.icon}</div>
                                <div className='div_row ml-0 mr-0' style={{}}>
                                    {topContentItems.map((dataItem, key) => {
                                        return(
                                            <Button variant='contained' key={key}
                                                    onClick={()=>{this.funcSelectTop(item, dataItem)}}
                                                    className='align-items-center justify-content-center top_modal_btn'>
                                                <h4 style={{margin:0}}>
                                                    {t(dataItem.str)}
                                                </h4>
                                            </Button>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </DialogContent>
            </Dialog>
        );
    }
}
TopModal.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

TopModal.propTypes = {
    t: PropTypes.func.isRequired,
}
export default withTranslation('common')(TopModal);
