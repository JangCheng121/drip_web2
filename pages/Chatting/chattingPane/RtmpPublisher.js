import React, {Component} from 'react';
import ReactSWF from 'react-swf';
import {config} from '../../../config/config'

const SWF_ID_PREFIX = '__MyExternalInterfaceExample_SWFID_';
const SWF_PUBLISHER_ON_PLAY = 'SWF_PUBLISHER_ON_PLAY';
const SWF_PUBLISHER_ON_ERROR = 'SWF_PUBLISHER_ON_ERROR';

let nextUID = 0;

export default class RtmpPublisher extends Component {

    state = {
        isPlaying: false,
    }

    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this._uid = 0;
        this._uid = nextUID++;
        window[SWF_PUBLISHER_ON_PLAY + this._uid] = this.onPlayButton.bind(this);
        window[SWF_PUBLISHER_ON_ERROR + this._uid] = this.onError.bind(this);
        this.onPlayButton.bind(this);
    }

    componentWillUnmount() {
        delete window[SWF_PUBLISHER_ON_PLAY + this._uid];
        delete window[SWF_PUBLISHER_ON_ERROR + this._uid];
    }

    onPlayButton(isPlay) {
        console.log('RtmpPublisher====================clickBtn===========', isPlay);
        const {startLive, stopLive} = this.props;
        if (isPlay) {
            startLive&&startLive();
        } else {
            stopLive&&stopLive();
        }
    }

    onError() {
        console.log('onError', arguments);
    }

    render() {

        const {streamKey, start_state} = this.props;

        return (
            <div style={{width: '100%', height: '100%', maxHeight:700}}>
                <ReactSWF
                    ref={c => {
                        this._swfPlayerNode = c;
                        this.ref = c;
                    }}
                    id={SWF_ID_PREFIX + this._uid}
                    src="../static/swf/rtmpPublisher.swf"
                    allowFullScreen={true}
                    allowscriptaccess="always"
                    width='100%'
                    height='100%'
                    wmode="transparent"
                    flashVars={{
                        streamer: config.rtmpUrl,
                        file: streamKey,
                        onPlayButton: SWF_PUBLISHER_ON_PLAY + this._uid,
                        onError: SWF_PUBLISHER_ON_ERROR + this._uid,
                        start_state: start_state,
                    }}
                />
            </div>
        );
    }
}