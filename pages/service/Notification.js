import React, {useState, useEffect} from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel/index';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary/index';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails/index';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import {httpReq} from '../../model/Req'
import {getCurrentTime} from "../../lib/tool";
import Empty from "../../components/Empty";
import Spinner from "../../components/Spinner";
import {withTranslation} from "../../i18n";

let HtmlToReactParser = require('html-to-react').Parser;

const Notification =(props) => {

    const {t} = props;

    const [content, setContent] = useState(null);

    useEffect(() => {
        httpReq('/api/notice', 'get').then(
            (res) => {
                setContent(res)
            }
        )
    }, []);

    if(!content){
        return <Spinner/>
    }

    const renderItem = (item, index) => {
        let htmlToReactParser = new HtmlToReactParser();
        let reactElement = htmlToReactParser.parse(item.content);
        return (
            <ExpansionPanel key={index} defaultExpanded={true}>
                {index === 0 ?
                    <div style={{margin: 20, display: "inline-block"}}>
                        <strong>
                            {/*<a href='http://drip.hk' download className='pl-3'>*/}
                            {/*    {t('APPDOWNLOAD')}*/}
                            {/*</a>*/}
                        </strong>
                    </div>
                    :null
                }
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant={"h6"}><b>{item.title ? item.title : '제목없음'}</b></Typography>
                    <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                        <span style={{fontSize: 12}}>{getCurrentTime(item.ctime)}</span>
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{flexDirection: "column", display:"flex"}}>
                    {reactElement}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }

    return (
        <div className="animated fadeIn">
            {
                content.length ?
                    content.map((item, index) => {
                        return renderItem(item, index);
                    })
                    : <Empty/>
            }
        </div>
    );
}
export default withTranslation('common')(Notification)
