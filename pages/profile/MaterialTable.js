import React, { forwardRef } from 'react';
import * as System from "../../redux/modules/system";
import {connect} from "react-redux";
import 'react-table/react-table.css';
import * as CONST from "../../model/Const";
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';
import MaterialTable from "material-table";
import {httpReq} from "../../model/Req";

const tableIcons = {
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
};
class PaginationTable extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            pageSize: 10,
            page : 0,
            loading : false,
        };
        this.filterParam = {};
    }

    funcGetHistory(type, filter, sorted, page, pageSize) {
        const {mi} = this.props;
        let reqParam = {};
        let reqFilter = {};
        let data_range = [page*pageSize, pageSize];
        let reqUrl = '';
        if (filter) {
            Object.keys(filter).map((key)=>{
                return reqFilter[key] = filter[key];
            })
        }
        reqFilter.user_id = mi.id;
        if (type === System.HIS_TYPE_COIN) {
            reqUrl = '/api/coin_history'
        } else if (type === System.HIS_TYPE_POINT) {
            reqUrl = '/api/point_history'
        } else if (type === 'advert') {
            reqUrl = '/api/advert';
        } else if (type === 'note') {
            reqUrl = '/api/note';
            delete reqFilter.user_id;
            reqFilter.receiver = mi.id;
            reqFilter.type = 'text';
        } else {
            reqUrl = '/api/cash_history';
            if (type === System.HIS_TYPE_EXCHANGE)
                reqFilter.type = CONST.CASH_OUT;
            else
                reqFilter.type = CONST.CASH_IN;
        }
        if (sorted && sorted.length === 2) {
            reqParam.sort = JSON.stringify(sorted);
        }
        reqParam.range = JSON.stringify(data_range);
        reqParam.filter = reqFilter;
        return  httpReq(reqUrl, 'get', reqParam, true);
    }

    render() {
        const { columns, type, context_t , table_selection, table_action, tableRef} = this.props;
        return (
            <div className='mt-3'>
                <MaterialTable
                    tableRef={tableRef}
                    localization={{
                        pagination: {
                            labelRowsSelect: context_t('ROW'),
                            labelDisplayedRows: '{from}-{to} / {count}'
                        },
                        body: {
                            emptyDataSourceMessage: context_t('NO_DATA'),
                        },
                        toolbar: {
                            nRowsSelected: context_t('N_ROWS_SELECT')
                        }
                    }}
                    options={{search: false, showTitle:false, selection:table_selection}}
                    actions={table_action}
                    icons={tableIcons}
                    columns={columns}
                    data={query => {
                        return new Promise((resolve, reject) => {
                            let filter = query.filters,
                                page = query.page,
                                pageSize = query.pageSize,
                                sorted = query.orderBy ? [query.orderBy.field, query.orderDirection] : [];
                            this.funcGetHistory(type, filter, sorted, page, pageSize)
                                .then(
                                    result => {
                                        let contentRange = result.headers['content-range'], totalLength = 0;
                                        if (contentRange)
                                            totalLength = parseInt(contentRange.split('/').pop(), 10);
                                        resolve({
                                            data: result.data,
                                            page: page,
                                            totalCount: totalLength,
                                        })
                                    }
                                )
                        })
                    }}
                />
            </div>
        );
    }
}

export default connect(
    dispatch => ({
        notShowAlert_System: (data) => dispatch(System.updateMI(data)),
    })
)(PaginationTable);
