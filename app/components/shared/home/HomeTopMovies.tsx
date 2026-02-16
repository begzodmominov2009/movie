import React from 'react'
import Containers from '../../ui/Containers'
import { Movie } from '@/types/MoviesDataTypes'
import HomeTopMoviesBanner from './components/HomeTop/HomeTopMoviesBanner';

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
