import { useEffect, useState, React, useRef } from 'react';
import { getProject } from '../../api/projectsQuery';
import ProjectStyle from './ProjectStyle';
import VisualDetail from '../VisualDetail';
import VisualBlockedButton from '../VisualProjectBlockedButton';
import { CssBaseline, Grid, Container, Typography } from '@material-ui/core';

export default function ProjectView(props) {
    const [project, setProject] = useState({});
    const mountedRef = useRef(true);

    useEffect(() => {
        const loadProjects = async () => {
            const projectData = await getProject(props.id);
            if (!mountedRef.current) return;
            setProject(projectData);
        };
        loadProjects();
    }, [props.id]);

    const projectStyle = {
        title: project.title,
        description: project.description,
        image: project.coverPicUrl,
        imgText: 'main image description',
    };

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <ProjectStyle post={projectStyle} />
                <Typography variant="h3" gutterBottom>
                    Project Status
                </Typography>
                <Grid container spacing={2}>
                    <VisualBlockedButton
                        size={4}
                        title="Block"
                        blocked={project.blocked}
                        id={project.id}
                    />
                </Grid>
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
                    <VisualDetail size={4} title="Latitud" info={project.lat} />
                    <VisualDetail
                        size={4}
                        title="Longitud"
                        info={project.long}
                    />
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
