import React from 'react';
import PropTypes from 'prop-types';

export const NoticeItem=(props)=>{
    return(
        <img src="../static/image/notice.jpg" alt={"이 자리 광고주를 찾습니다."} style={{width: '100%'}}/>
    )
}

const Notice = (props) => {

    const {position} = props;
    let style = {
        // position: 'absolute',
        width: 200,
        height: 400,
        // top: 10,
        // margin:'0 20px'
    }
    if(position === 'left'){
        style.left = -168;
        style.backgroundColor='green'
    }else if(position === 'right'){
        style.right = -168;
        style.backgroundColor='blue'
    }
    return (
        <div style={style}>
            <NoticeItem/>
        </div>
    );
};

Notice.propTypes = {
    position: PropTypes.string,
};

Notice.defaultProps = {
    position: 'left',
};

export default (Notice);
