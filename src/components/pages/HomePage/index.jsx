import React from 'react';
import PropTypes from 'prop-types';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import './styles.scss';

HomePage.propTypes = {};

function HomePage(props) {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjFour} />
        </>
    );
}

export default HomePage;
