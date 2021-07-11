import { useEffect, useState, React } from 'react';
import { getUser } from '../api/usersQuery';
import VisualDetail from './VisualDetail';
import { CssBaseline, Grid, Container, Typography } from '@material-ui/core';
import { useParams } from 'react-router';

export default function UserView(props) {
    const [user, setProject] = useState([]);
    useEffect(() => {
        const loadUser = async () => setProject(await getUser(props.id));
        loadUser();
    }, [props.id]);
    // console.log(user.id);

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography variant="h3" gutterBottom>
                    General Info
                </Typography>

                <Grid container spacing={2}>
                    <VisualDetail
                        size={4}
                        title="First Name"
                        info={user.firstName}
                    />
                    <VisualDetail
                        size={4}
                        title="Last Name"
                        info={user.lastName}
                    />
                    <VisualDetail
                        size={4}
                        title="Signup Date"
                        info={user.signupDate}
                    />
                    <VisualDetail
                        size={4}
                        title="Interests"
                        info={user.interests ? user.interests.join(',') : null}
                    />
                </Grid>

                <Typography variant="h3" gutterBottom>
                    Location
                </Typography>

                <Grid container spacing={2}>
                    <VisualDetail
                        size={4}
                        title="Country"
                        info={user.country}
                    />
                    <VisualDetail size={4} title="City" info={user.city} />
                </Grid>

                <Typography variant="h3" gutterBottom>
                    Status
                </Typography>

                <Grid container spacing={2}>
                    <VisualDetail
                        size={4}
                        title="Banned"
                        info={user.banned ? 'true' : 'false'}
                    />
                </Grid>
            </Container>
        </>
    );
}
