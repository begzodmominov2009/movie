import React from "react";
import HomeBanner from "./components/shared/home/HomeBanner";
import HomeGaner from "./components/shared/home/HomeGaner";
import HomeMovies from "./components/shared/home/HomeMovies";
import HomeSerials from "./components/shared/home/HomeSerials";
import HomeExtiraMovies from "./components/shared/home/HomeExtiraMovies";
import HomeTopMovies from "./components/shared/home/HomeTopMovies";
import HomeActiors from "./components/shared/home/HomeActiors";
import HomeCountry from "./components/shared/home/HomeCountry";
import Containers from "./components/ui/Containers";
import { Movie } from "@/types/MoviesDataTypes";
import { getMovies } from "@/service/useGetMovie";
import { GenerType } from "@/types/GenerTypes";
import { getGener } from "@/service/useGetGanre";
import { MovieAktor } from "@/types/MoviesActor";
import { getAktor } from "@/service/useGetMovieActors";
import SectionHeader from "./components/ui/SectionHead";

const page = async () => {
  const movies: Movie[] = await getMovies();
  const ganer: GenerType[] = await getGener();
  const aktors: MovieAktor[] = await getAktor();

  console.log(ganer);

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
      <HomeActiors aktors={aktors}  />
      <Containers>description</Containers>
      <HomeCountry />
    </>
  );
};

export default page;
