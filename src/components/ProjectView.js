import { useEffect, useState, React } from 'react';
import { getProject } from '../api/projectsQuery';
import ProjectStyle from './ProjectStyle';
import VisualDetail from './VisualDetail';
import { CssBaseline, Grid, Container, Typography } from '@material-ui/core';

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

                <Typography variant="h3" gutterBottom>
                    General Info
                </Typography>

                <Grid container spacing={2}>
                    <VisualDetail
                        size={4}
                        title="Objective"
                        info={project.objective}
                    />
                </Grid>

                <Typography variant="h3" gutterBottom>
                    Location
                </Typography>

                <Grid container spacing={2}>
                    <VisualDetail
                        size={4}
                        title="Country"
                        info={project.country}
                    />
                    <VisualDetail size={4} title="City" info={project.city} />
                </Grid>

                <Typography variant="h3" gutterBottom>
                    Timeline
                </Typography>

                <Grid container spacing={2}>
                    <VisualDetail
                        size={4}
                        title="Published on"
                        info={project.publishedOn}
                    />
                    <VisualDetail
                        size={4}
                        title="Finalized by"
                        info={project.finalizedBy}
                    />
                </Grid>
            </Container>
        </>
    );
}
