import React from 'react';
import {MainLayout} from "./layouts";
import {Navigate, Route, Routes} from "react-router-dom";

import {MoviesPage, NotFoundPage} from "./page";
import {MovieByGenre, MovieInfo, SearchResult} from "./components";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'/movieInfo'} element={<MovieInfo/>}/>
                <Route path={'/moviesByGenre'} element={<MovieByGenre/>}/>
                <Route path={'/searchResults'} element={<SearchResult/>}/>
            </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
};

export {
    App
};