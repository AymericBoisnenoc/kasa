import React from 'react';
import './Banner.scss';

const Banner = ({ img, alt }) => {
    return (
            <img className='home-img' src={img} alt={alt} />
    );
};

export default Banner; // Ensure to export the component correctly
