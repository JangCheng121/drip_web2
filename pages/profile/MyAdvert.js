import React, {Component} from 'react';
import {connect} from "react-redux";
import '../../static/css/mine.css'
import * as System from "../../redux/modules/system";
import * as CONST from "../../model/Const";
import PaginationTable from "./MaterialTable";
import * as Tools from "../../lib/tool";
import Switch from '@material-ui/core/Switch';
import AlertModal from "../../components/AlertModal";
import {dataService} from "../../model/DataService";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import {httpReq} from "../../model/Req";
// import PropTypes from "prop-types";
// import {httpReq} from "../../model/Req";
// import _lodash from 'lodash'

let vm = null;

class MyAdvert extends Component {

    constructor(props) {
        super(props);
        vm = this;
        this.state = {
            renderAdvertData: [],
            renderDataTotalLength: 0,
            loadMoreState: 'success',//start, fail, noData
            hasNoMoreData: false,//true:noMore,

            alertModalState: false,
            changeStateAdvertId: -1,
            advertState: false,
            selectedItem: null,
        };
        this.tableRef = React.createRef();
    }

    funcChangeAdvertState(e, item) {
        let advert_id = item.id, advertState = e.target.checked;
        if (advert_id) {
            this.setState({selectedItem:item});
            this.funcToggleAlertModal(advert_id, advertState);
        }
    }

    funcToggleAlertModal(advert_id, advertState) {
        this.setState({
            alertModalState: !this.state.alertModalState,
            changeStateAdvertId: !this.state.alertModalState ? advert_id : -1,
            advertState: advertState,
        });
    }

    funcAdvertStateSetFalse() {
        let changeStateAdvertId = this.state.changeStateAdvertId,
            updateData = {state: this.state.advertState};
        let {selectedItem} = this.state;

        if (changeStateAdvertId === -1 || !selectedItem) return;
        if (selectedItem.guarantee < selectedItem.point) {
            dataService.showNotification('warning', '본 광고는 보증금 부족으로 출시할수 없습니다.');
            return;
        }

        dataService.updateMyAdvert(this.state.changeStateAdvertId, updateData).then(
            (res) => {
                vm.setState({
                    alertModalState: false,
                    changeStateAdvertId: -1,
                });
                this.tableRef.current && this.tableRef.current.onQueryChange();
            },
            (err) => {
                vm.setState({
                    alertModalState: false,
                    changeStateAdvertId: -1,
                });
            }
        )
    }

    renderMedia(item) {
        const {ai} = this.props;
        let token = ai.token;
        if (!item && !item[0] && item[0].src && item[0].thumb) {
            return (
                <div>
                    <img alt='' src='../../static/img/common/drip_default.png' style={{width: 25}}/>
                </div>
            )
        }
        return (
            <div className='div_row'>
                {item.map((cell, key) => {
                    let cellUrl = cell.thumb ? cell.thumb : cell.src;
                    return (
                        <div key={key} style={{width: 25, height: 25}} className='ml-1'>
                            <img alt='' src={cellUrl + '?token=' + token} style={{width: '100%'}}/>
                        </div>
                    )
                })}
            </div>
        )
    }

    renderAdvertState(state, row) {
        return (
            <div>
                <Switch onChange={(e)=>{this.funcChangeAdvertState(e, row)}} color={'primary'} outline={'alt'} label checked={state} />
            </div>
        )
    }

    renderTime(item, row) {
        return (
            <span>{item ? Tools.getCurrentTime(item, 'YYYY-MM-DD') : 'Loading...'}</span>
        )
    }

    renderAdvertUrl(cellInfo) {
        return (
            <a href={cellInfo}>{cellInfo}</a>
        )
    }

    async funcDeleteItems(evt, data) {
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
        let delete_result = await httpReq('/api/advert', 'delete', {params:{filter:{ids:deleteIds}}});
        if (delete_result) {
            this.tableRef.current && this.tableRef.current.onQueryChange();
        }
    }

    renderPayPoint(item) {
        let payment_point = item.point * item.views;
        return (
            <div>
                {payment_point}
            </div>
        )
    }
    renderDetailPanel(item) {
        return (
            <div style={{backgroundColor:"green", height:100}}>
                detail panel.....
            </div>
        )
    }
    renderTotalGuarantee(item) {
        let total_guarantee = item.guarantee + (item.point * item.views);
        return (
            <div>
                {total_guarantee}
            </div>
        )
    }

    render() {
        const {t} = this.props,
            columns = [
                {
                    title: (""),
                    field: 'media',
                    render: props => (this.renderMedia(props.media)),
                }, {
                    title: t("ADVERT_LINK"),
                    field: 'url',
                    render: props => (this.renderAdvertUrl(props.url)),
                }, {
                    title: t("INSET_DATE"),
                    field: 'ctime',
                    render: props => (this.renderTime(props.ctime)),
                }, {
                    title: t("FINISH_DATE"),
                    field: 'etime',
                    render: props => (this.renderTime(props.etime)) // Custom cell components!
                }, {
                    title: t("ADVERT_GUARANTEE"),
                    field: 'guarantee',
                    render: props => (this.renderTotalGuarantee(props))
                }, {
                    title: t("PAY_POINT"),
                    field: 'point',
                    maxWidth: 100,
                }, {
                    title: t("VIEWS_CNT"),
                    field: 'views',
                    maxWidth: 100,
                }, {
                    title: t("CONSUMPTION_POINT"),
                    field: '',
                    maxWidth: 100,
                    render: props => (this.renderPayPoint(props))
                }, {
                    title: t("REMAIN_POINT"),
                    field: 'guarantee',
                }, {
                    title: t("INCOMSTATE"),
                    field: 'state',
                    render: props => (this.renderAdvertState(props.state, props)),
                    maxWidth: 100,
                }
            ];
        return (
            <div>
                <PaginationTable
                    tableRef={this.tableRef}
                    mi={this.props.mi}
                    type={'advert'}
                    context_t={this.props.t}
                    noDataText={t('NO_DATA')}
                    columns={columns}
                    table_selection={true}
                    table_action={[
                        {
                            tooltip: 'Remove All Selected Items',
                            icon: ()=><DeleteIcon />,
                            onClick: (evt, data) => {this.funcDeleteItems(evt, data)}
                        },
                    ]}
                />
                <AlertModal {...this.props}
                            modalStatus={this.state.alertModalState}
                            goStatus={'page'}
                            toggleFunc={this.funcToggleAlertModal.bind(this)}
                            alertStr={this.state.advertState ? t('ADVERT_STATE_TRUE_ALERT') : t('ADVERT_STATE_FALSE_ALERT')}
                            btnOkStr={t('DONE')}
                            funcBtnOkCallback={this.funcAdvertStateSetFalse.bind(this)}
                />
            </div>
        );
    }
}

export default connect(
    state => ({
        system: state.system,
        users: state.users,
        mi: state.system.mi,
        ai: state.system.ai,
        setting: state.system.setting,
        lang: state.i18nState.lang,
    }),
    dispatch => ({
        getHistory: (type, loadType = CONST.LOAD_TYPE_INIT, filter = {}, perPage = 10) => dispatch(System.getHistoryAsync(type, loadType, filter, perPage)),
        getSetting: () => dispatch(System.getSettingAsync()),
        // getUser: (id) => dispatch(Users.get(id)),
    })
)(MyAdvert);
