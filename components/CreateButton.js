import React, {useState} from 'react';
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/AddCircleOutline'
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import Warning from "./Warning";

const CreateButton = (props) => {

    const {onClick, mi} = props;
    const [noticeName, setNoticeName] = useState('');
    const onPress = () => {
        if (!mi.member) {
            setNoticeName('login');
            return;
        }
        onClick();
    }
    const closeNotice = () => {
        setNoticeName('');
    }
    return (
        <>
            <Button style={{marginLeft: 'auto'}} onClick={onPress}>
                <AddIcon style={{fontSize: 32, color: '#ffffff'}}/>
            </Button>
            <Warning isOpen={noticeName.length > 0}
                     content={"이 기능은 회원만 가능합니다.회원가입 하시겠습니까?"}
                     action={noticeName}
                     close={closeNotice}
            />
        </>
    )
}

CreateButton.prototype = {
    onClick: PropTypes.func
};
export default connect(
    state => ({
        mi: state.system.mi
    })
)(CreateButton);