import {useSelector} from 'react-redux';

import css from './movieInfo.module.css';
import {MovieTrailer} from "./MovieTrailer";
import {Box, Rating} from "@mui/material";
import React from "react";

const MovieInfo = () => {
    const {selectedMovie} = useSelector((state) => state.movies);
    const {genres} = useSelector((state) => state.genres);

    const movieGenres = selectedMovie?.genre_ids?.map((genreId) => {
        const genre = genres.find((genre) => genre.id === genreId);
        return genre ? genre.name : '';
    }) ?? [];

    return (
        <div className={css.container}>
            {selectedMovie && (
                <div className={css.general}>
                    <div>
                        <h1>{selectedMovie.original_title}</h1>
                    </div>
                    <div className={css.mediumBlock}>
                        <div>
                            <img className={css.poster}
                                 src={`https://image.tmdb.org/t/p/w300${selectedMovie.poster_path}`}
                                 alt={selectedMovie.title}
                            />
                        </div>
                        <div className={css.description}>
                            <div className={css.badge}><b>{movieGenres.join(', ')}</b></div>
                            <p>original_title: <b>{selectedMovie.original_title}</b></p>
                            <p>popularity: <b>{selectedMovie.popularity}</b></p>
                            <p>release_date: <b>{selectedMovie.release_date}</b></p>
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
                        <h2>Description</h2>
                        <p>{selectedMovie.overview}</p>
                    </div>
                    <h2>Trailer</h2>
                    <div className={css.trailer}>
                        <MovieTrailer movieId={selectedMovie.id}/>
                    </div>
                </div>
            )}
        </div>
    );
};
export {MovieInfo};

