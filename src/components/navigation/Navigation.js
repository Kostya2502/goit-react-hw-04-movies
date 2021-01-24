import React from 'react';
import { NavLink } from 'react-router-dom';
import { link, activeLink, nav } from './Navigation.module.css';

const Navigation = () => {
    return (
        <>
            <nav className={nav}>
                <NavLink to='/' exact className={link} activeClassName={activeLink}>HomePage</NavLink>
                <NavLink to='/movies' className={link} activeClassName={activeLink}>MoviesPage</NavLink>
            </nav>
        </>
    );
}

export default Navigation;