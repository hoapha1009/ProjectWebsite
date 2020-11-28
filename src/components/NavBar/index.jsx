import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { MdFingerprint } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Register from '../../features/Auth/Register';
import Button from '../Button';
import './styles.scss';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [open, setOpen] = React.useState(false);

    const handleClickOpenDialog = () => {
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpen(false);
    };

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
                            <li className="nav-btn">
                                {button ? (
                                    <Button
                                        className="btn-link"
                                        buttonStyle="btn--outline"
                                        onClick={handleClickOpenDialog}
                                    >
                                        SIGN UP
                                    </Button>
                                ) : (
                                    <Button
                                        buttonStyle="btn--outline"
                                        buttonSize="btn--mobile"
                                        onClick={handleClickOpenDialog}
                                        className="btn-link"
                                    >
                                        SIGN UP
                                    </Button>
                                )}
                            </li>
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
                    <Register onCloseDiaLog={handleCloseDialog} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Navbar;
