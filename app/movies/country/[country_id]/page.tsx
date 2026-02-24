import Containers from "@/app/components/ui/Containers"
import MovieCard from "@/app/components/ui/MoviesCard"
import { getMovies } from "@/service/useGetMovie"

type PageProps = {
  params: Promise<{
    country_id: string
  }>
}

// 🔹 barcha variantlarni bitta nomga keltiramiz
const normalizeCountry = (value: string) => {
  const v = value.trim().toUpperCase()

  if (["USA", "US", "USE", "AQSH"].includes(v)) return "USA"
  if (["FRANCE", "FR"].includes(v)) return "FRANCE"
  if (["BELGIUM", "BE"].includes(v)) return "BELGIUM"

  return v
}

const Country = async ({ params }: PageProps) => {
  const { country_id } = await params
  const movies = await getMovies()

  const selectedCountry = normalizeCountry(country_id)

  const moviesFiltered = movies.filter((movie) => {
    // "USA, France" → ["USA", "France"]
    const countries = movie.country
      .split(",")
      .map(c => normalizeCountry(c))

    return countries.includes(selectedCountry)
  })

  return (
    <Containers className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {moviesFiltered.map((movie) => (
        <MovieCard
          key={movie.id}
          item={movie}   // ✅ ENG MUHIM JOY
        />
      ))}
    </Containers>
  )
}

export default Country
