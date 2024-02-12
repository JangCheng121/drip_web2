import React, {useEffect} from 'react';
import {connect} from "react-redux";
import * as ReduxProto from '../redux/common/PropoTypes'
import {Router} from "../server/pageRoutes";
import PropTypes from 'prop-types'
import {withTranslation} from '../i18n'
import Button from "@material-ui/core/Button/index";
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from "@material-ui/core";
// import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
    avatar: {
        backgroundColor: '#d8d8d8',
        width:35,
        height:35
    }
}));
const Login = (props) => {
    const {mi, ai, t, resetRedux, note} = props;
    const classes = useStyles();
    function doLogOut() {
        resetRedux();
        Router.pushRoute('/login');
    }

    function goLogIn() {
        Router.pushRoute('/login');
    }

    function goProfile() {
        let unread_cnt = note.unReadNoteIds && note.unReadNoteIds.length;
        if (unread_cnt) {
            Router.pushRoute('profile',{go_state:'note'});
        } else {
            Router.pushRoute('/profile');
        }
    }

    return (
        <div style={{color: "white", alignItems: "center", display: "flex"}}>
            <Button title={mi.member ? t('LOGOUT') : t('LOGIN')}
                    style={{width: "fit-content", minWidth: "fit-content", padding: 5, marginRight:20}}
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={mi.member ?doLogOut:goLogIn}
            >

                <img alt='log in & out img'
                     src={mi.member ?'../static/img/login/logout_door.png':'../static/img/login/login_door.png'}
                     width={25 + 'px'}
                     height={25 + 'px'}
                />
            </Button>
            {mi.member?
                <div onClick={() => goProfile()} style={{marginRight: 10, alignItems: "center", display: "flex"}}>
                    {/*<img src={mi.picture} alt={'user avatar'} width={35 + 'px'} height={35 + 'px'}
                         className='img-circle' style={{borderRadius: '50%'}}/>*/}
                    <Badge badgeContent={note.unReadNoteIds && note.unReadNoteIds.length} color="error">
                        <Avatar className={classes.avatar} alt="user avatar" src={mi.picture} />
                    </Badge>
                </div>
                : null
            }
        </div>
    )

}
Login.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

Login.propTypes = {
    t: PropTypes.func.isRequired,
}
export default withTranslation('common')(connect(
    state => ({
        mi: state.system.mi,
        ai: state.system.ai,
        note: state.note,
    }),
    dispatch => ({
            resetRedux: () => dispatch(ReduxProto.resetRedux()),
        }
    )
)(Login))
