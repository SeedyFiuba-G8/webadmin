import React, { useEffect, useState } from 'react';
import { Grid, Select, MenuItem, Input } from '@material-ui/core';
import { withRouter } from 'react-router';
import classnames from 'classnames';
import PageTitle from '../components/PageTitle';
import { getBasicUsersMetric } from '../api/metricsQuery';
import { makeStyles } from '@material-ui/core';
import Widget from '../components/Widget/Widget';
import { Typography } from '../components/Wrappers/Wrappers';
import {
    getEventsUsersMetricData,
    dateRange,
    defaultData,
} from '../api/utilities/getEventMetric';
import ProfitSection from '../components/ProfitSection';

function UserMetrics(props) {
    const [metrics, setMetrics] = useState([]);
    useEffect(() => {
        const LoadMetrics = async () => setMetrics(await getBasicUsersMetric());
        LoadMetrics();
    }, []);
    var classes = getStyles();

    const [dateVariation, setDateVariation] = useState(dateRange.DAILY);

    const [metricsEvent, setMetricsEvent] = useState(defaultData);
    useEffect(() => {
        const LoadMetrics = async () =>
            setMetricsEvent(await getEventsUsersMetricData(dateVariation));
        LoadMetrics();
    }, [dateVariation]);

    // var data = {
    //     admins: {
    //         register: {
    //             monthly: { value: 830, profit: false, difference: -2 },
    //             weekly: { value: 215, profit: true, difference: -2 },
    //             daily: { value: 13, profit: true, difference: 7 },
    //         },
    //         login: {
    //             monthly: { value: 830, profit: false, difference: -2 },
    //             weekly: { value: 215, profit: true, difference: -2 },
    //             daily: {
    //                 value: metricsToday.admins?.register || 0,
    //                 profit: determinate_profit(
    //                     metricsToday.admins?.register || 0,
    //                     metricsLastDay.admins?.register || 0
    //                 ),
    //                 difference: determinate_difference(
    //                     metricsToday.admins?.register || 0,
    //                     metricsLastDay.admins?.register || 0
    //                 ),
    //             },
    //         },
    //         ban: {
    //             monthly: { value: 830, profit: false, difference: -2 },
    //             weekly: { value: 215, profit: true, difference: -2 },
    //             daily: { value: 13, profit: true, difference: 7 },
    //         },
    //         unban: {
    //             monthly: { value: 830, profit: false, difference: -2 },
    //             weekly: { value: 215, profit: true, difference: -2 },
    //             daily: { value: 13, profit: true, difference: 7 },
    //         },
    //     },
    //     users: {
    //         register: {
    //             native: {
    //                 monthly: { value: 830, profit: false, difference: -2 },
    //                 weekly: { value: 215, profit: true, difference: -2 },
    //                 daily: { value: 13, profit: true, difference: 7 },
    //             },
    //             federate: {
    //                 monthly: { value: 830, profit: false, difference: -2 },
    //                 weekly: { value: 215, profit: true, difference: -2 },
    //                 daily: { value: 42, profit: true, difference: 1 },
    //             },
    //         },
    //         login: {
    //             native: {
    //                 monthly: { value: 830, profit: false, difference: -2 },
    //                 weekly: { value: 215, profit: true, difference: -2 },
    //                 daily: { value: 26, profit: false, difference: -2 },
    //             },
    //             federate: {
    //                 monthly: { value: 830, profit: false, difference: -2 },
    //                 weekly: { value: 215, profit: true, difference: -2 },
    //                 daily: { value: 21, profit: true, difference: 7 },
    //             },
    //         },
    //         passwordRecovery: {
    //             monthly: { value: 830, profit: false, difference: -2 },
    //             weekly: { value: 215, profit: true, difference: -2 },
    //             daily: { value: 28, profit: false, difference: -3 },
    //         },
    //     },
    // };

    return (
        <>
            <PageTitle title="User Metrics" />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Widget
                        header={
                            <div className={classes.title}>
                                <Typography variant="h4">
                                    Specific Metrics
                                </Typography>
                            </div>
                        }
                        title="General Statistics"
                        upperTitle
                        bodyClass={classes.bodyWidgetOverflow}
                    >
                        <div className={classes.subTitleContainer}>
                            <Grid container item alignItems={'center'}>
                                <Grid item xs={6}>
                                    <Typography
                                        size="md"
                                        weight="medium"
                                        noWrap
                                    >
                                        Admins
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography
                                        size="md"
                                        weight="medium"
                                        noWrap
                                    >
                                        Users
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
                                    Total
                                </Typography>
                                <Typography size="md">
                                    {metrics.admins?.total || 0}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={3}>
                                <Typography
                                    color="text"
                                    colorBrightness="secondary"
                                    noWrap
                                >
                                    Tota
                                </Typography>
                                <Typography size="md">
                                    {metrics.users?.total || 0}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography
                                    color="text"
                                    colorBrightness="secondary"
                                    noWrap
                                >
                                    Banned
                                </Typography>
                                <Typography size="md">
                                    {metrics.users?.banned || 0}
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
                            header={
                                <div className={classes.title}>
                                    <Typography variant="h4">
                                        General Metrics
                                    </Typography>

                                    <Select
                                        value={dateVariation}
                                        onChange={(e) =>
                                            setDateVariation(e.target.value)
                                        }
                                        input={
                                            <Input
                                                disableUnderline
                                                classes={{
                                                    input: classes.selectInput,
                                                }}
                                            />
                                        }
                                        className={classes.select}
                                    >
                                        <MenuItem value="daily">Daily</MenuItem>
                                        <MenuItem value="weekly">
                                            Weekly
                                        </MenuItem>
                                        <MenuItem value="monthly">
                                            Monthly
                                        </MenuItem>
                                    </Select>
                                </div>
                            }
                            upperTitle
                            bodyClass={classes.bodyWidgetOverflow}
                        >
                            <div className={classes.title}>
                                <Grid container item alignItems={'center'}>
                                    <Grid item xs={6}>
                                        <Typography
                                            size="md"
                                            weight="medium"
                                            noWrap
                                        >
                                            Admins
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className={classes.bottomStatsContainer}>
                                <div className={classnames(classes.statCell)}>
                                    <Grid container alignItems="center">
                                        <Typography variant="h6">
                                            {metricsEvent.admins.register.value}{' '}
                                            (
                                        </Typography>
                                        <Typography variant="h6">
                                            {
                                                metricsEvent.admins.register
                                                    .difference
                                            }
                                        </Typography>
                                        <ProfitSection
                                            value={
                                                metricsEvent.admins.register
                                                    .difference
                                            }
                                            classes={classes}
                                            increase={
                                                metricsEvent.admins.register
                                                    .profit
                                            }
                                        />
                                        <Typography variant="h6">)</Typography>
                                    </Grid>
                                    <Typography
                                        size="sm"
                                        color="text"
                                        colorBrightness="secondary"
                                    >
                                        Registers
                                    </Typography>
                                </div>
                                <div className={classes.statCell}>
                                    <Grid container alignItems="center">
                                        <Typography variant="h6">
                                            {metricsEvent.admins.login.value} (
                                        </Typography>
                                        <Typography variant="h6">
                                            {
                                                metricsEvent.admins.login
                                                    .difference
                                            }
                                        </Typography>
                                        <ProfitSection
                                            value={
                                                metricsEvent.admins.login
                                                    .difference
                                            }
                                            classes={classes}
                                            increase={
                                                metricsEvent.admins.login.profit
                                            }
                                        />
                                        <Typography variant="h6">)</Typography>
                                    </Grid>
                                    <Typography
                                        size="sm"
                                        color="text"
                                        colorBrightness="secondary"
                                    >
                                        Logins
                                    </Typography>
                                </div>
                                <div className={classes.statCell}>
                                    <Grid container alignItems="center">
                                        <Typography variant="h6">
                                            {metricsEvent.admins.ban.value} (
                                        </Typography>
                                        <Typography variant="h6">
                                            {metricsEvent.admins.ban.difference}
                                        </Typography>
                                        <ProfitSection
                                            value={
                                                metricsEvent.admins.ban
                                                    .difference
                                            }
                                            classes={classes}
                                            increase={
                                                metricsEvent.admins.ban.profit
                                            }
                                        />
                                        <Typography variant="h6">)</Typography>
                                    </Grid>
                                    <Typography
                                        size="sm"
                                        color="text"
                                        colorBrightness="secondary"
                                    >
                                        Bans
                                    </Typography>
                                </div>
                                <div className={classes.statCell}>
                                    <Grid container alignItems="center">
                                        <Typography variant="h6">
                                            {metricsEvent.admins.unban.value} (
                                        </Typography>
                                        <Typography variant="h6">
                                            {
                                                metricsEvent.admins.unban
                                                    .difference
                                            }
                                        </Typography>
                                        <ProfitSection
                                            value={
                                                metricsEvent.admins.unban
                                                    .difference
                                            }
                                            classes={classes}
                                            increase={
                                                metricsEvent.admins.unban.profit
                                            }
                                        />
                                        <Typography variant="h6">)</Typography>
                                    </Grid>
                                    <Typography
                                        size="sm"
                                        color="text"
                                        colorBrightness="secondary"
                                    >
                                        Unbans
                                    </Typography>
                                </div>
                            </div>
                            <div className={classes.title}>
                                <Grid container item alignItems={'center'}>
                                    <Grid item xs={6}>
                                        <Typography
                                            size="xl"
                                            weight="medium"
                                            noWrap
                                        ></Typography>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className={classes.title}>
                                <Grid container item alignItems={'center'}>
                                    <Grid item xs={6}>
                                        <Typography
                                            size="xl"
                                            weight="medium"
                                            noWrap
                                        ></Typography>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className={classes.title}>
                                <Grid container item alignItems={'center'}>
                                    <Grid item xs={6}>
                                        <Typography
                                            size="md"
                                            weight="medium"
                                            noWrap
                                        >
                                            Users
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className={classes.bottomStatsContainer}>
                                <div className={classnames(classes.statCell)}>
                                    <Grid container alignItems="center">
                                        <Typography variant="h6">
                                            {
                                                metricsEvent.users.register
                                                    .native.value
                                            }{' '}
                                            (
                                        </Typography>
                                        <Typography variant="h6">
                                            {
                                                metricsEvent.users.register
                                                    .native.difference
                                            }
                                        </Typography>
                                        <ProfitSection
                                            value={
                                                metricsEvent.users.register
                                                    .native.difference
                                            }
                                            classes={classes}
                                            increase={
                                                metricsEvent.users.register
                                                    .native.profit
                                            }
                                        />
                                        <Typography variant="h6">)</Typography>
                                    </Grid>
                                    <Typography
                                        size="sm"
                                        color="text"
                                        colorBrightness="secondary"
                                    >
                                        Native Registers
                                    </Typography>
                                </div>
                                <div className={classes.statCell}>
                                    <Grid container alignItems="center">
                                        <Typography variant="h6">
                                            {
                                                metricsEvent.users.register
                                                    .federate.value
                                            }{' '}
                                            (
                                        </Typography>
                                        <Typography variant="h6">
                                            {
                                                metricsEvent.users.register
                                                    .federate.difference
                                            }
                                        </Typography>
                                        <ProfitSection
                                            value={
                                                metricsEvent.users.register
                                                    .federate.difference
                                            }
                                            classes={classes}
                                            increase={
                                                metricsEvent.users.register
                                                    .federate.profit
                                            }
                                        />
                                        <Typography variant="h6">)</Typography>
                                    </Grid>
                                    <Typography
                                        size="sm"
                                        color="text"
                                        colorBrightness="secondary"
                                    >
                                        Federate Registers
                                    </Typography>
                                </div>
                                <div className={classes.statCell}>
                                    <Grid container alignItems="center">
                                        <Typography variant="h6">
                                            {
                                                metricsEvent.users.login.native
                                                    .value
                                            }{' '}
                                            (
                                        </Typography>
                                        <Typography variant="h6">
                                            {
                                                metricsEvent.users.login.native
                                                    .difference
                                            }
                                        </Typography>
                                        <ProfitSection
                                            value={
                                                metricsEvent.users.login.native
                                                    .difference
                                            }
                                            classes={classes}
                                            increase={
                                                metricsEvent.users.login.native
                                                    .profit
                                            }
                                        />
                                        <Typography variant="h6">)</Typography>
                                    </Grid>
                                    <Typography
                                        size="sm"
                                        color="text"
                                        colorBrightness="secondary"
                                    >
                                        Native Logins
                                    </Typography>
                                </div>
                                <div className={classes.statCell}>
                                    <Grid container alignItems="center">
                                        <Typography variant="h6">
                                            {
                                                metricsEvent.users.login
                                                    .federate.value
                                            }{' '}
                                            (
                                        </Typography>
                                        <Typography variant="h6">
                                            {
                                                metricsEvent.users.login
                                                    .federate.difference
                                            }
                                        </Typography>
                                        <ProfitSection
                                            value={
                                                metricsEvent.users.login
                                                    .federate.difference
                                            }
                                            classes={classes}
                                            increase={
                                                metricsEvent.users.login
                                                    .federate.profit
                                            }
                                        />
                                        <Typography variant="h6">)</Typography>
                                    </Grid>
                                    <Typography
                                        size="sm"
                                        color="text"
                                        colorBrightness="secondary"
                                    >
                                        Federate Logins
                                    </Typography>
                                </div>
                            </div>

                            <div className={classes.bottomStatsContainer}>
                                <div className={classnames(classes.statCell)}>
                                    <Grid container alignItems="center">
                                        <Typography variant="h6">
                                            {
                                                metricsEvent.users
                                                    .passwordRecovery.value
                                            }{' '}
                                            (
                                        </Typography>
                                        <Typography variant="h6">
                                            {
                                                metricsEvent.users
                                                    .passwordRecovery.difference
                                            }
                                        </Typography>
                                        <ProfitSection
                                            value={
                                                metricsEvent.users
                                                    .passwordRecovery.difference
                                            }
                                            classes={classes}
                                            increase={
                                                metricsEvent.users
                                                    .passwordRecovery.profit
                                            }
                                        />
                                        <Typography variant="h6">)</Typography>
                                    </Grid>
                                    <Typography
                                        size="sm"
                                        color="text"
                                        colorBrightness="secondary"
                                    >
                                        Password Recoveries
                                    </Typography>
                                </div>
                            </div>
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
    title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '100%',
        marginBottom: theme.spacing(1),
    },
    bottomStatsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: theme.spacing(1) * -2,
        marginTop: theme.spacing(1),
    },
    statCell: {
        padding: theme.spacing(2),
    },
    totalValueContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    totalValue: {
        display: 'flex',
        alignItems: 'baseline',
    },
    profitArrow: {
        transform: 'rotate(-90deg)',
        fill: theme.palette.success.main,
    },
    profitArrowDanger: {
        transform: 'rotate(90deg)',
        fill: theme.palette.secondary.main,
    },
    selectInput: {
        padding: 10,
        paddingRight: 25,
        '&:focus': {
            backgroundColor: 'white',
        },
    },
    bodyWidgetOverflow: {
        overflow: 'auto',
    },
}));

export default withRouter(UserMetrics);
