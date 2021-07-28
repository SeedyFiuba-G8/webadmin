import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export default function PageTitle(props) {
    var classes = getTitleStyles();

    return (
        <div className={classes.pageTitleContainer}>
            <Typography className={classes.typo} variant="h1" size="sm">
                {props.title}
            </Typography>
        </div>
    );
}

const getTitleStyles = makeStyles((theme) => ({
    pageTitleContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(4),
    },
    typo: {
        color: theme.palette.text.hint,
    },
}));
