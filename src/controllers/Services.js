import React from 'react';
import { Paper } from '@material-ui/core';
import { withRouter } from 'react-router';
import PageTitle from '../components/PageTitle';
import ServiceTable from '../components/Services/ServicesTable';

function Services(props) {
	return (
		<>
			<PageTitle title='Services' />
			<Paper>
				<ServiceTable />
			</Paper>
		</>
	);
}

export default withRouter(Services);
