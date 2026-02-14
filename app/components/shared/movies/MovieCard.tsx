import React from 'react'
import Containers from '../../ui/Containers'
import { Movie } from '@/types/MoviesDataTypes'

type Props = {
    movie: Movie[]
}

const MovieCard = ({movie}: Props) => {
  return (
    <Containers>
      MovieCard
    </Containers>
  )
}

export default MovieCard
