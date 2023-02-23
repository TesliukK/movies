import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

let initialState = {
    genres: [],
    errors: null,
    loading: null,
    movieByGenre: null


}

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await genreService.getAll()
            return data.genres


        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

// const getMoviesByGenre = createAsyncThunk(
//     'genreSlice/getMoviesByGenre',
//     async (genreId, thunkAPI) => {
//         try {
//             const { data } = await genreService.getMoviesByGenreId(genreId);
//             console.log(data.results);
//             return data.results;
//
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.response.data);
//         }
//     }
// );


const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload
            })
});

const {reducer: genreReducer, actions: {setSelectedGenre}} = genreSlice;

const genreAction = {
    getAll,
    setSelectedGenre,
    // getMoviesByGenre

}

export {
    genreReducer,
    genreAction
}

