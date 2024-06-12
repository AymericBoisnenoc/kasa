import React from 'react';
import homeImg from '../../assets/img/home-banner.jpg'
import '../../styles/style.scss'

const HomeBanner = () => {
    return <div className="banner" style={{ backgroundImage: `url(${homeImg})` }}>
        <img className='banner-img' src={homeImg} alt="banniere de la page d'accueil" />
        <h1 className='home-title'>Chez vous, partout et ailleurs</h1>
    </div>;
};

export default HomeBanner;
