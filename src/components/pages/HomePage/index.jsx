import React from 'react';
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';
import './styles.scss';

HomePage.propTypes = {};

function HomePage(props) {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjThree} />
            <Pricing />
            <HeroSection {...homeObjFour} />
        </>
    );
}

export default HomePage;
