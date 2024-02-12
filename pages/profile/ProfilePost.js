import React, {Component} from 'react';
import Empty from "../../components/Empty";
import * as CONST from "../../model/Const";
import Panel from "../../components/content/panel";

class ProfilePost extends Component {

    constructor(props) {
        super(props);
        const {getContents, mi, contents, type, user_id} = this.props;
        let categoryId = 'user_' + user_id,
            category = null;
        if (contents.panels[categoryId]){
            category = contents.panels[categoryId];
        }
        if (!category || !category[type] || !category[type].data || !category[type].data.length) {
            // category[type].status !== CONST.STATUS_REQ_NOMORE && category[type].status !== CONST.STATUS_REQ_START
            if (!category) {
                getContents(CONST.LOAD_TYPE_INIT, type, user_id);
            } else if (category[type].status !== CONST.STATUS_REQ_NOMORE && category[type].status !== CONST.STATUS_REQ_START) {
                getContents(CONST.LOAD_TYPE_INIT, type, user_id);
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {getContents, mi, contents, type, user_id} = nextProps;
        let categoryId = 'user_' + user_id,
            category = null;
        if (contents.panels[categoryId]){
            category = contents.panels[categoryId];
        }
        if (type !== this.props.type && (!category || !category[type] || !category[type].data || !category[type].data.length)) {
            if (!category) {
                getContents(CONST.LOAD_TYPE_INIT, type, user_id);
            } else if (category[type].status !== CONST.STATUS_REQ_NOMORE && category[type].status !== CONST.STATUS_REQ_START) {
                getContents(CONST.LOAD_TYPE_INIT, type, user_id);
            }
        }
        return true;
    }

    loadMoreTotal() {
        console.log('========totalTapPan===========');
        const {getContents, mi, type, user_id} = this.props;
        getContents(CONST.LOAD_TYPE_MORE, type, user_id);
    }

    render() {
        const {contents:{panels}, mi, type, user_id} = this.props;
        let categoryId = 'user_' + user_id,
            panel = panels[categoryId];

        return (
            <Panel
                panel={panel}
                contentType={type}
                {...this.props}
                category_id={type}
                loadMoreFunc={this.loadMoreTotal.bind(this)}
            />
        );
    }
}
export default ProfilePost;
