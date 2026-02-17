import Containers from "@/app/components/ui/Containers"
type PageProps = {
  params: Promise<{ aktor_id: string }>;
};
const page = async({params} : PageProps) => {
  const { aktor_id: movieId } = await params;
  console.log(movieId);
  
  


  return (
    <>
       <Containers>
        <h1 className="text-red-600">
          Aktor singil
        </h1>
        </Containers>
    </>
  )
}

export default page
