import React, {Component, useState} from 'react';
import Box from './Box';
import PeaFullProfile from './PeaFullProfile';
import {connect} from "react-redux";
import * as Contents from "../../redux/modules/contents";
import * as System from "../../redux/modules/system";
import * as Users from "../../redux/modules/users";
import { withRouter } from 'next/router'
import PropTypes from "prop-types";
import {withTranslation} from "../../i18n";

const FullProfile = (props) => {
    // const [following, setFollowing] = useState(48);
    // const [blockedMe, setBlockedMe] = useState(false);
    const [blocked, setBlocked] = useState(false);
    const inviteHandler = pod => {
        setInvited(true);
    };
    /*const followHandler = () => {
        setFollowed(true);
        setFollowing(following + 1);
    };*/
    const blockHandler = () => {
        setBlocked(!blocked);
    };
    const reportHandler = () => {
        alert('You reported this profile');
    };
    return (
        <div flex={1} {...Box.alignCenter} justifyContent={'space-evenly'} flexDirection={'column'}>
            {/*<PeaButton
                variant={'contained'}
                color={'primary'}
                size={'small'}
                fullwidth
                onClick={() => setBlockedMe(!blockedMe)}
            >
                Block/Unblock you (For test)
            </PeaButton>*/}
            <br />
            <PeaFullProfile
                props={props}
                blocked={blocked}
                onInvite={inviteHandler}
                // onFollow={followHandler}
                onBlock={blockHandler}
                onReport={reportHandler}
            />
        </div>
    );
};

class UserProfile extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activeTab: 'Main',
        };
        const user_id = this.props.router.query.user_id;
        if (!user_id) {
            this.props.router.back();
        }
    }

    render () {
        const {users} = this.props, user_id = this.props.router.query.user_id;
        let user = users[user_id];
        if (!user || !user.id) {
            this.props.router.back();
            return ;
        }
        return (
            <>
                <FullProfile {...this.props}
                             user_info={user}
                />
            </>
        )
    }
}
UserProfile.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

UserProfile.propTypes = {
    t: PropTypes.func.isRequired,
}
export default withRouter(withTranslation('common')(connect(
    state => ({
        users: state.users,
        mi: state.system.mi,
        ai : state.system.ai,
        contents: state.contents,
        lang:state.i18nState.lang,
    }),
    dispatch => ({
        doShowContent: (index) => dispatch(Contents.doViewContentAsync(index)),
        getContents: (loadType, type, userId) => dispatch(Contents.getPersonContentAsync(loadType, type, userId)),
        getTopContents: (categoryId, loadType, type, topType='view', topBeforeDate=0) => dispatch(Contents.getTopPanelAsync(categoryId, loadType, type, topType, topBeforeDate)),
        doFollow: (id, isFollow) => dispatch(System.doFollowAsync(id, isFollow)),
        updateUser: (id, userInfo) => {dispatch(Users.updateUser(id, userInfo))},
    })
)(UserProfile)));