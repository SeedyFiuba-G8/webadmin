import React, { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables';
import { getAllProjects } from '../api/projectsQuery';
import { withRouter } from 'react-router-dom';

function ProjectsTable(props) {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const loadProjects = async () => setProjects(await getAllProjects());
        loadProjects();
    }, []);

    function onRowClickAction(rowData) {
        const id = rowData[0];
        props.history.push('projects/' + id);
    }

    return (
        <MUIDataTable
            title='All Projects'
            data={projects}
            columns={columns}
            options={{
                filterType: 'checkbox',
                onRowClick: onRowClickAction,
                // onChangePage:
                // onChangeRowsPerPage:
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
