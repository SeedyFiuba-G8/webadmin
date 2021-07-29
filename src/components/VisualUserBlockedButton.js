import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { banUser, unbanUser } from '../api/usersQuery';

const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
});

export default function VisualUserBlockedButton(props) {
    const classes = useStyles();
    const { title, blocked, size, id } = props;
    const [checked, setChecked] = React.useState(blocked ? true : false);
    React.useEffect(() => {
        setChecked(blocked ? true : false);
    }, [blocked]);
    // console.log('estado de checked es', checked);
    // console.log('estado de bloqueo es ', blocked);

    const toggleChecked = () => {
        setChecked(!checked);
        checked ? unbanUser(id) : banUser(id);
    };

    return (
        <Grid item xs={size}>
            <Card className={classes.card}>
                <div className={classes.cardDetails}>
                    <CardContent>
                        <Typography component="h2" variant="h5">
                            {title}
                        </Typography>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={checked}
                                    onChange={toggleChecked}
                                />
                            }
                        />
                    </CardContent>
                </div>
            </Card>
        </Grid>
    );
}

VisualUserBlockedButton.propTypes = {
    size: PropTypes.number,
    title: PropTypes.string,
    blocked: PropTypes.bool,
    id: PropTypes.string,
};
