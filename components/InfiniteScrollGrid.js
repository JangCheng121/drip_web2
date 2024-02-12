import React from 'react';
import * as CONST from "../model/Const";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroller";
import StackGrid from "react-stack-grid";
import PropTypes from "prop-types";

const InfiniteScrollGrid = (props)=>{

    const gridColumnMinWidth = 300;
    const {children, loadMoreFunc, hasMoreState} = props;
    const documentData = document.querySelector('#contentPanel');

    const width = documentData?documentData.offsetWidth:window.innerWidth * 0.8 - 10;
    // let is_phone_video = width <= 500 && (page === 2 || contentType === 'video');
    let columnWidthMode = width % gridColumnMinWidth;
    let num = parseInt(width / Number(gridColumnMinWidth) );
    let columnWidth = width!==0?((columnWidthMode - (num+1)*10) / (num?num:1) + gridColumnMinWidth):gridColumnMinWidth;

    // if (is_phone_video) {
    //     columnWidth = columnWidth /2 -5;
    // }
    return(
        <InfiniteScroll
            pageStart={0}
            hasMore={hasMoreState}
            loader={<Spinner/>}
            threshold={200}
            loadMore={loadMoreFunc}
        >
            <StackGrid columnWidth={columnWidth}
                       gutterWidth={10}
                       gutterHeight={20}
            >
                {children}
            </StackGrid>
        </InfiniteScroll>
    )
}

InfiniteScrollGrid.propTypes = {
    loadMoreFunc:PropTypes.func,
    hasMoreState : PropTypes.bool,
};
InfiniteScrollGrid.defaultProps = {
    loadMoreFunc:()=>{},
    hasMoreState : true,
};

export default InfiniteScrollGrid;