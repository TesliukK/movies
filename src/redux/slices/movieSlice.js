import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    errors: null,
    loading: null,
    selectedMovie: null,
    page: null,
    searchResults: [],
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const searchMovies = createAsyncThunk(
    "movieSlice/searchMovies",
    async (query, thunkAPI) => {
        try {
            const {data} = await movieService.searchMovies(query);
            return data.results;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);


const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers: {
        setSelectedMovie: (state, action) => {
            state.selectedMovie = action.payload;
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
    },

    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {results, page} = action.payload;
                state.movies = results;
                state.page = page;
                state.loading = false;
            })
            .addCase(searchMovies.fulfilled, (state, action) => {
                state.loading = false
                state.searchResults = action.payload;
            })
            .addDefaultCase((state, action) => {
                const [actionStatus] = action.type.split("/").slice(-1);
                state.loading = actionStatus === "pending";
            }),
});

const {reducer: movieReducer, actions: {setSelectedMovie, setSearchResults}} = movieSlice;

const movieAction = {
    getAll,
    setSelectedMovie,
    searchMovies,
    setSearchResults

};

export {movieReducer, movieAction};