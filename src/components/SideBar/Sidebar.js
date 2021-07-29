import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Drawer, List, Button } from '@material-ui/core';
import {
    WidgetsTwoTone as ProjectsIcon,
    RecentActors as UsersIcon,
    ExitToApp as LogoutIcon,
    Extension as ServicesIcon,
    Assessment as ProjectMetricsIcon,
    People as UserMetricsIcon,
} from '@material-ui/icons';
import { withRouter } from 'react-router-dom';
import SidebarLink from './SidebarLink';
import { signOut, useUserDispatch } from '../../context/UserContext';
import InviteAdminButton from '../Register/InviteAdminButton';

const structure = [
    {
        key: 0,
        label: 'Projects',
        link: '/app/projects',
        icon: <ProjectsIcon />,
    },
    { key: 1, label: 'Users', link: '/app/users', icon: <UsersIcon /> },
    {
        key: 2,
        label: 'Services',
        link: '/app/services',
        icon: <ServicesIcon />,
    },
    {
        key: 3,
        label: 'User Metrics',
        link: '/app/usermetrics',
        icon: <UserMetricsIcon />,
    },
    {
        key: 4,
        label: 'Project Metrics',
        link: '/app/projectmetrics',
        icon: <ProjectMetricsIcon />,
    },
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
            <List style={{ display: 'flex', flex: 5, flexDirection: 'column' }}>
                {/* ADD TITLE */}
                {structure.map((link) => (
                    <SidebarLink key={link.key} location={location} {...link} />
                ))}
            </List>
            <div
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                }}
            >
                <InviteAdminButton />
                <Button
                    variant='contained'
                    color='secondary'
                    onClick={() => signOut(userDispatch, history)}
                    startIcon={<LogoutIcon />}
                    // position to define
                    style={{
                        display: 'flex',
                    }}
                >
                    Logout
                </Button>
            </div>
        </Drawer>
    );
}

const getStyles = makeStyles((theme) => ({
    drawer: {
        width: 240,
        flexDirection: 'column',
        flexShrink: 0,
        whiteSpace: 'nowrap',
        justifyContent: 'space-between',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default withRouter(Sidebar);
