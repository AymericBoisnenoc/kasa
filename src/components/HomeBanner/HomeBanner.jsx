import React from 'react';
import homeImg from '../../assets/img/home-banner.jpg';
import '../../styles/style.scss';
import Banner from '../Banner/Banner'; // Correct import statement

const img = homeImg;
const HomeBanner = () => {
    return (
        <div className='banner'>
            <Banner img={img} alt="banniere home" /> {/* Use Banner component correctly */}
            <h1 className='home-title'>Chez vous,<span className="line-break"> partout et ailleurs</span></h1>
        </div>
    );
};

export default HomeBanner;
