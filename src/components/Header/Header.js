import React from 'react';
import css from './header.module.css';
import SearchMovie from "../SearchMovie/SearchMovie";
import {NavLink} from "react-router-dom";
import {Theme} from "../ThemeComponent/Theme";


const Header = () => {
    return (
        <div className={css.headerBlock}>
            <NavLink to={'movies'}>HOME</NavLink>
            <Theme/>
            <SearchMovie/>

        </div>
    );
};

export {Header};