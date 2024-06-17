import React from 'react';
import aboutImg from '../../assets/img/about.jpg';
import '../../styles/style.scss';
import Banner from '../Banner/Banner'; // Correct import statement

const img = aboutImg;
const HomeBanner = () => {
    return (
        <div className='banner'>
            <Banner img={img} alt="banniere about" /> 
        </div>
    );
};

export default HomeBanner;
