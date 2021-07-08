import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';

const Navbar = props => (
    <header className="header-container">
        <nav className="nav">
            <NavLink className="link" to="/">GeoQuiz</NavLink>
        </nav>
    </header>
);

export default Navbar;