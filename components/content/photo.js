import React, {Component} from 'react';
import '../../static/css/content.css';

class Photo extends Component {

    render() {
        let {data: {media}, data: {is_advert}, ai} = this.props;
        let point = this.props.data.point;
        let token = ai&&ai.token;
        let content = {};
        if (media.length) {

            let length = media.length;
            if(length>=7)
                length=7;
            switch (length) {
                case 1:
                    content = <Layout1 media={media}
                                       isMask={point > 0 && !is_advert?true:false}
                                       token={token}/>;
                    break;
                case 2:
                    content = <Layout2 media={media}
                                       isMask={point > 0 && !is_advert?true:false}
                                       token={token}/>;
                    break;
                case 3:
                    content = <Layout3 media={media}
                                       isMask={point > 0 && !is_advert?true:false}
                                       token={token}/>;
                    break;
                case 4:
                    content = <Layout4 media={media}
                                       isMask={point > 0 && !is_advert?true:false}
                                       token={token}/>;
                    break;
                case 5:
                    content = <Layout5 media={media}
                                       isMask={point > 0 && !is_advert?true:false}
                                       token={token}/>;
                    break;
                case 6:
                    content = <Layout6 media={media}
                                       isMask={point > 0 && !is_advert?true:false}
                                       token={token}/>;
                    break;
                case 7:
                    content = <Layout7 media={media}
                                       isMask={point > 0 && !is_advert?true:false}
                                       token={token}/>;
                    break;
                default:
                    break;
            }
        }
        return (
            <div className=''>
                {content}
            </div>
        );
    }
}

class Mask extends React.Component {
    render() {
        return (
            <div className='mask_layout' />
        )
    }
}

class Layout1 extends React.Component {
    render() {
        let {media, token, isMask} = this.props, cell_src = [];
        for (let index in media) {
            let src_buf = media[index].thumb?media[index].thumb:media[index].src;
            cell_src.push(src_buf);
        }
        return (
            <div className='layout-container photo_row' >
                <Cell src={cell_src[0] + '?token=' + token}
                      isMask={isMask}
                      style={{width: '100%', paddingTop: '100%'}}/>
            </div>
        )
    }
}

class Layout2 extends React.Component {
    render() {
        let {media, token, isMask} = this.props, cell_src = [];
        for (let index in media) {
            let src_buf = media[index].thumb?media[index].thumb:media[index].src;
            cell_src.push(src_buf);
        }
        return (
            <div className='layout-container photo_row' >
                <Cell src={cell_src[0] + '?token=' + token} className='photo_wid_50 pht_bd_r' />
                <Cell src={cell_src[1] + '?token=' + token}
                      isMask={isMask}
                      className='photo_wid_50 pht_bd_l'/>
            </div>
        )
    }
}

class Layout3 extends React.Component {
    render() {
        let {media, token, isMask} = this.props, cell_src = [];
        for (let index in media) {
            let src_buf = media[index].thumb?media[index].thumb:media[index].src;
            cell_src.push(src_buf);
        }
        return (
            <div className=' photo_row layout-container' >
                <Cell src={cell_src[0] + '?token=' + token} style={{width:'66.66666%', paddingTop: '66.6666%', borderRight: '2px solid white'}}/>
                <div style={{flexDirection:'column', display:'flex', width:'33.3333%', padding:0}}>
                    <Cell src={cell_src[1] + '?token=' + token} isMask={isMask}
                          style={{height: '50%', borderLeft: '2px solid white', borderBottom: '2px solid white'}}/>
                    <Cell src={cell_src[2] + '?token=' + token} isMask={isMask}
                          style={{height: '50%', borderLeft: '2px solid white', borderTop: '2px solid white'}}/>
                </div>
            </div>
        )
    }
}

class Layout4 extends React.Component {
    render() {
        let {media, token, isMask} = this.props, cell_src = [];
        for (let index in media) {
            let src_buf = media[index].thumb?media[index].thumb:media[index].src;
            cell_src.push(src_buf);
        }
        return (
            <div className=' photo_row layout-container' >
                <div style={{flexDirection:'column', display:'inline-block', padding:0,flex:1}}>
                    <Cell src={cell_src[0] + '?token=' + token} style={{paddingTop: '100%', borderRight: '2px solid white', borderBottom: '2px solid white'}}/>
                    <Cell src={cell_src[1] + '?token=' + token} isMask={isMask}
                          style={{paddingTop: '100%', borderRight: '2px solid white', borderTop: '2px solid white'}}/>
                </div>
                <div style={{flexDirection:'column', display:'flex', padding:0,flex:1}}>
                    <Cell src={cell_src[2] + '?token=' + token} isMask={isMask}
                          style={{paddingTop: '100%', borderLeft: '2px solid white', borderBottom: '2px solid white'}}/>
                    <Cell src={cell_src[3] + '?token=' + token} isMask={isMask}
                          style={{paddingTop: '100%', borderLeft: '2px solid white', borderTop: '2px solid white'}}/>
                </div>
            </div>
        )
    }
}

class Layout5 extends React.Component {
    render() {
        let {media, token, isMask} = this.props, cell_src = [];
        for (let index in media) {
            let src_buf = media[index].thumb?media[index].thumb:media[index].src;
            cell_src.push(src_buf);
        }
        return (
            <div className=' photo_row layout-container' >
                <div style={{flexDirection:'column', display:'inline-block', padding:0, flex:7}}>
                    <Cell src={cell_src[0] + '?token=' + token} style={{paddingTop: '100%', borderRight: '2px solid white', borderBottom: '2px solid white'}}/>
                    <Cell src={cell_src[1] + '?token=' + token} style={{paddingTop: '100%', borderRight: '2px solid white', borderTop: '2px solid white'}}/>
                </div>
                <div style={{flexDirection:'column', display:'flex', padding:0, flex:5}}>
                    <Cell src={cell_src[2] + '?token=' + token} isMask={isMask}
                          style={{height: '33.3333%', borderLeft: '2px solid white', borderBottom: '2px solid white'}}/>
                    <Cell src={cell_src[3] + '?token=' + token} isMask={isMask}
                          style={{height: '33.3333%', borderLeft: '2px solid white', borderBottom: '2px solid white', borderTop: '2px solid white'}}/>
                    <Cell src={cell_src[4] + '?token=' + token} isMask={isMask}
                          style={{height: '33.3333%', borderLeft: '2px solid white', borderTop: '2px solid white'}}/>
                </div>
            </div>
        )
    }
}

class Layout6 extends React.Component {
    render() {
        let {media, token, isMask} = this.props, cell_src = [];
        for (let index in media) {
            let src_buf = media[index].thumb?media[index].thumb:media[index].src;
            cell_src.push(src_buf);
        }
        return (
            <div className=' photo_row layout-container' >
                <div style={{flexDirection:'column', display:'inline-block', width:'66.6666%'}}>
                    <div style={{flexDirection:'row', display:'flex', flex:1}}>
                        <Cell src={cell_src[0] + '?token=' + token} style={{flex:1,paddingTop: '100%', borderRight: '2px solid white', borderBottom: '2px solid white'}}/>
                    </div>
                    <div style={{flexDirection:'row', display:'flex'}}>
                        <div style={{flexDirection:'column', display:'flex', padding:0, flex:1}}>
                            <Cell src={cell_src[1] + '?token=' + token} style={{paddingTop: '100%', borderRight: '2px solid white', borderTop: '2px solid white'}}/>
                        </div>
                        <div style={{flexDirection:'column', display:'flex', padding:0, flex:1}}>
                            <Cell src={cell_src[2] + '?token=' + token} isMask={isMask}
                                  style={{paddingTop: '100%', borderRight: '2px solid white', borderTop: '2px solid white', borderLeft: '2px solid white'}}/>
                        </div>
                    </div>
                </div>
                <div style={{flexDirection:'column', display:'flex', padding:0, width:'33.3333%'}}>
                    <Cell src={cell_src[3] + '?token=' + token} isMask={isMask}
                          style={{height: '33.3333%', borderLeft: '2px solid white', borderBottom: '2px solid white'}}/>
                    <Cell src={cell_src[4] + '?token=' + token} isMask={isMask}
                          style={{height: '33.3333%', borderLeft: '2px solid white', borderBottom: '2px solid white', borderTop: '2px solid white'}}/>
                    <Cell src={cell_src[5] + '?token=' + token} isMask={isMask}
                          style={{height: '33.3333%', borderLeft: '2px solid white', borderTop: '2px solid white'}}/>
                </div>
            </div>
        )
    }
}

class Layout7 extends React.Component {
    render() {
        let {media, token, isMask} = this.props, cell_src = [];
        for (let index in media) {
            let src_buf = media[index].thumb?media[index].thumb:media[index].src;
            cell_src.push(src_buf);
        }
        return (
            <div className=' photo_row layout-container' >
                <div style={{flexDirection:'column', display:"inline-block", flex:8}}>
                    <div style={{flexDirection:'row', display:'flex', flex:1}}>
                        <Cell src={cell_src[0] + '?token=' + token} style={{flex:1,paddingTop: '100%', borderRight: '2px solid white', borderBottom: '2px solid white'}}/>
                    </div>
                    <div style={{flexDirection:'row', display:'flex', flex:1}}>
                        <div style={{flexDirection:'column', display:'flex', padding:0, flex:1}}>
                            <Cell src={cell_src[1] + '?token=' + token} style={{paddingTop: '100%', borderRight: '2px solid white', borderTop: '2px solid white', flex:1}}/>
                        </div>
                        <div style={{flexDirection:'column', display:'flex', padding:0, flex:1}}>
                            <Cell src={cell_src[2] + '?token=' + token} isMask={isMask}
                                  style={{paddingTop: '100%', borderRight: '2px solid white', borderTop: '2px solid white', borderLeft: '2px solid white', flex:1}}/>
                        </div>
                    </div>
                </div>
                <div style={{flexDirection:'column', display:'flex', padding:0, flex:4}}>
                    <Cell src={cell_src[3] + '?token=' + token} isMask={isMask}
                          style={{height: '33.3333%', borderLeft: '2px solid white', borderBottom: '2px solid white'}} />
                    <Cell src={cell_src[4] + '?token=' + token} isMask={isMask}
                          style={{height: '33.3333%', borderLeft: '2px solid white', borderBottom: '2px solid white', borderTop: '2px solid white'}} />
                    <Cell src={cell_src[5] + '?token=' + token} isMask={isMask}
                          style={{height: '33.3333%', borderLeft: '2px solid white', borderTop: '2px solid white'}} />
                    <div className='count d-flex justify-content-center align-items-center' style={{zIndex:3}}>
                        <div style={{marginTop:20}}>
                            +{media.length - 6}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


class Cell extends React.Component {
    render() {
        let className = 'col ';//white-border
        const {isMask} = this.props;
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
                    position:'relative',
                    ...this.props.style
                }
            }>
                {isMask ?
                    <Mask/>
                    :null
                }
            </div>
        )
    }
}

export default Photo;
