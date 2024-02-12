import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid/index";
import Button from "@material-ui/core/Button/index";
import giftAnimationData from "../../../static/lottieicons/gift";
import Carousel from "../../../components/Carousel";
import Popper from "../../../components/Popper";
import {httpReq} from "../../../model/Req";
import * as CONST from '../../../model/Const';
import SendIcon from '@material-ui/icons/Send';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import {i18n} from "../../../i18n";
// import Lottie from "react-lottie";
// import FormHelperText from '@material-ui/core/FormHelperText';
// import {connect} from 'react-redux';
// import * as actions from "../../../redux/modules/chat/actions/actions";
// import * as System from "../../../redux/modules/system";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 50,
    },
}));
const GiftBar = (props) => {
    const classes = useStyles();
    const {sendMessage, increaseLike, t, mi, showNotice, doIncreasePoint} = props;

    const [presentData, setPresentData] = useState([]);
    const [presentItem, setPresentItem] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeCarouselIdx, setCarouselIdx] = useState(null);
    const [gift_cnt, setGiftCnt] = useState(1);
    const [sendGiftStatus, setSendGiftStatus] = useState(false)


    useEffect(() => {
        httpReq('/api/gift', 'get').then(
            res => {
                if (!res) return;
                else {
                    setPresentData(res)
                }
            }, err => {
                console.log(err);
            })
    }, []);


    const animationOptions = {
        loop: true,
        animationData: giftAnimationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const sendPresent = (event) => {
        let presend_data = presentData[activeCarouselIdx];
        if (!mi.member) {
            showNotice('login');
            return
        }else if (mi.point < (presend_data.price*gift_cnt)) {
            showNotice('point');
            return;
        }
        if (!presend_data.id || !presend_data.img) return;
        let sendData = {data:{cnt:Number(gift_cnt), gift_id:presend_data.id, img:presend_data.img}};

        sendMessage(CONST.CHAT_CONTENT_PRESENT, sendData, 'live');
        doIncreasePoint((presend_data.price*gift_cnt), false);
        if (increaseLike) {
            increaseLike(event, (presend_data.price*gift_cnt));
        }

        setSendGiftStatus(true);
        setTimeout(() => {
            setSendGiftStatus(false)
        }, 3500);
    }
    const handleClick = (event, index) => {
        setCarouselIdx(index)
    };

    const handleMouseEnter = (event, index) => {
        setAnchorEl(event.currentTarget);

        const presentItem = presentData[index];
        const tranObj = presentItem.trans.find((v) => v.lang === i18n.language);
        if(tranObj) presentItem.name = tranObj.str;
        setPresentItem(presentData[index]);
    }

    const handleMouseLeave = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    function handleChange(e) {
        setGiftCnt(e.target.value)
    }

    return (
        <Grid container justify='flex-start'
              style={{
                  display: 'flex',
                  width: '100%',
                  bottom: 0,
                  alignItems: 'center'
              }}
        >

            {/*{sendGiftStatus ?*/}
                {/*<Grid item xs={12} style={{height: 100, position:'absolute', bottom:0}}>*/}
                    {/*<Lottie*/}
                        {/*options={animationOptions}*/}
                        {/*height={100}*/}
                        {/*width={100}*/}
                    {/*/>*/}
                {/*</Grid>*/}
                {/*: null*/}
            {/*}*/}

            <Grid item xs={9} sm={10} style={{padding: '0 30px'}}>
                <Carousel
                    data={presentData}
                    onClickItem={handleClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    activeIndex={activeCarouselIdx}
                />
            </Grid>
            <Grid item xs={3} sm={2} style={{display: 'flex', alignItems: 'center', justifyContent:'space-around'}}>
                <FormControl className={classes.formControl}>
                    <NativeSelect
                        value={gift_cnt}
                        onChange={(e) => handleChange(e)}
                        name="age"
                        inputProps={{ 'aria-label': 'age' }}
                    >
                        <option value={1}>x 1</option>
                        <option value={10}>x 10</option>
                        <option value={20}>x 20</option>
                        <option value={30}>x 30</option>
                        <option value={40}>x 40</option>
                        <option value={50}>x 50</option>
                    </NativeSelect>
                </FormControl>
                <Button style={{minWidth:30}} variant={"contained"} color={"secondary"} onClick={sendPresent}>
                    <SendIcon/>
                </Button>
            </Grid>
            <Popper open={open} anchorEl={anchorEl}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div><b>{presentItem.name}</b></div>
                    <img src="../../../static/img/common/point.png" width={25} height={25} style={{marginLeft: 10}}/>
                    <div>{presentItem.price}{t('POINT')}</div>
                </div>
            </Popper>
        </Grid>
    )
};

export default GiftBar;