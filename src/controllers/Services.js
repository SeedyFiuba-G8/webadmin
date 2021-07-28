import React from 'react';
import { Grid, makeStyles, Paper } from '@material-ui/core';
import { withRouter } from 'react-router';
import PageTitle from '../components/PageTitle';
import ServiceTable from '../components/Service.hs/ServicesTable';

function Services(props) {
    const classes = getStyles();

    return (
        <>
            <PageTitle title="Services" />
            <Paper>
                <Grid container className={classes.container}>
                    <Grid item xs={12}>
                        <ServiceTable />
                    </Grid>
                </Grid>
            </Paper>
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

export default withRouter(Services);
