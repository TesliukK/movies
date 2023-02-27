import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {GenreListMenu} from "../GenreListMenu/GenreListMenu";
import {genreAction} from "../../redux";
import css from './genreList.module.css';

const GenreList = () => {
    const dispatch = useDispatch();

    const {genres, loading, errors} = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(genreAction.getAll());
    }, [dispatch]);

    return (
        <div className={css.block}>
            {errors && JSON.stringify(errors)}
            {loading && <h1>loading..........</h1>}
            {genres.map(genre => <GenreListMenu key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenreList};