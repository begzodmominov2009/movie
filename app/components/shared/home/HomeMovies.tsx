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
        items={movies}
        getKey={(m, idx) => (m?.id ? String(m.id) : String(idx))}
        renderItem={(m) => (
          <div className="py-1 gap-0">
            <MovieCard item={m} />
          </div>
        )}
      />
    </Containers>
  );
};

export default HomeMovies;
