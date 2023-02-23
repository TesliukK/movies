import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { movieAction } from "../../redux";

const MovieInfo = () => {
    const { selectedMovie } = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieAction.getMovieById());
    }, [dispatch]);

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
        </div>
    );
};

export { MovieInfo };
