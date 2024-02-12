import React from 'react';
import ThumbUpOut from '@material-ui/icons/FavoriteBorder';
import EyeIcon from '@material-ui/icons/RemoveRedEyeOutlined'
import OnlineUsers from '@material-ui/icons/PeopleOutlined';
import GiftIcon from '@material-ui/icons/CardGiftcardOutlined';
import {makeStyles} from "@material-ui/core";
import {isMobile} from 'react-device-detect';
import * as Tools from "../../../lib/tool";
// import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex'
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        marginRight: 10,
        flexDirection: isMobile ? 'column' : 'row'
    },
    icon: {
        marginRight: 5
    }
}));

const ChannelStatusBar = (props) => {

    const classes = useStyles();
    const {channel, gift, isItem} = props;
    return (
        <div className={classes.container}>
            <div className={classes.item}>
                <ThumbUpOut className={classes.icon}/>
                {channel&&channel.nLike!==undefined?Tools.abbrNum(channel.nLike):123}
            </div>
            <div className={classes.item}>
                <EyeIcon className={classes.icon}/>
                {channel&&channel.users&&channel.users.length!==undefined?Tools.abbrNum(channel.users.length):123}
            </div>
            {isItem ?
                null
                :<div className={classes.item}>
                    <OnlineUsers className={classes.icon}/>
                    {channel.others ? channel.others.length : 0}/{channel.cnt}
                </div>
            }
            {
                channel&&channel.gifts ?
                    <div className={classes.item}>
                        <GiftIcon className={classes.icon}/>
                        {channel&&channel.gifts&&channel.gifts.length!==undefined?Tools.abbrNum(channel.gifts.length):123}
                    </div>
                    : null
            }

        </div>
    )
};

export default ChannelStatusBar;