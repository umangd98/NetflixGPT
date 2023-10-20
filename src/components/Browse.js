import React, { useEffect } from 'react'
import Header from './Header'

import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'

const Browse = () => {
  //fetch data from TMDB API and store in redux store
  useNowPlayingMovies()
  usePopularMovies()
  return (
    <div>
      <Header />
      {/*

      MainContainer
        -Video Background
        -video title
      Secondary Container
        -Movie List*n
          -cards*n

      */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse