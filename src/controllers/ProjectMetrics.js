import React, { useEffect, useState } from 'react';
import { Grid, TextField, Button, CircularProgress } from '@material-ui/core';
import { withRouter } from 'react-router';
import PageTitle from '../components/PageTitle';
import { getBasicProjectsMetric } from '../api/metricsQuery';
import { makeStyles } from '@material-ui/core';
import Widget from '../components/Widget/Widget';
import { Typography } from '../components/Wrappers/Wrappers';

function ProjectMetrics(props) {
    const [metrics, setMetrics] = useState({});
    useEffect(() => {
        const LoadMetrics = async () =>
            setMetrics(await getBasicProjectsMetric());
        LoadMetrics();
    }, []);
    var classes = getStyles();

    var [userIdValue, setUserIdValue] = useState('');
    var [isLoading, setIsLoading] = useState(false);
    // console.log(metrics);

    return (
        <>
            <PageTitle title="User Metrics" />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Widget
                        title="General Statistics"
                        upperTitle
                        bodyClass={classes.fullHeightBody}
                        className={classes.card}
                    >
                        <div className={classes.subTitleContainer}>
                            <Grid container item alignItems={'center'}>
                                <Grid item xs={6}>
                                    <Typography
                                        size="md"
                                        weight="medium"
                                        noWrap
                                    >
                                        Total
                                    </Typography>
                                    <Typography size="md">
                                        {metrics.total || 0}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            <Grid item xs={3}>
                                <Typography
                                    color="text"
                                    colorBrightness="secondary"
                                    noWrap
                                >
                                    Draft
                                </Typography>
                                <Typography size="md">
                                    {metrics.draft || 0}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography
                                    color="text"
                                    colorBrightness="secondary"
                                    noWrap
                                >
                                    Funding
                                </Typography>
                                <Typography size="md">
                                    {metrics.funding || 0}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography
                                    color="text"
                                    colorBrightness="secondary"
                                    noWrap
                                >
                                    In Progress
                                </Typography>
                                <Typography size="md">
                                    {metrics.inProgress || 0}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography
                                    color="text"
                                    colorBrightness="secondary"
                                    noWrap
                                >
                                    Completed
                                </Typography>
                                <Typography size="md">
                                    {metrics.completed || 0}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Widget>
                </Grid>
            </Grid>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Widget
                            title="General Statistics"
                            upperTitle
                            bodyClass={classes.fullHeightBody}
                            className={classes.card}
                        >
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                            >
                                <Grid item xs={4}>
                                    <TextField
                                        id="userId"
                                        InputProps={{
                                            classes: {
                                                underline:
                                                    classes.textFieldUnderline,
                                                input: classes.textField,
                                            },
                                        }}
                                        value={userIdValue}
                                        onChange={(e) =>
                                            setUserIdValue(e.target.value)
                                        }
                                        margin="normal"
                                        placeholder="userId"
                                        type="userId"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <div className={classes.formButtons}>
                                        {isLoading ? (
                                            <CircularProgress
                                                size={26}
                                                className={classes.loginLoader}
                                            />
                                        ) : (
                                            <Button
                                                disabled={
                                                    userIdValue.length === 0
                                                }
                                                onClick={() => setIsLoading()}
                                                variant="contained"
                                                color="primary"
                                                size="large"
                                                style={{
                                                    alignSelf: 'flex-start',
                                                    position: 'absolute',
                                                    bottom: 467,
                                                    left: 675,
                                                }}
                                            >
                                                Apply
                                            </Button>
                                        )}
                                    </div>
                                </Grid>
                            </Grid>
                        </Widget>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

const getStyles = makeStyles((theme) => ({
    subTitleContainer: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        paddingBottom: theme.spacing(1),
    },
    textFieldUnderline: {
        '&:before': {
            borderBottomColor: theme.palette.primary.light,
        },
        '&:after': {
            borderBottomColor: theme.palette.primary.main,
        },
        '&:hover:before': {
            borderBottomColor: `${theme.palette.primary.light} !important`,
        },
    },
    textField: {
        borderBottomColor: theme.palette.background.light,
    },
    formButtons: {
        width: '30%',
        marginTop: theme.spacing(4),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}));

export default withRouter(ProjectMetrics);
