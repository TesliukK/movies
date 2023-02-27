import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {MoviesListCard} from '../MoviesListCard/MoviesListCard';
import css from './searchResults.module.css';

const SearchResult = () => {
    const {searchResults, loading} = useSelector(state => state.movies);
    const [savedSearchResults, setSavedSearchResults] = useState([]);

    useEffect(() => {
        const savedSearchResults = JSON.parse(localStorage.getItem('searchResults'));
        setSavedSearchResults(savedSearchResults || []);
    }, []);

    useEffect(() => {
        if (searchResults && searchResults.length > 0) {
            localStorage.setItem('searchResults', JSON.stringify(searchResults));
            setSavedSearchResults(searchResults);
        }
    }, [searchResults]);

    return (
        <div className={css.block}>
            {loading && <img
                src={"https://developer.android.com/static/codelabs/basic-android-kotlin-training-internet-images/img/6c1f87d1c932c762.png"}
                alt="loading......"/>}
            {savedSearchResults && savedSearchResults.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {SearchResult};
