import React from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { withRouter } from 'react-router';
import { ArrowBack } from '@material-ui/icons';
import { Link, useParams } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import UserView from '../components/User/UserView';

function User(props) {
    const classes = getStyles();
    const { id } = useParams();
    return (
        <>
            <Button
                to={'/app/users'}
                component={Link}
                startIcon={<ArrowBack />}
            />
            <PageTitle title="User Profile " />
            <Grid container className={classes.container}>
                <Grid item xs={12}>
                    <UserView id={id} />
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

export default withRouter(User);
