import React, {Component} from 'react';
import '../../static/css/mine.css'
import _lodash from 'lodash'
import {dataService} from "../../model/DataService";
import PropTypes from "prop-types";
import * as Tools from "../../lib/tool";
import * as System from "../../redux/modules/system";
import PaginationTable from './MaterialTable';
import * as CONST from "../../model/Const";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button'
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

let vm = null;

class PopoverItem extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false,
        };
    }

    toggle(e) {
        if (e) {
            this.anchorEl = e.currentTarget;
        }
        this.setState({
            popoverOpen: !this.state.popoverOpen,
        });
    }
    exchangeMoney(money) {
        const {exchangeMoney} = this.props;
        this.toggle();
        exchangeMoney(money);
    }

    render() {
        const {dataItem, btnStr, containerStr, mi, state, id, cancelBtnStr, moneyStr, btnState} = this.props;
        return (
            <span>
                <Card className='col-auto p-0 border-0'
                      style={{
                          borderRadius: 15,
                          // minHeight: 200,
                          boxShadow: '3px 5px 6px 0px #b8b8b8',
                          // height: 250

                      }}>
                    <CardContent className='p-0 money_bg_img'>
                        <img alt='' className='money_title_img'
                             src={dataItem.img}/>
                        <h4 className='mb-0 col-auto money_exchange_title_text'>{dataItem.cash} {moneyStr}</h4>
                        <Button id={'Popover-' + id}
                                className='money_exchange_title_button btn-brand align-items-center d-flex justify-content-center'
                                onClick={(e) => {this.toggle.bind(this, e)}}
                                disabled={dataItem.money > mi.coin || btnState}
                        >
                            <img alt='' src='../../static/img/common/coin.png'
                                 style={{width: 30, height: 30}}/>
                            <span className='mb-0'
                                  style={{fontSize: 18}}>{dataItem.money}</span>
                        </Button>
                        {dataItem.money > mi.coin ? null :
                            <Popover open={this.state.popoverOpen}
                                     anchorEl={this.anchorEl}
                                    onClose={this.toggle}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                            >
                                <Typography style={{padding: 5}}>
                                    <h3 className='pl-3 pt-2 mb-0'>{dataItem.money + state}</h3>
                                    <h3 className='p-3'>{containerStr}</h3>
                                    <div style={{flexDirection:'row', justifyContent:"center"}} >
                                        <Button variant="outlined" color="primary"
                                                style={{margin: 10}}
                                                onClick={() => {this.exchangeMoney(dataItem.money)}}
                                                disabled={btnState}
                                        >
                                            {btnStr}
                                        </Button>
                                        <Button variant="outlined" style={{margin: 10}}
                                                color='danger'
                                                onClick={() => {this.toggle()}}
                                        >
                                            {cancelBtnStr}
                                        </Button>
                                    </div>
                                </Typography>
                            </Popover>
                        }
                    </CardContent>
                </Card>
            </span>
        );
    }
}

class Exchange extends Component {

    constructor(props) {
        super(props);
        vm = this;
        this.state = {
            modalState: false,
            exchangeSetting: dataService.exchangeSetting,
            coinToPoint: false,
            btnDisable: false,
            fromExchangeCoin: 0,
            toExchangePoint: 0,

            requireExchangeState : false,

            exchangeCoin2Value : 0,
            exchange2CashValue : 0,
        };
        const {system, getHistory, setting, getSetting} = this.props;
        let model = system[System.HIS_TYPE_EXCHANGE];
        if ((!model.data || !model.data.length) && model.status !== CONST.STATUS_REQ_START && model.status !== CONST.STATUS_REQ_NOMORE) {
            // getHistory(System.HIS_TYPE_EXCHANGE);
        }
        if (!setting || !setting.data || !setting.data.exchange_rate_point || !setting.data.exchange_rate_coin) {
            getSetting();
        }
        if (!this.state.exchangeSetting.length) {
            dataService.getChargeSet().then(
                (response) => {
                    let chargeSet = _lodash.sortBy(_lodash.filter(response, {type: 1}), ['cash']);
                    let exchangeSet = _lodash.sortBy(_lodash.filter(response, {type: 2}), ['cash']);
                    dataService.chargeSetting = chargeSet;
                    dataService.exchangeSetting = exchangeSet;
                    vm.setState({exchangeSetting: exchangeSet});
                },
                (error) => {
                    console.log('get ChargeSet error');
                }
            )
        }
    }

    sendChangeState(settingId, coin, cash) {
        if (settingId === undefined || coin <= 0) return;
        this.setState({requireExchangeState:true});
        dataService.charge('coin', settingId, coin, cash)
            .then((response) => {
                vm.setState({requireExchangeState:false});
                vm.openModal();
                // alert('Charge success');
            })
            .catch((error) => {
                // vm.openModal();
                // alert('Charge fail');
            })
    }

    openModal() {
        this.setState({modalState: !this.state.modalState});
    }

    funcClickCoinToPoint() {
        this.setState({coinToPoint:!this.state.coinToPoint});
    }

    handleInputChange(target) {
        const {data} = this.props.setting, {mi}=this.props;
        let value = target.value,
            invalid = !isNaN(value) ? false : true;
        if (!data.exchange_rate_point) return;
        if (invalid) return;
        if (target.name === 'coin2point') {
            if (value > mi.coin) {
                value = mi.coin;
            }
            let fromCoin = parseInt(value);
            let toPoint = fromCoin * data.exchange_rate_point;
            this.setState({fromExchangeCoin: fromCoin?fromCoin:0, toExchangePoint:toPoint?toPoint:0, btnDisable:toPoint?true:false});
        } else if (target.name === 'coin2cash') {
            let fromCoin = parseInt(value);
            if (fromCoin > mi.coin) {
                fromCoin = mi.coin;
            }
            let toCash = _lodash.round(fromCoin / data.exchange_rate_point / data.exchange_rate_coin, 2);
            this.setState({exchangeCoin2Value: fromCoin?fromCoin:0, exchange2CashValue:toCash?toCash:0});
        }
    }

    funcLoadMoreHistory(filter={}, perPage=10, loadType=CONST.LOAD_TYPE_INIT) {
        const {getHistory, system} = this.props;
        let type = System.HIS_TYPE_EXCHANGE;
        if (system[type] && system[type].status === CONST.STATUS_REQ_START)
            return;
        getHistory(type, loadType, filter, perPage);
    }

    funcExchangeCoinToPoint() {
        const {mi} = this.props;
        if (!this.state.toExchangePoint) return;
        if (this.state.fromExchangeCoin > mi.coin) {
            return;
        }
        this.setState({requireExchangeState:true});
        dataService.requestCoinToPoint(this.state.fromExchangeCoin, this.state.toExchangePoint).then(
            (response)=>{
                vm.setState({fromExchangeCoin:0, toExchangePoint:0, coinToPoint:false, requireExchangeState:false});
            },
            (err) => {

            }
        )
    }

    funcExchangeCoin2Cash() {
        const {setting} = this.props;
        if (!this.state.exchangeCoin2Value || !this.state.exchange2CashValue || this.state.exchangeCoin2Value < setting.data.cash_out_from) {
            return;
        }
        this.setState({requireExchangeState:true});
        dataService.charge('coin',-1, this.state.exchangeCoin2Value, this.state.exchange2CashValue).then(
            (response)=>{
                dataService.showNotification('success', 'Exchange success!!');
                vm.setState({exchangeCoin2Value:0, exchange2CashValue:0, requireExchangeState:false});
                vm.openModal();
            },
            (err) => {

            }
        )
    }

    renderCurrentCtime(item, row) {
        return (
            <span>{item?Tools.getCurrentTime(item, 'L'):('로드중')}</span>
        )
    }

    renderTableProState(item, row) {
        const viewStates = {
            "done" : ('결산됨'),
            "pending" : ('대기중'),
        };
        return (
            <span>
                {viewStates[item]}
            </span>
        )
    }

    renderExchange(exchangeSetting) {
        const {mi} = this.props;
        return (
            <div style={{flexDirection:"row", justifyContent:"space-around", marginTop:5, display:"flex"}} >
                {exchangeSetting.map((dataItem, index) => {
                    return (
                        <div key={index} style={{minWidth: 200, flexDirection:"column", display:'flex'}} className='col-md-2 col-sm-3'>

                            <PopoverItem
                                btnState={this.state.requireExchangeState}
                                state={('금화')}
                                dataItem={dataItem}
                                btnStr={('환전')}
                                mi={mi}
                                exchangeMoney={()=>{this.sendChangeState(dataItem.id, dataItem.money, dataItem.cash)}}
                                containerStr={("ISTOEXCHANGE")}
                                key={index} item={{placement: 'right', text: 'Right',}} id={index}
                                cancelBtnStr={('취소')}
                                moneyStr={('₩')}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        const rendData = [], {mi, system, setting, t} = this.props;
        const columns = [
            {
                title: t("REQUESTDATE"),
                field: 'ctime', // String-based value accessors!
                render: props => (this.renderCurrentCtime(props.ctime)),
            }, {
                title: t("RESPONSEDATE"),
                field: 'utime',
                render: props => (this.renderCurrentCtime(props.utime)), // Custom cell components!
            }, {
                title: t("CASH"),
                field: 'cash',
            }, {
                title: t("POINT"), // Custom header components!
                field: 'money',
            },
            /*{
                Header: this.context.t("INCOMSTATE"), // Custom header components!
                accessor: 'state',
                Cell: props => <span className='number'>{this.renderTableProState(props.value)}</span>,
                className:'table_text_align_center',
            }*/
        ];
        let type = System.HIS_TYPE_EXCHANGE;
        for (let index = 0; index < system[type].totalLength?system[type].totalLength:0; index ++) {
            let buf = system[type].data[index];
            if (buf) rendData.push(buf);
            else rendData.push([]);
        }
        return (
            <div style={{padding:15}}>
                <div className='mt-3 ml-0 mr-0 mb-5' style={{width: '100%', flexDirection: 'row', display: 'flex'}}>
                    {/*{chargeSetting.length ?*/}
                        <div style={{flexDirection:"column", display:"flex", width:'100%'}} >
                            <div style={{
                                margin:2,
                                flexDirection: 'row',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div className='col-auto p-2 point_coin_view'>
                                    <img alt='' src='../../static/img/common/coin.png'
                                         style={{width: 30, height: 30}}/>
                                    <h4 className='mb-0 ml-2'
                                        style={{color: 'white'}}>{mi.coin ? mi.coin : 0}</h4>
                                </div>
                            </div>
                        </div>
                        {/*: null*/}
                    {/*}*/}
                </div>
                {/*금화 -> 현금*/}
                <span>{t('EXCHANGE_ENABLE_ALERT', {coin : setting.data&&setting.data.cash_out_from?setting.data.cash_out_from:1000})}</span>
                <div style={{flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
                    <TextField
                        id="filled-adornment-extra-dense"
                        className={clsx({margin: 10, flexBasis: 200})}
                        variant="filled"
                        margin="dense"
                        hiddenLabel
                        name="coin2cash"
                        value={this.state.exchangeCoin2Value}
                        onChange={(e)=>{this.handleInputChange(e.target)}}
                        InputProps={{
                            inputProps: {
                                'aria-label': 'amount in Euro',
                            },
                            startAdornment: <InputAdornment position="start">
                                1
                                <img alt='' src='../../static/img/common/coin.png'
                                     style={{width:20, height:20}}/>
                            </InputAdornment>,
                        }}
                    />
                    <ArrowForwardIcon style={{fontSize: 30}}/>
                    <TextField
                        id="filled-adornment-extra-dense"
                        className={clsx({margin: 10, flexBasis: 200})}
                        variant="filled"
                        margin="dense"
                        hiddenLabel
                        value={this.state.exchange2CashValue}
                        disabled
                        InputProps={{
                            inputProps: {
                                'aria-label': 'amount in Euro',
                            },
                            startAdornment: <InputAdornment position="start">
                                {_lodash.round(1/(setting.data&&setting.data.exchange_rate_point?setting.data.exchange_rate_point:1) / (setting.data&&setting.data.exchange_rate_coin?setting.data.exchange_rate_coin:1), 2)}
                                ₩
                            </InputAdornment>,
                        }}
                    />
                    <Button variant="outlined" color="primary"
                            style={{margin: 1}}
                            disabled={this.state.exchangeCoin2Value < (setting.data&&setting.data.cash_out_from?setting.data.cash_out_from:1000) || this.state.requireExchangeState}
                            onClick={()=>{this.funcExchangeCoin2Cash()}}
                            className="btn red point-btn m-3 "
                    >
                        {t('POINTOUT')}
                    </Button>
                </div>
                {/*금화 -> 포인트*/}
                <div style={{flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
                    <TextField
                        id="filled-adornment-extra-dense"
                        className={clsx({margin: 10, flexBasis: 200})}
                        variant="filled"
                        margin="dense"
                        hiddenLabel
                        name="coin2point"
                        value={this.state.fromExchangeCoin}
                        onChange={(e)=>{this.handleInputChange(e.target)}}
                        InputProps={{
                            inputProps: {
                                'aria-label': 'amount in Euro',
                            },
                            startAdornment: <InputAdornment position="start">
                                1
                                <img alt='' src='../../static/img/common/coin.png'
                                     style={{width:20, height:20}}/>
                            </InputAdornment>,
                        }}
                    />
                    <ArrowForwardIcon style={{fontSize: 30}}/>
                    <TextField
                        id="filled-adornment-extra-dense"
                        className={clsx({margin: 10, flexBasis: 200})}
                        variant="filled"
                        margin="dense"
                        hiddenLabel
                        value={this.state.toExchangePoint}
                        disabled
                        InputProps={{
                            inputProps: {
                                'aria-label': 'amount in Euro',
                            },
                            startAdornment: <InputAdornment position="start">
                                {setting.data&&setting.data.exchange_rate_point?setting.data.exchange_rate_point:1}
                                <img alt='' src='../../static/img/common/point.png'
                                     style={{width:20, height:20}}/>
                            </InputAdornment>,
                        }}
                    />
                    <Button variant="outlined" color="primary"
                            style={{margin: 1}}
                            disabled={!this.state.btnDisable}
                            onClick={()=>{this.funcExchangeCoinToPoint()}}
                            className="btn red point-btn m-3 "
                    >
                        {t('POINTOUT')}
                    </Button>
                </div>

                <PaginationTable
                    mi={this.props.mi}
                    context_t={this.props.t}
                    getHistory={this.props.getHistory}
                    type={type}
                    noDataText={system[type].status===CONST.STATUS_REQ_NOMORE?t('NO_DATA') : t('LOADING')}
                    columns={columns}
                    // modelStatus={system[type].status}
                    // renderData={rendData?rendData:[]}
                    // exitDataLength={system[type].length?system[type].length:0}
                    // totalDataCnt={system[type].totalLength?system[type].totalLength:0}
                    // funcLoadData={this.funcLoadMoreHistory.bind(this)}
                />
                {/*<Modal isOpen={this.state.modalState} toggle={this.openModal.bind(this)}
                       className={'modal-primary ' + this.props.className}>
                    <ModalBody>
                        <Row className='justify-content-between ml-2 mr-2'>
                            <h4 className='mb-0'>{("성과적으로 환전되였습니다.")}</h4>
                        </Row>
                    </ModalBody>
                    <ModalFooter className='p-1'>
                        <div className='align-items-center mr-4'>
                            <img alt='' src='../../static/img/common/point.png' style={{width: 25}}/>
                            <label className='ml-2 mb-0'>{mi.point}</label>
                        </div>
                        <Row className='col-auto pt-0 pb-0 ml-3 align-items-center' style={{borderRadius: 20}}>
                            <img alt='' src='../../static/img/common/coin.png' style={{width: 30, height: 30}}/>
                            <label className='mb-0'>{mi.coin ? mi.coin : 0}</label>
                        </Row>
                        <Button color="primary" onClick={this.openModal.bind(this)}>{('확인')}</Button>
                    </ModalFooter>
                </Modal>*/}
            </div>
        );
    }
}

export default Exchange;
