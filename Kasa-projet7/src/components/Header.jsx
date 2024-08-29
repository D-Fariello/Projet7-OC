import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <img src="/images/Kasa-logo.png" alt="Kasa Logo" className="img-logo"/>
            <nav>
            <NavLink
                    to="/"
                    exact= "true"
                    className="nav-link"
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/Apropos"
                    className="nav-link"
                >
                    A propos
                </NavLink>
            </nav>
            
        </header>
    );
};

export default Header;