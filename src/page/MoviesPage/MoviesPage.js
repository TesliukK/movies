import React from 'react';
import {MoviesList} from "../../components";
import {GenreList} from "../../components/GenreList/GenreList";

const MoviesPage = () => {
    return (
        <div>
            <hr/>
            <GenreList/>
            <hr/>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};