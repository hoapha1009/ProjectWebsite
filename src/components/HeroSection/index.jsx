import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

HeroSection.propTypes = {};

function HeroSection({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
}) {
    return (
        <>
            <div
                className={
                    lightBg ? 'home_hero-section' : 'home_hero-section darkBg'
                }
            >
                <div className="container">
                    <div className="row home__hero-row"></div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
