import {useSelector} from "react-redux";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from'./moviesByGenre.module.css';

const MovieByGenre = () => {
    const {movieByGenre} = useSelector(state => state.genres);
    return (
        <div className={css.block}>
            {movieByGenre && movieByGenre.map(movie =><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MovieByGenre};
