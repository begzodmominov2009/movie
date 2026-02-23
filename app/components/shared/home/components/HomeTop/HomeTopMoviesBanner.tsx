import Containers from "@/app/components/ui/Containers";
import { getCategory } from "@/service/useGetCategories";
import { GenerType } from "@/types/GenerTypes";
import { Movie } from "@/types/MoviesDataTypes";
import Link from "next/link";
import { BsFire } from "react-icons/bs";

type Props = {
    movies: Movie[];
    visible?: number;
};

const HomeTopMoviesBanner = async ({ movies }: Props) => {
    const categories = await getCategory();
    const twoMainCategories = categories?.slice(0,2)
    console.log(twoMainCategories);
    
    return (
        <Containers className="flex mt-5 flex-col md:flex-row gap-4 w-full px-4 py-2">
            {/* LEFT LIST */}
                <div className="flex-1 border border-[#313433] p-4 rounded-xl bg-[#1D1F1E]">
                    <h2 className="text-white text-2xl font-semibold mb-5 flex items-center gap-3">
                        <p className="text-[#00A63E]"><BsFire /></p>
                        <p>TOP 5 Kinolar</p>
                    </h2>

                    <div className="space-y-3">
                        {movies.slice(6, 11).map((movie, id) => (
                            <Link
                                href={`/movies/${movie.id}`}
                                key={movie.id}
                                className="flex items-center border border-[#313433] bg-[#1A1D1C] rounded-lg px-3 py-2 hover:bg-[#2A2A2E] transition"
                            >
                                {/* Rank */}
                                <div className="text-white text-lg font-bold w-7 h-7 rounded-full bg-[#2A2A2E] text-[14px] flex items-center justify-center">
                                    {id + 1}
                                </div>

                                {/* Thumbnail image */}
                                <div className="w-[60px] h-[85px] ml-3 flex-shrink-0 overflow-hidden rounded-[15px]">
                                    <img
                                        src={movie.poster_url}
                                        alt={movie.title_en}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Title and year */}
                                <div className="flex-1 pl-3 min-w-0">
                                    <div className="text-white text-[16px] font-medium truncate">
                                        {movie.title_en}
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center space-x-14 text-[12px] text-gray-400 whitespace-nowrap">
                                    <span>{movie.release_year}</span>
                                    <span className="text-white font-semibold text-[16px]">{movie.imdb_rating}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            {/* RIGHT LIST */}
            <div className="flex-1 border border-[#313433] p-4 rounded-xl bg-[#1D1F1E]">
                <h2 className="text-white text-2xl font-semibold mb-5 flex items-center gap-3">
                    <p className="text-[#D08700]"><BsFire /></p>
                    <p>TOP 5 Multfilmlar</p>
                </h2>

                <div className="space-y-3">
                    {movies.slice(22, 28).map((movie, idx) => (
                        <Link
                            href={`/movies/${movie.id}`}
                            key={movie.id}
                            className="flex items-center border border-[#313433] bg-[#1A1D1C] rounded-lg px-3 py-2 hover:bg-[#2A2A2E] transition"
                        >
                            {/* Rank */}
                            <div className="text-white text-lg font-bold w-7 h-7 rounded-full bg-[#2A2A2E] text-[14px] flex items-center justify-center">
                                {idx + 1}
                            </div>

                            {/* Thumbnail image */}
                            <div className="w-[60px] h-[85px] ml-3 flex-shrink-0 overflow-hidden rounded-[15px]">
                                <img
                                    src={movie.poster_url}
                                    alt={movie.title_en}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Title and year */}
                            <div className="flex-1 pl-3 min-w-0">
                                <div className="text-white text-[16px] font-medium truncate">
                                    {movie.title_en}
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center space-x-14 text-[12px] text-gray-400 whitespace-nowrap">
                                <span>{movie.release_year}</span>
                                <span className="text-white font-semibold text-[16px]">{movie.imdb_rating}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Containers>
    );
}

export default HomeTopMoviesBanner