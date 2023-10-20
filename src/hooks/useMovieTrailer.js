import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice'
import React, { useEffect } from 'react'



const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()
    //fetch trailer video from TMDB API
    const getMovieVideo = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const data = await response.json()

        const filteredData = data.results.filter(video => video.type === "Trailer")
        const trailer = filteredData.length ? filteredData[0] : data.results[0]

  
        dispatch(addTrailerVideo(trailer))
    }
    useEffect(() => {
        getMovieVideo()
    },[])
}

export default useMovieTrailer