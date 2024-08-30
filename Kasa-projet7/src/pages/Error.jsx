import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <>
        <div className="error-div">
            <h1>404</h1>
            <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <div className="error-home-link">
            <NavLink
                    to="/"
                    exact= "true"
                    className="link-to-home"
                >
                    Retourner sur la page d’accueil
            </NavLink>     
        </div>
      </>
    );
};

export default Error;