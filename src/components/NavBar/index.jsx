import {
    Box,
    Button,
    IconButton,
    makeStyles,
    Menu,
    MenuItem,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { AccountCircle, Close } from '@material-ui/icons';
import Login from 'features/Auth/Login';
import { logout } from 'features/Auth/userSlice';
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { MdFingerprint } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Register from '../../features/Auth/Register';
import Buttonn from '../Button';
import './styles.scss';

const useStyle = makeStyles((theme) => ({
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
    },
    iconMenu: {
        color: '#fff',
        fontSize: '32px',
    },
}));

function Navbar() {
    const dispatch = useDispatch();
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [open, setOpen] = useState(false);
    const MODE = {
        LOGIN: 'login',
        REGISTER: 'register',
    };
    const [mode, setMode] = useState(MODE.LOGIN);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpen(false);
    };
    const loggedUser = useSelector((state) => state.user.current);
    const isLoggedUser = !!loggedUser.id;

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return window.removeEventListener('resize', showButton);
    }, []);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const loggedInUser = () => {
        if (button) {
            if (!isLoggedUser) {
                return (
                    <Buttonn
                        className="btn-link"
                        buttonStyle="btn--outline"
                        onClick={handleClickOpen}
                    >
                        Log in
                    </Buttonn>
                );
            } else {
                return (
                    <IconButton onClick={handleOpenMenu}>
                        <AccountCircle className={classes.iconMenu} />
                    </IconButton>
                );
            }
        } else {
            return (
                <Buttonn
                    buttonStyle="btn--outline"
                    buttonSize="btn--mobile"
                    onClick={handleClickOpen}
                    className="btn-link"
                >
                    SIGN UP
                </Buttonn>
            );
        }
    };

    const handleLogOutUser = () => {
        const action = logout();
        dispatch(action);
    };

    const classes = useStyle();
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className="navbar">
                    <div className="navbar-container container">
                        <Link
                            to="/"
                            className="navbar-logo"
                            onClick={closeMobileMenu}
                        >
                            <MdFingerprint className="navbar-icon" />
                            LAVISH
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-links"
                                    onClick={closeMobileMenu}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/services"
                                    className="nav-links"
                                    onClick={closeMobileMenu}
                                >
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/products"
                                    className="nav-links"
                                    onClick={closeMobileMenu}
                                >
                                    Products
                                </Link>
                            </li>
                            <li className="nav-btn">{loggedInUser()}</li>
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
            <Dialog
                disableEscapeKeyDown
                disableBackdropClick
                open={open}
                onClose={handleCloseDialog}
                aria-labelledby="form-dialog-title"
            >
                <DialogContent>
                    {mode === MODE.REGISTER && (
                        <>
                            <Register onCloseDiaLog={handleCloseDialog} />
                            <Box textAlign="center">
                                <Button
                                    color="primary"
                                    onClick={() => setMode(MODE.LOGIN)}
                                >
                                    Already have an account? Log in here!
                                </Button>
                            </Box>
                        </>
                    )}
                    {mode === MODE.LOGIN && (
                        <>
                            <Login onCloseDiaLog={handleCloseDialog} />
                            <Box textAlign="center">
                                <Button
                                    color="primary"
                                    onClick={() => setMode(MODE.REGISTER)}
                                >
                                    Don't have an account? Sign up here!
                                </Button>
                            </Box>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <IconButton
                        onClick={handleCloseDialog}
                        className={classes.closeButton}
                    >
                        <Close />
                    </IconButton>
                </DialogActions>
            </Dialog>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                getContentAnchorEl={null}
            >
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleLogOutUser}>Logout</MenuItem>
            </Menu>
        </>
    );
}

export default Navbar;
