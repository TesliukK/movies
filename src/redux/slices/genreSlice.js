// import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
//
// import {genreService} from "../../services";
//
// let initialState = {
//     genres: [],
//     errors: null,
//     loading: null,
//     movieByGenre: null,
// };
//
// const getAll = createAsyncThunk(
//     'genreSlice/getAll',
//     async (_, thunkAPI) => {
//         try {
//             const {data} = await genreService.getAll();
//             return data.genres;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.response.data);
//         }
//     }
// );
//
// const getMoviesByGenreId = createAsyncThunk(
//     'genreSlice/getMoviesByGenreId',
//     async (genreId, thunkAPI) => {
//         try {
//             const {data} = await genreService.getMoviesByGenreId(genreId);
//             return data.results;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.response.data);
//         }
//     }
// );
//
//
// const genreSlice = createSlice({
//     name: 'genreSlice',
//     initialState,
//     reducers: {},
//     extraReducers: builder =>
//         builder
//             .addCase(getAll.fulfilled, (state, action) => {
//                 state.genres = action.payload;
//             })
//             .addCase(getMoviesByGenreId.fulfilled, (state, action) => {
//                 state.movieByGenre = action.payload;
//             })
// });
//
// const {reducer: genreReducer, actions: {setSelectedGenre}} = genreSlice;
//
// const genreAction = {
//     getAll,
//     setSelectedGenre,
//     getMoviesByGenreId
// };
//
// export {
//     genreAction,
//     genreReducer
// };
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services";

const initialState = {
    genres: [],
    loading: false,
    error: null,
    movieByGenre: null,
};

const getAll = createAsyncThunk("genreSlice/getAll", async (_, thunkAPI) => {
    try {
        const {data} = await genreService.getAll();
        return data.genres;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data);
    }
});

const getMoviesByGenreId = createAsyncThunk(
    "genreSlice/getMoviesByGenreId",
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
    name: "genreSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(getMoviesByGenreId.fulfilled, (state, action) => {
                state.movieByGenre = action.payload;
                state.loading = false;
                state.error = null;
            })

});

const {reducer: genreReducer} = genreSlice;

const genreAction = {
    getAll,
    getMoviesByGenreId,
};

export {genreAction, genreReducer};
