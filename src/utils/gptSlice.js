import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGPTSearch: false,
        movieNames: [],
        movieResults: []
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGPTSearch = !state.showGPTSearch
        },
        addGPTResultMovies: (state, action ) => {
            const { movieNames, movieResults } = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        }
    }

})

export default gptSlice.reducer
export const {toggleGptSearchView, addGPTResultMovies} = gptSlice.actions