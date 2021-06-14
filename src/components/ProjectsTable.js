import React from 'react';
import MUIDataTable from 'mui-datatables';
import { getAllProjects } from '../api/projectsQuery';

export default function ProjectsTable(props) {
    const data = getAllProjects();
    return (
        <MUIDataTable
            title='All Projects'
            data={data}
            columns={columns}
            options={{
                filterType: 'checkbox',
                // onRowClick: viewProject(),
            }}
        />
    );
}

const columns = [
    { name: 'id', label: 'ID' },
    { name: 'title', label: 'Title' },
    { name: 'type', label: 'Tyle' },
    { name: 'country', label: 'Country' },
    { name: 'city', label: 'City' },
];
