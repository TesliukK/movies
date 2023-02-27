import React from 'react';
import {Outlet} from "react-router-dom";

import {Footer, GenreList, Header} from "../components";

const MainLayout = () => {

    return (
        <div>
            <Header/>
            <Outlet/>
            <GenreList/>
            <Footer/>
        </div>
    );
};

export {MainLayout};