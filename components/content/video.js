import React, {Component} from 'react';
import {dataService} from "../../model/DataService";
import '../../static/css/content.css'

import {connect} from 'react-redux';
class Video extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        // const {data, id, type} = this.props;
    }

    render() {
        const {data, playBtnLeft, ai} = this.props;
        let token = ai&&ai.token;
        let videoUri = data.media[0].thumb?data.media[0].thumb:data.media[0].src;
        const elemPath = dataService.splitPath(videoUri);
        const thumbPath = `${elemPath.dirname}${elemPath.filename}.png`;
        return (
            <div className="animated fadeIn photo_div" style={{boxShadow:playBtnLeft===27?'unset':''}}>
                <Layout1 media={thumbPath} token={token}/>
                <img alt='PlayButton'
                     src="../../static/img/play.png"
                     width={40} height={40}
                     style={{left:playBtnLeft?`${playBtnLeft}%`:"unset"}}
                     className='video_play_btn'
                />
            </div>
        );
    }
}

class Layout1 extends React.Component {
    render() {
        let {media, token} = this.props;
        return (
            <div className='row layout-container'>
                <Cell src={media + '?token=' + token} style={{ paddingTop: '150%'}}/>
            </div>
        )
    }
}

class Cell extends React.Component {
    render() {
        let className = 'white-border col ';
        if (this.props.className)
            className += this.props.className;
        return (
            <div className={className} style={
                {
                    backgroundImage: `url(${this.props.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius:7,
                    ...this.props.style
                }
            }>
            </div>
        )
    }
}

export default connect(
    state=>({
      ai:state.system.ai
    })
)(Video);