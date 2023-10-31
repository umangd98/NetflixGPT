import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants'

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(state => state.movies?.nowPlayingMovies)
  const popularMovies = useSelector(state => state.movies?.popularMovies)
  const langKey = useSelector(store => store.config.lang)

  return (
    popularMovies && nowPlayingMovies &&
    <div className=' bg-black'>
      <div className='mt-0 md:-mt-48 pl-2 md:pl-12 relative z-20'>
        <MovieList title={lang[langKey].nowPlaying} movies={nowPlayingMovies}/>
        <MovieList title={lang[langKey].trending} movies={popularMovies}/>
        <MovieList title={lang[langKey].popular} movies={nowPlayingMovies}/>
        <MovieList title={lang[langKey].upcoming} movies={popularMovies}/>
        <MovieList title={lang[langKey].horror} movies={nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer