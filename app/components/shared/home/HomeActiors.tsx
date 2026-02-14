  import Containers from '../../ui/Containers'
  import { MovieAktor } from '@/types/MoviesActor'


  type Props = {
    item: MovieAktor
  }



  const HomeActiors = ({item}: Props) => {
  console.log(item);

    return (
      <Containers>
        <div className="">
         page
        </div>
      </Containers>
    )
  }

  export default HomeActiors
