import React from 'react';
import {NavLink} from "react-router-dom";

import css from './header.module.css';

import {Theme} from "../ThemeComponent/Theme";
import {SearchMovies} from "../SearchMovie/SearchMovie"

const Header = () => {
    return (
        <div className={css.headerBlock}>
            <NavLink to={'movies'}>HOME</NavLink>
            <Theme/>
            <SearchMovies/>
        </div>
    );
};

export {Header};