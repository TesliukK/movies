import React from 'react';
import {MainLayout} from "./layouts";
import {Navigate, Route, Routes} from "react-router-dom";

import {MoviesPage} from "./page";
import {MovieInfo} from "./components";
import {MovieByGenre} from "./components/MoviesByGenre/MoviesByGenre";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'/movieInfo'} element={<MovieInfo/>}/>
                <Route path={'/moviesByGenre'} element={<MovieByGenre/>}/>
            </Route>
        </Routes>
    );
};

export {
    App
};