import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

import IFrame from "./IFrame";

import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        paddingTop: theme.spacing(2)
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default (props)=>{
    const classes = useStyles();
    const {tabData, orientation} = props;
    const [value, setValue] = React.useState(0);
    const [subIndex, setSubIndex] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    function handleSubContent(index) {
        setSubIndex(index);
    }

    function renderSubPanel() {

        if (!tabData[value].subLabel) {
            return null;
        }
        const item = tabData[value].subLabel[subIndex];
        return (
            <IFrame src={item.src} width={item.width} height={item.height} top={item.top}
                    left={item.left} isLarge={item.isLarge}/>
        )
    }
    function renderTabPanel(){
        const item = tabData[value];
        return(
            <TabPanel value={value} index={value}>
                {
                    item.subLabel ?
                        <div>
                            <ButtonGroup
                                component={"div"}
                                variant="contained"
                                style={{margin:'0 0 10px 20px'}}
                             >
                                {
                                    item.subLabel.map((subItem, subIndex) => {
                                        return (
                                            <Button key={subIndex}
                                                onClick={() => handleSubContent(subIndex)}>{subItem.label}</Button>
                                        )
                                    })
                                }
                            </ButtonGroup>
                            {renderSubPanel()}
                        </div>
                        :
                        <IFrame src={item.src} width={item.width} height={item.height} top={item.top}
                                left={item.left} isLarge={item.isLarge} containerHeight={item.containerHeight}/>
                }

            </TabPanel>
        )
    }

    return(
        <div className={classes.root}>
            <Tabs orientation={orientation}
                  component={"div"}
                  className={classes.tabs}
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  style={{flex:1}}
                  fullWidth
             >
                {
                    tabData.map((item, index) => {
                        return (
                            <Tab key={index} label={item.label}/>
                        )
                    })
                }
            </Tabs>
            {renderTabPanel()}
        </div>
    )
}

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            {...other}
            style={{flex:6}}
        >
            <Box>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};