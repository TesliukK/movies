import React from 'react';
import {useSelector} from "react-redux";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './searchResults.module.css';

const SearchResult = () => {
    const {searchResults} = useSelector(state => state.movies);

    return (
        <div className={css.block}>
            {searchResults && searchResults.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {SearchResult};