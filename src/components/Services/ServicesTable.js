import React, { useEffect } from 'react';
import {
	Table,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
	Chip,
} from '@material-ui/core';
import {
	defaults,
	descriptions,
	keys,
	mapServiceNames,
	services,
} from './Services';
import { fetchHealth, fetchInfo } from './Fetch';

const colorByState = {
	UP: 'primary',
	DOWN: 'secondary',
	'-': 'grey',
	'N/A': 'grey',
};

export default function ServicesTable() {
	const [health, setHealth] = React.useState(defaults.health);
	const [info, setInfo] = React.useState(defaults.info);

	useEffect(() => {
		(async () => {
			setHealth(await fetchHealth());
			setInfo(await fetchInfo());
		})();
	}, []);

	return (
		<Table>
			<TableHead>
				<TableRow>
					{keys.map(({ title, align }) => (
						<TableCell key={title} align={align}>
							<b>{title}</b>
						</TableCell>
					))}
				</TableRow>
			</TableHead>

			<TableBody>
				{services.map((service) => {
					const { creationDate } = info[service];
					const { status, database } = health[service];

					return (
						<TableRow key={service}>
							<TableCell>{mapServiceNames[service]}</TableCell>
							<TableCell>{descriptions[service]}</TableCell>
							<TableCell align='center'>
								{creationDate || '-'}
							</TableCell>
							<TableCell align='center'>
								<Chip
									style={{ width: '80px' }}
									label={status}
									color={colorByState[status]}
								/>
							</TableCell>
							<TableCell align='center'>
								<Chip
									style={{ width: '80px' }}
									label={database}
									color={colorByState[database]}
								/>
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
}
