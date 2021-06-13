import React from 'react';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

export default function Error() {
    var classes = getStyles();

    return (
        <Grid container className={classes.container}>
            <Paper classes={{ root: classes.paperRoot }}>
                <Typography variant="h1" color="primary">
                    404
                </Typography>
                <Typography
                    variant="h5"
                    color="primary"
                    className={classes.textRow}
                >
                    Oops. Looks like the page you're looking for no longer
                    exists
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/"
                    size="large"
                    className={classes.backButton}
                >
                    Back to Home
                </Button>
            </Paper>
        </Grid>
    );
}

const getStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    paperRoot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
        maxWidth: 404,
    },
    textRow: {
        marginBottom: theme.spacing(10),
        textAlign: 'center',
    },
    backButton: {
        textTransform: 'none',
        fontSize: 22,
    },
}));
