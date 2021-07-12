import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { withRouter } from 'react-router';
import UsersTable from '../components/User/UsersTable';
import PageTitle from '../components/PageTitle';

function Projects(props) {
    const classes = getStyles();

    return (
        <>
            <PageTitle title="Users" />
            <Grid container className={classes.container}>
                <Grid item xs={12}>
                    <UsersTable />
                </Grid>
            </Grid>
        </>
    );
}

const getStyles = makeStyles((theme) => ({
    container: {
        width: '80vw',
        spacing: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'right',
        position: 'relative',
        top: 0,
        left: 0,
    },
}));

export default withRouter(Projects);
