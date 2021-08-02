import { useEffect, useState, React, useRef } from 'react';
import { getUser } from '../../api/usersQuery';
import VisualDetail from '../VisualDetail';
import VisualBlockedButton from '../VisualUserBlockedButton';
import { CssBaseline, Grid, Container, Typography } from '@material-ui/core';

export default function UserView(props) {
    const [user, setUser] = useState({});
    const mountedRef = useRef(true);

    useEffect(() => {
        const loadUser = async () => {
            getUser(props.id).then((userData) => {
                if (!mountedRef.current) return;
                setUser(userData);
            });
        };
        loadUser();
    }, [props.id]);

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography variant="h3" gutterBottom>
                    User Status
                </Typography>

                <Grid container spacing={2}>
                    <VisualBlockedButton
                        size={4}
                        title="Ban"
                        blocked={user.banned}
                        id={props.id}
                    />
                </Grid>
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
                        info={
                            user.signupDate
                                ? new Date(user.signupDate).toLocaleString()
                                : '-'
                        }
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

                {/* <Typography variant="h3" gutterBottom>
                    Status
                </Typography> */}
                {/* 
                <Grid container spacing={2}>
                    <VisualDetail
                        size={4}
                        title="Banned"
                        info={user.banned ? 'true' : 'false'}
                    />
                </Grid> */}
            </Container>
        </>
    );
}
