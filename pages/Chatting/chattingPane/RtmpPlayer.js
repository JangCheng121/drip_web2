import React from 'react';
import 'video.js/dist/video-js.css';
import {config} from '../../../config/config';
import ReactPlayer from 'react-player';

const RtmpPlayer = (props) => {

    const {channel} = props;
    const videoUrl = channel.streamKey.toString().indexOf('http') === 0 ? channel.streamKey : `${config.hlsUrl}/${channel.streamKey}/index.m3u8`;
    return (
            <ReactPlayer
                url={videoUrl}
                type={'application/mpegurl'}
                playing
                forceHLS
                width={'100%'}
                height={'100%'}
                // light={channel.image?channel.image:"../../../static/image/live_back.png"}
                muted={false}
                controls={true}
            />
    )
}

export default RtmpPlayer;