import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

let initialState = {
    genres: [],
    errors: null,
    loading: null,
    movieByGenre: null,
};

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await genreService.getAll();
            return data.genres;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const getMoviesByGenreId = createAsyncThunk(
    'genreSlice/getMoviesByGenreId',
    async (genreId, thunkAPI) => {
        try {
            const {data} = await genreService.getMoviesByGenreId(genreId);
            return data.results;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);


const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload;
            })
            .addCase(getMoviesByGenreId.fulfilled, (state, action) => {
                state.movieByGenre = action.payload;
            })
});

const {reducer: genreReducer, actions: {setSelectedGenre}} = genreSlice;

const genreAction = {
    getAll,
    setSelectedGenre,
    getMoviesByGenreId
};

export {
    genreAction,
    genreReducer
};