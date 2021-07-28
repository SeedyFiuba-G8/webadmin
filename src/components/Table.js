import React, { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables';
import _ from 'lodash';

function Table(props, columns, get) {
	const [isLoading, setIsLoading] = useState(true);
	const [config, setConfig] = useState({
		limit: 3,
		offset: 0,
	});
	const [projects, setProjects] = useState([get, config]);
	useEffect(() => {
		const loadData = async () => {
			setProjects(await get(config));
			setIsLoading(false);
		};
		console.log('Reloading with config: ', config);
		loadData();
	}, [get, config]);

	function onRowClickAction(rowData) {
		const id = rowData[0];
		props.history.push('projects/' + id);
	}

	function updateConfig(update) {
		setConfig({ ...config, ...update });
	}

	function changePage(page) {
		updateConfig({ offset: Math.floor(page / config.limit) });
	}

	function changeRowsPerPage(rows) {
		console.log('changed page number');
		updateConfig({ limit: rows });
	}

	function sortByColumn(column, direction) {
		console.log('Columns sort by:', column, 'direction:', direction);
		// updateConfig({
		//     sortColumn: column,
		//     sortAsc: direction === 'asc' ? true : false,
		// });
	}

	function removeField(field) {
		var config_aux = { ...config };
		_.unset(config_aux, field);
		setConfig(config_aux);
	}

	function changeFilters(columnChanged, filterList, changedColumnIndex) {
		console.log('cambiando config:', filterList);
		if (changedColumnIndex == null) {
			setConfig({
				limit: 3,
				offset: 0,
			});
		} else if (filterList[changedColumnIndex].length === 0) {
			console.log('Removed field:', columnChanged);
			removeField(columnChanged);
		} else {
			var update = {};
			update[columnChanged] = filterList[changedColumnIndex][0];
			updateConfig(update);
		}
	}

	return (
		<MUIDataTable
			title={'All system projects'}
			data={projects}
			columns={projects.length > 0 ? columns : []}
			options={{
				textLabels: {
					body: {
						noMatch: isLoading
							? 'Loading...'
							: 'There are no projects registered.',
					},
				},
				selectableRows: 'none',
				onRowClick: onRowClickAction,
				resizableColumns: true,
				page: config.offset * config.limit,
				rowsPerPage: config.limit,
				jumpToPage: true,
				download: false,
				rowsPerPageOptions: [1, 3, 5, 10, 15, 50],
				onChangePage: changePage,
				onChangeRowsPerPage: changeRowsPerPage,
				onColumnSortChange: sortByColumn,
				onFilterChange: (
					columnChanged,
					filterList,
					type,
					changedColumnIndex
				) => {
					changeFilters(
						columnChanged,
						filterList,
						changedColumnIndex
					);
				},
			}}
		/>
	);
}

export default Table;
