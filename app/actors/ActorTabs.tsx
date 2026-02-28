"use client";

import { useState } from "react";
import Link from "next/link";
import type { Movie } from "@/types/MoviesDataTypes";
import MovieCard from "../components/ui/MoviesCard";

type Props = {
    biography?: string | null;
    movies: Movie[];
};

const ActorTabs = ({ biography, movies }: Props) => {
    const [activeTab, setActiveTab] = useState<"bio" | "movies">("bio");

    return (
        <div className="mt-5">
            {/* TABS */}
            <div className="flex gap-6 mb-4">
                <button
                    onClick={() => setActiveTab("bio")}
                    className={`pb-1 border-b-2 transition ${activeTab === "bio"
                            ? "text-white border-green-500"
                            : "text-white/60 border-transparent"
                        }`}
                >
                    Biografiyasi
                </button>

                <button
                    onClick={() => setActiveTab("movies")}
                    className={`pb-1 border-b-2 transition ${activeTab === "movies"
                            ? "text-white border-green-500"
                            : "text-white/60 border-transparent"
                        }`}
                >
                    Kinolari
                </button>
            </div>

            {/* BIO */}
            {activeTab === "bio" && (
                <div className="border border-white/20 rounded-2xl p-3">
                    <p className="text-white/70">
                        {biography ?? "Ma’lumot yo‘q"}
                    </p>
                </div>
            )}

            {/* MOVIES */}
            {activeTab === "movies" && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {movies.length === 0 && (
                        <p className="text-white/60">Kinolar topilmadi</p>
                    )}

                    {movies.map((movie) => (
                        <MovieCard item={movie} key={movie.id} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ActorTabs;