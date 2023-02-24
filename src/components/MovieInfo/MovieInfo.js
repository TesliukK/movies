import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {movieAction} from "../../redux";


const MovieInfo = () => {
    const dispatch = useDispatch();
    const { selectedMovie } = useSelector((state) => state.movies);

    useEffect(() => {
        const storedMovie = localStorage.getItem("selectedMovie");
        if (storedMovie) {
            dispatch(movieAction.setSelectedMovie(JSON.parse(storedMovie)));
        }
    }, [dispatch]);

    const handleSelectMovie = (movie) => {
        dispatch(movieAction.setSelectedMovie(movie));
        localStorage.setItem("selectedMovie", JSON.stringify(movie));
    };

    return (
        <div>
            {selectedMovie && (
                <div>
                    <img
                        src={`https://image.tmdb.org/t/p/w300${selectedMovie.poster_path}`}
                        alt={selectedMovie.original_title}
                    />
                </div>
            )}
            <button onClick={() => handleSelectMovie(selectedMovie)}>Select Movie</button>
        </div>
    );
};

export { MovieInfo };
