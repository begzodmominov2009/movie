import Containers from '@/app/components/ui/Containers'
import { getMovies } from '@/service/useGetMovie'
import { CountryItem } from '@/types/Countrs'


type Props = {
  params: CountryItem
}


const Country = async ({ params }: { params: Props }) => {
  const movies = await getMovies()
  console.log(movies);


  const countryId = params;

  console.log(countryId);

  console.log(countryId);
  




  const moviesFiltred = movies?.filter((el) => (
    el.country
  ))

  console.log(moviesFiltred);







  return (
    <>
      <Containers>
       {
        
       }
      </Containers>
    </>
  )
}

export default Country