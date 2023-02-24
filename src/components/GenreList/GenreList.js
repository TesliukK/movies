import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {GenreListMenu} from "../GenreListMenu/GenreListMenu";
import {genreAction} from "../../redux";
import css from './genreList.module.css';

const GenreList = () => {
    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(genreAction.getAll());
    }, [dispatch]);

    return (
        <div className={css.block}>
                {genres.map(genre => <GenreListMenu key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenreList};