import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {Pagination} from "@mui/material";

import {movieAction} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './movieList.module.css';


const MoviesList = () => {
    const dispatch = useDispatch();

    const {movies, page} = useSelector(state => state.movies);

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieAction.getAll({page: query.get('page')}))
    }, [dispatch, query])

    return (
        <div>
            <div className={css.container}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.btnBlock}>
                <Pagination
                    count={500}
                    onChange={(event, value) => setQuery(query => ({...query, page: value}))}
                    disabled={page <= 0 || page >= 501}
                    color="primary"
                    shape="rounded"
                    size="large"
                    showFirstButton
                    showLastButton
                />
            </div>
        </div>
    );
};

export {MoviesList};