import React from 'react';
import {Router} from '../server/pageRoutes';

const PropTypes = require('prop-types')

class Avatar extends React.Component {

    render() {
        let {src, size, shape, id} = this.props;
        let classname = 'avatar-img';
        if(shape === 'circle')
            classname += ' img-circle';
        return (
            <div style={{alignItems:"center",display:"flex"}} onClick={()=>Router&&id&&id>0&&Router.pushRoute('UserProfile',{ user_id: id })}>
                <img src={src} alt={''} width={size+'px'} height={size+'px'} className={classname} style={{borderRadius:'50%', backgroundColor:'#d6d6d6'}}/>
            </div>
        );
    }
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    size:PropTypes.number,
    shape:PropTypes.string,
    id: PropTypes.number,
};
Avatar.defaultProps = {
    src: "",
    size:90,
    shape:'rect'
}


export default Avatar;
