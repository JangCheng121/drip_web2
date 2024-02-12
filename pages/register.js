import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from "../components/Link";
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'
import {httpReq} from "../model/Req";
import {auth} from "../model/Auth";
import {connect} from 'react-redux';
import * as System from "../redux/modules/system";
import * as User from "../redux/modules/users";
import {Router} from "../server/pageRoutes";
import Back from "../components/back";
import FormHelperText from '@material-ui/core/FormHelperText';
import Avatar from '@material-ui/core/Avatar';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from "prop-types";
import {withTranslation} from "../i18n";
import {config} from '../config/config'

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
const Register = (props) => {
    const classes = useStyles();
    const {t} = props;
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
    const [isPhoneRegister, setIsPhoneRegister] = useState(false);
    const [passShowState, setPassShowState] = useState(false);
    const [user_id, setUserId] = useState('');

    function handleChange(event) {
        const value = event.target.value;
        if (event.target.name === 'name') {
            setName(value)
        } else if (event.target.name === 'authKey') {
            setEnterKey(value)
            setAuthKeyError('')
        } else if (event.target.name === 'password') {
            setPassword(value)
        } else if (event.target.name === 'isPhoneRegister') {
            setIsPhoneRegister(event.target.checked);
        } else if (event.target.name === 'id') {
            setUserId(value);
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
        } else if (type === 'reqAuthKeyState') {
            setReqAuthKeyState(value);
        }
    }

    function doAuth() {
        let {mi, setUser, setMI} = props;
        let params = {
            uuid: auth.ai.uuid,
            code: enterKey,
            method: 'phone',
            pNum: phone,
            areaCode: areaCode,
            authkey:password,
            action: '' //'find': 다른 사용자로 가입, '':정식회원 가입
        };
        let type = '';
        httpReq('/account/get_auth', 'post', params)
            .then((res) => {
                if (res.result !== 'ok') {
                    setHookState('authKeyError', t('CODEMISMATCH'));
                    return;
                }
                if (res.result === 'ok' && res.msg === 'ACCOUNTEXIST') {
                    setHookState('phoneError', t('ACCOUNTEXIST'));
                    clearInterval(timer);
                    timer = null;
                    setHookState('reqAuthKeyState', false);
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
                    mi.name = name;
                    mi.password = password;
                    setMI(mi);
                    setUser(mi.id, mi);
                    setHookState("authKeyInvalid", false);
                    Router.pushRoute('/login');
                }, (err) => {
                    console.log('proAuth Error', err);
                });

            }, (err) => {
                console.log('auth Error', err);
            })

    }

    function createAccount() {
        let {mi, setUser, setMI} = props;
        let info = {
            name: name,
            password: password
        };
        mi.name = name;
        mi.password = password;
        if (isPhoneRegister) {
            doAuth();
        } else {
            const jwt = require('jsonwebtoken')
            jwt.sign({uuid: user_id, password: password }, config.secret,
              { expiresIn: '7d', issuer: 'drip.com', subject: 'userInfo' },
              async (err, tok) => {
                  if(err) {
                      console.log(err);
                      return;
                  }
                  httpReq('/api/auth/register', 'post', {token: tok}).then(res => {
                      mi.id = res.user_id;
                      setMI(mi);
                      setUser(mi.id, mi);
                      Router.pushRoute('/login');
                  }, err => {
                      console.log(err);
                  });
              }
            )
        }
    }

    function clickShowPasswordState() {
        setPassShowState(!passShowState);
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div style={{marginLeft: "auto", width: "fit-content", marginTop: 50}}>
                <Back props={props}/>
            </div>
            <div className={classes.paper}>
                <div className={classes.avatar}>
                    <img src="../static/image/logo.png" style={{width: '100%', height: '100%'}}/>
                </div>
                <Typography component="h1" variant="h5">
                    {t('CREATEACCOUNT')} {authKey}
                </Typography>
                <div className={classes.form}>
                    <Grid container justify='flex-start' spacing={2}>
                        <Grid item xs={12}>
                            <FormControlLabel
                                value="top"
                                control={<Checkbox name='isPhoneRegister' onChange={handleChange} color="primary" />}
                                label={t("PASS_PHONE_REGISTER")}
                                labelPlacement="end"
                            />
                        </Grid>
                        {/*<Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="name"
                                label="이름"
                                name="name"
                                autoComplete="name"
                                onChange={handleChange}
                            />
                        </Grid>*/}
                        {isPhoneRegister ? null
                            :<Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="id"
                                    label={t("ID")}
                                    name="id"
                                    autoComplete="id"
                                    onChange={handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        }

                        {isPhoneRegister?
                            <>
                                <Grid item xs={12} sm={8}>
                                    <ReactPhoneInput
                                        defaultCountry={'cn'}
                                        placeholder={t("PHONE")}
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
                                            <TimeCount setReqAuthKeyState={() => setReqAuthKeyState(false)}/> : t('REQKEY')}
                                    </Button>
                                </Grid>
                                <span style={{paddingTop: 3, color: 'red'}}>{phoneError}</span>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="authKey"
                                        label={t("KEY")}
                                        name="authKey"
                                        autoComplete="authKey"
                                        disabled={!reqAuthKeyState}
                                        onChange={handleChange}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                {/*<Grid item xs={12} sm={4}>
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
                                </Grid>*/}
                                <span style={{paddingTop: 3, color: 'red'}}>{authKeyError}</span>
                            </>
                            :null
                        }
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label={t("PASSWORD")}
                                type={passShowState?'text':"password"}
                                id="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                edge="end"
                                                aria-label="toggle password visibility"
                                                onClick={()=>clickShowPasswordState()}
                                            >
                                                {passShowState ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={((enterKey==='' || password==='') && isPhoneRegister) || (!isPhoneRegister && (password==='' || user_id===''))}
                        style={{height: '100%'}}
                        onClick={createAccount}
                    >
                        {t('REGISTER')}
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                {t('DO_HAVE_ACCOUNT')} {t('LOGIN')}
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Container>
    );
}
Register.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

Register.propTypes = {
    t: PropTypes.func.isRequired,
};
export default  withTranslation('common')(connect(
    state => ({
        mi: state.system.mi,
    }),
    dispatch => ({
        setMI: (info) => dispatch(System.setMI(info)),
        setUser: (id, info) => dispatch(User.set(id, info)),
    })
)(Register));
