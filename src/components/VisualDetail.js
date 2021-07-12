import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
});

export default function FeaturedDetail(props) {
    const classes = useStyles();
    const { title, info, size } = props;

    return (
        <Grid item xs={size}>
            <Card className={classes.card}>
                <div className={classes.cardDetails}>
                    <CardContent>
                        <Typography component="h2" variant="h5">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {info}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </Grid>
    );
}

FeaturedDetail.propTypes = {
    size: PropTypes.number,
    title: PropTypes.string,
    info: PropTypes.string,
};
