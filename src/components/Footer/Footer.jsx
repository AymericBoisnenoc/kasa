import React from 'react';
import logo from '../../assets/img/kasa-logo-footer.svg'
import './Footer.scss'

const Footer = () => {
    return <footer className='footer'>
            <img src={logo} alt="" />
            <p>© 2020 Kasa. All rights reserved</p>
    </footer>;
};

export default Footer;
