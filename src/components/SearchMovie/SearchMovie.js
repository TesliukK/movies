import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {movieAction} from "../../redux";
import {NavLink} from "react-router-dom";


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
            <input
                type="text"
                placeholder="Search for movies"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
           <NavLink to={'/searchResults'} onClick={handleSearch}><button  disabled={!query}>Search</button></NavLink>
        </div>
    );
};

export default SearchMovies;
