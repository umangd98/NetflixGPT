import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
const GPTSearchBar = () => {
  const langKey = useSelector(store => store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black'>
        <input type='text' placeholder={lang[langKey].gptSearchPlaceholder} className='w-4/5 p-2 mx-4 my-4 text-black rounded-lg'/>
        <button className='py-2 px-6 ml-4 bg-red-700 text-white rounded-lg'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar