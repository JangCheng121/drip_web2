import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ChannelStatusBar from "./ChannelStatusBar";

const useStyles = makeStyles(theme => ({
    deleteBtn: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 99999
    },
    deleteIcon: {
        margin: theme.spacing(1),
        fontSize: 32,
    },
    avatar: {
        backgroundColor: '#d8d8d8'
    }
}));

const ChannelItem = (props) => {

    const {mi, item, joinChannel, deleteChannel, users, t, getUser} = props;
    const classes = useStyles();

    const creatorInfo = users[item.creator];

    if (!creatorInfo) {
        getUser(item.creator);
        return null;
    }
    let isNew = false;
    const timeDiff = (Date.now() - Date.parse(item.ctime))
    if (timeDiff < 5 * 60 * 1000) {
        isNew = true
    }
    return (
        <div>
            <Card className={'MuiPostCard--01'} onClick={() => joinChannel(item.id)}>
                <CardMedia
                    component={"div"}
                    className={'MuiCardMedia-root'}
                    image={item.image}//'../../../static/image/chanel_default.png'
                    style={{minHeight:150, backgroundColor:'#bbbbbb'}}
                >
                    {
                        isNew ?
                            <div className={'MuiTag--ribbon'}>
                                <Typography color={'inherit'} className={'MuiTypography-root'}>
                                    {t('NEWS')}
                                </Typography>
                            </div> : null
                    }
                    <Avatar
                        component={"div"}
                        className={classes.avatar}
                        src={creatorInfo.picture}
                    />
                </CardMedia>
                <CardContent className={'MuiCardContent-root'}>
                    <Grid component={'div'} container={true} justify='flex-start' direction={'row'} spacing={2} style={{alignItems: 'center'}}>
                        <Grid component={'div'} item>
                            <Typography
                                className={'MuiTypography--heading'}
                                variant={'h6'}
                                gutterBottom
                            >
                                {item.name}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid component={'div'} container justify='flex-start'>
                        <Grid component={'div'} item>
                            <Typography variant="body2">
                                {
                                    !item.perPay?null:
                                    item.type === 0 ?
                                    t('JOIN_CHANNEL_GET_POINT', {point:item.perPay})
                                    : item.type === 1 ?
                                        t('JOIN_CHANNEL_PAY_POINT', {point:item.perPay})
                                        : t('JOIN_CHANNEL_PAY_POINT_EVERY_MINUTE', {point:item.perPay})
                                }
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions className={'MuiCardActions-root'}>
                    <ChannelStatusBar channel={item} isItem={false}/>
                </CardActions>
            </Card>
            {
                item.creator === mi.id ?
                    <div
                        className={classes.deleteBtn}
                        onClick={()=>deleteChannel&&deleteChannel(item.id)}>
                        <DeleteForeverOutlinedIcon className={classes.deleteIcon}/>
                    </div>
                    : null
            }
        </div>
    )
}

export default ChannelItem;
