import React from 'react';
import {NavLink} from "react-router-dom";
import {movieAction} from "../../redux";
import {useDispatch} from "react-redux";

const MoviesListCard = ({movie}) => {
    const {original_title, poster_path, release_date} = movie;
    const dispatch = useDispatch();
    const image = 'https://image.tmdb.org/t/p/w300';

    return (
        <div>
            <div>
                <img src={`${image}${poster_path}`} alt={original_title}/>
            </div>
            <div>
                <NavLink to={'/movieInfo'}
                         onClick={() => dispatch(movieAction.setSelectedMovie(movie))}>{original_title}</NavLink>
                {release_date}
            </div>
        </div>
    );
};

export {MoviesListCard};