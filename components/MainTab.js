import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar/AppBar";
import AddIcon from '@material-ui/icons/VideocamOutlined'

import * as CONST from '../model/Const'
import {i18n, withTranslation} from "../i18n";
import _lodash from "lodash";

const MainTab = ({tabs, tabProps, ...props}) => {

    const {type, panel, btn_add, other, totalstr} = props;
    let language = i18n&&i18n.language;

    return (
        <>
            <AppBar position="relative" style={{backgroundColor: '#fff', color: '#000'}}>
                <Tabs {...props} scrollButtons="auto" variant="scrollable">
                    {
                        type === 'category' ?
                            <Tab label={totalstr} value={CONST.CATEGORY_ALL}/> : null
                    }
                    {
                        tabs.map((tab, index) => {
                            if (tab && tab.trans && tab.trans.length) {
                                tab.label = _lodash.filter(tab.trans, {lang: language})[0] ? _lodash.filter(tab.trans, {lang: language})[0].str : tab.label
                            }
                            return (
                                <Tab key={index} {...tab}/>
                            )
                        })
                    }
                    {
                        other.icon && other.value ?
                            <Tab label={other.icon} value={other.value}
                                 style={{marginLeft: 'auto'}}/>
                            : null
                    }
                    {
                        btn_add ?
                            <Tab label={<AddIcon style={{fontSize: 32}}/>}
                                 value={CONST.TAB_CREATE_VALUE}
                                 style={{marginLeft: 'auto'}}/>
                            : null
                    }

                </Tabs>
            </AppBar>
            <TabPanel>
                {panel?panel:<div></div>}
            </TabPanel>
        </>
    );
};

function TabPanel(props) {

    const {children} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
        >
            <Box component="div" m={3} id="contentPanel">
                {children}
            </Box>
        </Typography>
    );
}

MainTab.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.node.isRequired,
        }),
    ),
    tabProps: PropTypes.shape({}),
    panel: PropTypes.element,
    type: PropTypes.string,
    // btn_add: PropTypes.bool,
    other: PropTypes.object,
    totalstr: PropTypes.string
};
MainTab.defaultProps = {
    tabs: [],
    tabProps: {},
    panel: {},
    type: '',
    // btn_add: false,
    other: {},
    totalstr: 'Total'
};

export default MainTab;