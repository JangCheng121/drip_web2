import React from 'react';
import ReplyIcon from '@material-ui/icons/Reply';
import '../static/css/widget.css'
import {auth} from "../model/Auth";
import {dataService} from "../model/DataService";
import Router, {withRouter} from 'next/router'


class Back extends React.Component {

    onBack(props) {
        let pathName = props.router && props.router.pathname;
        if (pathName === '/login') {
            dataService.init();
            Router.pushRoute('/');
        } else {
            Router.back();
        }
    }

    render() {
        let {props, className} = this.props;
        let classname = "d-flex flex-row-reverse pt-2 mr-4 ";
        if (className) {
            classname += className
        }
        return (
            <div className={classname} style={{
                borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.6)',
                width: 30, height: 30, justifyContent: 'center', alignItems: 'center', display: 'flex', margin: 5
            }}>
                <span onClick={() => {
                    this.onBack(props)
                }}>
                            <ReplyIcon style={{fontSize: 30}}/>
                        </span>
            </div>
        );
    }
}

Back.propTypes = {};
Back.defaultProps = {}


export default Back;
