import React from 'react'
import HomeTopMoviesBanner from './components/HomeTop/HomeTopMoviesBanner'
import { Movie } from '@/types/MoviesDataTypes'

type Props = {
  movies: Movie[];
};

const HomeTopMovies = ({movies}:Props) => {
  return (
      <HomeTopMoviesBanner movies={movies}/>
  )
}

export default HomeTopMovies
