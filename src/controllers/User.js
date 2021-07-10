import React from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router';
import { ArrowBack } from '@material-ui/icons';
import { Link, useParams } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
// import ProjectView from '../components/ProjectView';

function User(props) {
    const { id } = useParams();
    console.log(id);
    return (
        <>
            <Button
                to={'/app/users'}
                component={Link}
                startIcon={<ArrowBack />}
            />
            <PageTitle title="User Profile" />
        </>
    );
}

export default withRouter(User);
