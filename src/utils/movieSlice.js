import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies", 
    initialState: {
        nowPlayingMovies: [],
        trailer: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo : (state, action) => {
            state.trailer = action.payload
        }
    }
})

export default movieSlice.reducer
export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions