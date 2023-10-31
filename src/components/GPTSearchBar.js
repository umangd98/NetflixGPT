import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openAI'
import { API_OPTIONS } from '../utils/constants'
import { addGPTResultMovies } from '../utils/gptSlice'
const GPTSearchBar = () => {
  const langKey = useSelector(store => store.config.lang)
  const searchText = useRef(null)
  const dispatch = useDispatch()
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
    const response = await data.json()
    return response.results
  }
  const handleGPTSearch = async () => {
    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query" + searchText.current.value + ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, DDLJ, Kuch Kuch Hota Hai"
    //make an API call to GPT and get movie results 
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
  
    console.log(chatCompletion.choices?.[0]?.message?.content);
    const gptMovies = chatCompletion.choices?.[0]?.message?.content.split(",")

    //make an API call to TMDB and get movie details
    const promiseArray = gptMovies.map(movie => {
      return searchMovieTMDB(movie)
    })
    // [Promise, Promise, Promise, Promise, Promise]
    const tmdbResults = await Promise.all(promiseArray)

    console.log(tmdbResults)

    //dispatch action to store the results in redux store
    dispatch(addGPTResultMovies({movieNames: gptMovies, movieResults: tmdbResults}))
    

  }
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black' onSubmit={e => e.preventDefault()}>
        <input type='text' placeholder={lang[langKey].gptSearchPlaceholder} className='w-4/5 p-2 mx-4 my-4 text-black rounded-lg' ref={searchText}/>
        <button onClick={handleGPTSearch} className='py-2 px-6 ml-4 bg-red-700 text-white rounded-lg'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar