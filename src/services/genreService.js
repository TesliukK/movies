
import {apiService} from "./apiService";
import {urls} from "../configs/urls";

const genreService = {
    getAll: () => apiService.get(urls.genres.genres),
    getMoviesByGenreId: (genreId) => apiService.get(urls.movies.movies, {
        params: {
            with_genres: genreId
        }
    })
};

export {
    genreService
};