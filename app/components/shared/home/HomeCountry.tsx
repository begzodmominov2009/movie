import { getMovies } from "@/service/useGetMovie"
import Containers from "../../ui/Containers";
import Link from "next/link";

const HomeCountry = async() => {
  const movies = await getMovies();

  const counties = movies?.map((el) => el.country);
  const allCountries  = [...new Set(counties)]
  console.log(allCountries);
    
  return (
    <Containers className="text-white flex gap-5">
      {
        allCountries?.map((el) => <Link key={el} href={`/`}>{el}</Link> )
      }
    </Containers>
  )
}

export default HomeCountry