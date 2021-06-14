import React from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router';
import { ArrowBack } from '@material-ui/icons';
import { Link } from 'react-router-dom';

function Project() {
    return <Button to={'/'} component={Link} startIcon={<ArrowBack />} />;
}

export default withRouter(Project);
