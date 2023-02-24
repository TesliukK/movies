import React from 'react';
import {Outlet} from "react-router-dom";

import {GenreList, Header} from "../components";
import css from './mainLayout.module.css';

const MainLayout = () => {
    return (
        <div className={css.block}>
                <Header/>
                <Outlet/>
            <GenreList/>
        </div>
    );
};

export {MainLayout};