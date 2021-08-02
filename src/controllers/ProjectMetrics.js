import React, { useEffect, useRef, useState } from 'react';
import {
    Grid,
    TextField,
    Button,
    CircularProgress,
    Select,
    MenuItem,
    Input,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { withRouter } from 'react-router';
import PageTitle from '../components/PageTitle';
import classnames from 'classnames';
import { getBasicProjectsMetric } from '../api/metricsQuery';
import { makeStyles } from '@material-ui/core';
import Widget from '../components/Widget/Widget';
import { Typography } from '../components/Wrappers/Wrappers';
import {
    getEventsProjectsMetricData,
    dateRange,
    defaultProjectData,
} from '../api/utilities/getEventMetric';
import ProfitSection from '../components/ProfitSection';

function ProjectMetrics(props) {
    const [metrics, setMetrics] = useState({});
    const mountedRef = useRef(true);

    useEffect(() => {
        const LoadMetrics = async () => {
            const projectMetrics = await getBasicProjectsMetric();
            if (!mountedRef.current) return;
            setMetrics(projectMetrics);
        };
        LoadMetrics();
    }, []);
    var classes = getStyles();

    const [open, setOpen] = useState(false);
    const [error, setError] = useState([]);
    const handleClose = () => {
        setOpen(false);
    };
    const [tempVaule, setTempValue] = useState('');
    const [userIdValue, setUserIdValue] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [dateVariation, setDateVariation] = useState(dateRange.DAILY);

    const [metricsEvent, setMetricsEvent] = useState(defaultProjectData);
    useEffect(() => {
        const LoadMetrics = async () => {
            const metricsEventData = await getEventsProjectsMetricData(
                dateVariation,
                setUserIdValue,
                userIdValue,
                setIsLoading,
                setOpen,
                setTempValue,
                setError
            );
            if (!mountedRef.current) return;
            setMetricsEvent(metricsEventData);
        };
        LoadMetrics();
        setIsLoading(true);
    }, [dateVariation, userIdValue]);

    return (
        <>
            <PageTitle title="Project Metrics" />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Widget
                        header={
                            <div className={classes.title}>
                                <Typography variant="h5">
                                    General Metrics
                                </Typography>
                            </div>
                        }
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
                            header={
                                <div className={classes.title}>
                                    <Typography variant="h5">
                                        Filter By ID
                                    </Typography>
                                </div>
                            }
                            bodyClass={classes.fullHeightBody}
                            className={classes.card}
                        >
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                            >
                                <Grid item xs={6}>
                                    <TextField
                                        id="userId"
                                        InputProps={{
                                            classes: {
                                                underline:
                                                    classes.textFieldUnderline,
                                                input: classes.textField,
                                            },
                                        }}
                                        value={tempVaule}
                                        onChange={(e) =>
                                            setTempValue(e.target.value)
                                        }
                                        margin="normal"
                                        placeholder="userId"
                                        type="userId"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <div style={{ display: 'flex', flex: 1 }}>
                                        {isLoading ? (
                                            <CircularProgress
                                                size={26}
                                                className={classes.loginLoader}
                                            />
                                        ) : (
                                            <Button
                                                disabled={
                                                    tempVaule.length === 0
                                                }
                                                onClick={() => {
                                                    setUserIdValue(tempVaule);
                                                }}
                                                variant="contained"
                                                color="primary"
                                                size="large"
                                                style={{
                                                    display: 'flex',
                                                }}
                                            >
                                                Apply
                                            </Button>
                                        )}
                                    </div>
                                    <div>
                                        <Dialog
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="error"
                                        >
                                            <DialogTitle>
                                                Error: {error.status}-
                                                {error.name}
                                            </DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    Error: {error.message}
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button
                                                    onClick={handleClose}
                                                    color="primary"
                                                >
                                                    Close
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </div>
                                </Grid>
                            </Grid>
                        </Widget>
                    </Grid>
                </Grid>
            </div>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Widget
                            header={
                                <div className={classes.title}>
                                    <Typography variant="h5">
                                        Specific Metrics
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
                            bodyClass={classes.bodyWidgetOverflow}
                        >
                            <div className={classes.bottomStatsContainer}>
                                <div className={classnames(classes.statCell)}>
                                    <Grid container alignItems="center">
                                        <Typography variant="h6">
                                            {metricsEvent.create.value} (
                                        </Typography>
                                        <Typography variant="h6">
                                            {metricsEvent.create.difference}
                                        </Typography>
                                        <ProfitSection
                                            value={
                                                metricsEvent.create.difference
                                            }
                                            classes={classes}
                                            increase={
                                                metricsEvent.create.profit
                                            }
                                        />
                                        <Typography variant="h6">)</Typography>
                                    </Grid>
                                    <Typography
                                        size="sm"
                                        color="text"
                                        colorBrightness="secondary"
                                    >
                                        Created
                                    </Typography>
                                </div>
                                <div className={classes.statCell}>
                                    <Grid container alignItems="center">
                                        <Typography variant="h6">
                                            {metricsEvent.publish.value} (
                                        </Typography>
                                        <Typography variant="h6">
                                            {metricsEvent.publish.difference}
                                        </Typography>
                                        <ProfitSection
                                            value={
                                                metricsEvent.publish.difference
                                            }
                                            classes={classes}
                                            increase={
                                                metricsEvent.publish.profit
                                            }
                                        />
                                        <Typography variant="h6">)</Typography>
                                    </Grid>
                                    <Typography
                                        size="sm"
                                        color="text"
                                        colorBrightness="secondary"
                                    >
                                        Pulished
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
    title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '100%',
        marginBottom: theme.spacing(1),
    },
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
    bottomStatsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: theme.spacing(1) * -2,
        marginTop: theme.spacing(1),
    },
    statCell: {
        padding: theme.spacing(2),
    },
    bodyWidgetOverflow: {
        overflow: 'auto',
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
}));

export default withRouter(ProjectMetrics);
