import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {GenreListMenu} from "../GenreListMenu/GenreListMenu";
import {genreAction} from "../../redux";
import './genreList.css';


const GenreList = () => {
    const dispatch = useDispatch();

    const {genres} = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(genreAction.getAll())
    }, [dispatch]);

    return (
        <div>
            {genres.map(genre => <GenreListMenu key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenreList};

