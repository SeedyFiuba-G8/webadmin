import React, { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables';

function Table(props, columns, get) {
    const [config, setConfig] = useState({ limit: 3, offset: 0 });
    const [projects, setData] = useState([get, config]);
    useEffect(() => {
        const loadData = async () => setData(await get(config));
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
        updateConfig({ limit: rows });
    }

    function sortByColumn(column, direction) {
        console.log('Columns sort by:', column, 'direction:', direction);
        // updateConfig({
        //     sortColumn: column,
        //     sortAsc: direction === 'asc' ? true : false,
        // });
    }

    return (
        <MUIDataTable
            title='All Projects'
            data={projects}
            columns={columns}
            options={{
                filterType: 'checkbox',
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
            }}
        />
    );
}

export default Table;
