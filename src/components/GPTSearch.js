import React from 'react'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import GPTSearchBar from './GPTSearchBar'
import { HOME_BACKGROUND } from '../utils/constants';

const GPTSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
        <   img src={HOME_BACKGROUND} alt='bg' />
        </div>
        <GPTSearchBar />
        <GPTMovieSuggestions />
    </div>
  )
}

export default GPTSearch