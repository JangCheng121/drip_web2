import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

const useStyles = makeStyles(theme => ({
    root: {
        width: 500,
    },
    typography: {
        padding: theme.spacing(2),
        margin:theme.spacing(1)
    },
}));

export default (props) => {

    const classes = useStyles();

    const {open, anchorEl, children} = props;

    return (
        <div className={classes.root}>
            <Popper open={open} anchorEl={anchorEl} placement={'top'} transition>
                {({TransitionProps}) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <Typography className={classes.typography}>
                                {children}
                            </Typography>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </div>
    );
}