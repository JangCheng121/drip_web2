import React, {useState, useEffect} from 'react';
import {httpReq} from "../../model/Req";
import * as CONST from "../../model/Const";
import ExpansionPanel from '@material-ui/core/ExpansionPanel/index';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary/index';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails/index';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Empty from '../../components/Empty'
import {getCurrentTime} from '../../lib/tool'
import Typography from "@material-ui/core/Typography";
import Spinner from "../../components/Spinner";

const FAQ = (props) => {

    // const data = props.faqData;
    const [data, setData] = useState(null);

    useEffect(()=>{
        httpReq('/api/faq', 'get').then(
            (res)=>{
                setData(res);
            }
        )
    },[]);

    if(!data){
        return <Spinner/>
    }

    const renderItem = (item, index) => {
        return (
            <ExpansionPanel key={index} defaultExpanded={true}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography variant={"h6"}><b>{item.question}</b></Typography>
                    <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                        <span style={{fontSize: 12}}>{getCurrentTime(item.ctime)}</span>
                    </div>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {item.answer}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }

    return (
        <div>
            {
                data.length ?
                    <div>
                        {data.map((item, index) => {
                            return renderItem(item, index);
                        })}
                    </div> :
                    <Empty/>
            }
        </div>
    );
}

export default FAQ;
