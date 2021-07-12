import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { withRouter } from 'react-router';
import ProjectsTable from '../components/Project.hs/ProjectsTable';
import PageTitle from '../components/PageTitle';

function Projects(props) {
    const classes = getStyles();

    return (
        <>
            <PageTitle title="Projects" />
            <Grid container className={classes.container}>
                <Grid item xs={12}>
                    <ProjectsTable />
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
