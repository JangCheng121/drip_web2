import React from 'react';
import PropTypes from "prop-types";
import * as System from "../../redux/modules/system";
import {connect} from "react-redux";
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import * as CONST from "../../model/Const";
import _lodash from 'lodash'
// import * as Tools from "../../common/tool";

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

    funcPageSizeChange(size) {
        this.setState({pageSize: size});
    }

    funcPageChange(page) {
        this.setState({page:page})
    }

    funcSearchHistory() {
        const {funcLoadData} = this.props;

        funcLoadData(this.filterParam, this.state.pageSize);
    }

    render() {
        const {renderData, totalDataCnt, columns, type, getHistory, modelStatus, noDataText, context_t} = this.props;
        let table_data = renderData.slice(this.state.page*this.state.pageSize, (this.state.page+1)*this.state.pageSize);
        return (
            <div className='mt-3'>
                <ReactTable data={table_data}
                            noDataText={noDataText}
                            previousText={'<'}
                            nextText={'>'}
                            columns={columns}
                            manual
                            pages={totalDataCnt>0?(_lodash.ceil(totalDataCnt/this.state.pageSize)):0}
                            loading={modelStatus === CONST.STATUS_REQ_START}
                            defaultPageSize={this.state.pageSize}
                            pageSize={this.state.pageSize}
                            // filterable={true}
                            pageSizeOptions={[5, 10, 20, 25, 50]}
                            rowsText={context_t('ROW')}
                            pageText={''}
                            ofText={'/'}
                            onPageSizeChange={(pageSize) => {
                                this.funcPageSizeChange(pageSize)
                            }}
                            onPageChange={(props) => {
                                this.funcPageChange(props)
                            }}
                            // onFilteredChange={(filter) => {
                            //     this.funcFilterChange(filter)
                            // }}
                            onFetchData={(state, instance) => {
                                let page = state.page,
                                    vm = this,
                                    pageSize = state.pageSize,
                                    sorted = [],
                                    filtered = state.filtered,
                                    loadType = page?CONST.LOAD_TYPE_MORE:CONST.LOAD_TYPE_INIT;
                                if (state.sorted.length) {
                                    Object.keys(state.sorted[0]).map((key, index) => {
                                        return sorted[index] = key !== 'desc' ? state.sorted[0][key] : state.sorted[0][key] ? key : 'asc';
                                    });
                                }
                                if (modelStatus !== CONST.STATUS_REQ_NOMORE && modelStatus !== CONST.STATUS_REQ_START) {
                                    getHistory(type, loadType, filtered, pageSize, sorted).then(
                                        (res) => {
                                            console.log('PaginationTable getHistory success!!!!!!!!!!!!');
                                        },
                                        (err) => {
                                            console.log('PaginationTable getHistory error' + err);
                                        }
                                    )
                                }
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
