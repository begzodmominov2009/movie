"use client"
import Containers from '@/app/components/ui/Containers';
import MovieCard from '@/app/components/ui/MoviesCard';
import { getMovies } from '@/service/useGetMovie';
import { getMovieGenre } from '@/service/useGetMovieGenre';
import { GenerType } from '@/types/GenerTypes';
import { MovieGenre } from '@/types/MovieGanre';
import { Movie } from '@/types/MoviesDataTypes';
import { useState, useEffect } from 'react';

interface PageProps {
  params: Promise<{ genreName: string }>
}

const Page = ({ params }: PageProps) => {
  const [genreName, setGenreName] = useState<string>('');
  const [genreNameNew, setGenreNameNew] = useState<string>('');
  const [allGenreKinos, setAllGenreKinos] = useState<Movie[]>([]);
  // const [currentGenre, setCurrentGenre] = useState<GenerType | undefined>(undefined);
  const [activeFilter, setActiveFilter] = useState<'yangi' | 'reyting'>('yangi');
  const [yangiOrder, setYangiOrder] = useState<'asc' | 'desc'>('desc');
  const [reytingOrder, setReytingOrder] = useState<'asc' | 'desc'>('desc');

  useEffect(() => {
    const fetchData = async () => {
      const { genreName: gName } = await params;
      setGenreName(gName);

      const allMovies: Movie[] = await getMovies();
      const allMovieGenres: MovieGenre[] = await getMovieGenre();

      const res = await fetch(
        `https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/genre/${gName}`,
        { next: { revalidate: 300 } },
      );

      const singleGener: GenerType = await res.json();
      setGenreNameNew(singleGener?.name_uz);
      console.log(singleGener);

      // const genre = allMovieGenres?.find((el: MovieGenre) => el.genre_id === gName);
      // setCurrentGenre(genre);

      const genreMovieIds = allMovieGenres?.map((el: MovieGenre) => {
        if (el.genre_id === gName) return el.movie_id;
      });

      const filtered: Movie[] = allMovies?.filter((el: Movie) => genreMovieIds?.includes(el.id));
      setAllGenreKinos(filtered || []);
    };
    fetchData();
  }, []);

  const sortedKinos: Movie[] = [...allGenreKinos].sort((a: Movie, b: Movie) => {
    if (activeFilter === 'reyting') {
      return reytingOrder === 'desc'
        ? (b.imdb_rating ?? 0) - (a.imdb_rating ?? 0)
        : (a.imdb_rating ?? 0) - (b.imdb_rating ?? 0);
    }
    return yangiOrder === 'desc'
      ? (b.created_at ?? 0) - (a.created_at ?? 0)
      : (a.created_at ?? 0) - (b.created_at ?? 0);
  });

  const handleYangiClick = () => {
    if (activeFilter === 'yangi') {
      setYangiOrder(prev => prev === 'desc' ? 'asc' : 'desc');
    } else {
      setActiveFilter('yangi');
      setYangiOrder('desc');
    }
  };

  const handleReytingClick = () => {
    if (activeFilter === 'reyting') {
      setReytingOrder(prev => prev === 'desc' ? 'asc' : 'desc');
    } else {
      setActiveFilter('reyting');
      setReytingOrder('desc');
    }
  };

  return (
    <Containers className='pb-10'>
      <div className="flex items-center justify-between mb-4 mt-4 flex-wrap gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-white text-xl font-bold sm:text-2xl">
              {genreNameNew}
            </h1>
            <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">
              kinolar
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            {genreNameNew} kinolarni tomosha qiling!
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleYangiClick}
            className={`cursor-pointer text-sm px-4 py-1.5 rounded-full border transition-colors ${activeFilter === 'yangi'
                ? 'border-green-500 text-green-400'
                : 'border-transparent text-gray-400 hover:border-gray-500'
              }`}
          >
            Yangi {activeFilter === 'yangi' ? (yangiOrder === 'desc' ? '↓' : '↑') : '↓'}
          </button>
          <button
            onClick={handleReytingClick}
            className={`cursor-pointer text-sm px-4 py-1.5 rounded-full border transition-colors ${activeFilter === 'reyting'
                ? 'border-green-500 text-green-400'
                : 'border-transparent text-gray-400 hover:border-gray-500'
              }`}
          >
            Reyting {activeFilter === 'reyting' ? (reytingOrder === 'desc' ? '↓' : '↑') : '↓'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {sortedKinos?.map((el: Movie) => (
          <div key={el.id}>
            <MovieCard item={el} ganer_name_cartoons={""} ganer_name_movie={""} />
          </div>
        ))}
      </div>
    </Containers>
  );
}

export default Page;