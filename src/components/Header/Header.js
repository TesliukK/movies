import React from 'react';

import css from './header.module.css';
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div className={css.header}>
            <nav role='navigation'>
                <ul>
                    <li><NavLink to={'movies'}>Movies</NavLink></li>
                    <li><NavLink to={'/genre'}>Genre</NavLink>
                        <ul>
                            <li><NavLink to={'MovieGenre'}>qwqeqweq</NavLink></li>
                        </ul>
                    </li>


                </ul>
            </nav>
        </div>
    );
};

export {Header};