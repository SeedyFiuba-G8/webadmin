import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';

export default function Widget({
    children,
    title,
    noBodyPadding,
    bodyClass,
    disableWidgetMenu,
    header,
    noHeaderPadding,
    headerClass,
    style,
    noWidgetShadow,
    ...props
}) {
    var classes = useStyles();

    return (
        <div className={classes.widgetWrapper} style={style && { ...style }}>
            <Paper className={classes.paper}>
                <div
                    className={classnames(classes.widgetHeader, {
                        [classes.noPadding]: noHeaderPadding,
                        [headerClass]: headerClass,
                    })}
                >
                    {header ? (
                        header
                    ) : (
                        <React.Fragment>
                            <Typography
                                variant="h5"
                                color="textSecondary"
                                noWrap
                            >
                                {title}
                            </Typography>
                        </React.Fragment>
                    )}
                </div>
                <div
                    className={classnames(classes.widgetBody, {
                        [classes.noPadding]: noBodyPadding,
                        [bodyClass]: bodyClass,
                    })}
                >
                    {children}
                </div>
            </Paper>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    widgetWrapper: {
        display: 'flex',
        minHeight: '100%',
    },
    widgetHeader: {
        padding: theme.spacing(3),
        paddingBottom: theme.spacing(1),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    widgetBody: {
        paddingBottom: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
    },
    noPadding: {
        padding: 0,
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        overflow: 'auto',
    },
    moreButton: {
        margin: -theme.spacing(1),
        padding: 0,
        width: 40,
        height: 40,
        color: theme.palette.text.hint,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: 'rgba(255, 255, 255, 0.35)',
        },
    },
    noWidgetShadow: {
        boxShadow: 'none',
    },
}));
