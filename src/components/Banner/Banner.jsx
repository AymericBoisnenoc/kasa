import React from 'react';
import '../../styles/style.scss';

const Banner = ({ img, alt }) => {
    return (
        <div className="banner">
            <img className='home-img' src={img} alt={alt} />
        </div>
    );
};

export default Banner; // Ensure to export the component correctly
