import React, {Component} from 'react';
import '../../static/css/mine.css';
import {connect} from "react-redux";
import Card from '@material-ui/core/Card';
import * as System from "../../redux/modules/system";
import * as User from "../../redux/modules/users"
import {dataService} from "../../model/DataService";
import {getStaticServerUrl, httpReq} from "../../model/Req";
import Cropper from 'react-cropper';
import '../../node_modules/cropperjs/dist/cropper.css';
import moment from 'moment'
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import BirthdayIcon from '@material-ui/icons/DateRangeOutlined';
import PhoneIcon from '@material-ui/icons/PhoneAndroidOutlined';
import OldPasswordIcon from '@material-ui/icons/LockOpenOutlined'
import NewPasswordIcon from '@material-ui/icons/LockOpenOutlined'
import IntroductionIcon from '@material-ui/icons/ChatOutlined'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenusMars, faIdCard, faUser, faCodeBranch, faQrcode } from '@fortawesome/free-solid-svg-icons';
import QRCode from 'qrcode.react';
import _lodash from "lodash";

let vm = null;
class Edit extends Component {

    constructor(props) {
        super(props);
        vm = this;
        let {name, picture, introduction, sex, birthday, phone, email, member, country} = this.props.mi;

        this.state = {
            picture: picture,
            name: name,
            sex: sex,
            introductionTxt: introduction,
            phoneNumber: phone?phone:'',
            password:'',
            email:email?email:'',
            country,
            birthday: moment(birthday).format('YYYY-MM-DD'),
            photoChanged: false,
            photoCropping: false,
            saveBtnSate:false,

            passwordChangeState:false,
            inputPassDisabled:true,
            newPassword:'',
            newPassShowState : false,
            confirmNewPassword:'',

            phoneChangeStatus:false,
            newPhoneNumber:'',
            sendReqKey:'',
            authKey:'',
            oldPasswordInvalid:false,
            oldPassShowState : false,
            uploadPhotoChange : false,
        };
        if (!member) {
            this.editBack();
        }
    }

    cancelCrop () {
        this.setState({photoCropping: false, picture: this.props.mi.picture});
    }

    onChange(e) {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            vm.setState({
                picture: reader.result,
                photoCropping: true,
            });
        };
        reader.readAsDataURL(files[0]);
    }

    cropImage() {
        if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
            return;
        }
        this.setState({
            picture: this.cropper.getCroppedCanvas().toDataURL(),
            photoChanged: true,
            photoCropping: false
        });
    }

    changeName = (e) => {
        vm.setState({name: e.target.value})
    };
    changeIntroductionTxt(e) {
        this.setState({introductionTxt:e.target.value});
    }
    funcChangePhoneNumInput = (e) => {
        let value = e.target.value;
        let invalid = !isNaN(value) ? false : true;
        if (!invalid) {
            this.setState({phoneNumber: value});
        }
    };

    changeSex = (e) => {
        vm.setState({
            sex: e.target.value
        })
    };

    changeEmail(e) {
         this.setState({email:e.target.value})
    }

    changeBirth = (e) => {
        if (e) {
            let birthday = moment(e).format('YYYY-MM-DD');
            vm.setState({
                birthday: birthday
            })
        }
    };

    dataURLtoFile(data, filename) {
        let arr = data.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    }

    onSave() {
        let {mi,setUser,setMI,} = this.props,
            {
                birthday, phoneNumber, email, country,
                introductionTxt, name, sex, picture,
                photoChanged, password, newPassword, confirmNewPassword,
            } = this.state;
        let info = {
            name: name,
            sex: sex,
            email: email,
            introduction: introductionTxt,
            phone: phoneNumber,
            birthday: birthday,
            country: country
            // password: password,
        };
        mi.name = name;
        mi.sex = sex;
        mi.birthday = info.birthday;
        mi.email = email;
        mi.country = country;
        mi.introduction = introductionTxt;
        mi.phone = phoneNumber;
        // mi.password = password;
        if (newPassword !== '' || confirmNewPassword !== '') {
            if (password !== mi.password) {// || newPassword !== confirmNewPassword
                this.setState({oldPasswordInvalid:true});
                return;
            }
            info.password = newPassword;
            mi.password = newPassword;
        }
        if (photoChanged) {
            let file = this.dataURLtoFile(picture, 'user.png');
            this.setState({uploadPhotoChange:true});
            dataService.uploadFile('image','profile',file,'',this.progress).then((res)=>{
                if(res.result !=='ok'){
                    alert('upload fail');
                    return;
                }
                mi.picture = getStaticServerUrl()+"/"+res.fname + `?timestemp=${new Date().getTime()}`;
                info.picture = getStaticServerUrl()+"/"+res.fname + `?timestemp=${new Date().getTime()}`;
                setUser(mi.id,info);
                setMI(mi);
                vm.setState({uploadPhotoChange:false});
                // history.go('./mine');
                this.editBack();
            },(err)=>{
                console.log(err)
            })
        } else {
            setUser(mi.id, info);
            setMI(mi);
            this.editBack();
        }
    }

    progress(progress){
        console.log(progress)
    }

    handleChange(e){
        let value = e.target.value, handleName = e.target.name;
        if (handleName==='newPassword') {
            if (value === '' && this.state.confirmNewPassword === '') {
                this.setState({newPassword:value, oldPasswordInvalid: false});
            } else {
                this.setState({newPassword: value});
            }
        } else if (handleName==='confirmNewPassword') {
            if (value === '' && this.state.newPassword === '') {
                this.setState({confirmNewPassword:value, oldPasswordInvalid: false});
            } else {
                this.setState({confirmNewPassword: value});
            }
        } else if (handleName==='oldPassword') {
            this.setState({password:value, oldPasswordInvalid:false});
        } else if (handleName==='newPhoneNumber') {
            let invalid = !isNaN(value) ? false : true;
            if (!invalid) {
                this.setState({newPhoneNumber: value});
            }
        } else if (handleName==='sendReqKey') {
            this.setState({sendReqKey : value});
        }
    }
    handleClickShowOldPassword() {
        this.setState({
            oldPassShowState : !this.state.oldPassShowState,
        })
    }
    handleClickShowNewPassword() {
        this.setState({
            newPassShowState : !this.state.newPassShowState,
        })
    }

    editBack() {
        const {funcBackEdit, setAppModalState, t} = this.props;
        console.log('ProfileEdit.editBack=============');
        // setAppModalState&&setAppModalState('alert', 'change seccess...');
    }

    render() {
        const {mi, t, setting, i18n} = this.props;
        let {birthday, introductionTxt, name, sex, picture, photoCropping, phoneNumber, email, password, newPassword, country} = this.state;
        let qrCodeStr = _lodash.find(setting&&setting.data&&setting.data.msg_qr, {lang: i18n&&i18n.language}) ? _lodash.find(setting&&setting.data&&setting.data.msg_qr, {lang: i18n&&i18n.language}).str : 'welcome...';
        qrCodeStr = qrCodeStr.replace("${rate}", `${setting&&setting.data&&setting.data.exchange_rate_coin}`);
        return (
            <Card style={{backgroundColor: 'white', padding:20}}>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:"column"}}>
                    <div className='edit_data_content'>
                        {!photoCropping ?
                            <div className='edit_img_content'>
                                <div className='edit_image'>
                                    <label htmlFor="upload" style={{width: '100%', display:"flex", alignItems:"center"}}>
                                        <img alt='' src={picture} style={{width: '100%', borderRadius:'50%'}} />
                                    </label>
                                    <input ref={e => this.input = e}
                                           type="file" id="upload" name="file"
                                           accept='image/*'
                                           style={{display: 'none'}}
                                           onChange={this.onChange}
                                    />
                                </div>
                                <QRCode includeMargin={true} size={200} title={qrCodeStr} value={'http://drip.hk?invite=' + mi.invite}/>
                            </div>:
                            <div>
                                <Cropper
                                    ref={cropper => {
                                        this.cropper = cropper
                                    }}
                                    src={picture}
                                    style={{height: 400, width: '100%'}}
                                    // Cropper.js options
                                    aspectRatio={16 / 16}
                                    guides={false}
                                />
                                <div style={{flexDirection:'row', display:'flex'}} className={' justify-content-center mt-2'}>
                                    <Button  variant="outlined" color="primary"
                                             style={{ margin:10 }}
                                             onClick={this.cropImage.bind(this)}
                                             className="btn red point-btn m-3 "
                                    >
                                        {t("PICTURE_CROP")}
                                    </Button>
                                    <Button  variant="outlined" color="primary"
                                             style={{ margin:10 }}
                                             onClick={this.cancelCrop.bind(this)}
                                             className="btn red point-btn m-3 "
                                    >
                                        {t("CANCEL")}
                                    </Button>
                                </div>
                            </div>
                        }
                        <div className='edit_content' action="" method="post">
                            <div className='edit_data_item'>
                                <TextField
                                    id="filled-adornment-password"
                                    style={{margin:5, width:250}}
                                    disabled
                                    label={"DRIP ID"}
                                    value={mi.id}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">
                                            <FontAwesomeIcon icon={faIdCard} style={{fontSize:20}} />
                                        </InputAdornment>,
                                    }}
                                />
                                <TextField
                                    id="filled-adornment-password"
                                    style={{margin:5, width:250}}
                                    disabled
                                    label={t("FOLLOW")}
                                    value={mi.follow?mi.follow.length:12}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">
                                            <img alt='' src='../../static/img/common/like.png' style={{ width: 25 }} />
                                        </InputAdornment>,
                                    }}
                                />
                                <TextField
                                    id="filled-adornment-password"
                                    style={{margin:5, width:250}}
                                    disabled
                                    label={t("MONEY")}
                                    value={mi.point}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">
                                            <img alt='' src='../../static/img/common/point.png' style={{ width: 25 }} />
                                        </InputAdornment>,
                                    }}
                                />
                                <TextField
                                    id="filled-adornment-password"
                                    style={{margin:5, width:250}}
                                    // type={values.showPassword ? 'text' : 'password'}
                                    label={t("NAME")}
                                    value={name}
                                    onChange={this.changeName}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">
                                            <FontAwesomeIcon icon={faUser} style={{fontSize:20}} />
                                        </InputAdornment>,
                                    }}
                                />
                                <TextField
                                    select
                                    style={{margin:5, width: 250}}
                                    label={t("SEX")}
                                    value={sex}
                                    onChange={(e)=>this.changeSex(e)}
                                    InputProps={{
                                        startAdornment:  <InputAdornment position="start">
                                            <FontAwesomeIcon icon={faVenusMars} style={{fontSize:20}} />
                                        </InputAdornment>,
                                    }}
                                >
                                    <MenuItem key={'MALE'} value={true}>
                                        {t("MALE")}
                                    </MenuItem>
                                    <MenuItem key={'FEMALE'} value={false}>
                                        {t("FEMALE")}
                                    </MenuItem>
                                </TextField>
                                <TextField
                                    style={{margin:5, width: 250}}
                                    label={t("EMAIL")}
                                    value={email}
                                    onChange={(e)=>this.changeEmail(e)}
                                    InputProps={{
                                        startAdornment:  <InputAdornment position="start">
                                            <EmailIcon style={{fontSize:25}} />
                                        </InputAdornment>,
                                    }}
                                />
                                <TextField
                                    style={{margin:5, width: 250}}
                                    label={t("BIRTHDAY")}
                                    type='date'
                                    defaultValue={moment(new Date()).format('YYYY-MM-DD')}
                                    value={birthday}
                                    onChange={(e)=>this.changeBirth(e.target.value)}
                                    InputProps={{
                                        startAdornment:  <InputAdornment position="start">
                                            <BirthdayIcon style={{fontSize:25}} />
                                        </InputAdornment>,
                                    }}
                                />
                                <TextField
                                    select
                                    style={{margin:5, width: 250}}
                                    label={t('PROFILE_REGION')}
                                    value={country}
                                    onChange={(e)=>this.setState({country:e.target.value})}
                                    InputProps={{
                                        startAdornment:  <InputAdornment position="start">
                                            <FontAwesomeIcon icon={faVenusMars} style={{fontSize:20}} />
                                        </InputAdornment>,
                                    }}
                                >
                                    <MenuItem key={'CHN'} value={'CHN'}>
                                        {t('REGION_CN')}
                                    </MenuItem>
                                    <MenuItem key={'KOR'} value={'KOR'}>
                                        {t('REGION_KO')}
                                    </MenuItem>
                                    <MenuItem key={'ENG'} value={'ENG'}>
                                        {t('REGION_EN')}
                                    </MenuItem>
                                </TextField>
                            </div>
                            <div className='edit_data_item'>
                                <TextField
                                    id="filled-adornment-password"
                                    style={{margin:5, width:250}}
                                    disabled
                                    label={t("CODE")}
                                    value={mi.invite}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">
                                            <FontAwesomeIcon icon={faCodeBranch} style={{fontSize:20}} />
                                        </InputAdornment>,
                                    }}
                                />
                                <TextField
                                    id="filled-adornment-password"
                                    style={{margin:5, width:250}}
                                    disabled
                                    label={t("FOLLOWER")}
                                    value={mi.followed?mi.followed.length:12}
                                    InputProps={{
                                        startAdornment:
                                            <InputAdornment position="start">
                                                <img alt='' src='../../static/img/common/fs.png' style={{ width: 25 }}/>
                                            </InputAdornment>
                                    }}
                                />
                                <TextField
                                    id="filled-adornment-password"
                                    style={{margin:5, width:250}}
                                    disabled
                                    label={t("COIN")}
                                    value={mi.coin}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">
                                            <img alt='' src='../../static/img/common/coin.png' style={{ width: 25 }} />
                                        </InputAdornment>,
                                    }}
                                />
                                <TextField
                                    style={{margin:5, width: 250}}
                                    label={t("PHONE")}
                                    defaultValue={phoneNumber}
                                    value={phoneNumber}
                                    onChange={(e)=>this.funcChangePhoneNumInput(e)}
                                    InputProps={{
                                        startAdornment:  <InputAdornment position="start">
                                            <PhoneIcon style={{fontSize:25}} />
                                        </InputAdornment>,
                                    }}
                                />
                                <TextField
                                    id="password" name="oldPassword"
                                    style={{margin:5, width:250}}
                                    type={this.state.oldPassShowState ? 'text' : 'password'}
                                    label={t("PASSWORD")}
                                    value={password}
                                    onChange={(e)=>this.handleChange(e)}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">
                                            <OldPasswordIcon style={{fontSize:25}} />
                                        </InputAdornment>,
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    edge="end"
                                                    aria-label="toggle password visibility"
                                                    onClick={()=>this.handleClickShowOldPassword()}
                                                    // onMouseDown={handleMouseDownPassword}
                                                >
                                                    {this.state.oldPassShowState ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                {this.state.oldPasswordInvalid?
                                    <FormHelperText id="component-error-text">Error</FormHelperText>
                                    :null
                                }
                                <TextField
                                    id="password" name="newPassword"
                                    style={{margin:5, width:250}}
                                    type={this.state.newPassShowState ? 'text' : 'password'}
                                    label={t("NEW_PASSWORD")}
                                    value={newPassword}
                                    onChange={(e)=>this.handleChange(e)}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">
                                            <NewPasswordIcon style={{fontSize:20}} />
                                        </InputAdornment>,
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    edge="end"
                                                    aria-label="toggle password visibility"
                                                    onClick={()=>this.handleClickShowNewPassword()}
                                                    // onMouseDown={handleMouseDownPassword}
                                                >
                                                    {this.state.newPassShowState ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <TextField
                                    name="introduction"
                                    style={{margin:5, width: 250}}
                                    label={t("INTRODUCTION")}
                                    value={introductionTxt}
                                    onChange={(e)=>this.changeIntroductionTxt(e)}
                                    InputProps={{
                                        startAdornment:  <InputAdornment position="start">
                                            <IntroductionIcon style={{fontSize:20}} />
                                        </InputAdornment>,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{flexDirection:'row', display:'flex'}} className="form-actions justify-content-around d-flex">
                        <Button  variant="outlined"
                                 style={{ margin:10 }}
                                 disabled={
                                     (birthday === moment(mi.birthday).format('YYYY-MM-DD') &&
                                         introductionTxt === mi.introduction &&
                                         name === mi.name &&
                                         sex === mi.sex &&
                                         picture === mi.picture &&
                                         phoneNumber === (mi.phone?mi.phone:'') &&
                                         newPassword === '' &&
                                         email === (mi.email?email:'')) || this.state.uploadPhotoChange}
                                 onClick={this.onSave.bind(this)}
                                 className="btn red point-btn m-3 "
                        >
                            {t("CHANGE")}
                        </Button>

                        {/*<Button  variant="outlined"
                                     style={{ margin:10 }}
                                     onClick={()=>{this.editBack()}}
                                     className="btn red point-btn m-3 "
                        >
                            {t("CANCEL")}
                        </Button>*/}
                    </div>
                </div>
            </Card>
        )
    }
}

export default connect(
    state => ({
        mi: state.system.mi,
        setting: state.system.setting,
        lang:state.i18nState.lang,
    }),
    dispatch => ({
        setMI: (info) => dispatch(System.setMI(info)),
        setUser: (id, info) => dispatch(User.set(id, info)),
    })
)(Edit)
