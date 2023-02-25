import React from "react";
import {useSelector} from "react-redux";


import css from './movieInfo.module.css';


const MovieInfo = () => {

    const { selectedMovie } = useSelector((state) => state.movies);

    return (
        <div className={css.container}>
            {selectedMovie && (
                <div>
                    <img
                        src={`https://image.tmdb.org/t/p/w300${selectedMovie.poster_path}`}
                        alt={selectedMovie.original_title}
                    />
                </div>
            )}
        </div>
    );
};

export { MovieInfo };
