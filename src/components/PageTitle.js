import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export default function PageTitle(props) {
    var classes = getTitleStyles();

    return (
        <div className={classes.pageTitleContainer}>
            <Typography className={classes.typo} variant='h1' size='sm'>
                {props.title}
            </Typography>
        </div>
    );
}

function getTitleStyles(theme) {
    return makeStyles((theme) => ({
        pageTitleContainer: {
            display: 'flex',
            alignSelf: 'left',
            marginBottom: theme.spacing(4),
            marginTop: theme.spacing(5),
        },
        typo: {
            color: theme.palette.text.hint,
        },
    }));
}
