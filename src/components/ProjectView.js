import { useEffect, useState, React } from 'react';
import { getProject } from '../api/projectsQuery';
import ProjectStyle from './ProjectStyle';
import ProjectDetail from './ProjectDetail';
import { CssBaseline, Grid, Container } from '@material-ui/core';

import TemporaryImg from '../assets/temporary-img.jpg';

export default function ProjectView(props) {
    const [project, setProject] = useState([]);
    useEffect(() => {
        const loadProjects = async () => setProject(await getProject(props.id));
        loadProjects();
    }, [props.id]);
    // console.log(project.id);

    const projectStyle = {
        title: project.title,
        description: project.description,
        image: TemporaryImg,
        imgText: 'main image description',
    };

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <ProjectStyle post={projectStyle} />
                <Grid container spacing={2}>
                    <ProjectDetail title="Objective" info={project.objective} />
                    <ProjectDetail title="Country" info={project.country} />
                    <ProjectDetail title="City" info={project.city} />
                </Grid>
                <Grid container spacing={2}>
                    <ProjectDetail
                        title="Published on"
                        info={project.publishedOn}
                    />
                    <ProjectDetail
                        title="Finalized by"
                        info={project.finalizedBy}
                    />
                </Grid>
            </Container>
        </>
    );
}
