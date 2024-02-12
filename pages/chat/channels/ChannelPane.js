import React from 'react';
import InfiniteScrollGrid from "../../../components/InfiniteScrollGrid";
import ChannelItem from "./ChannelItem";
import Empty from "../../../components/Empty";
import {connect} from 'react-redux'
import * as Users from "../../../redux/modules/users";

const ChannelPane = (props) => {

    const {data, joinChannel, deleteChannel, onClick} = props;

    if (!data || !data.length) {
        return <Empty/>;
    }
    let sortedData = data.sort(function (a, b) {return b.nLike - a.nLike});
    return (
        <InfiniteScrollGrid hasMoreState={false} >
            {
                sortedData.map((item, index) => {
                    return (
                        <ChannelItem key={index}
                                     {...props}
                                     item={item}
                                     joinChannel={onClick ? onClick : joinChannel}
                                     deleteChannel={deleteChannel}
                        />
                    );
                })
            }
        </InfiniteScrollGrid>
    )
}

export default connect(
    state => ({
        users: state.users
    }),
    dispatch => ({
        getUser: (id) => dispatch(Users.get(id)),
    })
)(ChannelPane);