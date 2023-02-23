const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie';
const genres = '/genre/movie/list'
const movieById = (id) => `/movie/${id}`;
const urls = {
    movies: {
        movies,
        movieById
    },
    genres: {
        genres
    }
};

export {
    baseURL,
    urls
}