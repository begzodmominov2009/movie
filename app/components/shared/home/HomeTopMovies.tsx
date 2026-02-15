import React from 'react'
import Containers from '../../ui/Containers'
import HomeTopMoviesBanner from './components/HomeTop/HomeTopMoviesBanner'
import { Movie } from '@/types/MoviesDataTypes'

type Props = {
  movies: Movie[];
};

const HomeTopMovies = ({movies}:Props) => {
  return (
    <Containers>
      <HomeTopMoviesBanner movies={movies}/>
    </Containers>
  )
}

export default HomeTopMovies
