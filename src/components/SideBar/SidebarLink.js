import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function SidebarLink({ link, icon, label, location }) {
    var classes = getStyles();

    var isLinkActive =
        link &&
        (location.pathname === link || location.pathname.indexOf(link) !== -1);

    return (
        <ListItem
            button
            component={link && Link}
            to={link}
            className={classes.link}
            classes={{
                root: isLinkActive ? classes.linkActive : classes.linkRoot,
            }}
            disableRipple
        >
            <ListItemIcon
                className={
                    isLinkActive ? classes.linkIconActive : classes.linkIcon
                }
            >
                {icon}
            </ListItemIcon>
            <ListItemText
                className={
                    isLinkActive ? classes.linkTextActive : classes.linkText
                }
                primary={label}
            />
        </ListItem>
    );
}

const getStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        '&:hover, &:focus': {
            backgroundColor: theme.palette.background.light,
        },
    },
    linkActive: {
        backgroundColor: theme.palette.background.light,
    },
    linkIcon: {
        marginRight: theme.spacing(1),
        color: theme.palette.text.secondary + '99',
        transition: theme.transitions.create('color'),
        width: 24,
        display: 'flex',
        justifyContent: 'center',
    },
    linkIconActive: {
        color: theme.palette.primary.main,
    },
    linkText: {
        padding: 0,
        color: theme.palette.text.secondary + 'CC',
        transition: theme.transitions.create(['opacity', 'color']),
        fontSize: 16,
    },
    linkTextActive: {
        color: theme.palette.text.primary,
    },
}));
