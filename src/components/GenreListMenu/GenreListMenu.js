import React from 'react';
import {useDispatch} from "react-redux";
import {genreAction} from "../../redux";
import {NavLink} from "react-router-dom";

const GenreListMenu = ({genre}) => {
    const dispatch = useDispatch();
    const {name, id} = genre;

    const handleClick = () => {
        dispatch(genreAction.getMoviesByGenreId(id));
    };

    return (
        <div>
            <NavLink onClick={handleClick} to={'/moviesByGenre'}>{name}</NavLink>
        </div>
    );
};
export {GenreListMenu}