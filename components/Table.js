import React, {useState} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Spinner from "./Spinner";
import moment from 'moment';
const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        maxWidth:200
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

function SplitCell(props) {

    return (
        <>
            <div>{props.item1}</div>
            <div>{props.item2}</div>
        </>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(1),
        overflowX: 'auto',
    },
    table: {
        minWidth: 500,
    },
}));

export default (props) => {
    const classes = useStyles();

    const {tData: {type}, tData: {gData}, tData: {tHeader}, tData: {tValue}} = props;

    const [gIndex, setIndex] = useState(0);

    function handleChange(gIndex) {
        setIndex(gIndex);
    }

    function renderTableBody() {
        let tBody = null;

        if (type === 'coinMarket') {
            tBody = tValue[gIndex] && tValue[gIndex].map((item, index) => (
                <StyledTableRow key={index}>
                    <StyledTableCell align="justify">
                        {item.quote_coin}
                    </StyledTableCell>
                    <StyledTableCell align="justify">
                        {item.trade_price}
                    </StyledTableCell>
                    <StyledTableCell align="justify">
                        {item.change_rate}%
                    </StyledTableCell>
                    <StyledTableCell align="justify">
                        {item.high_price}
                    </StyledTableCell>
                    <StyledTableCell align="justify">
                        {item.low_price}
                    </StyledTableCell>
                </StyledTableRow>
            ))
        } else if (type === 'coinPrice') {
            tBody = tValue[gIndex] && Object.keys(tValue[gIndex]).map((key) => {
                const item = tValue[gIndex][key];
                return (
                    <StyledTableRow key={key}>
                        <StyledTableCell align="justify">
                            {key}
                        </StyledTableCell>
                        <StyledTableCell align="justify">
                            {item.map((item, index) => {
                                return (
                                    <div key={index}>{item.market}</div>
                                )
                            })}
                        </StyledTableCell>
                        <StyledTableCell align="justify">
                            {item.map((item, index) => {
                                return (
                                    <div key={index}>{item.trade_price}</div>
                                )
                            })}
                        </StyledTableCell>
                        <StyledTableCell align="justify">
                            {item.map((item, index) => {
                                return (
                                    <div key={index}>{item.base_coin}</div>
                                )
                            })}
                        </StyledTableCell>
                        <StyledTableCell align="justify">
                            {item.map((item, index) => {
                                return (
                                    <div key={index}>{item.exchange_rate}</div>
                                )
                            })}
                        </StyledTableCell>
                        <StyledTableCell align="justify">
                            {item.map((item, index) => {
                                return (
                                    <div key={index}>{item.main_price}</div>
                                )
                            })}
                        </StyledTableCell>
                    </StyledTableRow>
                )
            })
        } else if (type === 'coinInfo') {
            tBody = tValue.map((item, index) => {
                return (
                    <StyledTableRow key={'coinInfo' + index} onClick={() => props.onClick(item)}>
                        <StyledTableCell align="justify">
                            {item[5].value}
                        </StyledTableCell>
                        <StyledTableCell align="justify">
                            {item[10].value}
                        </StyledTableCell>
                        <StyledTableCell align="justify">
                            {item[18].value}
                        </StyledTableCell>
                        <StyledTableCell align="justify">
                            {moment(item[8].value).format('YYYY-MM-DD hh:mm:ss')}
                        </StyledTableCell>
                        <StyledTableCell align="justify">
                            {item[14].value}
                        </StyledTableCell>
                    </StyledTableRow>
                )
            })
        } else {
            tBody = tValue[gIndex] && tValue[gIndex].map((item, index) => (
                <StyledTableRow key={index}>
                    <StyledTableCell align="justify">
                        {item.quote_coin}
                    </StyledTableCell>
                    <StyledTableCell align="justify">
                        <SplitCell item1={item.ask_market} item2={item.bid_market}/>
                    </StyledTableCell>
                    <StyledTableCell align="justify">
                        <SplitCell item1={item.ask_main_price} item2={item.bid_main_price}/>
                    </StyledTableCell>
                    <StyledTableCell align="justify">
                        <SplitCell item1={item.ask_base} item2={item.bid_base}/>
                    </StyledTableCell>
                    <StyledTableCell align="justify">
                        <SplitCell item1={item.ask_rate} item2={item.bid_rate}/>
                    </StyledTableCell>
                    <StyledTableCell align="justify">
                        <SplitCell item1={item.ask_main_price} item2={item.bid_main_price}/>
                    </StyledTableCell>
                    <StyledTableCell align="justify">
                        {item.margin}
                    </StyledTableCell>
                </StyledTableRow>
            ));
        }

        return tBody;

    }

    return (
        <>
            {gData ?
                <ButtonGroup variant="contained">
                    {
                        gData.map((item, index) => {
                            return (
                                <Button key={index} onClick={() => handleChange(index)}>{item.label}</Button>
                            )
                        })
                    }
                </ButtonGroup> : null
            }
            {tValue.length?
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                {tHeader.map((item, index) => {
                                    return (
                                        <StyledTableCell key={index}>{item.label}</StyledTableCell>
                                    )
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {renderTableBody()}
                        </TableBody>
                    </Table>
                </Paper>
                : <Spinner/>
            }
        </>
    );
}