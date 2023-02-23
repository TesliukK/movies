import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    errors: null,
    loading: null,
    selectedMovie: null,
    page: null,

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

const getMovieById = createAsyncThunk(
    "movieSlice/getMovieById",
    async (id, thunkAPI) => {
        try {
            const { data } = await movieService.getMovieById(id);
            console.log(data);
            return data;
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
    },
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const { results, page } = action.payload;
                state.movies = results;
                state.page = page;
                state.loading = false;
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.selectedMovie = action.payload;
                state.loading = false;
            })
            .addDefaultCase((state, action) => {
                const [actionStatus] = action.type.split("/").slice(-1);
                state.loading = actionStatus === "pending";
            }),
});

const { reducer: movieReducer, actions: { setSelectedMovie } } = movieSlice;

const movieAction = {
    getAll,
    getMovieById,
    setSelectedMovie,
};

export { movieReducer, movieAction };