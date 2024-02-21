import React from 'react';
import 'video.js/dist/video-js.css';
import {config} from '../../../config/config';
import ReactPlayer from 'react-player';
import MpegtsPlayer from './MpegTsPlayer';

const RtmpPlayer = (props) => {

    const {channel} = props;
    const videoUrl = channel.streamKey.toString().indexOf('http') === 0 ? channel.streamKey : `${config.hlsUrl}/${channel.streamKey}.flv`;
   // console.log(videoUrl);
    //const videoUrl = "rtmp://live1.live-casino-club.com:1935/live/1200";
    //const streamUrl = 'http://54.251.118.46:8080/live/livestream.flv';
    return (
            // <ReactPlayer
            //     url={videoUrl}
            //     //type={'application/vnd.apple.mpegurl'}
            //     playing={true}
            //     //forceHLS
            //     width={'100%'}
            //     height={'100%'}
            //     // light={channel.image?channel.image:"../../../static/image/live_back.png"}
            //     muted={false}
            //     controls={true}
            // />
            <MpegtsPlayer src={videoUrl} />
    )
}

export default RtmpPlayer;