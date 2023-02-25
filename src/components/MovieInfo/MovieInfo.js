import React from "react";
import {useSelector} from "react-redux";


import css from './movieInfo.module.css';


const MovieInfo = () => {

    const {selectedMovie} = useSelector((state) => state.movies);

    return (
        <div className={css.container}>
            {selectedMovie && (
                <div>
                    <div><h1>{selectedMovie.original_title}</h1></div>
                    <div className={css.mediumBlock}>
                        <div >
                            <img
                                src={`https://image.tmdb.org/t/p/w300${selectedMovie.poster_path}`}
                                alt={selectedMovie.title}
                            />
                        </div>
                        <div>
                            <p>original_title: {selectedMovie.original_title}</p>
                            <p>popularity: {selectedMovie.popularity}</p>
                            <p>release_date: {selectedMovie.release_date}</p>

                        </div>
                    </div>
                    <div>
                        <p>{selectedMovie.overview}</p>
                    </div>

                </div>
            )}
        </div>
    );
};

export {MovieInfo};
