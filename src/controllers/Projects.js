import React from 'react';
import { Grid, makeStyles, Typography, Paper } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { getAllProjects } from '../api/projectsQuery';
import { withRouter } from 'react-router';

function PageTitle(props) {
    var classes = getTitleStyles();

    return (
        <div className={classes.pageTitleContainer}>
            <Typography className={classes.typo} variant="h1" size="sm">
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
            justifyContent: 'space-between',
            marginBottom: theme.spacing(4),
            marginTop: theme.spacing(5),
        },
        typo: {
            color: theme.palette.text.hint,
        },
    }));
}

function Projects(props) {
    const classes = useStyles();

    const data = getAllProjects();
    console.log(JSON.stringify(data));

    return (
        <Grid container className={classes.container}>
            <Paper square classes={{ root: classes.paperRoot }}>
                <PageTitle title="Projects" />
                <Grid container className={classes.innerContainer}>
                    <Grid item>
                        <MUIDataTable
                            title="All Projects"
                            data={data}
                            columns={columns}
                            options={{
                                filterType: 'checkbox',
                                // onRowClick: viewProject(),
                            }}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: 0,
        left: 0,
    },
    innerContainer: {
        height: '80vh',
        width: '80vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        position: 'relative',
        top: 0,
        left: 0,
    },
    paperRoot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },
}));

const columns = [
    { name: 'id', label: 'id' },
    { name: 'title', label: 'title' },
    { name: 'type', label: 'type' },
    { name: 'country', label: 'country' },
    { name: 'city', label: 'city' },
];

export default withRouter(Projects);
