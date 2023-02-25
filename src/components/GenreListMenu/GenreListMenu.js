import React from 'react';
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

import {genreAction} from "../../redux";
import css from './genreListMenu.module.css';

const GenreListMenu = ({genre}) => {

    const dispatch = useDispatch();
    const {name, id} = genre;

    const handleClick = () => {
        dispatch(genreAction.getMoviesByGenreId(id));
    };


    return (
        <div className={css.link}>
            <NavLink onClick={handleClick} to={'/moviesByGenre'}>{name}</NavLink>
        </div>
    );
};
export {GenreListMenu};
