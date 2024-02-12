/**
 * VideoItem
 * */

import React from "react";
import {dataService} from "../../../../model/DataService";

export default class VideoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playVideo: false,
        };
    }

    render() {
        const {message,} = this.props;
        const path = message.content.data;
        const pathElem = dataService.splitPath(path);
        const dirname = pathElem.dirname;
        const filename = pathElem.filename;
        const url = `${dirname}${filename}.png`;
        return (
            <div>
                <div onClick={() => {
                    this.setState({playVideo: !this.state.playVideo})
                }}>
                    {
                        this.state.playVideo ?
                            <video controls autoPlay poster={url} width={250}
                                   style={{borderRadius: 15}}
                                   onEnded={() => {
                                       this.setState({playVideo: false})
                                   }}>
                                <source src={message.content.data}/>
                            </video> :
                            <div style={{position: 'relative'}}>
                                <img alt='' src={url} style={{borderRadius: 10}} width={250}/>
                                <img alt='' src="../../../../static/img/play.png" width={40}
                                     style={{
                                         position: 'absolute',
                                         transform: 'translate(-50%, -50%)',
                                         left: '50%',
                                         top: '50%'
                                     }}/>
                            </div>
                    }


                </div>
            </div>
        )
    }
}
