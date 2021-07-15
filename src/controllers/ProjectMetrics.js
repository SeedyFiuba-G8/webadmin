import React from 'react';
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router';
import PageTitle from '../components/PageTitle';
import BigStat from '../components/Metrics/BigStat';

function ProjectMetrics(props) {
    const data = {
        bigStat: [
            {
                product: 'New Projects',
                total: {
                    monthly: 1253,
                    weekly: 282,
                    daily: 45,
                    percent: { value: 3.7, profit: false },
                },
                color: 'primary',
                registrations: {
                    monthly: { value: 830, profit: false },
                    weekly: { value: 215, profit: true },
                    daily: { value: 33, profit: true },
                },
                rate: {
                    monthly: { value: 4.5, profit: false },
                    weekly: { value: 3, profit: true },
                    daily: { value: 3.25, profit: true },
                },
            },
        ],
    };

    return (
        <>
            <PageTitle title="Project Metrics" />
            {data.bigStat.map((stat) => (
                <Grid container spacing={2}>
                    <Grid item md={4} sm={6} xs={12} key={stat.product}>
                        <BigStat {...stat} />
                    </Grid>
                </Grid>
            ))}
        </>
    );
}

export default withRouter(ProjectMetrics);
