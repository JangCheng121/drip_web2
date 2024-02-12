import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Back from '../components/back';
import Link from "../components/Link";
import {Router} from "../server/pageRoutes";
import {auth} from "../model/Auth";
import {connect} from "react-redux";
import * as System from "../redux/modules/system";
import {withRouter} from 'next/router'
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'
import PropTypes from "prop-types";
import {withTranslation} from "../i18n";

import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {dataService} from "../model/DataService";

const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = (props) => {

    const classes = useStyles();
    const {t, setting} = props;
    const [phone, setPhone] = useState('');
    const [areaCode, setAreaCode] = useState('');
    const [password, setPassword] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [login_type, setType] = React.useState('id');
    const [user_id, setUuid] = React.useState('');

    function setHookState(type, value) {
        if (type === 'phoneError') {
            setPhoneError(value);
        } else if (type === 'passwordError') {
            setPasswordError(value)
        }
    }


    function changePhoneNumber(value, data) {
        setPhone(value.replace(/[^0-9]+/g, '').slice(data.dialCode.length));
        setAreaCode(data.dialCode);
        setPhoneError('');
    }

    function handleChange(event) {
        let value = event.target.value;
        if (event.target.name === 'password') {
            setPassword(value);
            setPasswordError('')
        } else if (event.target.name === 'id') {
            setUuid(value);
            setPhoneError('');
        }

    }

    function doLogin() {
        let uuid = '';
        if (login_type === 'phone') {
            uuid = areaCode + phone;
        } else {
            uuid = user_id;
        }
        if (uuid === '') {
            return;
        }
        auth.doLogin(uuid, password).then( async (res) => {
            let first_page = setting && setting.data && setting.data.first_page;
            if (!first_page) {
                let setting_data = await dataService.getSetting();
                first_page = setting_data.first_page;
            }
            Router.pushRoute('/' + first_page);
        }, err => {
            setHookState("passwordError", t('INCORRECT_ACCOUNT'))
        })
    }

    function handleChangeRadio(event) {
        setType(event.target.value);
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
                    {t('LOGIN')}
                </Typography>
                <div className={classes.form}>
                    <RadioGroup style={{justifyContent:"space-between"}} aria-label="position" name="position" value={login_type} onChange={handleChangeRadio} row>
                        <FormControlLabel
                            value="id"
                            control={<Radio color="primary" />}
                            label={t("ID")}
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="phone"
                            control={<GreenRadio color="primary" />}
                            label={t("PHONE")}
                            labelPlacement="end"
                        />
                    </RadioGroup>
                    {login_type === 'phone' ?
                        <div style={{marginTop:16, marginBottom:8}}>
                            <ReactPhoneInput
                                defaultCountry={'cn'}
                                placeholder={t("PHONE")}
                                value={phone}
                                enableSearchField={true}
                                autoFormat={false}
                                conatinerStyle={{width: '100%'}}
                                inputStyle={{width: '100%', height: 56}}
                                onChange={changePhoneNumber}
                            />
                        </div>
                        :<>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="id"
                                label={'ID/Drip ID'}
                                type="text"
                                id="id"
                                onChange={handleChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </>
                    }
                    <span style={{paddingTop: 3, color: 'red'}}>{phoneError}</span>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label={t("PASSWORD")}
                        type="password"
                        id="password"
                        onChange={handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <span style={{paddingTop: 3, color: 'red'}}>{passwordError}</span>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={!phone.length && !password.length}
                        onClick={doLogin}
                    >
                        {t('LOGIN')}
                    </Button>
                    <Grid container justify='flex-start'>
                        <Grid item xs>
                            <Link href="/forgetPassword" variant="body2">
                                {t('FORGETPASS')}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/register" variant="body2">
                                {t("CREATEACCOUNT")}
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Container>
    );
}
Login.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

Login.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('common')(withRouter(connect(
    state => ({
        mi: state.system.mi,
        setting: state.system.setting,
    }),
    dispatch => ({
        setAI: (info) => dispatch(System.setAI(info))
    })
)(Login)));
