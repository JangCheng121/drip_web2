import React from 'react';
import DialogContent from "@material-ui/core/DialogContent";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots} from "@fortawesome/free-solid-svg-icons";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import SendIcon from '@material-ui/icons/Send';
import Dialog from "@material-ui/core/Dialog";
import {dataService} from "../model/DataService";

class SendNoteDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sendNoteStr:'',
        }
    }

    changeNoteInput(value) {
        this.setState({sendNoteStr:value});
    }


    funcClickSendNoteBtn() {
        const {setSendNoteDialogState, user_id} = this.props;
        if (this.state.sendNoteStr === '' || !user_id)
            return;
        dataService.funcSendNote([user_id], this.state.sendNoteStr);
        this.setState({sendNoteStr:''});
        setSendNoteDialogState(false);
    }

    render() {
        const {dialogState, setSendNoteDialogState, placeholderStr} = this.props;
        return (
            <Dialog
                open={dialogState}
                onClose={() => setSendNoteDialogState(false)}
                maxWidth='lg'
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent style={{padding: 0}}>
                    <Paper style={{display: "flex", alignItems: "center", width: 400, padding: 10}}>
                        <IconButton style={{padding: 10}} aria-label="menu">
                            <FontAwesomeIcon style={{fontSize: 25}} icon={faCommentDots}/>
                        </IconButton>
                        <InputBase
                            style={{flex: 1, marginLeft: 10}}
                            placeholder={placeholderStr}
                            value={this.state.sendNoteStr}
                            onChange={(e) => {
                                this.changeNoteInput(e.target.value)
                            }}
                            inputProps={{'aria-label': 'search google maps'}}
                        />
                        <Divider style={{height: 28, margin: 4}} orientation="vertical"/>
                        <IconButton onClick={() => { this.funcClickSendNoteBtn() }}
                                    // color="primary"
                                    aria-label="directions"
                                    disabled={this.state.sendNoteStr === ''}
                        >
                            <SendIcon/>
                        </IconButton>
                    </Paper>
                </DialogContent>
            </Dialog>
        )
    }

}

export default SendNoteDialog;