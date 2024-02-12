import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import BackgroundImage from 'react-background-image-loader';
import '../../static/css/download.css'
import Hidden from "@material-ui/core/Hidden";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowLeftIcon from '@material-ui/icons/ArrowBackIos';
import ArrowRightIcon from '@material-ui/icons/ArrowForwardIos';
import {FaGoogle, FaFacebook, FaLinkedin, FaYoutube, FaPinterest, FaTwitter, FaAndroid, FaApple} from 'react-icons/fa';
import Carousel from 'react-3d-carousels'

const NextArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <ArrowRightIcon
            className={className}
            style={{color:"black", fontSize:40}}
            onClick={onClick}
        />
    );
}

const PrevArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <ArrowLeftIcon
            className={className}
            style={{color:"black", fontSize:40}}
            onClick={onClick}
        />
    )
}
class DownloadPage extends Component {

    render () {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "30px",
            slidesToShow: 3,
            speed: 500,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>
        };
        return (
            <>
                <header className="header-blue" >
                    <Container id="main-menu" className="sticker" >
                        <Grid component={"div"} container className="row" justify={"center"}>
                            <Grid lg={4} md={4} className="col-lg-4 col-md-2 ">
                                <div className="logo">
                                    <a href="index.html"><img src="../../static/img/logo/logo-2.png" alt="APNEW"/></a>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </header>
                <div className="banner-area banner-blue" id="banner">
                    <Container className="container">
                        <Grid component={"div"} container className="row" justify={"center"}>
                            <Grid lg={7} md={8} sm={8} xs={12} className="col-lg-7 col-md-8 col-sm-8 col-xs-12">
                                <div className="banner-text">
                                    <div className="banner-table-cell">
                                        <h1>
                                            <Hidden xsDown>
                                                <d className="hidden-xs">DRIP</d>
                                            </Hidden>
                                            <br/><span>分享</span>精彩生活
                                        </h1>
                                        <p style={{marginTop:140}} />
                                        <div className="banner-buttons">
                                            <div className="download-button-wrapper">
                                                <button className="download-btn" style={{marginLeft: 0}}>
                                                    <i style={{top: 10}} className="zmdi">
                                                        <FaApple style={{fontSize:50}} />
                                                    </i>
                                                    <span className="large-text">App Store</span>
                                                </button>
                                                <button onClick={()=>{}} className="download-btn">
                                                    <i style={{top:10}} className="zmdi">
                                                        <FaAndroid style={{fontSize:50}} />
                                                    </i>
                                                    <span className="large-text">Android</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-apps">
                                    <div className="single-app wow zoomIn" data-wow-duration="3s" data-wow-delay="2s">
                                        <div className="single-app-table-cell">
                                            <img src="../../static/img/icon/video.png" style={{width: 40}}/>
                                            <h4>短视频、直播</h4>
                                        </div>
                                    </div>
                                    <div className="single-app wow zoomIn" data-wow-duration="3s" data-wow-delay="1s">
                                        <div className="single-app-table-cell">
                                            <img src="../../static/img/icon/game.png" style={{width: 40}}/>
                                            <h4>小游戏</h4>
                                        </div>
                                    </div>
                                    <div className="single-app wow zoomIn" data-wow-duration="3s" data-wow-delay=".5s">
                                        <div className="single-app-table-cell">
                                            <img src="../../static/img/icon/chat.png" style={{width: 40}}/>
                                            <h4>聊天</h4>
                                        </div>
                                    </div>
                                </div>
                            </Grid>

                            <Grid lg={5} md={4} sm={4} className="col-lg-5 col-md-4 col-sm-4 hidden-xs">
                                <Hidden xsDown>
                                <div className="banner-product-image">
                                    <div className="wow bounceInUp" data-wow-duration="2s" data-wow-delay="0s">
                                        <img src="../../static/img/banner-blue/banner-mobile.png" alt="" className="floatright" />
                                    </div>
                                </div>
                                </Hidden>
                            </Grid>

                        </Grid>
                    </Container>
                    <img alt='' className='first_after' src="../../static/img/banner/shape.png" />
                </div>

                <div className="about-area about-blue" id="about">
                    <Container>
                        <Grid component={"div"} container  justify={"center"}>
                            <Grid sm={12} xs={12}>
                                <div className="section-title text-center title-blue">
                                    <h1>DRIP <span>直播</span></h1>
                                    <img src="../../static/img/icon/title-icon-blue.png" alt="" />
                                        <p>游戏，唱歌，跳舞，户外，你想看的都在这里
                                            <br/>
                                        </p>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid  component={"div"} container  justify={"center"}>
                            <Grid lg={6} md={5} sm={5} className="col-lg-5 col-lg-offset-1 col-md-5 col-md-offset-0 col-sm-5 col-sm-offset-0">
                                <div className="about-image wow fadeInLeft" data-wow-duration="3s" data-wow-delay="0s">
                                    <img src="../../static/img/banner-blue/mobile.png" alt="" className="floatright" />
                                </div>
                            </Grid>
                            <Grid lg={6} md={7} sm={7} xs={12} className="col-lg-6 col-md-7 col-sm-7 col-xs-12">
                                <div className="about-text">
                                    <h2>DRIP 直播</h2>
                                    <p>汇聚主播、女神、小鲜肉、网红、草根偶像、奇葩组合，与你真实面对面聊天交友互动。</p>
                                    <p>涵盖众多会唱歌、会喊麦、会跳舞、会聊天的俊男美女，精彩直播全天不间断。</p>
                                    <p>随时随地拿出手机直播精彩，观看多国主播精彩直播</p>
                                    <div className="about-buttons">
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <BackgroundImage src={"../../static/img/banner-blue/preview.png"} className="features-area features-blue margin_top_50" id="features" >
                    <Container >
                        <Grid component={"div"} container className="row" justify={"center"}>
                            <Grid item md={12} >
                                <div className="section-title text-center title-blue">
                                    <h1>DRIP <span>交友</span></h1>
                                    <img src="../../static/img/icon/title-icon-blue.png" alt="" />
                                        <p>在DRIP交友,<br />
                                            多国好友无限畅聊，寻找茫茫人海中有趣的人</p>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid component={"div"} container className="row" justify='flex-end'>
                            <Grid item lg={7} md={9} sm={12}
                                className="col-lg-7 col-lg-offset-5 col-md-9 col-md-offset-3 col-sm-12 col-sm-offset-0 feature-wrapper">
                                <div className="single-item">
                                    <div className="single-item-icon">
                                        <i className="zmdi"><img src="../../static/img/icon/chat.png" style={{width: 60}} /></i>
                                    </div>
                                    <div className="single-item-text">
                                        <h4>聊天</h4>
                                        <p>认识更多朋友，结识那些陌生而有趣的人，互加好友，聊天互动，随时随地发消息，一触即达</p>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="single-item-icon">
                                        <i className="zmdi"><img src="../../static/img/icon/video2.png" style={{width: 50}} /></i>
                                    </div>
                                    <div className="single-item-text">
                                        <h4>视频</h4>
                                        <p>一对一视频聊天，与男神女神零距离互动，面对面畅聊，想念不如相见</p>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="single-item-icon">
                                        <i className="zmdi"><img src="../../static/img/icon/mic.png" style={{width: 60}} /></i>
                                    </div>
                                    <div className="single-item-text">
                                        <h4>语音</h4>
                                        <p>发送语音，实时连麦，语音通话，高清畅聊，声控交友，语音约玩</p>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="single-item-icon">
                                        <i className="zmdi"><img src="../../static/img/icon/gift.png" style={{width: 60}} /></i>
                                    </div>
                                    <div className="single-item-text">
                                        <h4>礼物</h4>
                                        <p>为心属好友刷礼物，炫酷礼物特效，你的心意，值得完美呈现</p>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="single-item-icon">
                                        <i className="zmdi"><img src="../../static/img/icon/game.png" style={{width: 60}} /></i>
                                    </div>
                                    <div className="single-item-text">
                                        <h4>游戏</h4>
                                        <p> 一键邀请好友小游戏对战，与男神女神一起PK，欢乐畅聊打游戏</p>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </BackgroundImage>
                <BackgroundImage src={"../../static/img/banner/3.jpg"} className="download-area download-blue">
                    <img alt='' className='second_before' src="../../static/img/banner/shape.png" />
                    <img alt='' className='first_after' src="../../static/img/banner/shape.png" />
                    <div className="download-bg" />
                    <Container className="container">
                        <Grid component={"div"} container className="row" justify={"center"}>
                            <Grid item md={12} className="col-md-12">
                                <div className="section-title text-center title-blue">
                                    <h1 className="text-white">DRIP <span>可赚钱</span></h1>
                                    <img src="../../static/img/icon/title-icon-white.png" alt=""/>
                                        <p className="text-white">DRIP是一个可以赚钱的APP,<br/>
                                            多种方式获得金币，金币可以提现</p>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid component={"div"} container className="row" justify={"center"}>
                            <Grid item md={12} className="col-md-12">
                                <div className="download-button-wrapper">
                                    <button className="download-btn">
                                        <i className="zmdi"><img src="../../static/img/icon/friends.png"/></i>
                                        <span>Get money by <span className="large-text">推广好友</span></span>
                                    </button>
                                    <button className="download-btn">
                                        <i className="zmdi"><img src="../../static/img/icon/up.png"/></i>
                                        <span>Get money by <span className="large-text">上传作品</span></span>
                                    </button>
                                    <button className="download-btn">
                                        <i className="zmdi"><img src="../../static/img/icon/gift.png"/></i>
                                        <span>Get money by <span className="large-text">接收礼物</span></span>
                                    </button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </BackgroundImage>

                <div className="pricing-area pricing-blue" id="pricing">
                    <Container className="container">
                        <Grid component={"div"} container className="row" justify={"center"}>
                            <Grid item md={12} className="col-md-12">
                                <div className="section-title text-center title-blue">
                                    <h1>DRIP <span>可以看</span></h1>
                                    <img src="../../static/img/icon/title-icon-blue.png" alt="" />
                                        <p>新鲜好看刷不停<br/>
                                            海量精彩内容填充你的娱乐时间，分享真实生活，记录每一个精彩瞬间</p>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid component={"div"} container className="row" justify={"center"}>
                            <Grid item md={4} sm={4} className="col-md-4 col-sm-4">
                                <img src="../../static/img/screenshot/sp.png"/>

                            </Grid>
                            <Grid item md={4} sm={4} className="col-md-4 col-sm-4">
                                <img src="../../static/img/screenshot/tp.png"/>
                            </Grid>
                            <Grid item md={4} sm={4} className="col-md-4 col-sm-4">
                                <img src="../../static/img/screenshot/yw.png"/>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <div className="testimonial-area testimonial-blue" id="reviews">
                    <Container className="container">
                        <Grid component={"div"} container className="row" justify={"center"}>
                            <Grid item md={12} className="col-md-12">
                                <div className="section-title text-center title-blue">
                                    <h1>DRIP <span>小游戏</span></h1>
                                    <img src="../../static/img/icon/title-icon-blue.png" alt="" />
                                        <p>多款小游戏，任你畅玩<br />
                                        </p>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid component={"div"} container className="row" justify={'center'}>
                            <Grid item lg={12} md={10} sm={10} xs={12}>
                                <Grid component={"div"} container className="row" justify={"center"}>
                                    <Grid style={{}} item lg={6} md={8} sm={10} xs={10} >
                                        <Slider {...settings}>
                                            <div className="sin-testiImage">
                                                <img src="../../static/img/testimonial/1.png" alt="testimonial 1"/>
                                            </div>
                                            <div className="sin-testiImage">
                                                <img src="../../static/img/testimonial/2.png" alt="testimonial 2"/>
                                            </div>
                                            <div className="sin-testiImage">
                                                <img src="../../static/img/testimonial/3.png" alt="testimonial 3"/>
                                            </div>
                                            <div className="sin-testiImage">
                                                <img src="../../static/img/testimonial/1.png" alt="testimonial 1"/>
                                            </div>
                                            <div className="sin-testiImage">
                                                <img src="../../static/img/testimonial/2.png" alt="testimonial 2"/>
                                            </div>
                                            <div className="sin-testiImage">
                                                <img src="../../static/img/testimonial/3.png" alt="testimonial 3"/>
                                            </div>
                                        </Slider>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <div className="screenshots-area screenshots-blue" id="screenshots">
                    <Container className="container">
                        <Grid component={"div"} container className="row" justify={"center"}>
                            <Grid item md={12} className="col-md-12">
                                <div className="section-title text-center title-blue">
                                    <h1>DRIP <span>语言切换</span></h1>
                                    <img src="../../static/img/icon/title-icon-blue.png" alt="" />
                                        <p>支持多国语言，一键切换<br/>
                                            地区同步切换，让你足不出户，感受多国风光
                                        </p>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid component={"div"} container className="row" justify={"center"}>
                            <Grid style={{alignItems:"center", display:"flex"}} item md={10} className="col-md-10 col-md-offset-1" justify={"center"}>
                                <div style={{width:300, display:"flex", height:500}}>
                                    <Carousel
                                        width={300}
                                        height={300}
                                        direction={'horizontal'}
                                        effect={'3d'}
                                    >
                                        <div style={{width: 300, height: 300 }}>
                                            <img src="../../static/img/screenshot/cn.png" alt="" />
                                        </div>
                                        <div style={{width: 300, height: 300 }}>
                                            <img src="../../static/img/screenshot/en.png" alt="" />
                                        </div>
                                        <div style={{width: 300, height: 300 }}>
                                            <img src="../../static/img/screenshot/kr.png" alt="" />
                                        </div>
                                        <div style={{width: 300, height: 300 }}>
                                            <img src="../../static/img/screenshot/cn.png" alt="" />
                                        </div>
                                        <div style={{width: 300, height: 300 }}>
                                            <img src="../../static/img/screenshot/en.png" alt="" />
                                        </div>
                                        <div style={{width: 300, height: 300 }}>
                                            <img src="../../static/img/screenshot/kr.png" alt="" />
                                        </div>
                                    </Carousel>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <footer className="footer-area footer-blue" id="support" style={{zIndex:-1}}>
                    <div className="footer-bg"></div>
                    <img alt='' className='second_before' src="../../static/img/banner/shape.png" />
                    <Container className="container">

                        <Grid component={"div"} container className="row" justify={"center"}>
                            <Grid item lg={4} md={6} className="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3">
                                <div className="footer-links text-center">
                                    <a href="#"><FaFacebook /></a>
                                    <a href="#"><FaTwitter /></a>
                                    <a href="#"><FaGoogle /></a>
                                    <a href="#"><FaLinkedin /></a>
                                    <a href="#"><FaPinterest /></a>
                                    <a href="#"><FaYoutube /></a>
                                </div>
                                <div className="footer-text text-center">
                                    <span>Copyright &copy; 2019.Company name All rights reserved.<a target="_blank"
                                                                                                    href="#">DRIP</a></span>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </footer>
            </>
        )
    }
}

export default DownloadPage