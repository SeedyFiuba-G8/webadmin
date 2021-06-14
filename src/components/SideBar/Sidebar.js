import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Drawer, List, Button } from '@material-ui/core';
import {
    WidgetsTwoTone as ProjectsIcon,
    RecentActors as UsersIcon,
    ExitToApp as LogoutIcon,
} from '@material-ui/icons';
import { withRouter } from 'react-router-dom';
import SidebarLink from './SidebarLink';
import { signOut, useUserDispatch } from '../../context/UserContext';

const structure = [
    {
        key: 0,
        label: 'Projects',
        link: '/app/projects',
        icon: <ProjectsIcon />,
    },
    { key: 1, label: 'Users', link: '/app/users', icon: <UsersIcon /> },
];

function Sidebar({ location, history }) {
    var classes = getStyles();

    var userDispatch = useUserDispatch();

    return (
        <Drawer
            variant={'permanent'}
            className={classes.drawer}
            classes={{ paper: classes.drawer }}
            open={true}
        >
            <List className={classes.sidebarList}>
                {/* ADD TITLE */}
                {structure.map((link) => (
                    <SidebarLink key={link.key} location={location} {...link} />
                ))}
            </List>
            <Button
                variant='contained'
                color='secondary'
                onClick={() => signOut(userDispatch, history)}
                startIcon={<LogoutIcon />}
            >
                Logout
            </Button>
        </Drawer>
    );
}

const getStyles = makeStyles((theme) => ({
    drawer: {
        width: 240,
        flexDirection: 'column',
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default withRouter(Sidebar);
