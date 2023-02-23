import React from 'react';
import {GenreList, MoviesList} from "../../components";
import css from './moviePage.module.css';

const MoviesPage = () => {
    return (
        <div className={css.block}>
            <GenreList/>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};