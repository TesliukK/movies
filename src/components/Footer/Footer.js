import React from 'react';
import {NavLink} from "react-router-dom";

import css from './footer.module.css';

const Footer = () => {
    return (
        <div className={css.block}>
            <NavLink to={'movies'}>HOME MOVIES THEATRE</NavLink>
        </div>
    );
};

export {Footer};