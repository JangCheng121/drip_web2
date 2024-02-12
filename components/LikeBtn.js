import React, {useState} from 'react';
import handAnimationData from "../static/lottieicons/hand";
import Lottie from "react-lottie";
import ThumbUpOut from '@material-ui/icons/ThumbUpAltOutlined';
import Typography from "@material-ui/core/Typography";

export default (props) => {

    const {doLike, context_t} = props;
    const [likeState, setLikeState] = useState(false);
    const animationOptions = {
        loop: false,
        autoPlay: false,
        animationData: handAnimationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    function onClick() {
        setLikeState(true);
        setTimeout(() => {
            setLikeState(false)
        }, 10000);
        doLike && doLike();
    }

    return (
        <>
            {
                likeState ?
                    <Lottie
                        options={animationOptions}
                        width={70}
                        height={50}
                    />
                    : <div style={{display: 'flex', alignItems: 'center', marginTop:15}}>
                        <ThumbUpOut onClick={onClick}/>
                        <Typography variant={'body1'} style={{marginLeft: 5}}>
                            좋아요
                        </Typography>
                    </div>
            }
        </>
    )
}