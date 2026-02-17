"use client";

import type { Movie } from "@/types/MoviesDataTypes";
import SwiperSection from "../SwiperSection/SwiperSection";
import Containers from "../../ui/Containers";
import MovieCard from "../../ui/MoviesCard";

type Props = {
  movie_movie_filtered: Movie[];
  ganer_name_movie: string;
  visible?: number;
};

const HomeMovies = ({ movie_movie_filtered, ganer_name_movie, visible = 6 }: Props) => {
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
          <div className="py-1 gap-0">
            <MovieCard item={m} ganer_name_movie={ganer_name_movie} />
          </div>
        )}
      />
    </Containers >
  );
};

export default HomeMovies;
