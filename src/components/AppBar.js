import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        textAlign: 'left',
        flexGrow: 1,
        fontWeight: 'bold'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
}));

/**
 * @author Ayrton Gomes 
 * 
 * Function component of Toolbar at header
 */
export default function HeaderAppBar() {
    const classes = useStyles();
    const [idSearch, setIdSearch] = useState();

    let history = useHistory();

    const handleChange = (e) => {
        setIdSearch(e.target.value);
    }

    /**
     * @author Ayrton Gomes 
     * 
     * Function triggered on enter key press that redirects to search client by Id
     */
    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            history.push(`/clientById/${e.target.value}`);
        }
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        ERP
                    </Typography>
                    <NavLink to="/ip/new">
                        <Button color="inherit" style={{ color: 'white' }}>Cadastrar IP</Button>
                    </NavLink>
                    <NavLink to="/ips">
                        <Button color="inherit" style={{ color: 'white' }}>Listar IPS</Button>
                    </NavLink>
                    <NavLink to="/produtos">
                        <Button color="inherit" style={{ color: 'white' }}>Listar produtos</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </div>
    );
}