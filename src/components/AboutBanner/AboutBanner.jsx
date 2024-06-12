import React from 'react';
import bannerAboutImg from '../../assets/img/about.jpg'
import '../../styles/style.scss'

const AboutBanner = () => {
    return <div className="banner">
        <img className='home-img' src={bannerAboutImg} alt="banniere de A propos" />
    </div>;
};

export default AboutBanner;
