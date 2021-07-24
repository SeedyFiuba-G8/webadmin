import React from 'react';
import { getAllProjects } from '../api/projectsQuery';
import { withRouter } from 'react-router-dom';
import Table from './Table';

function ProjectsTable(props) {
    return Table(props, columns, getAllProjects);
}

const columns = [
    { name: 'id', label: 'ID' },
    { name: 'title', label: 'Title' },
    { name: 'type', label: 'Type' },
    { name: 'country', label: 'Country' },
    { name: 'city', label: 'City' },
];

export default withRouter(ProjectsTable);
