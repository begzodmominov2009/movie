"use client";

import React from "react";
import { Movie } from "@/types/MoviesDataTypes";
import SwiperSection from "../SwiperSection/SwiperSection";
import MovieCard from "../../ui/MoviesCard";
import Containers from "../../ui/Containers";
import { MovieGenre } from "@/types/MovieGanre";

type Props = {
  movie_movie_filtered: Movie[];
  ganer_name_movie: string;
  visible?: number;
};

const HomeExtiraMovies = ({
  movie_movie_filtered,
  ganer_name_movie,
  visible = 6,
}: Props) => {
  return (
    <Containers>
      <SwiperSection<Movie>
        variant="hero"
        gap={20}
        loop
        visible={visible}
        heroBreakpoints={{
          0: { slidesPerView: 1.8 },
          480: { slidesPerView: 2.8 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 3.7 },
          1024: { slidesPerView: visible },
        }}
        items={movie_movie_filtered}
        getKey={(m, idx) => (m?.id ? String(m.id) : String(idx))}
        renderItem={(m) => (
          <div className="py-1">
            <MovieCard item={m} ganer_name_movie={ganer_name_movie} />
          </div>
        )}
      />
    </Containers>
  );
};

export default HomeExtiraMovies;
