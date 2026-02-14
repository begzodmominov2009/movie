import React from "react";
import HomeBanner from "./components/shared/home/HomeBanner";
import HomeGaner from "./components/shared/home/HomeGaner";
import HomeMovies from "./components/shared/home/HomeMovies";
import HomeSerials from "./components/shared/home/HomeSerials";
import HomeExtiraMovies from "./components/shared/home/HomeExtiraMovies";
import HomeTopMovies from "./components/shared/home/HomeTopMovies";
import HomeCountry from "./components/shared/home/HomeCountry";
import Containers from "./components/ui/Containers";
import { Movie } from "@/types/MoviesDataTypes";
import { getMovies } from "@/service/useGetMovie";
import { GenerType } from "@/types/GenerTypes";
import { getGener } from "@/service/useGetGanre";
import SectionHeader from "./components/ui/SectionHead";
import { MovieAktor } from "@/types/MoviesActor";
import { getAktor } from "@/service/useGetMovieActors";
import HomeActiors from "./components/shared/home/HomeActiors";

const page = async () => {
  const movies: Movie[] = await getMovies();
  const ganer: GenerType[] = await getGener();
  const aktors: MovieAktor[] = await getAktor();

  return (
    <>
      <HomeBanner movies={movies} />
      <HomeGaner ganer={ganer} />
      <div className="mt-5">
        <SectionHeader
          title="Yangi tarjima kinolar"
          iconUrl="https://unpkg.com/lucide-static/icons/zap.svg"
          actionLabel="barchasi"
          actionHref="/movies"
        />
        <HomeMovies movies={movies} />
      </div>
      <HomeSerials />
      <HomeExtiraMovies />
      <HomeTopMovies />
      <div>
        <SectionHeader
          title="Aktyorlar"
          iconUrl="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22white%22%3E%3Cpath%20d%3D%22M12%202.5l2.94%206.04%206.66.97-4.8%204.68%201.13%206.63L12%2017.98%206.07%2020.82l1.13-6.63-4.8-4.68%206.66-.97L12%202.5z%22/%3E%3C/svg%3E"
          actionLabel="barchasi"
          actionHref="/actors"
        />
        <HomeActiors aktors={aktors} />
      </div>
      <Containers>description</Containers>
      <HomeCountry />
    </>
  );
};

export default page;
