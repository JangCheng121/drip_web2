import React from 'react'
import Link from './Link';
import {makeStyles, fade} from '@material-ui/core/styles/index';
import Toolbar from '@material-ui/core/Toolbar/index';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import PhotoIcon from '@material-ui/icons/PhotoAlbum';
import SocialIcon from '@material-ui/icons/StarBorder';
import VideoIcon from '@material-ui/icons/Videocam';
import ChatIcon from '@material-ui/icons/Chat';
import ServiceIcon from '@material-ui/icons/ErrorOutline';
import TranslateIcon from '@material-ui/icons/TranslateOutlined'
import HomePageIcon from '@material-ui/icons/HomeOutlined';
import UserProfileIcon from '@material-ui/icons/Contacts';
import InputBase from '@material-ui/core/InputBase';
import {connect} from "react-redux";
import Router, {withRouter} from "next/router";
import Logo from "./Logo";
import Login from "./Login";
import PropTypes from 'prop-types'
import { i18n, withTranslation } from '../i18n'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Select from "@material-ui/core/Select";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import AndroidIcon from '@material-ui/icons/AndroidOutlined';
import '../static/css/header.css';

const useCssStyles = makeStyles(theme => ({
    searchBar: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 'auto',
        marginRight:5,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            // marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 4),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('xs')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
}));

const linkItems = makeStyles(theme => {
    return {
        root: () => ({
            '&:hover': {
                textDecoration: 'none'
            },
        }),
    }
})

const sections = [
    {title: 'home', href: '/'},
    {title: 'VIDEO', href: '/video'},
    {title: 'IMAGE', href: '/image'},
    {title: 'SQUARE', href: '/social'},
    {title: 'CHAT', href: '/chat'},
    {title: 'SERVICE', href: '/service'},
    {title: 'MINE', href: '/profile'},
];

const Header = (props) => {

    const classes = useCssStyles();
    const linkClasses = linkItems()

    const {mi, router:{pathname}, t} = props;

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
        searchKey : 'total',
        searchStr : '',
        anchorEl : null,
    });
    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideVarData = [
        {title:'HOME', pathname:'/home', icon:<HomePageIcon />},
        {title:'VIDEO', pathname:'/video', icon:<VideoIcon />},
        {title:'IMAGE', pathname:'/image', icon:<PhotoIcon />},
        {title:'SQUARE', pathname:'/social', icon:<SocialIcon />},
        {title:'CHAT', pathname:'/chat', icon:<ChatIcon />},
        {title:'SERVICE', pathname:'/service', icon:<ServiceIcon />},
        {title:'MINE', pathname:'/profile', icon:<UserProfileIcon />},
    ];

    const sideList = side => (
        <div
            className='list'
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {sideVarData.map((itemData, index) => {
                    if (itemData.title === 'MINE' && !mi.member) {
                        return null
                    }
                    return(
                        <ListItem button key={index}>
                            <Link
                                color="inherit"
                                noWrap
                                key={index}
                                variant="body2"
                                href={itemData.pathname}
                                className='linkClass'
                            >
                                <ListItemIcon>{itemData.icon}</ListItemIcon>
                                <ListItemText primary={t(itemData.title)}/>
                            </Link>
                        </ListItem>
                    )
                })}
                <ListItem button>
                    <Link
                        color="inherit"
                        noWrap
                        variant="body2"
                        href='https://down.live-casino-club.com'
                        className='linkClass'
                    >
                        <ListItemIcon><AndroidIcon /></ListItemIcon>
                        <ListItemText primary={t('DOWNLOAD_APK')}/>
                    </Link>
                </ListItem>
            </List>
        </div>
    );

    function funcChangeSearch(e) {
        let target_name = e.target.name,
            target_value = e.target.value;

        if (target_name === 'searchKey') {
            setState({...state, searchKey: target_value});
        } else if (target_name === 'searchStr') {
            setState({...state, searchStr: target_value});
        }
    }

    function handleSubmit(event) {
        const key = event.key, {router:{pathname}} = props;
        if (key === 'Enter' && state.searchStr !== '') {
            event.preventDefault();
            // Router.pushRoute('/searchResult');
            let sendParam = JSON.stringify({type:state.searchKey, search_str:state.searchStr});
            if (pathname === '/searchResult') {
                Router&&Router.replaceRoute('searchResult',{ searchData: sendParam });
            } else {
                Router&&Router.pushRoute('searchResult',{ searchData: sendParam });
            }
        }
    }

    function handleChangeLanguage(value) {
        handleClose();
        i18n.changeLanguage(value, (err, result) => {
            // Router.reload(window.location.pathname);
        });
    }
    function handleClick(event) {
        setState({...state, anchorEl: event.currentTarget});
    }

    function handleClose() {
        setState({...state, anchorEl: null});
    }

    return (
        <Toolbar component="div" variant="dense" className='toolbar_style'>
            <Hidden smDown >
                {sections.map((section, index) => {

                    if (section.title === 'home') {
                        return (
                            <Logo key={index}/>
                        )
                    } else if (section.title === 'MINE' && !mi.member) {
                        return null;
                    } else {
                        return (
                            <Link
                                color="inherit"
                                noWrap
                                key={index}
                                variant="body2"
                                href={section.href}
                                classes={linkClasses}
                            >
                                <p className='linkItem'>{t(section.title)}</p>
                            </Link>
                        )
                    }

                })}
                <Link
                    color="inherit"
                    noWrap
                    variant="body2"
                    href='https://down.live-casino-club.com'// '/download'
                    classes={linkClasses}
                >
                    <p className='linkItem'>{t('DOWNLOAD_APK')}</p>
                </Link>
            </Hidden>
            {/*menu icon for left side menu..*/}
            <Hidden mdUp >
                <MenuIcon onClick={toggleDrawer('left', true)} />
            </Hidden>
            {/*left side menu...*/}
            <SwipeableDrawer
                open={state.left}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                {sideList('left')}
                <div style={{marginLeft:17, alignItems:"center", display:"flex"}}>
                    <ListItemIcon><TranslateIcon /></ListItemIcon>
                    <FormControl style={{backgroundColor:"white", width:"fit-content", alignSelf:"center"}} >
                        <Select
                            value={i18n.language}
                            onChange={(e) => {handleChangeLanguage(e.target.value);toggleDrawer('left', false)}}
                            displayEmpty
                            name="language"
                        >
                            <MenuItem value='cn'>中文</MenuItem>
                            <MenuItem value='en'>English</MenuItem>
                            <MenuItem value='ko'>한국어</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </SwipeableDrawer>
            <div style={{display: 'flex', flex: 1, justifyContent: 'flex-end', alignItems:"center"}}>
                {pathname === '/social'||pathname==='/image'||pathname==='/video'||pathname==='/searchResult' ?
                    //search...
                    <div style={{flexDirection:"row", display:"flex"}}>
                        <FormControl style={{width:'100%', maxWidth:100, backgroundColor:"#262626"}} >
                            <Select
                                value={state.searchKey}
                                onChange={funcChangeSearch}
                                displayEmpty
                                style={{color:"white", marginLeft:10}}
                                name="searchKey"
                            >
                                <MenuItem value='total'>{t('TOTALTOP')}</MenuItem>
                                <MenuItem value='video'>{t('VIDEO')}</MenuItem>
                                <MenuItem value='image'>{t('IMAGE')}</MenuItem>
                            </Select>
                        </FormControl>
                        <div className={classes.searchBar}>
                            <div className='searchIcon_style'>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder={`${t('SEARCH')}...`}
                                name='searchStr'
                                onChange={(e) => {funcChangeSearch(e)}}
                                onKeyPress={(e)=>{handleSubmit(e)}}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{'aria-label': 'search'}}
                            />
                        </div>
                    </div>
                    :null
                }
                <Hidden smDown >
                    <div style={{marginRight:25, alignItems:"center", display:"flex", flexDirection:"row"}}>
                        <Button title={t('CHANGE_LANGUAGE')}
                                style={{color:"white", padding:5, minWidth:50, marginRight:10}}
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={handleClick}>
                            <TranslateIcon />
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={state.anchorEl}
                            keepMounted
                            elevation={0}
                            getContentAnchorEl={null}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={Boolean(state.anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={()=>{handleChangeLanguage('cn')}}>中文</MenuItem>
                            <MenuItem onClick={()=>{handleChangeLanguage('en')}}>English</MenuItem>
                            <MenuItem onClick={()=>{handleChangeLanguage('ko')}}>한국어</MenuItem>
                        </Menu>
                        <div>
                            {i18n.language==='cn'?'中':i18n.language==='en'?'En':'한'}
                        </div>
                    </div>
                </Hidden>
                <Login/>
            </div>
        </Toolbar>
    );
}
Header.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

Header.propTypes = {
    t: PropTypes.func.isRequired,
}
export default withTranslation('common')(withRouter(connect(
    state => ({
        mi: state.system.mi,
    }),
)(Header)))
