import React from 'react';
import css from './header.module.css';
import SearchMovie from "../SearchMovie/SearchMovie";
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className={css.headerBlock}>
            <NavLink to={'movies'}>HOME</NavLink>

            <SearchMovie/>

        </div>
    );
};

export {Header};