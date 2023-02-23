import React from 'react';

import {NavLink} from "react-router-dom";

const GenreListMenu = ({genre}) => {

    const {name} = genre;

    return (
        <div>
            <NavLink to={'/genre'}>{name}</NavLink>
        </div>
);
}

export {GenreListMenu};