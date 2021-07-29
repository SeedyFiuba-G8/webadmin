import React, { useEffect, useRef } from 'react';
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
	'-': undefined,
	'N/A': undefined,
};

export default function ServicesTable() {
	const [health, setHealth] = React.useState(defaults.health);
	const [info, setInfo] = React.useState(defaults.info);
	const mountedRef = useRef(true);

	useEffect(() => {
		(async () => {
			const resHealth = await fetchHealth();
			const resInfo = await fetchInfo();
			if (!mountedRef.current) return;
			setHealth(resHealth);
			setInfo(resInfo);
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
