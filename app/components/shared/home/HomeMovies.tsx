"use client";

import MoviesCard from "../../ui/MoviesCard";
import { Movie } from "@/types/MoviesDataTypes";
import SwiperSection from "../SwiperSection/SwiperSection";
import Containers from "../../ui/Containers";

type Props = {
  movies: Movie[];
  visible?: number;
};

const HomeMovies = ({ movies, visible = 1 }: Props) => {
  return (
    <Containers>
      <SwiperSection<Props>
        variant="hero"
        gap={25}
        loop
        visible={visible}
        heroBreakpoints={{
          0: { slidesPerView: 1.1 },
          640: { slidesPerView: 1.05 },
          768: { slidesPerView: 1.15 },
          1024: { slidesPerView: visible },
        }}
        items={movies}
        getKey={(m, idx) => (typeof m.id === "number" ? m.id : idx)}
        renderItem={(m) => <MoviesCard movies={movies} item={m} />}
      />
    </Containers>
  );
};

export default HomeMovies;
