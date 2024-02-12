import Tab from '@material-ui/core/Tab/Tab';
import Tabs from '@material-ui/core/Tabs/Tabs';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import PeaButton from './PeaButton';
import PeaAvatar from './PeaAvatar';
import PeaStatistic from './PeaStatistic';
import PeaText from './PeaTypography';
import PeaTag from './PeaTag';
import PeaConfirmation from './PeaConfirmation';
import PeaToast from './PeaToast';
import ProfilePost from '../profile/ProfilePost';
import * as Contents from '../../redux/modules/contents';
import AlertModal from '../../components/AlertModal';
import Back from "../../components/back";
import * as Tools from '../../lib/tool';
import SendNoteDialog from '../../components/SendNoteDialog';

const PeaFullProfile = (
    {
        blocked, invited, onInvite, onBlock, props
    }) => {
    const [index, onChange] = useState(0);
    const [anchorEl, setAnchor] = useState(null);
    const [openBlockConfirm, setOpenBlockConfirm] = useState(false);
    const [openBlockToast, setOpenBlockToast] = useState(false);
    const [openInviteDialog, setOpenSendNoteDialog] = useState(false);
    const [loginModalState, setLoginModalState] = useState(false);
    const open = Boolean(anchorEl);

    const {user_info, mi, t} = props;

    let is_follow = Tools.getIndexByValue(mi.follow, user_info.id) !== -1;

    const renderTabs = () => (
        <>
            <Tabs
                className={'MuiTabs-root'}
                variant={'fullWidth'}
                centered
                value={index}
                onChange={(e, val) => onChange(val)}
            >
                <Tab label={t("MYPOST")} disableRipple/>
                <Tab label={t("COMMENTPOST")} disableRipple/>
                <Tab label={t("LIKEPOST" )}disableRipple/>
                <Tab label={t("BOOKMARKPOST")} disableRipple/>
            </Tabs>
            <Box minHeight={300} bgcolor={'grey.100'} p={3} style={{height:"fit-content"}}>
                <ProfilePost
                    {...props}
                    type={
                        index===0?Contents.CONTENT_PERSON_CONTENT:
                            index===1?Contents.CONTENT_PERSON_REVIEW:
                                index===2?Contents.CONTENT_PERSON_LIKE:
                                    Contents.CONTENT_PERSON_FAVOUR
                    }
                    user_id={user_info.id}
                />
            </Box>
        </>
    );
    
    function clickFollow() {
        if (!mi.member) {
            setLoginModalState(!loginModalState);
            return;
        }

        let isFollow = Tools.getIndexByValue(mi.follow, user_info.id),
            followed = [].concat(user_info.followed),
            idx = Tools.getIndexByValue(followed, mi.id.toString());

        if (idx === -1) {
            followed.push(mi.id);
        } else {
            followed.splice(idx, 1);
        }

        if (!user_info.id ) return;
        props.doFollow(user_info.id, isFollow === -1 ? true : false);
        props.updateUser(user_info.id, {followed: followed})
    }

    return (
        <>
            <Card style={{width:'95%', margin:"auto"}} className={'PeaAccountProfile-root'}>
                <Back props={props} />
                <CardContent className={'MuiCardContent-root'}>
                    <Grid container justify={'space-between'} spacing={2}>
                        <Grid item
                              style={{ display: "flex",
                                  }}>
                            <PeaAvatar style={{width:80, height:80}}
                                className={'MuiAvatar-root-profilePic'}
                                src={user_info&&user_info.picture}
                            />
                        </Grid>
                        <Hidden >
                            <Grid item>
                                <PeaStatistic label={t('FOLLOW')} value={user_info&&user_info.follow&&user_info.follow.length}/>
                            </Grid>
                            <Grid item>
                                <PeaStatistic label={t('FOLLOWER')} value={user_info&&user_info.followed&&user_info.followed.length}/>
                            </Grid>
                        </Hidden>
                        <Grid item className={'MuiGrid-item -reputation'} />
                    </Grid>
                    <Box mt={4} mb={3} style={{flexDirection:'row', display:'flex'}}>
                        <PeaText style={{width:'100%'}} variant={'h4'} weight={'bold'}>
                            {user_info&&user_info.name}
                        </PeaText>
                        <Hidden only={'xs'}>
                            <PeaText style={{width:'100%'}} variant={'h4'} weight={'bold'}>
                                DRIP ID : {user_info&&user_info.id}
                            </PeaText>
                        </Hidden>
                        <Grid className={'MuiGrid-container -actions'}
                              container
                              spacing={1}
                              justify='flex-end'
                        >
                            {blocked ? (
                                <Grid item>
                                    <PeaButton
                                        variant={'contained'}
                                        color={'danger'}
                                        size={'small'}
                                        onClick={onBlock}
                                    >
                                        Unblock
                                    </PeaButton>
                                </Grid>
                            ) : (
                                <>
                                    <Grid item>
                                        <PeaButton
                                            variant={'contained'}
                                            color={'primary'}
                                            size={'small'}
                                            onClick={()=>clickFollow()}
                                        >
                                            {is_follow?t('CANCEL_FOLLOW'):t('FOLLOW')}
                                        </PeaButton>
                                    </Grid>
                                    <Grid item>
                                        <PeaButton
                                            variant={'outlined'}
                                            color={'primary'}
                                            size={'small'}
                                            disabled={false}
                                            onClick={() => setOpenSendNoteDialog(true)}
                                        >
                                            {t('SENDNOTE')}
                                        </PeaButton>
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    </Box>
                    <Hidden only={'xs'}>
                        <div style={{marginTop: -32}}/>
                    </Hidden>

                    {invited && (
                        <Box mt={1} mb={1}>
                            <PeaTag
                                color={'primary'}
                                label={'Invited by you'}
                                src={user_info.picture}
                                onClick={() => {
                                }}
                            />
                        </Box>
                    )}
                </CardContent>
                {renderTabs()}
            </Card>
            <PeaConfirmation
                title={`Block`}
                content={`I won't be able to see your profile information, ${' '} `}
                open={openBlockConfirm}
                onClose={() => setOpenBlockConfirm(false)}
                onSubmit={() => {
                    setOpenBlockConfirm(false);
                    setOpenBlockToast(true);
                    onBlock();
                }}
            />
            <PeaToast
                message={`I has been blocked`}
                open={openBlockToast}
                onClose={() => setOpenBlockToast(false)}
                variant={'success'}
                position={{horizontal: 'center', vertical: 'top'}}
            />

            <SendNoteDialog
                dialogState={openInviteDialog}
                setSendNoteDialogState={setOpenSendNoteDialog}
                placeholderStr={t("INPUT_NOTE_CONTENT")}
                user_id={user_info.id}
            />

            <AlertModal {...props}
                        modalStatus={loginModalState}
                        goStatus={'login'}
                        toggleFunc={()=>setLoginModalState(!loginModalState)}
                        alertStr={t('LOGINWARNING')}
                        btnOkStr={t('LOGIN')}
            />
        </>
    );
};

PeaFullProfile.propTypes = {
    image: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string,
    site: PropTypes.string,
    bio: PropTypes.string,
    location: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    gender: PropTypes.string,
    groups: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            src: PropTypes.string,
        }),
    ),
    tags: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
        }),
    ),
    reputation: PropTypes.number,
    pods: PropTypes.arrayOf(PropTypes.shape({})),
    following: PropTypes.number,
    followers: PropTypes.number,
    invited: PropTypes.bool,
    followed: PropTypes.bool,
    blockedMe: PropTypes.bool,
    blocked: PropTypes.bool,
    onInvite: PropTypes.func,
    onFollow: PropTypes.func,
    onBlock: PropTypes.func,
    onReport: PropTypes.func,
};
PeaFullProfile.defaultProps = {
    tag: '',
    site: '',
    bio: '',
    location: '',
    age: 'unknown',
    gender: 'unknown',
    groups: [],
    tags: [],
    reputation: 0,
    pods: [],
    following: 0,
    followers: 0,
    invited: false,
    followed: false,
    blockedMe: false,
    blocked: false,
};
PeaFullProfile.metadata = {
    name: 'Pea FullProfile',
};
PeaFullProfile.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaFullProfile;
