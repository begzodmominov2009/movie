import React from "react";
import HomeBanner from "./components/shared/home/HomeBanner";
import HomeGaner from "./components/shared/home/HomeGaner";
import HomeMovies from "./components/shared/home/HomeMovies";
import HomeExtiraMovies from "./components/shared/home/HomeExtiraMovies";
import HomeTopMovies from "./components/shared/home/HomeTopMovies";
import Containers from "./components/ui/Containers";
import { Movie } from "@/types/MoviesDataTypes";
import { getMovies } from "@/service/useGetMovie";
import { GenerType } from "@/types/GenerTypes";
import { getGener } from "@/service/useGetGanre";
import { MovieAktor } from "@/types/MoviesActor";
import { getAktor } from "@/service/useGetMovieActors";
import SectionHeader from "./components/ui/SectionHead";
import HomeActiors from "./components/shared/home/HomeActiors";
import HomeCountry from "./components/shared/home/HomeCountry";
import { MovieGenre } from "@/types/MovieGanre";
import { getMovieGenre } from "@/service/useGetMovieGenre";

const page = async () => {
  const movies: Movie[] = await getMovies();
  const ganer: GenerType[] = await getGener();
  const movie_genre: MovieGenre[] = await getMovieGenre();
  const aktors: MovieAktor[] = await getAktor();

  // ganer_cartoons_card_filter
  const ganer_cartoons = ganer?.find((el) => el.name_uz === "Multfilmlar")?.id;
  const ganer_name_cartoons = ganer?.find(
    (el) => el.name_uz === "Multfilmlar",
  )?.name_uz;
  const movie_genre_filtered = movie_genre
    ?.filter((el) => el.genre_id === ganer_cartoons)
    ?.map((el) => String(el.movie_id));
  const movie_filtered = movies?.filter((el) =>
    movie_genre_filtered?.includes(String(el?.id)),
  );

  // ganer_movie_card_filter
  const ganer_movie = ganer?.find((el) => el.name_uz === "Fantastika")?.id;
  const ganer_name_movie = ganer?.find((el) => el.name_uz === "Fantastika")?.name_uz;
  const genre_movie_filtered =
    movie_genre
      ?.filter((item) => item?.genre_id === ganer_movie)
      ?.map((item) => String(item?.movie_id)) ?? [];
  const movie_movie_filtered =
    movies?.filter((el) => genre_movie_filtered.includes(String(el?.id))) ?? [];
  console.log(movie_movie_filtered);

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
        <HomeExtiraMovies
          movie_movie_filtered={movie_movie_filtered}
          ganer_name_movie={ganer_name_movie}
        />
      </div>

      <div className="mt-5">
        <SectionHeader
          title="Yangi tarjima multfilmlar"
          iconUrl="https://unpkg.com/lucide-static/icons/puzzle.svg"
          actionLabel="barchasi"
          actionHref="/cartoons"
        />
        <HomeMovies
          movie_filtered={movie_filtered}
          ganer_name_cartoons={ganer_name_cartoons}
        />
      </div>
      <HomeTopMovies movies={movies} />

      <div className="mt-5">
        <SectionHeader
          title="Aktyorlar"
          iconUrl="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22white%22%3E%3Cpath%20d%3D%22M12%202.5l2.94%206.04%206.66.97-4.8%204.68%201.13%206.63L12%2017.98%206.07%2020.82l1.13-6.63-4.8-4.68%206.66-.97L12%202.5z%22/%3E%3C/svg%3E"
          actionLabel="barchasi"
          actionHref="/actors"
        />
        <HomeActiors aktors={aktors} />
      </div>
      <Containers>
        <section className="text-[#EAEBED] px-6 py-7 mt-4 border-[1px] border-[#2E3030] rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">
            Eng yangi tarjima kinolar uzbek tilida!
          </h2>
          <hr className="text-[#2E3030]" />

          <p className="text-sm text-[#888890] leading-relaxed pt-2">
            Xorijiy va Uzbek filmlari Uzbek tilida
          </p>
          <p className="text-sm text-[#888890] leading-relaxed pt-2">
            {/* <br> */}
            Biz barcha qiziqarli va sifatli kino muxlislarini FREEKINO
            veb-saytimzda kutib olishdan mamnunmiz! Siz ham kinoni biz kabi
            sevasizmi? Siz doimo yangi mahsulotlarning chiqarilishini kuzatib
            turasizmi? Bir-ikkita film ko‘rmaydigan bir oqshom ham o‘tmaydimi?
            Keyin to‘g‘ri joyga keldingiz! Bizning kinoteatrimizda siz onlayn
            filmlarni bepul va hech qanday cheklovlarsiz tomosha qilishingiz
            mumkin!
          </p>
        </section>
      </Containers>
      <HomeCountry />
    </>
  );
};

export default page;
