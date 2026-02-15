import { Movie } from "@/types/MoviesDataTypes";
import Image from "next/image";
import { BsFire } from "react-icons/bs";

// const movies = [
//     { id: 1, title: "Titanlar hujumi: So‘nggi hujum", year: 2024, rating: 9.2, img: "/path/to/img1.jpg" },
//     { id: 2, title: "Otatürk 2", year: 2024, rating: 9.0, img: "/path/to/img2.jpg" },
//     { id: 3, title: "Otatürk", year: 2023, rating: 8.8, img: "/path/to/img3.jpg" },
//     { id: 4, title: "Adolat yo‘lida / Nur to‘kilsi", year: 2021, rating: 8.6, img: "/path/to/img4.jpg" },
//     { id: 5, title: "Eflatun", year: 2022, rating: 8.5, img: "/path/to/img5.jpg" },
// ];
type Props = {
  movies: Movie[];
  visible?: number;
};

const HomeTopMoviesBanner = ({movies}:Props) => {
    return (
        <div className="flex flex-col md:flex-row gap-6 w-full px-4 py-2">
            {/* LEFT LIST */}
            <div className="flex-1 border border-[#313433] p-4 rounded-xl bg-[#1D1F1E]">
                <h2 className="text-white text-2xl font-semibold mb-5 flex items-center gap-3">
                    <p className="text-[#00A63E]"><BsFire /></p>
                    <p>TOP 5 Kinolar</p>
                </h2>

                <div className="space-y-3">
                    {movies.slice(0, 5).map((movie, idx) => (
                        <div
                            key={movie.id}
                            className="flex items-center border border-[#313433] bg-[#1A1D1C] rounded-lg px-3 py-2 hover:bg-[#2A2A2E] transition"
                        >
                            {/* Rank */}
                            <div className="text-white text-lg font-bold w-7 h-7 rounded-full bg-[#2A2A2E] flex items-center justify-center">
                                {idx + 1}
                            </div>

                            {/* Thumbnail image */}
                            <div className="w-[70px] h-[90px] ml-3 flex-shrink-0 overflow-hidden rounded">
                                <img
                                    src={movie.banner_url}
                                    alt={movie.title_en}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Title and year */}
                            <div className="flex-1 pl-3 min-w-0">
                                <div className="text-white text-base font-medium truncate">
                                    {movie.title_en}
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center space-x-14 text-sm text-gray-400">
                                <span>{movie.release_year}</span>
                                <span className="text-white font-semibold text-lg">{movie.imdb_rating}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT LIST */}
            <div className="flex-1 border border-[#313433] p-4 rounded-xl bg-[#1D1F1E]">
                <h2 className="text-white text-2xl font-semibold mb-5 flex items-center gap-3">
                    <p className="text-[#D08700]"><BsFire /></p>
                    <p>TOP 5 Seriallar</p>
                </h2>

                <div className="space-y-3">
                    {movies.slice(0, 5).map((movie, idx) => (
                        <div
                            key={movie.id + "-serie"}
                            className="flex items-center border border-[#313433] bg-[#1A1D1C] rounded-lg px-3 py-2 hover:bg-[#2A2A2E] transition"
                        >
                            {/* Rank */}
                            <div className="text-white text-lg font-bold w-7 h-7 rounded-full bg-[#2A2A2E] flex items-center justify-center">
                                {idx + 1}
                            </div>

                            {/* Thumbnail image */}
                            <div className="w-[70px] h-[90px] ml-3 flex-shrink-0 overflow-hidden rounded">
                                <img
                                    src={movie.banner_url}
                                    alt={movie.title_en}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Title and year */}
                            <div className="flex-1 pl-3 min-w-0">
                                <div className="text-white text-base font-medium truncate">
                                    {movie.title_en}
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center space-x-14 text-sm text-gray-400">
                                <span>{movie.release_year}</span>
                                <span className="text-white font-semibold text-lg">{movie.imdb_rating}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    );
}

export default HomeTopMoviesBanner