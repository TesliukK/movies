import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

import {movieAction} from "../../redux";
import css from './searchMovie.module.css';

const SearchMovies = () => {
    const [query, setQuery] = useState("");

    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(movieAction.searchMovies(query)).then((action) => {
            if (action.payload) {
                dispatch(movieAction.setSearchResults(action.payload));
            }
        });
    };

    return (
        <div>
            <form className={css.search}>
                <input className={css.input}
                       type="text"
                       placeholder="Search for movies"
                       value={query}
                       onChange={(e) => setQuery(e.target.value)}/>
                <NavLink to={'/searchResults'}>
                    <button className={css.btn} disabled={!query} onClick={handleSearch}>SEARCH</button>
                </NavLink>
            </form>
        </div>
    );
};

export {SearchMovies};
