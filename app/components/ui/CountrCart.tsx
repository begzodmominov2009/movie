import { getMovies } from "@/service/useGetMovie"
import Containers from "./Containers";
import Link from "next/link";


const CountrCart = async () => {
    const movies = await getMovies()
    const countrs = movies?.map((el) => el.country);
    const allCountries = [...new Set(countrs)]
    return (
        <>
        <Containers>
           <div className="text-white flex gap-6">
                    {
                        allCountries?.map((el) => (
                            <Link key={el} href={`movies/country/${el}`}>{el}</Link>
                        ))
                    }
           </div>
        </Containers>
        </>
    )
}

export default CountrCart