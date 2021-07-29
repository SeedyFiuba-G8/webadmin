import { getServices } from '../../api/servicesQuery';
import { defaults, services } from './Services';
const _ = require('lodash');

async function fetchHealth() {
	const health = await getServices('health');
	if (!health) return defaults.health;

	const { status: apiGatewayStatus, services: servicesHealth } = health;

	const validServices = _.filter(
		services,
		(service) => service !== 'apigateway'
	);

	return validServices.reduce(
		(state, service) => {
			const { database } = servicesHealth[service];

			return {
				...state,
				[service]: {
					status: database || 'DOWN',
					database: database || 'DOWN',
				},
			};
		},
		{
			apigateway: { status: apiGatewayStatus, database: 'N/A' },
		}
	);
}

async function fetchInfo() {
	const info = await getServices('info');
	if (!info) return defaults.info;

	return services.reduce((state, service) => {
		const { creationDate: dateReceived } = info[service];
		const creationDate = dateReceived
			? new Date(dateReceived).toLocaleString()
			: '-';
		return {
			...state,
			[service]: { creationDate },
		};
	}, {});
}

export { fetchHealth, fetchInfo };
