import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
const VideoTitle = ({title, overview}) => {
  const langKey = useSelector(store => store.config.lang)

  return (
    <div className='w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-3xl md:text-6xl font-bold '>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
        <div className='md:my-0 my-4'>
            <button className='bg-white text-black p-2 md:p-4 px-6 md:px-12 text-sm md:text-lg rounded-lg hover:opacity-50'>▶️ {lang[langKey].play}</button>
            <button className='hidden md:inline-block bg-gray-500 text-white py-4 mx-2 px-12 text-sm md:text-lg rounded-lg opacity-50 hover:opacity-100'>{lang[langKey].moreInfo}</button>
        </div>
    </div>
  )
}

export default VideoTitle

