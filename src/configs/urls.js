const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie';
const genres = '/genre/movie/list'
const movieById = (id) => `/movie/${id}`;
const movieVideos = (id => `/movie/${id}/videos`)
const urls = {
    movies: {
        movies,
        movieById,
        searchMovies: '/search/movie',
        movieVideos
    },
    genres: {
        genres
    }
};

export {
    baseURL,
    urls
};