import Containers from "@/app/components/ui/Containers";
import HomeCountry from "@/app/components/shared/home/HomeCountry";
import { getAktorById } from "@/service/useGetAktorsId";
import { getMovieActor } from "@/service/useGetMovie_Actors";
import Link from "next/link";
import type { Movie } from "@/types/MoviesDataTypes";
import { getMovies } from "@/service/useGetMovie";
import ActorTabs from "../ActorTabs";

type PageProps = {
  params: Promise<{ actors_id: string }>;
};

const Page = async ({ params }: PageProps) => {
  const { actors_id } = await params;

  const aktor = await getAktorById(actors_id);
  if (!aktor) {
    return (
      <Containers>
        <h1 className="text-white">Aktor topilmadi ❌</h1>
      </Containers>
    );
  }

  // 1️⃣ movie_actor table
  const movieActors = await getMovieActor();

  // 2️⃣ faqat shu aktorga tegishli movie_id lar
  const actorMovieIds = movieActors
    .filter((item) => item.actor_id === actors_id)
    .map((item) => item.movie_id);

  // 3️⃣ movies table (banner_url shu yerda)
  const allMovies: Movie[] = await getMovies();

  // 4️⃣ faqat shu aktor o‘ynagan kinolar
  const actorMovies = allMovies.filter(
    (movie) => movie.id && actorMovieIds.includes(movie.id)
  );

  return (
    <Containers>
      {/* BREADCRUMB */}
      <div className="bg-white/8 p-[5px] rounded-[10px] px-[10px] my-[20px]">
        <ul className="flex gap-2.5 items-center">
          <Link href="/" className="text-[13px] text-gray-600 hover:text-white">
            Home
          </Link>
          <li className="text-green-500">•</li>
          <Link href="/actors" className="text-[13px] text-gray-600 hover:text-white">
            Aktors
          </Link>
          <li className="text-green-500">•</li>
          <li className="text-white text-[13px] font-bold">
            {aktor.full_name}
          </li>
        </ul>
      </div>

      {/* MAIN */}
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 mb-5">
        {/* IMAGE */}
        <div className="md:w-[380px] h-[360px] md:h-[520px] overflow-hidden rounded-xl">
          <img
            src={aktor.photo_url}
            alt={aktor.full_name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT + TABS */}
        <div className="flex-1 pt-4 md:pt-[20px]">
          <h1 className="text-2xl font-bold text-white">
            {aktor.full_name}
          </h1>

          <ActorTabs
            biography={aktor.biography}
            movies={actorMovies}
          />
        </div>
      </div>

      <HomeCountry />
    </Containers>
  );
};

export default Page;