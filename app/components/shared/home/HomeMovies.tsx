"use client";

import { Movie } from "@/types/MoviesDataTypes";
import SwiperSection from "../SwiperSection/SwiperSection";
import Containers from "../../ui/Containers";
import MoviesCard from "../../ui/MoviesCard";

type Props = {
  movies: Movie[];
  visible?: number;
};

const HomeMovies = ({ movies, visible = 1 }: Props) => {
  return (
    <Containers>
      <SwiperSection<Movie>
        variant="hero"
        gap={25}
        loop
        visible={visible}
        heroBreakpoints={{
          0: { slidesPerView: 1.2 },
          480: { slidesPerView: 2.2 },
          640: { slidesPerView: 2.6 },
          768: { slidesPerView: 3.2 },
          1024: { slidesPerView: visible },
        }}
        items={movies}
        getKey={(m, idx) => (typeof m.id === "number" ? m.id : idx)}
        renderItem={(m) => (
          <div className="py-1">
            <MoviesCard movies={movies} className="flex items-center gap-5" />
          </div>
        )}
      />
    </Containers>
  );
};

export default HomeMovies;
