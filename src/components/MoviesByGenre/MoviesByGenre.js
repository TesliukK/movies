import {useSelector} from "react-redux";
import React, {useEffect, useState} from "react";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './moviesByGenre.module.css';

const MovieByGenre = () => {
    const {movieByGenre, errors, loading} = useSelector(state => state.genres);

    const [savedMovieByGenre, setSavedMovieByGenre] = useState(null);

    useEffect(() => {
        const savedMovieByGenre = JSON.parse(localStorage.getItem('movieByGenre'));
        setSavedMovieByGenre(savedMovieByGenre);
    }, []);

    useEffect(() => {
        if (movieByGenre) {
            localStorage.setItem('movieByGenre', JSON.stringify(movieByGenre));
            setSavedMovieByGenre(movieByGenre);
        }
    }, [movieByGenre]);

    const movies = savedMovieByGenre || movieByGenre;

    return (
        <div className={css.block}>
            {loading && <img
                src={"https://developer.android.com/static/codelabs/basic-android-kotlin-training-internet-images/img/6c1f87d1c932c762.png"}
                alt="loading......"/>}
            {errors && JSON.stringify(errors)}
            {movies && movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MovieByGenre};

