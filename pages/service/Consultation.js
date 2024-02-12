import React from 'react';
import ChattingPane from "../Chatting/chattingPane";
import 'emoji-mart/css/emoji-mart.css'
import {dataService} from "../../model/DataService";
import * as CONST from "../../model/Const"
import * as actions from "../../redux/modules/chat/actions/actions"
import AlertModal from "../../components/AlertModal";

class Consultation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginModalState: false,
        };
        this.props.dispatch(actions.changeChannel(CONST.CUSTOM_SERVICE_CHANNEL));
    }

    componentDidMount() {
        dataService.currentRoute = CONST.ROUTE_CONSULTATION;
        this.props.dispatch(actions.setUnreadCount(0));
    }

    componentWillUnmount() {
        dataService.currentRoute = '';
        this.props.dispatch(actions.changeChannel(CONST.DEFAULT_ACTIVE_CHANNEL));
    }

    funcLoginModal() {
        this.setState({loginModalState: !this.state.loginModalState});
    }

    render() {
        return (
            <>
                <ChattingPane
                    {...this.props}
                    isChatting={false}
                    showNotice={this.funcLoginModal.bind(this)}
                />
                <AlertModal {...this.props}
                            modalStatus={this.state.loginModalState}
                            goStatus={'login'}
                            toggleFunc={this.funcLoginModal.bind(this)}
                            alertStr={"이 기능은 회원만 가능합니다.회원가입 하시겠습니까?"}
                            btnOkStr={"로그인"}
                />
            </>
        );
    }
}

export default Consultation;
