import React from 'react';
import {Outlet} from "react-router-dom";

import {GenreList, Header} from "../components";


const MainLayout = () => {
    return (
        <div>
            <Header/>
            <GenreList/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};