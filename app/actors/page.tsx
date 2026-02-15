import { MovieAktor } from '@/types/MoviesActor';
import Containers from '../components/ui/Containers';


type Props = {
  aktors: MovieAktor[];
};


const page = ({aktors}:{aktors: Props}) => {

  

  return (
    <Containers className=''>
       <h1 className='text-white'>Aktors</h1>
    </Containers>
  )
}

export default page
