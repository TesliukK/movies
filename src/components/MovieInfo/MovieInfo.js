import {useSelector} from 'react-redux';
import React, {useEffect, useState} from "react";
import {Box, Rating} from "@mui/material";

import css from './movieInfo.module.css';
import {MovieTrailer} from "../MovieTrailer/MovieTrailer";


const MovieInfo = () => {
    const {selectedMovie} = useSelector((state) => state.movies);
    const {genres, loading} = useSelector((state) => state.genres);
    const [savedMovie, setSavedMovie] = useState(null);

    const movieGenres = (selectedMovie || savedMovie)?.genre_ids?.map((genreId) => {
        const genre = genres.find((genre) => genre.id === genreId);
        return genre ? genre.name : '';
    }) ?? [];

    useEffect(() => {
        const savedMovie = JSON.parse(localStorage.getItem('selectedMovie'));
        setSavedMovie(savedMovie);
    }, []);

    useEffect(() => {
        if (selectedMovie) {
            localStorage.setItem('selectedMovie', JSON.stringify(selectedMovie));
            setSavedMovie(selectedMovie);
        }
    }, [selectedMovie]);


    return (
        <div className={css.container}>
            {(selectedMovie || savedMovie) && (
                <div className={css.general}>
                    <div>
                        <h1>{(selectedMovie || savedMovie).original_title}</h1>
                    </div>
                    {loading && <img
                        src={"https://developer.android.com/static/codelabs/basic-android-kotlin-training-internet-images/img/6c1f87d1c932c762.png"}
                        alt="loading......"/>}
                    <div className={css.mediumBlock}>
                        <div>
                            <img className={css.poster}
                                 src={`https://image.tmdb.org/t/p/w300${(selectedMovie || savedMovie).poster_path}`}
                                 alt={(selectedMovie || savedMovie).title}
                            />
                        </div>
                        <div className={css.description}>
                            <div className={css.badge}><b>{movieGenres.join(', ')}</b></div>
                            <p>Original title: <b>{(selectedMovie || savedMovie).original_title}</b></p>
                            <p>Popularity: <b>{(selectedMovie || savedMovie).popularity}</b></p>
                            <p>Release date: <b>{(selectedMovie || savedMovie).release_date}</b></p>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <Rating
                                    name="movie-rating"
                                    value={(selectedMovie || savedMovie).vote_average / 2}
                                    precision={0.5}
                                />
                                <Box sx={{ml: 2}}>{(selectedMovie || savedMovie).vote_average}/10</Box>
                            </Box>

                        </div>
                    </div>
                    <div>
                        <h2>Description</h2>
                        <p>{(selectedMovie || savedMovie).overview}</p>
                    </div>
                    <h2>Trailer</h2>
                    <div className={css.trailer}>
                        <MovieTrailer movieId={(selectedMovie || savedMovie).id}/>
                    </div>
                    <p>{(selectedMovie || savedMovie).overview}</p>
                </div>
            )}
        </div>
    );
};

export {MovieInfo};


