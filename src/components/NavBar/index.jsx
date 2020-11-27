import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { IconContext } from 'react-icons/lib';
import './styles.scss';

NavBar.propTypes = {};

function NavBar(props) {
    const [clickMenu, setClickMenu] = useState(false);
    const [button, setButton] = useState(true);

    const handeClickMenu = () => setClickMenu(!clickMenu);
    const closeMobileMenu = () => setButton(false);

    const showButton = () => {
        window.innerWidth <= 960 ? setButton(false) : setButton(true);
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link
                            to="/"
                            className="navbar-logo"
                            onClick={closeMobileMenu}
                        >
                            <MdFingerprint className="navbar-icon" />
                            LAVISH
                        </Link>
                        <div className="menu-icon" onClick={handeClickMenu}>
                            {clickMenu ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul
                            className={
                                clickMenu ? 'nav-menu active' : 'nav-menu'
                            }
                        >
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
                                    <Link to="/sign-up" className="btn-link">
                                        <Button buttonStyle="btn--outline">
                                            SIGN UP
                                        </Button>
                                    </Link>
                                ) : (
                                    <Link
                                        to="/sign-up"
                                        className="btn-link"
                                        onClick={closeMobileMenu}
                                    >
                                        <Button
                                            buttonSize="btn--mobile"
                                            buttonStyle="btn--outline"
                                        >
                                            SIGN UP
                                        </Button>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    );
}

export default NavBar;
