import React from 'react';
import Spinner from "../components/Spinner"
import NoSsr from '@material-ui/core/NoSsr';
import Notice from "./Notice";

export default class IFrame extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    hideSpinner() {
        this.setState({loading: false});
    }

    render() {
        const {src, width, height, top, left, isLarge, containerHeight, isHome} = this.props;
        const {loading} = this.state;

        return (

            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div style={{
                    position: 'relative',
                    overflow: 'hidden',
                    width: width,
                    height: height,
                    borderRadius: 5,
                    backgroundColor: loading ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
                }}>
                    {loading ?
                        <Spinner/> : null
                    }
                    <NoSsr>
                        <iframe
                            src={src.replace(/^http:\/\//i, 'https://')}
                            scrolling="no"
                            onLoad={this.hideSpinner.bind(this)}
                            style={{
                                position: 'absolute',
                                top: top,
                                left: left,
                                width: isLarge ? '100%' : 1903,
                                height: isLarge ? height : containerHeight ? containerHeight : 978,
                                border: 0
                            }}/>
                    </NoSsr>

                </div>
                {
                    !isHome && width < 1000 ?
                        <div style={{marginLeft:30}}>
                            <Notice/>
                        </div>
                        : null
                }
            </div>

        )
    }
}
