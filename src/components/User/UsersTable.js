import React, { useState, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import { getAllUsers } from '../../api/usersQuery';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

function UsersTable(props) {
    const [config, setConfig] = useState({
        limit: 3,
        offset: 0,
    });
    const [users, setData] = useState([getAllUsers, config]);
    useEffect(() => {
        const loadData = async () => setData(await getAllUsers(config));
        console.log('Reloading with config: ', config);
        loadData();
    }, [config]);

    function onRowClickAction(rowData) {
        const id = rowData[0];
        props.history.push('users/' + id);
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
            // title="All Users"
            data={users}
            columns={columns}
            options={{
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

const columns = [
    {
        name: 'id',
        label: 'id',
        options: {
            filter: false,
        },
    },
    {
        name: 'firstName',
        label: 'First Name',
        options: {
            filter: true,
            customFilterListOptions: {
                render: (v) => `First Name: ${v}`,
            },
            filterType: 'textField',
        },
    },
    {
        name: 'lastName',
        label: 'Last Name',
        options: {
            filter: true,
            customFilterListOptions: {
                render: (v) => `Last Name: ${v}`,
            },
            filterType: 'textField',
        },
    },
    {
        name: 'email',
        label: 'E-mail',
        options: {
            filter: false,
        },
    },
    {
        name: 'banned',
        label: 'Banned',
        options: {
            filter: true,
            customFilterListOptions: {
                render: (v) => `Banned: ${v}`,
            },
            filterOptions: {
                names: ['true', 'false'],
            },

            filterType: 'dropdown',
            customBodyRender: (val) => {
                return val === true ? 'true' : 'false';
            },
        },
    },
];

export default withRouter(UsersTable);
