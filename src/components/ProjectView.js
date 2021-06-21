import { useEffect, useState } from 'react';
import { getProject } from '../api/projectsQuery';
import { Paper } from '@material-ui/core';

export default function ProjectView(props) {
    const [project, setProject] = useState([]);
    useEffect(() => {
        const loadProjects = async () => setProject(await getProject(props.id));
        loadProjects();
    }, [props.id]);
    console.log(project.id);
    return <Paper />;
}
