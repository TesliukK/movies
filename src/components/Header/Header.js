import React from 'react';
import {NavLink} from "react-router-dom";

import css from './header.module.css';
import {Theme} from "../ThemeComponent/Theme";
import {SearchMovies} from "../SearchMovie/SearchMovie"
import {UserBlock} from "../UserBlock/UserBlock";

const Header = () => {
    return (
        <div className={css.headerBlock}>
            <Theme/>
            <NavLink to={'movies'}>HOME MOVIES THEATRE</NavLink>
            <SearchMovies/>
            <UserBlock/>
        </div>
    );
};

export {Header};