import React from 'react';
import css from './header.module.css';
import SearchMovie from "../SearchMovie/SearchMovie";



const Header = () => {
    return (
        <div className={css.headerBlock}>
            <SearchMovie/>
        </div>
    );
};

export {Header};