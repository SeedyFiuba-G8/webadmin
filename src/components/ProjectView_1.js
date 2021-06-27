import { useEffect, useState, React } from 'react';
import clsx from 'clsx';
import { getProject } from '../api/projectsQuery';
import Card from '@material-ui/core/Card';
import {
    makeStyles,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    Avatar,
    IconButton,
    Typography,
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TemporaryImg from '../assets/temporary-img.jpg';

export default function ProjectView(props) {
    const [project, setProject] = useState([]);
    useEffect(() => {
        const loadProjects = async () => setProject(await getProject(props.id));
        loadProjects();
    }, [props.id]);
    // console.log(project.id);
    const classes = getStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="project" className={classes.avatar}>
                        {project.type}
                    </Avatar>
                }
                title={project.title}
                subheader={project.country + ', ' + project.city}
            />
            <CardMedia
                className={classes.media}
                image={TemporaryImg}
                title="image"
            />
            <CardContent>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    textAlign="center"
                    component="p"
                >
                    {project.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>{'Type: ' + project.type}</Typography>
                    <Typography paragraph>
                        {'Objective: ' + project.objective}
                    </Typography>
                    <Typography paragraph>
                        {'Country: ' + project.country}
                    </Typography>
                    <Typography paragraph>{'City: ' + project.city}</Typography>
                    <Typography paragraph>
                        {'Published on: ' + project.publishedOn}
                    </Typography>
                    <Typography paragraph>
                        {'Finalized by: ' + project.finalizedBy}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

const getStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: 'primary',
    },
}));
