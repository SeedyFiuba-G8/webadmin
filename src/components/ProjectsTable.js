import React, { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables';
import { getProjects } from '../api/projectsQuery';
import { withRouter } from 'react-router-dom';

function ProjectsTable(props) {
    const [config, setConfig] = useState({ rowsPerPage: 3, currentPage: 1 });
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const loadProjects = async () => setProjects(await getProjects(config));
        loadProjects();
    }, [config]);

    function onRowClickAction(rowData) {
        const id = rowData[0];
        props.history.push('projects/' + id);
    }

    function changePage(page) {
        setConfig({ ...config, currentPage: page });
    }

    function changeRowsPerPage(rows) {
        setConfig({ ...config, rowsPerPage: rows });
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
                page: config.currentPage,
                rowsPerPage: config.rowsPerPage,
                rowsPerPageOptions: [3, 5, 10, 15, 50],
                onChangePage: changePage,
                onChangeRowsPerPage: changeRowsPerPage,
            }}
        />
    );
}

const columns = [
    { name: 'id', label: 'ID' },
    { name: 'title', label: 'Title' },
    { name: 'type', label: 'Type' },
    { name: 'country', label: 'Country' },
    { name: 'city', label: 'City' },
];

export default withRouter(ProjectsTable);
