import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import {movieAction} from "../../redux";
import css from './moviesListCard.module.css';

const MoviesListCard = ({movie}) => {
    const {original_title, poster_path} = movie;
    const dispatch = useDispatch();
    const image = 'https://image.tmdb.org/t/p/w300';

    return (
        <div className={css.card}>
            <NavLink to={'/movieInfo'}
                     onClick={() => dispatch(movieAction.setSelectedMovie(movie))}>
            <div>
                <img className={css.img} src={`${image}${poster_path}`} alt={original_title}/>
            </div>
            <div>
                {original_title}
            </div>
            </NavLink>
        </div>
    );
};

export {MoviesListCard};