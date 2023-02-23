import {apiService} from "./apiService";
import {urls} from "../configs/urls";


const movieService = {
    getAll: (page=1) => apiService.get(urls.movies.movies,{params:{page}}),
};

export {
    movieService
};