import App from 'next/app'
import React from 'react'
import Head from 'next/head';
import {ThemeProvider} from '@material-ui/styles';
import theme from '../components/theme';
import {connect, Provider} from 'react-redux'
import withReduxStore from '../redux/withReduxStore'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
import {dataService} from "../model/DataService";
import CssBaseline from '@material-ui/core/CssBaseline';
import "@babel/polyfill/noConflict";
import {appWithTranslation, withTranslation} from '../i18n'
import {DefaultSeo} from "next-seo";
import Header from '../components/Header';
import Spinner from "../components/Spinner";
import * as ReduxProto from '../redux/common/PropoTypes';
import {NotificationContainer} from 'react-notifications';
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {Router} from '../server/pageRoutes';
// import {httpReq, reqInit} from "../model/Req";
// import {auth} from "../model/Auth";
// import * as System from "../redux/modules/system";
// import * as User from '../redux/modules/users'

let vm = null;

class MyApp extends App {

    static async getInitialProps({Component, router, ctx, store}) {

        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return {pageProps}
    }

    constructor(props) {
        super(props);
        vm = this;
        this.state = {
            renderState: false,

            defaultModalState: false,
            defaultModalType:'login',//charge, page(include callBack function), alert...
            defaultModalContentStr: 'LOGINWARNING',
            defaultModalFooter: <div>DefaultModalFooter</div>,
        };
        this.persistor = persistStore(props.reduxStore);
        dataService.store = props.reduxStore;
        dataService._appSetModalState = this.setDefaultModalState.bind(this);
    }

    setDefaultModalState(type='login', contentStr='LOGINWARNING', btnStr='LOGIN', callBack=null) {
        const {t} = this.props;
        let modalFooter = null;
        let cancel_btn =
            <Button
                onClick={() => {
                    this.setState({defaultModalState:false});
                }}
                variant="contained"
                color="primary"
            >
                {t('CANCEL')}
            </Button>

        if (type === 'page') {
            modalFooter =
                <>
                    <Button
                        onClick={() => {
                            callBack&&callBack();
                            this.setState({defaultModalState:false});
                        }}
                        variant="contained"
                        color="primary"
                    >
                        {t(btnStr)}
                    </Button>
                    {cancel_btn}
                </>
        } else if (type === 'login') {
            modalFooter =
                <>
                    <Button
                        onClick={() => {
                            Router.pushRoute('/login');
                            this.setState({defaultModalState:false});
                        }}
                        variant="contained"
                        color="primary"
                    >
                        {t('LOGIN')}
                    </Button>
                    {cancel_btn}
                </>
        } else if (type === 'charge') {
            modalFooter =
                <>
                    <Button
                        onClick={() => {
                            Router.pushRoute('profile', {go_state:'charge'});
                            this.setState({defaultModalState:false});
                        }}
                        variant="contained"
                        color="primary"
                    >
                        {t('MONEYCHARGE')}
                    </Button>
                    {cancel_btn}
                </>
        } else if (type === 'alert') {
            modalFooter =
                <Button
                    onClick={() => {
                        callBack&&callBack();
                        this.setState({defaultModalState:false});
                    }}
                    variant="contained"
                    color="primary"
                >
                    {t('DONE')}
                </Button>
        }
        this.setState({
            defaultModalType: type,
            defaultModalState: true,
            defaultModalContentStr: contentStr,
            defaultModalFooter: modalFooter
        });
    }

    componentDidMount() {

        let {reduxStore} = this.props;
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
        dataService.init(reduxStore);
        document.addEventListener('contextmenu', this.disableRightClick);
        window.addEventListener('beforeunload', this.funcBrowserRefresh.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener('contextmenu', this.disableRightClick);
        window.removeEventListener('beforeunload', this.funcBrowserRefresh.bind(this));
    }

    disableRightClick(e){
        // e.preventDefault();
        // return false;
    }

    funcBrowserRefresh() {
        let {reduxStore, router} = this.props;
        const dispatch = reduxStore.dispatch,
            // satate = reduxStore.getState(),
            pathName = router&&router.pathname;
        if (pathName === '/social' || pathName === '/video' || pathName === '/image') {
            dispatch(ReduxProto.resetReduxState('contents'));
        }
    }

    closeDefaultModal() {
        if (this.state.defaultModalType !== 'alert') {
            this.setState({defaultModalState:false});
        }
    }

    render() {
        const {Component, pageProps, reduxStore, router, t} = this.props;
        let pageName = router.pathname;

        return (
            <>
                <DefaultSeo
                    openGraph={{
                        type: 'website',
                        locale: 'en_IE',
                        url: 'https://ad-lib.live/',
                        site_name: 'AD-LIB Live site',
                    }}
                    twitter={{
                        handle: '@handle',
                        site: '@site',
                        cardType: 'summary_large_image',
                    }}
                />
                <Head>
                    <title>{t('SITE_TITLE')}</title>
                </Head>
                <CssBaseline/>
                <Provider store={reduxStore}>
                    <ThemeProvider theme={theme} >
                        <PersistGate
                            loading={
                                <Spinner/>
                            }
                            persistor={this.persistor}
                        >
                            {
                                pageName !== '/login' && pageName !== '/register' && pageName !== '/forgetPassword' && pageName !== '/Chatting' && pageName !=='/download' ?
                                    <Header/>
                                    : null
                            }
                            <Component {...pageProps} setAppModalState={(type, contentStr, btnStr, callBack)=>this.setDefaultModalState(type, contentStr, btnStr, callBack)} />
                            <NotificationContainer/>
                            <Dialog open={this.state.defaultModalState}
                                    fullWidth={true}
                                    className="modal-primary"
                                    onClose={()=>{this.closeDefaultModal()}}
                            >
                                <DialogTitle>
                                    {t('ALERT')}
                                </DialogTitle>
                                <DialogContent style={{fontSize:20}}>
                                    {t(this.state.defaultModalContentStr)}
                                </DialogContent>
                                <DialogActions>
                                    {this.state.defaultModalFooter}
                                </DialogActions>
                            </Dialog>
                        </PersistGate>
                    </ThemeProvider>
                </Provider>
            </>
        )
    }
}

export default appWithTranslation(withReduxStore(withTranslation('common')(MyApp)))
