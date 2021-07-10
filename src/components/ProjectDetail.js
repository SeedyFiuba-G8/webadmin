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

export default function FeaturedPost(props) {
    const classes = useStyles();
    const { title, info } = props;

    return (
        <Grid item xs={6} md={3}>
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

FeaturedPost.propTypes = {
    title: PropTypes.string,
    info: PropTypes.string,
};
