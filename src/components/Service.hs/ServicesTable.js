// import React, { useEffect, useState } from 'react';
import Table from './ServicesTableStyle';
// import { getServices } from '../../api/servicesQuery';
import { withRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';

function ServicesTable(props) {
    // const [services, setservices] = useState([]);
    // useEffect(() => {
    //     const loadservices = async () => setservices(await getServices());
    //     loadservices();
    // }, []);
    // const data = ['core', 'users', 'apikeys'];
    // const serviceStatus = [];

    // data.forEach((name) => {
    //     const status = services[name].database;
    //     serviceStatus.push({ name, status });
    // });
    const serviceStatus = {
        table: [
            {
                name: 'apikeys',
                database: 'UP',
            },
            {
                name: 'core',
                database: 'UP',
            },
            {
                name: 'users',
                database: 'DOWN',
            },
        ],
    };

    return (
        <Grid item xs={12}>
            <Table data={serviceStatus.table} />
        </Grid>
    );
}

export default withRouter(ServicesTable);
