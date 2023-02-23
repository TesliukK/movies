
import {useSelector} from "react-redux";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";


const MovieByGenre = () => {
    const {movieByGenre} = useSelector(state => state.genres);
    return (
        <div>
            {movieByGenre && movieByGenre.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MovieByGenre};
