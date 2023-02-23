import {apiService} from "./apiService";
import {urls} from "../configs/urls";


const movieService = {
    getAll: (page=1) => apiService.get(urls.movies.movies,{params:{page}}),
    getMovieById: (id) => apiService.get(urls.movies.movieById(id)),
};

export {
    movieService
};