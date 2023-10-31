import React from 'react'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import GPTSearchBar from './GPTSearchBar'
import { HOME_BACKGROUND } from '../utils/constants';

const GPTSearch = () => {
  return (
    <>
    <div className='fixed -z-10'>
        <img className='h-screen object-cover' src={HOME_BACKGROUND} alt='bg' />
    </div>
    <div className=''>
        
        <GPTSearchBar />
        <GPTMovieSuggestions />
    </div>
    </>
  )
}

export default GPTSearch