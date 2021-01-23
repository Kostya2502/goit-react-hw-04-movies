import React from 'react';
import { NavLink } from 'react-router-dom';
import { link, activeLink } from './Navigation.module.css';

const Navigation = () => {
    return (
        <>
            <ul>
                <li>
                    <NavLink to='/' exact className={link} activeClassName={activeLink}>HomePage</NavLink>
                </li>
                <li>
                    <NavLink to='/movies' className={link} activeClassName={activeLink}>MoviesPage</NavLink>
                </li>
            </ul>
        </>
    );
}

export default Navigation;