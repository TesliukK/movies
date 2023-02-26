import React from "react";
import {useSelector} from "react-redux";
import {Box, Rating} from "@mui/material";

import css from './movieInfo.module.css';
import {GenreList} from "../GenreList/GenreList";
import {GenreListMenu} from "../GenreListMenu/GenreListMenu";


const MovieInfo = () => {
    const {selectedMovie} = useSelector((state) => state.movies);

    return (
        <div className={css.container}>
            {selectedMovie && (
                <div>
                    <div>
                        <h1>{selectedMovie.original_title}</h1>
                    </div>
                    <div className={css.mediumBlock}>
                        <div>
                            <img
                                src={`https://image.tmdb.org/t/p/w300${selectedMovie.poster_path}`}
                                alt={selectedMovie.title}
                            />
                        </div>
                        <div>
                            <p>original_title: {selectedMovie.original_title}</p>
                            <p>popularity: {selectedMovie.popularity}</p>
                            <p>release_date: {selectedMovie.release_date}</p>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <Rating
                                    name="movie-rating"
                                    value={selectedMovie.vote_average / 2}
                                    precision={0.5}
                                />
                                <Box sx={{ml: 2}}>{selectedMovie.vote_average}/10</Box>
                            </Box>
                        </div>
                    </div>
                    <div>
                        <p>{selectedMovie.overview}</p>
                    </div>
                    <div>
                        {selectedMovie.genres && (
                            <div>
                                {selectedMovie.genres.map(genre => <GenreListMenu
                                    key={genre.id} genre={genre} genreN={'Жанри'}/>)}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export {MovieInfo};
