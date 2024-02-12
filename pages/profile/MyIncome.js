import React, {Component} from 'react';
import '../../static/css/mine.css'
import * as Tools from "../../lib/tool";
import PaginationTable from './MaterialTable';
import * as CONST from "../../model/Const";
import * as System from "../../redux/modules/system";
import {dataService} from "../../model/DataService";
import loadable from '@loadable/component';

let vm = null;
const AsyncPage = loadable(props => import(`./${props.page}`));
class MyIncome extends Component {

    channelData = [
        {index: System.HIS_TYPE_POINT, name: 'POINT'},
        {index: System.HIS_TYPE_COIN, name: 'COIN'},
    ];
    constructor(props) {
        super(props);
        vm = this;
        this.state = {
            channelType: System.HIS_TYPE_POINT,
            pointIn:0,
            pointOut:0,
            coinIn:0,
            coinOut:0,
        };

        this.renderTabHeader = this.renderTabHeader.bind(this);
    }

    changeTabOnClick(index) {
        this.setState({
            channelType: index
        });
    }

    componentDidMount() {
        dataService.funcGetMoneyState().then(
            (res)=>{
                vm.setState({
                    pointIn:res.point_in?res.point_in:0,
                    pointOut:res.point_out?res.point_out:0,
                    coinIn:res.coin_in?res.coin_in:0,
                    coinOut:res.coin_out?res.coin_out:0
                })
            },
            (err)=>{
                console.log(err);
            }
        )
    }

    renderGettingState(state){
        return (
            <span>
                {state===1?
                    <i style={{color: 'green'}} className="fa fa-plus-circle fa-lg" />
                    :<i style={{color: '#e41b2f'}} className="fa fa-minus-circle fa-lg" />
                }
            </span>
        )
    }
    renderPointIncomeState(state) {
        const {t} = this.props;
        const viewStates = {
            "cash_in" : t('cash_in'),
            "first_cash_in" : t('first_cash_in'),
            "first_cash_out" : t('first_cash_out'),
            "cashin_continue" : t('cashin_continue'),
            "content_view" : t('content_view'),
            "advert_view" : t('advert_view'),
            "content_add" : t('content_add'),
            "review_add" : t('review_add'),
            "follow" : t('follow'),
            "attend" : t('attend'),
            "cash_set_in" : t('cash_set_in'),
            "coin_to_point" : t('coin_to_point'),
            "pay_guarantee" : t('pay_guarantee'),
            "chat_in_enter_user" : t('chat_in_enter_user'),
            "chat_out_enter_user": t("chat_out_enter_user"),
            "chat_out_enter_creator": t("chat_out_enter_creator"),
            "chat_out_create": t("chat_out_create"),
            "chat_out_delay": t("chat_out_delay"),
            "delete_point": t("delete_point"),
            "enter_category": t("enter_category"),
            "invite": t("invite"),
            "send_gift": t("send_gift"),
            "gift": t("gift"),
            "select_content": t("select_content"),
        };
        return (
            <span>
                {viewStates[state]}
            </span>
        )
    }
    renderCoinIncomeState(state) {
        const {t} = this.props;
        const viewStates = {
            "cash_out" : t('cash_out'),
            "advert_view" : t('advert_view'),
            "cash_set_out" : t('cash_set_out'),
            "coin_to_point" : t('coin_to_point'),
            "content_add" : t('content_add'),
        };
        return (
            <span>
                {viewStates[state]}
            </span>
        )
    }

    funcLoadHistoryData(type,filter={}, perPage=10, loadType=CONST.LOAD_TYPE_INIT) {
        const {getHistory, system} = this.props;
        if (system[type] && system[type].status === CONST.STATUS_REQ_START && system[type].status === CONST.STATUS_REQ_NOMORE)
            return;
        getHistory(type, loadType, filter, perPage);
    }
    renderCurrentCtime(item, row) {
        return (
            <span>{item?Tools.getCurrentTime(item, 'YYYY-MM-DD'):('로드중...')}</span>
        )
    }
    renderTabHeader(channelType) {
        const {t} = this.props;
        let tabs = this.channelData.map((item, index) => {
            return (
                <li key={index} className={(channelType === item.index ? 'active' : '')} style={{flexDirection: 'row'}}>
                    <div onClick={this.changeTabOnClick.bind(this, item.index)} className='justify-content-center div_row' style={{padding:5}}>
                        {item.index === System.HIS_TYPE_POINT ?
                            <img alt='' src='../../static/img/common/point.png' width={25} height={25}/>
                            :<img alt='' src='../../static/img/common/coin.png' width={25} height={25}/>
                        }
                        <span style={{marginLeft:10}}>{t(item.name)}</span>
                    </div>
                </li>
            )
        });

        return (
            <ul className="tabs-header">{tabs}</ul>
        )
    }

    renderPoint(dataItem) {
        return(
            <span>{dataItem.type===1?'+':dataItem.type!==undefined?'-':''}{dataItem.point}</span>
        )
    }
    renderCoin(dataItem) {
        return(
            <span>{dataItem.type===1?'+':dataItem.type!==undefined?'-':''}{dataItem.coin}</span>
        )
    }

    renderTable(type) {
        let renderDatas = [];
        const {system, mi, t} = this.props,
            objColumns = {
                [System.HIS_TYPE_POINT]:[
                    {
                        title: t("DATE"),
                        field: 'ctime',
                        render: props => (this.renderCurrentCtime(props.ctime)),
                    }, {
                        title: t("POINT"),
                        field: 'point',
                        render: props => (this.renderPoint(props)),
                    }, {
                        title: t("INCOMSTATE"),
                        field: 'info',
                        render: props => (this.renderPointIncomeState(props.info)),
                    },
                ],
                [System.HIS_TYPE_COIN]:[
                    {
                        title: t("DATE"),
                        field: 'ctime',
                        render: props => (this.renderCurrentCtime(props.ctime)),
                    }, {
                        title: t("COIN"),
                        field: 'coin',
                        render: props => (this.renderCoin(props)),
                    }, {
                        title: t("INCOMSTATE"),
                        field: 'info',
                        render: props => (this.renderCoinIncomeState(props.info)),
                    },
                ],
            };
        for (let index = 0; index < system[type].data.length?system[type].data.length:0; index ++) {
            let buf = system[type].data[index];
            if (buf) renderDatas.push(buf);
            else renderDatas.push([]);
        }
        return (
            <>
                {this.state.channelType === System.HIS_TYPE_POINT ?
                    <PaginationTable
                        mi={this.props.mi}
                        type={this.state.channelType}
                        noDataText={system[type].status === CONST.STATUS_REQ_NOMORE ? 'There is no Data..' : 'Loading...'}
                        context_t={this.props.t}
                        columns={objColumns[type]}
                        // modelStatus={system[type].status}
                        // renderData={renderDatas ? renderDatas : []}
                        // exitDataLength={system[type].length ? system[type].length : 0}
                        // totalDataCnt={system[type].totalLength ? system[type].totalLength : 0}
                        // getHistory={this.props.getHistory}
                        // funcLoadData={this.funcLoadHistoryData.bind(this, type)}
                    />
                    :this.state.channelType === System.HIS_TYPE_COIN?
                        <AsyncPage page="MaterialTable"
                                   mi={this.props.mi}
                                   type={this.state.channelType}
                                   context_t={this.props.t}
                                   columns={objColumns[type]}
                                   noDataText={system[type].status === CONST.STATUS_REQ_NOMORE ? 'There is no Data..' : 'Loading...'}
                                   // getHistory={this.props.getHistory}
                                   // renderData={renderDatas ? renderDatas : []}
                                   // modelStatus={system[type].status}
                                   // exitDataLength={system[type].length ? system[type].length : 0}
                                   // funcLoadData={this.funcLoadHistoryData.bind(this, type)}
                                   // totalDataCnt={system[type].totalLength ? system[type].totalLength : 0}
                        />
                    :null
                }

                {type === System.HIS_TYPE_POINT ?
                    <div className='div_row align-items-center justify-content-around mt-4'>
                        <div className='div_row align-items-center'>
                            <img alt='' src='../../static/img/common/point.png' style={{width: 30, height: 30}} />
                            <h5 style={{marginLeft:5}}>{t("BALANCE")}</h5>
                            <span style={{marginLeft:5}}>{mi.point}</span>
                        </div>
                        <div className='div_row align-items-center'>
                            <img alt='' src='../../static/img/receive-coin.png' style={{width: 30, height: 30}} />
                            <h5 style={{marginLeft:5}}>{t("GETTING")}</h5>
                            <span style={{marginLeft:5}}>{this.state.pointIn}</span>
                        </div>
                        <div className='div_row align-items-center'>
                            <img alt='' src='../../static/img/pay-coin.png' style={{width: 30, height: 30}} />
                            <h5 style={{marginLeft:5}}>{t("EXPENDITURE")}</h5>
                            <span style={{marginLeft:5}}>{this.state.pointOut}</span>
                        </div>
                    </div>
                    :
                    <div className='div_row align-items-center justify-content-around mt-4'>
                        <div className='div_row align-items-center'>
                            <img alt='' src='../../static/img/common/coin.png' style={{width: 30, height: 30}} />
                            <h5 style={{marginLeft:5}}>{t("BALANCE")}</h5>
                            <span style={{marginLeft:5}}>{mi.coin}</span>
                        </div>
                        <div className='div_row align-items-center'>
                            <img alt='' src='../../static/img/receive-coin.png' style={{width: 30, height: 30}} />
                            <h5 style={{marginLeft:5}}>{t("GETTING")}</h5>
                            <span style={{marginLeft:5}}>{this.state.coinIn}</span>
                        </div>
                        <div className='div_row align-items-center'>
                            <img alt='' src='../../static/img/pay-coin.png' style={{width: 30, height: 30}} />
                            <h5 style={{marginLeft:5}}>{t("EXPENDITURE")}</h5>
                            <span style={{marginLeft:5}}>{this.state.coinOut}</span>
                        </div>
                    </div>
                }
            </>
        )
    }

    render() {

        return (
            <div className='div_column'>
                {this.renderTabHeader(this.state.channelType)}
                {this.renderTable(this.state.channelType)}
            </div>
        );
    }
}

export default MyIncome;

