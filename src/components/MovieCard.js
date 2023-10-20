import React from 'react'
import { IMAGE_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-36 md:w-48 pr-4'>
      <img alt='movie poster' src={IMAGE_CDN + posterPath} />
    </div>
  )
}

export default MovieCard