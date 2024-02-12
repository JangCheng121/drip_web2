import React, {Component} from 'react';
import PropTypes from "prop-types";
import { i18n } from '../../i18n';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import * as System from "../../redux/modules/system";
import '../../static/css/mine.css'
import _lodash from 'lodash'
import * as Tools from "../../lib/tool";
import {dataService} from "../../model/DataService";
import 'react-table/react-table.css'
import * as CONST from "../../model/Const";
import PaginationTable from './MaterialTable';
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";

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

    chargeMoney() {
        const {chargeFunc} = this.props;
        this.setState({popoverOpen: !this.state.popoverOpen});
        chargeFunc()
    }

    render() {
        const {dataItem, index, state, containerStr, btnStr, cancelBtnStr, pointStr, btnState, cash_rate, chargeFunc} = this.props;
        return (
            <Card className='col-auto p-0 border-0 mb-0 mt-4'
                  style={{
                      borderRadius: 15,
                      boxShadow: '3px 5px 6px 0px #b8b8b8',
                  }}>
                <CardContent className='p-0 money_bg_img'>{/**/}
                    <img alt='' className='money_title_img'//
                         src={dataItem.img}/>
                    <h4 className='mb-0 col-auto money_title_text'>{_lodash.floor(dataItem.money / cash_rate, 2)} {pointStr}</h4>{/**/}
                    <Button id={'Popover-' + index} className='money_title_button'//
                            style={{
                                width: 100,
                                borderRadius: 10,
                                color: 'white',
                                backgroundColor: '#FF695C',
                                height: 50,
                                alignItems: 'center',
                                boxShadow: '3px 5px 6px 0px #b8b8b8'
                            }}
                            onClick={(e) => {
                                this.toggle(e)
                            }}
                            disabled={btnState}
                    >
                        <h4 className='mb-0' style={{marginBottom: 0, alignItems: 'center', marginTop: 0}}>
                            {dataItem.cash}
                            {/* {contextT('COUNTRY_MONEY_SYMBOL')} */}
                        </h4>
                    </Button>
                    <Popover
                        open={this.state.popoverOpen}
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
                            <h3 style={{marginLeft:15, margin:5}}>{_lodash.floor(dataItem.money / cash_rate, 2) + state}</h3>
                            <h3 style={{marginLeft:15, margin:5}}>{containerStr}</h3>
                            <div style={{flexDirection:'row', justifyContent:"center"}} >
                                <Button variant="outlined" color="primary"
                                        style={{margin: 10}}
                                        onClick={() => {
                                            chargeFunc();
                                            this.toggle();
                                        }}
                                        disabled={btnState}
                                >
                                    {btnStr}
                                </Button>
                                <Button variant="outlined" style={{margin: 10}}
                                        color='danger'
                                        onClick={() => {
                                            this.toggle();
                                        }}
                                >
                                    {cancelBtnStr}
                                </Button>
                            </div>
                        </Typography>
                    </Popover>
                </CardContent>
            </Card>
        );
    }
}

class ChargeMoney extends Component {

    constructor(props) {
        super(props);
        vm = this;
        this.state = {
            modalState: false,
            chargeSetting: dataService.chargeSetting,
            exchangeSetting: dataService.exchangeSetting,
            pageSize: 10,

            requireChargeState: false,

            exchangeCashValue: 0,
            exchangePointValue: 0,
        };
        const {system, getHistory} = this.props;
        let model = system[System.HIS_TYPE_CHARGE];
        if ((!model.data || !model.data.length) && model.status !== CONST.STATUS_REQ_START && model.status !== CONST.STATUS_REQ_NOMORE) {
            // getHistory(System.HIS_TYPE_CHARGE, CONST.LOAD_TYPE_INIT);
        }
        if (!this.state.chargeSetting.length || !this.state.exchangeSetting.length) {
            dataService.getChargeSet().then(
                (response) => {
                    let chargeSet = _lodash.sortBy(_lodash.filter(response, {type: 1}), ['cash']);
                    let exchangeSet = _lodash.sortBy(_lodash.filter(response, {type: 2}), ['cash']);
                    dataService.chargeSetting = chargeSet;
                    dataService.exchangeSetting = exchangeSet;
                    vm.setState({chargeSetting: chargeSet, exchangeSetting: exchangeSet});
                },
                (error) => {
                    console.log('get ChargeSet error');
                }
            )
        }
    }

    sendChargeState(settingId, cash, point) {
        // if (this.state.toChangeMoney <= 0) return;
        if (settingId === undefined) return;
        this.setState({requireChargeState: true});
        dataService.charge('point', settingId, cash, point)
            .then((response) => {
                vm.setState({requireChargeState: false});
                vm.openModal();
            })
            .catch((error) => {
                vm.setState({requireChargeState: false});
            })
    }

    openModal() {
        this.setState({modalState: !this.state.modalState});
    }

    renderCurrentCtime(item, row) {
        return (
            <span>{item ? Tools.getCurrentTime(item, 'L') : ('LOADING')}</span>
        )
    }

    renderCharge() {
        const {setting, t} = this.props;
        let lang = i18n.language;
        let cash_rate = lang === 'ko' ? setting && setting.data && setting.data.exchange_dollar_won : lang === 'cn' ? setting && setting.data && setting.data.exchange_dollar_rmb : 1;
        return (
            <div style={{flexDirection: 'row', flexWrap:"wrap", display: 'flex', width:'100%', justifyContent:"center"}}>
                {this.state.chargeSetting.map((dataItem, index) => {
                    return (
                        <div key={index}
                             style={{minWidth: 200, maxWidth: '20%', margin: 10, flexDirection:"column", display:'flex', width:'15%'}}
                        >
                            <PopoverItem
                                cash_rate={cash_rate?cash_rate:1}
                                btnState={this.state.requireChargeState}
                                dataItem={dataItem}
                                index={index}
                                state={t("POINT")}
                                containerStr={t('ISTOCHARGE')}
                                btnStr={t("MONEYCHARGE")}
                                cancelBtnStr={t("CANCLE")}
                                chargeFunc={() => {
                                    this.sendChargeState(dataItem.id, dataItem.cash, _lodash.floor(dataItem.money / cash_rate, 2))
                                }}
                                pointStr={('POINT')}
                                // contextT={}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }

    renderTableProState(item, row) {
        const viewStates = {
            "done": ('EXCHANGE_FINISHED'),
            "pending": ('EXCHANGE_PENDING'),
        };
        return (
            <span>
                {viewStates[item]}
            </span>
        )
    }

    funcLoadHistory(filter = {}, perPage = 10, loadType = CONST.LOAD_TYPE_INIT, page = 0, sort = []) {
        let type = System.HIS_TYPE_CHARGE;
        const {getHistory, system} = this.props;
        if (system[type] && system[type].status === CONST.STATUS_REQ_START)
            return;
        getHistory(type, loadType, filter, perPage, sort);
    }

    changeInputCash(value) {
        const {setting} = this.props;
        let lang = i18n.language;
        let data = setting && setting.data;
        if (!data) return;
        let invalid = !isNaN(value) ? false : true,
            cash_rate = lang === 'ko' ? setting && setting.data && setting.data.exchange_dollar_won : lang === 'cn' ? setting && setting.data && setting.data.exchange_dollar_rmb : 1;
        if (!data.exchange_rate_point || !data.exchange_rate_coin) return;
        if (!invalid) {
            let fromCoin = parseInt(value);
            let toPoint = _lodash.floor(fromCoin * data.exchange_rate_point * data.exchange_rate_coin / cash_rate, 2);
            this.setState({exchangeCashValue: fromCoin ? fromCoin : 0, exchangePointValue: toPoint ? toPoint : 0});
        }
    }

    funcExchangeCash2Point() {
        if (!this.state.exchangeCashValue || !this.state.exchangePointValue) return;
        this.setState({requireChargeState: true});
        dataService.charge('point', -1, this.state.exchangeCashValue, this.state.exchangePointValue).then(
            (response) => {
                vm.setState({exchangeCashValue: 0, exchangePointValue: 0, requireChargeState: false});
                vm.openModal();
            },
            (err) => {
                vm.setState({exchangeCashValue: 0, exchangePointValue: 0, requireChargeState: false})
                vm.openModal();
            }
        )
    }

    render() {
        const rendData = [], {t, mi, system, setting} = this.props;
        const columns = [
            {
                title: t("REQUESTDATE"),
                field: 'ctime', // String-based value accessors!
                render: props => (this.renderCurrentCtime(props.ctime))
            }, {
                title: t("RESPONSEDATE"),
                field: 'utime',
                render: props => (this.renderCurrentCtime(props.utime))
            }, {
                title: t("CASH"),
                field: 'cash',
            }, {
                title: t("POINT"), // Custom header components!
                field: 'money',
            },
        ];

        let lang = i18n.language;
        let type = System.HIS_TYPE_CHARGE,
            cash_rate = lang === 'ko' ? setting && setting.data && setting.data.exchange_dollar_won : lang === 'cn' ? setting && setting.data && setting.data.exchange_dollar_rmb : 1;
        for (let index = 0; index < system[type].totalLength ? system[type].totalLength : 0; index++) {
            let buf = system[type].data[index];
            if (buf) rendData.push(buf);
            else rendData.push([]);
        }
        let {chargeSetting} = this.state;
        return (
            <div style={{padding:15}}>
                <div className='mt-3 ml-0 mr-0 mb-5' style={{width: '100%', flexDirection: 'row', display: 'flex'}}>
                    {chargeSetting.length ?
                        <div style={{flexDirection:"column", display:"flex", width:'100%'}} >
                            <div style={{
                                margin:2,
                                flexDirection: 'row',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div className='col-auto p-2 point_coin_view'>
                                    <img alt='' src='../../static/img/common/point.png'
                                         style={{width: 30, height: 30}}/>
                                    <h4 className='mb-0 ml-2'
                                        style={{color: 'white'}}>{mi.point ? mi.point : 0}</h4>
                                </div>
                            </div>

                            {this.renderCharge()}

                        </div>
                        : null
                    }
                </div>
                <div className='ml-0 mr-0 align-items-center'
                     style={{flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
                    <TextField
                        id="filled-adornment-extra-dense"
                        className={clsx({margin: 10, flexBasis: 200})}
                        variant="filled"
                        margin="dense"
                        hiddenLabel
                        value={this.state.exchangeCashValue}
                        onChange={(e) => {
                            this.changeInputCash(e.target.value)
                        }}
                        InputProps={{
                            inputProps: {
                                'aria-label': 'amount in Euro',
                            },
                            startAdornment: <InputAdornment position="start">1₩</InputAdornment>,
                        }}
                    />
                    <ArrowForwardIcon style={{fontSize: 30}}/>
                    <TextField
                        id="filled-adornment-extra-dense"
                        className={clsx({margin: 10, flexBasis: 200})}
                        variant="filled"
                        margin="dense"
                        hiddenLabel
                        value={this.state.exchangePointValue}
                        disabled
                        InputProps={{
                            inputProps: {
                                'aria-label': 'amount in Euro',
                            },
                            startAdornment: <InputAdornment position="start">
                                {_lodash.floor((setting.data&&setting.data.exchange_rate_point?setting.data.exchange_rate_point:0) * (setting.data&&setting.data.exchange_rate_coin?setting.data.exchange_rate_coin:0) / (cash_rate?cash_rate:1), 2)}
                                <img alt='' src='../../static/img/common/point.png'
                                     style={{width:20, height:20}}/>
                            </InputAdornment>,
                        }}
                    />
                    <Button variant="outlined" color="primary"
                            style={{margin: 1}}
                            disabled={!this.state.exchangePointValue || this.state.requireChargeState}
                            onClick={() => {
                                this.funcExchangeCash2Point()
                            }}
                            className="btn red point-btn m-3 "
                    >
                        {t('POINTOUT')}
                    </Button>
                </div>

                <PaginationTable
                    mi={this.props.mi}
                    context_t={this.props.t}
                    type={type}
                    columns={columns}
                    noDataText={system[type].status === CONST.STATUS_REQ_NOMORE ? t('NO_DATA') : t('LOADING')}
                    // getHistory={this.props.getHistory}
                    // modelStatus={system[type].status}
                    // renderData={system[type].data}
                    // exitDataLength={system[type].length ? system[type].length : 0}
                    // totalDataCnt={system[type].totalLength ? system[type].totalLength : 0}
                    // funcLoadData={this.funcLoadHistory.bind(this)}
                />
                {/* <Modal isOpen={this.state.modalState} toggle={this.openModal.bind(this)}
                       className={'modal-primary ' + this.props.className}>
                    <ModalBody>
                        <Row className='justify-content-between ml-2 mr-2'>
                            <h4 className='mb-0'>{("CHARGESUCCESS")}</h4>
                        </Row>
                    </ModalBody>
                    <ModalFooter className='p-1'>
                        <div className='align-items-center mr-4'>
                            <img alt='' src='../../assets/img/common/point.png' style={{width: 25}}/>
                            <label className='ml-2 mb-0'>{mi.point}</label>
                        </div>
                        <Row className='col-auto pt-0 pb-0 ml-3 align-items-center' style={{borderRadius: 20}}>
                            <img alt='' src='../../assets/img/common/coin.png' style={{width: 30, height: 30}}/>
                            <label className='mb-0'>{mi.coin ? mi.coin : 0}</label>
                        </Row>
                        <Button color="secondary" onClick={this.openModal.bind(this)}>Ok</Button>
                    </ModalFooter>
                </Modal> */}
            </div>
        );
    }
}

export default ChargeMoney;
