import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss'
import logo from '../../assets/img/kasa.svg'

function Nav() {
    // État pour stocker le lien actif
    const [activeLink, setActiveLink] = useState(null);

    // Fonction pour mettre à jour le lien actif lorsqu'un lien est cliqué
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className="nav">
            <img src={logo} alt="logo de kasa" />
            <ul>
                <li>
                    <Link to="/" className={activeLink === '/' ? 'active-link' : ''} onClick={() => handleLinkClick('/')}>Accueil</Link>
                </li>
                <li>
                    <Link to="/about" className={activeLink === '/about' ? 'active-link' : ''} onClick={() => handleLinkClick('/about')}>A Propos</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
