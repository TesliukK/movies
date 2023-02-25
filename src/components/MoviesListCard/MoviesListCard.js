import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Box, Rating} from "@mui/material";

import {movieAction} from "../../redux";
import css from './moviesListCard.module.css';


const MoviesListCard = ({movie}) => {
    const {original_title, poster_path, vote_average} = movie;

    const dispatch = useDispatch();

    const image = 'https://image.tmdb.org/t/p/w300';

    return (
        <div className={css.card}>
            <NavLink to={'/movieInfo'}
                     onClick={() => dispatch(movieAction.setSelectedMovie(movie))}>
                <div>
                    <img className={css.img} src={`${image}${poster_path}`} alt={original_title}/>
                </div>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Rating
                        name="movie-rating"
                        value={vote_average / 2}
                        precision={0.5}
                    />
                    <Box sx={{ml: 2}}>{vote_average}/10</Box>
                </Box>
                <div>

                    {original_title}
                </div>
            </NavLink>
        </div>
    );
};

export {MoviesListCard};