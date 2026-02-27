"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Button from "../../ui/Button";
import Containers from "../../ui/Containers";
import { getMovies } from "@/service/useGetMovie";
import { useRouter } from "next/navigation";

const SearchHeader = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState<any[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<any[]>([]);
  const router = useRouter();
  

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    if (!searchValue.trim()) {
      setFilteredMovies([]);
      return;
    }

    const timer = setTimeout(() => {
      const value = searchValue.trim().toLowerCase();
      const filtered = movies.filter((movie) =>
        movie.title_uz?.toLowerCase().includes(value),
      );
      setFilteredMovies(filtered);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchValue, movies]);

  const handleSearch = () => {
    const value = searchValue.trim();
    if (!value) return;
    if (value.trim()) {
      router.push(`/movies/search/${encodeURIComponent(value)}`);
    }
    setSearchValue("");
    setFilteredMovies([]);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <Containers className="flex flex-col max-w-2xl gap-4 relative">
      <div className="w-full relative">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Qidirish..."
          className="w-full rounded-full bg-[#161616]/80 dark:bg-[#1A1A1A] border border-transparent focus:outline-none focus:ring-2 focus:ring-[#2b2b2b] px-4 py-2 pl-12 text-sm text-gray-200 placeholder:text-gray-400 transition"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <Search size={16} />
        </div>
        <Button
          type="button"
          onClick={handleSearch}
          className="absolute right-1 top-1/2 -translate-y-1/2 shadow-sm px-3 py-1.5 flex items-center gap-1"
        >
          <Search size={16} /> Qidirish
        </Button>
      </div>

      {searchValue.trim() !== "" && (
        <div
          className={`grid grid-cols-1 px-2 py-2 absolute top-11 rounded-md bg-[#161616]/80 dark:bg-[#1A1A1A] w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[320px] overflow-y-auto custom-scroll pb-1`}
        >
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => {
                  router.push(`/movies/${movie.id}`);
                  setFilteredMovies([]);
                  setSearchValue("");
                }}
                className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer flex flex-col"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={movie.poster_url}
                    alt={movie.title_uz}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 flex-1 flex flex-col">
                  <h3 className="text-sm font-semibold text-white truncate">
                    {movie.title_uz}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-1 flex-1">
                    {movie.description_uz}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center">
              Natija topilmadi
            </p>
          )}
        </div>
      )}
    </Containers>
  );
};

export default SearchHeader;
