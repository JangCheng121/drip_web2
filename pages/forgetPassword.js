import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormHelperText from '@material-ui/core/FormHelperText';
import Link from "../components/Link";

import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'

import {httpReq} from "../model/Req";
import {auth} from "../model/Auth";
import { connect } from 'react-redux';
import * as System from "../redux/modules/system";
import * as User from "../redux/modules/users";

import {Router} from "../server/pageRoutes";
import Back from "../components/back";

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        // backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
let timer = null;
export const TimeCount = (props) => {
    const [timeCount, setTimeCount] = useState(60);
    useEffect(() => {
        if (timer) clearInterval(timer);
        timer = setInterval(() => {
            const count = timeCount - 1;
            console.log("here is timer.reqAuthKeyState:", count);
            if (count <= 0) {
                clearInterval(timer);
                timer = null;
                props.setReqAuthKeyState();
            } else {
                setTimeCount(count);
            }

        }, 1000);
        return () => clearInterval(timer);
    }, [timeCount]);
    return (
        <span>{timeCount}s</span>
    )
}
const ForgetPassword = (props) => {
    const classes = useStyles();

    const [name, setName] = useState('');
    const [areaCode, setAreaCode] = useState(1);
    const [phone, setPhone] = useState('');
    const [enterKey, setEnterKey] = useState('');
    const [authKey, setAuthKey] = useState('');
    const [password, setPassword] = useState('');
    const [reqAuthKeyState, setReqAuthKeyState] = useState(false);
    const [authKeyInvalid, setAuthKeyInvalid] = useState(true);
    const [authKeyError, setAuthKeyError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    function handleChange(event) {
        const value = event.target.value;
        if (event.target.name === 'name') {
            setName(value)
        }
        else if (event.target.name === 'authKey') {
            setEnterKey(value)
            setAuthKeyError('')
        } else if (event.target.name === 'password') {
            setPassword(value)
        }

    }

    function changePhoneNumber(value, data) {
        setPhone(value.replace(/[^0-9]+/g, '').slice(data.dialCode.length));
        setAreaCode(data.dialCode);
        setPhoneError('');
    }

    function reqAuthKey() {
        let uuid = `${areaCode}${phone}`;
        setReqAuthKeyState(true);

        httpReq('/account/get_auth', 'post', {method: 'phone', uuid: uuid, pNum: phone, areaCode: areaCode})
            .then((response) => {
                if (response.result === 'ok') {
                    //개체식별자를 바꾼다.
                    auth.ai.uuid = areaCode + phone;
                    if (response.code) { //for debug version
                        setAuthKey(response.code);
                    }
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function setHookState(type, value) {
        if (type === 'phoneError') {
            setPhoneError(value);
        } else if (type === 'authKeyError') {
            setAuthKeyError(value)
        } else if (type === 'authKeyInvalid') {
            setAuthKeyInvalid(value);
        } else if (type === 'reqAuthKeyState'){
            setReqAuthKeyState(value);
        }
    }

    function doAuth() {
        let params = {
            uuid: auth.ai.uuid,
            code: enterKey,
            method: 'phone',
            pNum: phone,
            areaCode: areaCode,
            action: '' //'find': 다른 사용자로 가입, '':정식회원 가입
        };
        let type = '';
        httpReq('/account/get_auth', 'post', params)
            .then((res) => {
                if (res.result !== 'ok') {
                    setHookState('authKeyError', "인증키가 정확하지 않습니다.");
                    return;
                }
                clearInterval(timer);
                timer = null;
                setHookState('reqAuthKeyState', false);
                if (res.user_id) {
                    if (res.user_id !== auth.ai.user_id) {
                        //인증을 통해 다른 사용자로 가입한 경우
                        auth.ai.user_id = res.user_id;
                        auth.ai.authkey = res.authkey;
                        type = 'init'
                    }
                }
                auth.procAuth(type).then((resp) => {
                    setHookState("authKeyInvalid", false);
                }, (err) => {
                    console.log('proAuth Error', err);
                });

            }, (err) => {
                console.log('auth Error', err);
            })

    }

    function changePassword() {
        let {mi, setUser, setMI} = props;
        let info = {
            password: password
        };
        mi.password = password;

        httpReq('/api/auth/register', 'post', {user_id: mi.id, info: info}).then(res => {
            setMI(mi);
            setUser(mi.id, mi);
            Router.pushRoute('/login');
        }, err => {
            console.log(err);
        });
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div style={{marginLeft:"auto", width:"fit-content", marginTop:50}}>
                <Back props={props}/>
            </div>
            <div className={classes.paper}>
                <div className={classes.avatar}>
                    <img src="../static/image/logo.png" style={{width: '100%', height: '100%'}}/>
                </div>
                <Typography component="h1" variant="h5">
                    비번변경 {authKey}
                </Typography>
                <div className={classes.form}>
                    <Grid container justify='flex-start' spacing={2}>
                        <Grid item xs={12} sm={8}>
                            <ReactPhoneInput
                                defaultCountry={'cn'}
                                placeholder={"폰번호"}
                                disabled={reqAuthKeyState}
                                value={phone}
                                enableSearchField={true}
                                autoFormat={false}
                                conatinerStyle={{width: '100%'}}
                                inputStyle={{width: '100%', height: 56}}
                                onChange={changePhoneNumber}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="outlined"
                                disabled={reqAuthKeyState}
                                style={{height: 56}}
                                onClick={reqAuthKey}
                            >
                                {reqAuthKeyState ?
                                    <TimeCount setReqAuthKeyState={() => setReqAuthKeyState(false)}/> : '인증키요청'}
                            </Button>
                        </Grid>
                        <span style={{paddingTop: 3, color: 'red'}}>{phoneError}</span>
                        <Grid item xs={12} sm={8}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="authKey"
                                label="인증키"
                                name="authKey"
                                autoComplete="authKey"
                                disabled={!reqAuthKeyState}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="outlined"
                                style={{height: '100%'}}
                                disabled={!reqAuthKeyState}
                                onClick={doAuth}
                            >
                                {authKeyInvalid ? '인증키확인' : '인증됨'}
                            </Button>
                        </Grid>
                        <span style={{paddingTop: 3, color: 'red'}}>{authKeyError}</span>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="비번"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={authKeyInvalid}
                        style={{height: '100%'}}
                        onClick={changePassword}
                    >
                        비번변경
                    </Button>
                </div>
            </div>
        </Container>
    );
}

export default connect(
    state=>({
        mi:state.system.mi,
    }),
    dispatch=>({
        setMI: (info) => dispatch(System.setMI(info)),
        setUser: (id, info) => dispatch(User.set(id, info)),
    })
)(ForgetPassword);
