import { getAllProjects } from '../../api/projectsQuery';
import { withRouter } from 'react-router-dom';
import Table from '../Table';

function ProjectsTable(props) {
    return Table(props, columns, getAllProjects);
}

const columns = [
    {
        name: 'id',
        label: 'ID',
        options: {
            filter: false,
        },
    },
    {
        name: 'title',
        label: 'Title',
        options: {
            filter: false,
        },
    },
    {
        name: 'type',
        label: 'Type',
        options: {
            filter: true,
            customFilterListOptions: {
                render: (v) => `Type: ${v}`,
            },
            filterType: 'textField',
        },
    },
    {
        name: 'country',
        label: 'Country',
        options: {
            filter: false,
        },
    },
    {
        name: 'city',
        label: 'City',
        options: {
            filter: false,
        },
    },
    {
        name: 'status',
        label: 'Status',
        options: {
            filter: true,
            customFilterListOptions: {
                render: (v) => `Status: ${v}`,
            },
            filterOptions: {
                names: ['DRAFT', 'FUNDING', 'IN_PROGRESS', 'COMPLETED'],
            },

            filterType: 'dropdown',
        },
    },
    {
        name: 'blocked',
        label: 'Blocked',
        options: {
            filter: true,
            customFilterListOptions: {
                render: (v) => `Blocked: ${v}`,
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

export default withRouter(ProjectsTable);
