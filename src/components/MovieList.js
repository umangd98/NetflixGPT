import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({title, movies}) => {
    console.log(movies)
  return (
    <div className='px-3 text-white'>
               <h1 className='text-3xl py-4'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide scrollbar-none'> 
            <div className='flex'>
                {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie?.poster_path}/>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList

//https://image.tmdb.org/t/p/w780/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg