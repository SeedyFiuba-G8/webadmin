import React from 'react';
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router';
import PageTitle from '../components/PageTitle';
import BigStat from '../components/Metrics/BigStat';

function UserMetrics(props) {
    const data = {
        bigStat: [
            {
                product: 'Password Recover',
                total: {
                    monthly: 321,
                    weekly: 82,
                    daily: 14,
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
            {
                product: 'Blocked Users',
                total: {
                    monthly: 754,
                    weekly: 180,
                    daily: 27,
                    percent: { value: 2.5, profit: true },
                },
                color: 'warning',
                registrations: {
                    monthly: { value: 32, profit: true },
                    weekly: { value: 8, profit: true },
                    daily: { value: 2, profit: false },
                },
                rate: {
                    monthly: { value: 2.5, profit: true },
                    weekly: { value: 4, profit: false },
                    daily: { value: 4.5, profit: false },
                },
            },
        ],
    };

    return (
        <>
            <PageTitle title="User Metrics" />
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

// const getStyles = makeStyles((theme) => ({
//     container: {
//         width: '80vw',
//         spacing: 4,
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'right',
//         position: 'relative',
//         top: 0,
//         left: 0,
//     },
// }));

export default withRouter(UserMetrics);
