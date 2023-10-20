import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies", 
    initialState: {
        nowPlayingMovies: [],
        popularMovies: [],
        trailer: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTrailerVideo : (state, action) => {
            state.trailer = action.payload
        }
    }
})

export default movieSlice.reducer
export const { addNowPlayingMovies,addPopularMovies, addTrailerVideo,  } = movieSlice.actions