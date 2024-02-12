import React, {Component} from 'react';
import '../../static/css/mine.css'
import PaginationTable from "./MaterialTable";
import Button from '@material-ui/core/Button'
import * as Tools from "../../lib/tool";
import Avatar from "../../components/Avatar";
import SendIcon from '@material-ui/icons/Send';
import SendNoteDialog from "../../components/SendNoteDialog";
import DeleteIcon from '@material-ui/icons/DeleteForever';
import {httpReq} from "../../model/Req";

let vm = null;
class MyNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            renderAdvertData:[],
            renderDataTotalLength:0,
            loadMoreState:'success',//start, fail, noData
            hasNoMoreData:false,//true:noMore,

            alertModalState: false,
            changeStateAdvertId:-1,
            advertState:false,

            sendNoteDialogState: false,
            sendNoteUserId: -1,
        };
        vm = this;
        this.tableRef = React.createRef();
        const {resetUnreadNote} = this.props;
        resetUnreadNote();
    }

    renderTime(item, row) {
        return (
            <span>{item?Tools.getCurrentTime(item, 'YYYY-MM-DD HH:mm'):'로드중...'}</span>
        )
    }

    funcClickSendNoteBtn(user_id) {
        // Router.pushRoute('UserProfile', {user_id : user_id});
        if (!user_id) return;
        this.setState({
            sendNoteDialogState:true,
            sendNoteUserId: user_id
        });
    }
    toggleSendNoteDialog() {
        this.setState({sendNoteDialogState : !this.state.sendNoteDialogState})
    }

    renderSendBtn(dataItem){
        return (
            <Button variant="outlined"
                    onClick={()=>{this.funcClickSendNoteBtn(dataItem.sender)}} className='' color='primary'>
                <SendIcon />
            </Button>
        )
    }
    //
    renderSender(user_id){
        const {users, getUser} = this.props;
        let user = users[user_id];
        if (!user) {
            getUser(user_id);
            return (
                <span>{user_id}</span>
            )
        }
        return (
            <div className='div_row align-items-center ' >
                <Avatar src={user.picture} id={user_id} size={35} shape={'circle'}/>
                <span style={{marginLeft:10}}>{user.name}</span>
            </div>
        )
    }

    renderContent(content) {
        return (
            <div>
                {content}
            </div>
        )
    }

    funcDeleteItems = async (evt, data) => {
        const {setAppModalState} = vm.props;
        let delete_ids = [];
        for (let index in data) {
            if (data[index].id) {
                delete_ids.push(data[index].id);
            }
        }
        setAppModalState('page', '선택된 항목들을 삭제하시겠습니까?', 'DELETE', ()=>vm.deleteItems(delete_ids));
    }

    deleteItems = async (deleteIds) => {
        let delete_result = await httpReq('/api/note', 'delete', {params:{filter:{ids:deleteIds}}});
        if (delete_result) {
            this.tableRef.current && this.tableRef.current.onQueryChange();
        }
    }

    render() {
        const rendData = [],{note, t} = this.props,
            columns = [
                {
                    title: t("SEND_DATE"),
                    field: 'ctime', // String-based value accessors!
                    render: props => (this.renderTime(props.ctime)),
                },
                {
                    title: t("NOTE_SENDER"),
                    field: 'sender',
                    render: props => (this.renderSender(props.sender)),
                },
                {
                    title: t("NOTE_CONTENT"), // Custom header components!
                    field:'content',
                    render: props => (this.renderContent(props.content)),
                },
                {
                    title: (""), // Custom header components!
                    field: '',
                    render: props => (this.renderSendBtn(props)),
                }
            ];
        for (let index = 0; index < note.totalLength; index ++) {
            let buf = note.data[index];
            if (buf) rendData.push(buf);
            else rendData.push([]);
        }
        return (
            <div>
                <PaginationTable
                    mi={this.props.mi}
                    type={'note'}
                    context_t={this.props.t}
                    noDataText={t('NO_DATA')}
                    columns={columns}
                    table_selection={true}
                    tableRef={vm.tableRef}
                    table_action={[
                        {
                            tooltip: 'Remove All Selected Items',
                            icon: ()=><DeleteIcon />,
                            onClick: (evt, data) => {vm.funcDeleteItems(evt, data)}
                        },
                    ]}
                />
                <SendNoteDialog
                    dialogState={this.state.sendNoteDialogState}
                    setSendNoteDialogState={this.toggleSendNoteDialog.bind(this)}
                    placeholderStr={t("INPUT_NOTE_CONTENT")}
                    user_id={this.state.sendNoteUserId}
                />
            </div>
        );
    }



}

export default MyNote;
