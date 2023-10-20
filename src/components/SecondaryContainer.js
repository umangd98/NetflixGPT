import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(state => state.movies?.nowPlayingMovies)
  const popularMovies = useSelector(state => state.movies?.popularMovies)
  return (
    popularMovies && nowPlayingMovies &&
    <div className=' bg-black'>
      <div className='-mt-48 pl-12 relative z-20'>
        <MovieList title={"Now Playing"} movies={nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={popularMovies}/>
        <MovieList title={"Popular"} movies={nowPlayingMovies}/>
        <MovieList title={"Upcoming"} movies={popularMovies}/>
        <MovieList title={"Horror"} movies={nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer