import React from 'react';

const GenreListMenu = ({genre}) => {

    const {name} = genre;

    return (
        <div>
            {name}
        </div>
);
}

export {GenreListMenu};