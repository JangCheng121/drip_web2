import React, {useState, useEffect} from 'react'
import {connect} from "react-redux";
import Card from '@material-ui/core/Card';
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions"
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import SocialPanel from '../components/content/panel';
import * as Contents from "../redux/modules/contents";
import * as System from "../redux/modules/system";
import * as Users from "../redux/modules/users";
import {i18n} from "../i18n";
import * as CONST from "../model/Const";
import ShowMore from "../components/ShowMore";
import _ from 'lodash';
import RtmpPlayer from "./Chatting/chattingPane/RtmpPlayer";
import ChannelPane from "./chat/channels/ChannelPane";
import Box from "@material-ui/core/Box";
import Router from "next/router";
import * as actions from "../redux/modules/chat/actions/actions";

const useStyles = makeStyles(theme => ({
    interval: {
        margin: `${theme.spacing(1)}px 0`
    },
    liveHeader: {
        height: 600,
    },
    livePreview: {
        width: '100%',
        height: '85%'
    }
}));

export const LiveList = (props) => {

    const classes = useStyles();

    const {data, onClick} = props;

    return (
        <Grid item container={true} justify='flex-start' component={"div"}
              style={{flex: 1, height: '100%', padding: 10}}>
            {
                data.length === 3 && data.map((item, index) => {
                    return (
                        <Grid key={index} component={"div"} item style={{width: '100%', height: '32%'}}
                              onClick={() => onClick(item)}
                        >
                            <Card style={{height: '100%', backgroundColor: '#bbbbbb'}}>
                                <img key={index} src={item.image} className={classes.livePreview}/>
                                <div>{item.name}</div>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}


const Home = (props) => {

    const classes = useStyles();

    const {contents: {panels}, channels, fetchChannels} = props;

    const t =(str)=>{
        //debug 용이다. 앞으로는 이렇게 하면 안된다.다시말하면 밑에 있는 t("") 를 i18n.t("") 와 같이 쓰도록금....
        return i18n.t(str);
    };

    useEffect(() => {
        // if (!channels.loaded)
            fetchChannels();
    }, []);

    function panLoadMoreData(category_id, type) {
        const {getContents} = props;
        getContents(category_id, CONST.LOAD_TYPE_MORE, type);
    }

    const topChannels = _.sortBy(channels.data, [function (channel) {
        return channel.nLike
    }]).slice(0, CONST.CHANNEL_COUNT);

    const newChannels = _.sortBy(channels.data, [function (channel) {
        return channel.ctime
    }]).slice(0, CONST.CHANNEL_COUNT);

    const [activeChannelInfo, setActiveChannelInfo] = useState(topChannels.length ? topChannels[0] : []);

    function onClickLiveItem(channel_id) {
        Router.pushRoute('/chat', {id: channel_id});
    }

    function changeLive(channel) {
        setActiveChannelInfo(channel);
    }

    return (
        <div>
            {/*<div style={{backgroundImage: 'url("http://js2.a.yximgs.com/udata/pkg/080a4e7400b145bbb70fc2ec36a8d6ca")'}}>/!**!/*/}
            {channels.loaded && channels && channels.data && channels.data.length > 3 ?
                <Box component="div" m={3} id="contentPanel">
                    <Card className={classes.interval}>
                        <CardHeader title={t("CHAT")}/>
                        <Grid container justify='flex-start' className={classes.liveHeader}>
                            <LiveList data={topChannels} onClick={changeLive}/>
                            <Grid component={"div"} item style={{flex: 3, padding: 10, height: '100%'}}>
                                {
                                    topChannels.length === 3 && activeChannelInfo.streamKey ?
                                        <RtmpPlayer channel={activeChannelInfo}/> :
                                        <img src={"../static/img/advert.png"}
                                             style={{
                                                 width: '-webkit-fill-available',
                                                 height: '-webkit-fill-available',
                                                 maxHeight: 590
                                             }}/>
                                }
                            </Grid>
                            <LiveList data={newChannels} onClick={changeLive}/>
                        </Grid>
                    </Card>
                </Box>
                : null
            }
            {/*</div>*/}
            {/*기타 방송자들*/}
            <Box component="div" m={3} id="contentPanel">
                {channels.loaded && channels && channels.data && channels.data.length ?
                    <Card className={classes.interval} id={"contentPanel"}>
                        <CardHeader title={"기타방송자들"}/>
                        <ChannelPane data={channels.data} {...props} onClick={onClickLiveItem}/>
                        <CardActions>
                            <ShowMore href={"/chat"}/>
                        </CardActions>
                    </Card>
                    : null
                }
                {/*동영상*/}
                <Card className={classes.interval}>
                    <CardHeader
                        title={t("HOME_VIDEO")}/>
                    <SocialPanel
                        isHomeView={true}
                        panel={panels[2]}
                        loadMoreProps={panels[2] && panels[2].total && panels[2].total.data && panels[2].total.data.length >= 12}
                        language_props={i18n.language}
                        contentType={Contents.CONTENT_TYPE_TOTAL}//video, image => total, social=>total, image, video
                        realCategoryId={2} //광장일 때 Contents.SQUARE_CATEGORY
                        {...props}
                        t={t}
                        page={2}
                        category_id={2} //tab 이동시....
                        isShowTop={false}
                        loadMoreFunc={() => panLoadMoreData(2, Contents.CONTENT_TYPE_TOTAL)}
                    />
                    <CardActions>
                        <ShowMore href={"/video"}/>
                    </CardActions>
                </Card>

                {/*이미지*/}
                <Card className={classes.interval}>
                    <CardHeader
                        title={t("HOME_IMAGE")}/>
                    <SocialPanel
                        panel={panels[3]}
                        isHomeView={true}
                        loadMoreProps={panels[2] && panels[2].total && panels[2].total.data && panels[2].total.data.length >= 12}
                        language_props={i18n.language}
                        contentType={Contents.CONTENT_TYPE_TOTAL}//video, image => total, social=>total, image, video
                        realCategoryId={3} //광장일 때 Contents.SQUARE_CATEGORY
                        {...props}
                        t={t}
                        page={3}
                        category_id={3} //tab 이동시....
                        isShowTop={false}
                        loadMoreFunc={() => panLoadMoreData(3, Contents.CONTENT_TYPE_TOTAL)}
                    />
                    <CardActions>
                        <ShowMore href={"/image"}/>
                    </CardActions>
                </Card>
            </Box>
        </div>
    );

};

export default connect(
    state => ({
        mi: state.system.mi,
        users: state.users,
        ai: state.system.ai,
        contents: state.contents,
        channels: state.chat.channels
    }),
    dispatch => ({
        doShowContent: (index) => dispatch(Contents.doViewContentAsync(index)),
        getContents: (categoryId, loadType, type) => dispatch(Contents.ActGetContentPanelAsync(categoryId, loadType, type)),
        doFollow: (id, isFollow) => dispatch(System.doFollowAsync(id, isFollow)),
        updateUser: (id, userInfo) => dispatch(Users.updateUser(id, userInfo)),
        fetchChannels: () => dispatch(actions.fetchChannels()),
    })
)(Home)
