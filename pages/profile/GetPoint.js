import React, {Component} from 'react';
import '../../static/css/mine.css'
import {dataService} from "../../model/DataService";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from "@material-ui/core/Button";
import _lodash from 'lodash';
import {httpReq} from "../../model/Req";

let vm = null;
class GetPoint extends Component {

    constructor(props) {
        super(props);
        vm = this;
        this.state = {
            chargeHistory : dataService.chargeHistory,
            content_continue_cnt : 0,
            review_continue_cnt : 0,
            advert_continue_cnt : 0,
            follow_continue_cnt : 0,
            invite_continue_cnt : 0,

            attendBtnDisabled: false,
        };
        if (!this.props.setting || !this.props.setting.data) {
            this.props.getSetting();
        }
    }

    componentDidMount() {
        dataService.get_free_point_info().then(
            (res)=>{
                vm.setState({
                    content_continue_cnt : res.content?res.content:0,
                    review_continue_cnt : res.review?res.review:0,
                    advert_continue_cnt : res.advert?res.advert:0,
                    follow_continue_cnt : res.follow?res.follow:0,
                    invite_continue_cnt : res.invite?res.invite:0,
                })
            },
            (err)=>{
                console.log(err);
            }
        )
    }

    exchangeMoney(money) {
        alert(money);
    }

    funcClickAttend() {
        const {updateMi, system, setAppModalState, t} = this.props;
        let token = system&&system.ai&&system.ai.token;
        if (!token) {
            console.log('nothing token....');
            return
        }
        httpReq('/api/user/present', 'post', {token:token}).then(
            (res) => {
                if (res.msg === 'done') {
                    setAppModalState('alert', t('MISSION_SUCCESS'));
                } else if (res.msg === 'same day') {
                    setAppModalState('alert', t('ALREADY_ATTEND'));
                } else if (res.result) {
                    updateMi({stat:{login_continue:res.result}});
                }
                this.setState({attendBtnDisabled:!this.state.attendBtnDisabled});
                console.log('funcClickAttend success', res);
            },
            (err) => {
                console.log('httpReq err', err);
            }
        )
    }

    render() {
        const
            {
                point_content,
                point_content_cnt,
                point_review,
                point_review_cnt,
                point_advert,
                point_advert_cnt,
                point_attend,//array
                point_invite,
                point_follow,
                point_follow_cnt,
            }= this.props.setting.data,
            {mi, t} = this.props;
        let totalGetPoint = 0;
        for (let index in point_attend) {
            totalGetPoint += point_attend[index].point;
        }
        let total_attend_day = point_attend&&point_attend[point_attend.length-1]&&point_attend[point_attend.length-1].day;
        let today_get_point_attend = 0;
        let total_get_point_login = 0;
        for (let index in point_attend) {
            total_get_point_login = point_attend[index]&&point_attend[index].point?point_attend[index].point:0;
        }
        if (mi&&mi.stat&&mi.stat.login_continue !== undefined) {
            let today_attend_data =_lodash.find(point_attend&&point_attend?point_attend:[], {day:(mi.stat.login_continue + 1)});
            today_get_point_attend = today_attend_data?today_attend_data.point:0;
        }
        return (
            <div className='div_column'>
                {/*연속 로그인*/}
                <Card className="border-0" style={{margin:10}}>
                    <CardContent style={{backgroundColor: 'rgba(255,170,194,0.48)', padding:15}}>
                        <div className='align-items-center div_row'>
                            <div className='div_column' style={{flex:10}}>
                                <div className='div_row align-items-center'>
                                    <h3 style={{margin: '5px 0'}}>
                                        {t('EVERYDAYLOGIN',
                                            {
                                                day:total_attend_day,
                                                checked_day:mi&&mi.stat&&mi.stat.login_continue?mi.stat.login_continue:0
                                            })
                                            +
                                            t('TOTAL_POINT', {point:total_get_point_login})
                                        }
                                    </h3>
                                </div>
                                <div className='div_row align-items-center justify-content-between'>
                                    <h5 style={{margin:'5px 0'}}>
                                        {t('GET_POINT_ATTEND', {point:today_get_point_attend})}
                                    </h5>
                                </div>
                            </div>
                            <div style={{flex:1, alignItems:'center'}} className='div_column'>
                                <Button variant="outlined"
                                        disabled={this.state.attendBtnDisabled}
                                        onClick={()=>{this.funcClickAttend()}}
                                >
                                    {t('CHECK_ATTEND')}
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                {/*회원추천*/}
                <Card className="border-0" style={{margin:10}}>
                    <CardContent style={{backgroundColor: 'rgba(255,170,194,0.48)', padding:15}}>
                        <div className='align-items-center div_row'>
                            <div className='div_column' style={{flex:10}}>
                                <div className='div_row align-items-center'>
                                    <h3 style={{margin: '5px 0'}}>
                                        {t('RECOMMEND_USER',{user_cnt:this.state.invite_continue_cnt,})}
                                    </h3>
                                </div>
                                <div className='div_row align-items-center justify-content-between'>
                                    <h5 style={{margin:'5px 0'}}>
                                        {t('RECOMMEND_USER_ALERT', {coin:point_invite})}
                                    </h5>
                                </div>
                            </div>
                            <div style={{flex:1, alignItems:"center"}} className='div_column'>
                                {t('GAINS')}
                                <Button variant="outlined" disabled>
                                    {(point_invite*this.state.invite_continue_cnt) + t('COIN')}
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                {/*게시글 작성*/}
                <Card className="border-0" style={{margin:10}}>
                    <CardContent className='p-0' style={{backgroundColor: 'rgba(143,241,255,0.6)', padding:15}}>
                        <div className='align-items-center div_row' style={{marginTop:5}}>
                            <div className='div_column' style={{flex:10}}>
                                <div className='div_row align-items-center'>
                                    <h3 style={{margin:'5px 0'}}>{t('MAKESOCIAL', {total_cnt:point_content_cnt?point_content_cnt:10, content_cnt:this.state.content_continue_cnt})}</h3>
                                </div>
                                <LinearProgress style={{height:10, marginRight:5}} color="secondary" variant="determinate" value={this.state.content_continue_cnt/(point_content_cnt?point_content_cnt:10)*100} />
                                <h5 style={{margin:'10px 0 0 0'}}>{t('MAKE_SOCIAL_ALERT', {cnt:point_content_cnt, point:point_content_cnt*point_content})}</h5>
                            </div>
                            <div style={{flex:1, alignItems:"center"}} className='div_column'>
                                {t('GAINS')}
                                <Button variant="outlined" disabled>
                                    {(point_content*this.state.content_continue_cnt) + t('POINT')}
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                {/*댓글 작성*/}
                <Card className="border-0" style={{margin:10}}>
                    <CardContent className='p-0' style={{backgroundColor: 'rgba(155,232,183,0.58)', padding:15}}>
                        <div className='align-items-center div_row' style={{marginTop:5}}>
                            <div className='div_column' style={{flex:10}}>
                                <div className='div_row align-items-center'>
                                    <h3 style={{margin:'5px 0'}}>{t('MAKECOMMEN', {total_cnt:point_review_cnt, comment_cnt:this.state.review_continue_cnt})}</h3>
                                </div>
                                <LinearProgress style={{height:10, marginRight:5}} color="secondary" variant="determinate" value={this.state.review_continue_cnt/(point_review_cnt?point_review_cnt:10)*100} />
                                <h5 style={{margin:'10px 0 0 0'}}>{t('MAKE_COMMENT_ALERT', {comment_cnt:point_review_cnt, total_point:point_review_cnt*point_review})}</h5>
                            </div>
                            <div style={{flex:1, alignItems:"center"}} className='div_column'>
                                {t('GAINS')}
                                <Button variant="outlined" disabled>
                                    {(point_review*this.state.review_continue_cnt) + t('POINT')}
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                {/*광고 보기*/}
                <Card className="border-0" style={{margin:10}}>
                    <CardContent className='p-0' style={{backgroundColor: 'rgba(255,219,171,0.58)', padding:15}}>
                        <div className='align-items-center div_row' style={{marginTop:5}}>
                            <div className='div_column' style={{flex:10}}>
                                <div className='div_row align-items-center'>
                                    <h3 style={{margin:'5px 0'}}>{t('SHOW_ADVERT', {advert_cnt:this.state.advert_continue_cnt, total_cnt:point_advert_cnt})}</h3>
                                </div>
                                <LinearProgress style={{height:10, marginRight:5}} color="secondary" variant="determinate" value={this.state.advert_continue_cnt/(point_advert_cnt?point_advert_cnt:10)*100} />
                                <h5 style={{margin:'10px 0 0 0'}}>{t('SHOW_ADVERT_ALERT', { total_point:point_advert_cnt*point_advert})}</h5>
                            </div>
                            <div style={{flex:1, alignItems:"center"}} className='div_column'>
                                {t('GAINS')}
                                <Button variant="outlined" disabled>
                                    {(point_advert*this.state.advert_continue_cnt) + t('POINT')}
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/*팔로잉*/}
                <Card className="border-0" style={{margin:10}}>
                    <CardContent className='p-0' style={{backgroundColor: 'rgba(143,241,255,0.6)', padding:15}}>
                        <div className='align-items-center div_row' style={{marginTop:5}}>
                            <div className='div_column' style={{flex:10}}>
                                <div className='div_row align-items-center'>
                                    <h3 style={{margin:'5px 0'}}>{t('FOLLOW') + '(' + `${this.state.follow_continue_cnt}/${point_follow_cnt?point_follow_cnt:123}` + ')' }</h3>
                                </div>
                                <LinearProgress style={{height:10, marginRight:5}} color="secondary" variant="determinate" value={this.state.follow_continue_cnt/(point_follow_cnt?point_follow_cnt:123)*100} />
                                <h5 style={{margin:'10px 0 0 0'}}>{t('FOLLOW_ALERT', {user_cnt:point_follow_cnt?point_follow_cnt:123, total_point:(point_follow_cnt?point_follow_cnt:123)*point_follow})}</h5>
                            </div>
                            <div style={{flex:1, alignItems:"center"}} className='div_column'>
                                {t('GAINS')}
                                <Button variant="outlined" disabled>
                                    {(point_follow*this.state.follow_continue_cnt) + t('POINT')}
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default GetPoint;
