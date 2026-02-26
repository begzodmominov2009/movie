import Containers from "../components/ui/Containers";
import { getAktor } from "@/service/useGetMovieActors";
import { MovieAktor } from "@/types/MoviesActor";
import HomeActiors from "../components/shared/home/HomeActiors";

const Page = async () => {
  const aktors: MovieAktor[] = await getAktor();

  return (
    <Containers>
      <h1 className="text-white text-2xl mb-6">Aktors</h1>
      
      <HomeActiors aktors={aktors} />
    </Containers>
  );
};

export default Page;