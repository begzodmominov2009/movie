"use client";

import type { Movie } from "@/types/MoviesDataTypes";
import SwiperSection from "../SwiperSection/SwiperSection";
import Containers from "../../ui/Containers";
import MovieCard from "../../ui/MoviesCard";

type Props = {
  movies: Movie[];
  visible?: number;
};

const HomeMovies = ({ movies, visible = 6 }: Props) => {
  return (
    <Containers>
      <SwiperSection<Movie>
        variant="hero"
        gap={0}
        loop
        visible={visible}
        heroBreakpoints={{
          0: { slidesPerView: 1.2 },
          480: { slidesPerView: 1.6 },
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3.2 },
          1024: { slidesPerView: visible },
        }}
        items={movies}
        getKey={(m, idx) => (m?.id ? String(m.id) : String(idx))}
        renderItem={(m) => (
          <div className="py-1">
            <MovieCard item={m} />
          </div>
        )}
      />
    </Containers>
  );
};

export default HomeMovies;
