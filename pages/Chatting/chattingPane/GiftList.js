import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faRobot} from "@fortawesome/free-solid-svg-icons";
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import _lodash from "lodash";

const GiftListItem = (props) => {
    const {userInfo, t, users, mi, isCreator, userGiftData, presentData} = props;
    let user_send_price = 0;
    userGiftData.map((dataItem, index) => {
        let gift_data = _lodash.find(presentData, {id:dataItem.gift_id});
        return user_send_price += gift_data&&gift_data.price?gift_data.price:0;
    });

    return (
        <ListItem button>
            <ListItemAvatar>
                <Badge
                    overlap="circle"
                    anchororigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    badgeContent={isCreator&&userInfo&&userInfo.role==='virtual'?<FontAwesomeIcon style={{color:'#f95452'}} icon={faRobot} />:null}
                >
                    <Avatar style={{backgroundColor:'#d6d6d6'}} alt="user avatar" src={userInfo.picture} />
                </Badge>
            </ListItemAvatar>
            <ListItemText id={userInfo.name} primary={userInfo.name}/>
            <ListItemSecondaryAction style={{display:'flex', alignItems:'center'}}>
                {user_send_price}
                <img alt='' src='../../../static/img/common/point.png' style={{width: 25, height: 25}} />
            </ListItemSecondaryAction>
        </ListItem>
    );
};

class GiftList extends React.Component{

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.props.activeChannelInfo.gifts !== nextProps.activeChannelInfo.gifts) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const {activeChannelInfo, users, mi, getUser} = this.props;
        const {gifts} = activeChannelInfo;
        let group_gifts = _lodash.groupBy(gifts, 'sender');
        return (
            <List dense>
                {Object.keys(group_gifts).map((dataItem, index) => {
                    let user_id = dataItem;
                    if (user_id === mi.id) {
                        return null;
                    }

                    const userInfo = users[user_id];
                    if (!userInfo) {
                        getUser(user_id);
                        return null;
                    }
                    return (
                        <GiftListItem {...this.props}
                                      key={index}
                                      userInfo={userInfo}
                                      userGiftData={group_gifts[dataItem]}
                        />
                    );
                })}

            </List>
        );
    }
}

export default GiftList