/**
 * AudioItem
 * */
import React from "react";

export default class AudioItem extends React.Component {

    constructor(props){
        super(props);
        this.state={
            isPlaying:false,
        }
    }

    playAudio(){
        if(this.state.isPlaying){
            this.refs.audio.pause();
        }else{
            this.refs.audio.play();
        }

        this.setState({
            isPlaying:!this.state.isPlaying
        });

    }

    render() {
        const {message, arrow, reverseStyle} = this.props;
        const {isPlaying} = this.state;
        return (
            <>
                <div className={arrow} />
                <span className="chat-text" style={reverseStyle} onClick={this.playAudio.bind(this)}>
                        <div>
                            <img alt='' src={isPlaying ? "../../../../../static/img/common/audioPlay.gif" : "../../../../../static/img/common/audioPause.png"} width={25}/>
                        </div>
                    </span>
                <audio style={{display:'none'}} ref="audio">
                    <source src={message.content.data} type="audio/mpeg"/>
                </audio>
            </>
        );
    }
}
