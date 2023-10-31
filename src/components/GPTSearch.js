import React from 'react'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import GPTSearchBar from './GPTSearchBar'
import { HOME_BACKGROUND } from '../utils/constants';

const GPTSearch = () => {
  return (
    <div>
        <div className='fixed -z-10'>
        <img className='h-screen' src={HOME_BACKGROUND} alt='bg' />
        </div>
        <GPTSearchBar />
        <GPTMovieSuggestions />
    </div>
  )
}

export default GPTSearch