import React from 'react';

import css from './userBlock.module.css';

const UserBlock = () => {
    return (
        <div className={css.block}>
            <div className={css.user}>
                <div><h1>K</h1></div>
            </div>
        </div>
    );
};

export {UserBlock};