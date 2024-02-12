import React from "react";
import flv from "flv.js";

class StreamShow extends React.Component {
    constructor(props) {
        super(props);

        this.videoRef = React.createRef();
    }

    componentDidMount() {
        this.buildPlayer();
    }

    componentDidUpdate() {
        this.buildPlayer();
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    buildPlayer() {
        if (this.player) {
            return;
        }


        this.player = flv.createPlayer({
            type: "flv",
            url: `rtmp://192.168.1.103/live/123`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    render() {

        return (
            <div>
                <video ref={this.videoRef} style={{ width: "100%" }} controls />
            </div>
        );
    }
}

export default StreamShow;
