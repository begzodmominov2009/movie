"use client";

import { useState, useMemo } from "react";
import MovieCard from "@/app/components/ui/MoviesCard";

type Movie = {
    id?: string;
    title_en?: string;
    created_by: number;
    imdb_rating?: number; // optional
};

type NewMoviesClientProps = {
    movies: Movie[];
};

const NewMoviesClient = ({ movies }: NewMoviesClientProps) => {
    const [isReversed, setIsReversed] = useState(false);      // yangi toggle
    const [sortByRating, setSortByRating] = useState(false);  // rating bo‘yicha sort

    const visibleMovies = useMemo(() => {
        const result: Movie[] = [...movies]; // result tipi aniqlandi

        // Rating bo‘yicha sort (eng yuqoridan pastga)
        if (sortByRating) {
            result.sort((a, b) => {
                const ratingA = a.imdb_rating ?? 0;
                const ratingB = b.imdb_rating ?? 0;
                return ratingB - ratingA;
            });
        }

        // Yangi toggle (oxiridan boshiga)
        if (isReversed) {
            result.reverse();
        }

        return result;
    }, [movies, isReversed, sortByRating]);

    return (
        <>
            {/* 🔘 TUGMALAR */}
            <div className="flex justify-end gap-2 my-4">
                <button
                    onClick={() => setIsReversed(!isReversed)}
                    className={`
            px-4 py-1.5
            rounded-full
            text-sm font-medium
            border border-gray-700
            transition-all
            ${isReversed ? "bg-green-600 text-white" : "text-gray-300 hover:bg-green-600 hover:text-white"}
          `}
                >
                    {isReversed ? "Normal ↑" : "Yangi ↓"}
                </button>

                <button
                    onClick={() => setSortByRating(!sortByRating)}
                    className={`
            px-4 py-1.5
            rounded-full
            text-sm font-medium
            border border-gray-700
            transition-all
            ${sortByRating ? "bg-green-600 text-white" : "text-gray-300 hover:bg-green-600 hover:text-white"}
          `}
                >
                    {sortByRating ? "Normal tartib ↑" : "Rating bo‘yicha ↓"}
                </button>
            </div>

            {/* 🎬 KINOLAR */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                {visibleMovies.map((item) => (
                    <MovieCard key={item.id ?? item.title_en} item={item} />
                ))}
            </div>
        </>
    );
};

export default NewMoviesClient;