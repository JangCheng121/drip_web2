import React, { Component } from 'react'
// import Button from '@material-ui/core/Button'
import PhoneIcon from '@material-ui/icons/PhoneAndroid';
import NoteIcon from '@material-ui/icons/Drafts'
import EmailIcon from '@material-ui/icons/Email';
import EditIcon from '@material-ui/icons/BorderColor';
import BirthdayIcon from '@material-ui/icons/DateRange';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenus, faMars } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import '../../static/css/mine.css'

class MainProfile extends Component {

    funcClickEditButton() {
        const {funcClickEdit} = this.props;
        funcClickEdit&&funcClickEdit();
    }

    render () {
        let {name, picture, sex, invite, point, coin, follow, followed, id, birthday, phone, email} = this.props.mi;
        const {note, t, goCharge, goFreePoint, goGetPoint} = this.props;
        return (
            <div className='infoContainer bg-white profile_content' >
                <div style={{ minWidth: 250, maxWidth: 350 }}>
                    <img alt='' src={picture} style={{ width: '100%' }}/>
                </div>
                <div className='col-auto mb-2'>
                    <div className='main_prof_item' >
                        <div style={{flexDirection:"row", display:"flex"}}>
                            <h3 className={'mb-0'} style={{margin:0, marginRight:10}}>{name}</h3>
                            <div style={{marginRight:30}}>
                                {sex ?
                                    <FontAwesomeIcon icon={faMars} style={{color:'blue', fontSize:25}} />
                                    : <FontAwesomeIcon icon={faVenus} style={{color:"red", fontSize:25}} />
                                }
                            </div>
                        </div>
                        <div className='' style={{flexDirection:'row', display:'flex', alignItems:"center", marginRight:30}}>
                                    <span className='code-label' style={{fontSize:20}}>
                                        DRIP ID :
                                    </span>
                            <span className='code-font ml-1 font-xl' style={{fontSize:20}}>{id}</span>
                        </div>
                        <div className='row ml-5' style={{flexDirection:'row', display:'flex', fontSize:20}}>
                            <span className='code-label'>CODE :</span>
                            <span className='code-font'>{invite}</span>
                        </div>
                    </div>
                    <div className='main_prof_item' >
                        <div className='message-font mr-3' style={{marginRight:30, alignItems:"center", display:'flex'}}>
                            <NoteIcon style={{fontSize:35, color:'red'}} />
                            {note.unReadNoteIds.length ? note.unReadNoteIds.length : 0}
                        </div>
                        <div className='like-font mr-3' style={{marginRight:30, alignItems:"center", display:'flex'}}>
                            <img alt='' src='../../static/img/common/like.png' style={{ width: 35 }}
                                 className={'pl-2 pr-2'}/>
                            {followed ? followed.length : 123}
                        </div>
                        <div className='follow-font mr-3' style={{marginRight:30, alignItems:"center", display:'flex'}}>
                            <img alt='' src='../../static/img/common/fs.png' style={{ width: 35 }}
                                 className={'pl-2 pr-2'}/>
                            {follow ? follow.length : 123}
                        </div>
                        <div className='follow-font mr-3' style={{marginRight:30, alignItems:"center", display:'flex'}}>
                            <img alt='' src='../../static/img/common/point.png' style={{ width: 35 }}
                                 className={'pl-2 pr-2'}/>
                            {point}
                        </div>
                        <div className='follow-font' style={{alignItems:"center",display:"flex"}}>
                            <img alt='' src='../../static/img/common/coin.png' style={{ width: 35 }}
                                 className={'pl-2 pr-2'}/>
                            {coin}
                        </div>
                    </div>
                    <div className='main_prof_item' >
                        <span className='mr-5 follow-font' style={{marginRight:30, alignItems:'center', display:'flex'}}>
                            {/*<i className="fa fa-calendar mr-2"/>*/}
                            <BirthdayIcon style={{fontSize:35, marginRight:10}} />
                            {moment(birthday).format('YYYY-MM-DD')}
                        </span>
                        <span className='mr-5 follow-font' style={{marginRight:30, alignItems:'center', display:'flex'}}>
                            {/* <i className="fa fa-phone mr-2"/> */}
                            <PhoneIcon style={{fontSize:32}}/>
                            <span>{phone}</span>
                        </span>
                        <span className='follow-font' style={{marginRight:20, alignItems:'center', display:'flex'}}>
                            {/* <i className="fa fa-envelope mr-2"/> */}
                            <EmailIcon style={{fontSize:32}} />
                            {email ? email : '...'}
                        </span>
                    </div>
                    {/*<div className='row m-3' style={{flexDirection:'row', display:'flex'}}>
                        <Button  variant="outlined" color="primary"
                                style={{ margin:10 }}
                                onClick={() => { goCharge() }}
                                className="btn red point-btn m-3 "
                        >
                            {t('MONEYCHARGE')}
                        </Button>
                        <Button variant="outlined" color="primary"
                                style={{ margin:10 }}
                                onClick={() => { goFreePoint() }}
                                className="btn red point-btn m-3"
                        >
                            {t("FREEPOINT")}
                        </Button>
                        <Button variant="outlined" color="primary"
                                style={{ margin:10 }}
                                onClick={() => { goGetPoint() }}
                                className="btn red point-btn m-3"
                        >
                            {t("MYGETTINGPOINT")}
                        </Button>                        
                    </div>*/}
                </div>
                <div className='profile_edit_btn'
                     onClick={()=> this.funcClickEditButton()}
                >
                    <EditIcon style={{fontSize:30}} />
                </div>
            </div>
        )
    }
}

export default MainProfile