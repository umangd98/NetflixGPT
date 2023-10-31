import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../components/MovieList'
const GPTMovieSuggestions = () => {
  const gpt = useSelector(state => state.gpt)
  const {movieResults, movieNames } = gpt
  if(!movieResults) return null

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-75'>
        {movieNames.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={movieResults[index]} />
        ))}
    </div>
  )
}

export default GPTMovieSuggestions