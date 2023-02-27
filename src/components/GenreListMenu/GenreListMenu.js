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
        <NavLink onClick={handleClick} to={'/moviesByGenre'}>
            <div className={css.link}>
                <b>{name}</b>
            </div>
        </NavLink>
    );
};
export {GenreListMenu};
