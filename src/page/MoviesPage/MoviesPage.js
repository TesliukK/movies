import React from 'react';
import {MoviesList} from "../../components";
import css from './moviePage.module.css';

const MoviesPage = () => {

    return (
        <div className={css.block}>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};