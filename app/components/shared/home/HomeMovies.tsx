"use client";

import React, { useState } from "react";
import Containers from "../../ui/Containers";
import HomeMoviesCard from "../../ui/MoviesCard";
import MoviesCard from "../../ui/MoviesCard";
import { Movie } from "@/types/MoviesDataTypes";

type Props = {
  movies: Movie[]
}

const HomeMovies = ({movies}: Props) => {
  return (
    <Containers className="mt-6">
      <MoviesCard movies={movies}/>
    </Containers>
  );
};

export default HomeMovies;
