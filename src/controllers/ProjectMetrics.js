import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
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

    console.log(metrics);

    return (
        <>
            <PageTitle title="User Metrics" />
            <Grid item md={4} sm={6} xs={12}>
                <Widget
                    title="General Statistics"
                    upperTitle
                    bodyClass={classes.fullHeightBody}
                    className={classes.card}
                >
                    <div className={classes.subTitleContainer}>
                        <Grid container item alignItems={'center'}>
                            <Grid item xs={6}>
                                <Typography size="md" weight="medium" noWrap>
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
            {/* <div>
                {data.bigStat.map((stat) => (
                    <Grid container spacing={2}>
                        <Grid item md={4} sm={6} xs={12} key={stat.product}>
                            <BigStat {...stat} />
                        </Grid>
                    </Grid>
                ))}
            </div> */}
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
}));

export default withRouter(ProjectMetrics);
