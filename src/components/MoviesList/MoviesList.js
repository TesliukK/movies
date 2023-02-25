import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";


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
        <div >
            <div className={css.container}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.btnBlock}>
                <button className={css.btn} disabled={page <= 1}
                        onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>prev
                </button>
                <div>----{page}----</div>
                <button className={css.btn} disabled={page >= 500}
                        onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>next
                </button>
            </div>
        </div>


    );
};


export {MoviesList};