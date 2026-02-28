import Containers from "@/app/components/ui/Containers";
import CountrCart from "@/app/components/ui/CountrCart";
import { getMovies } from "@/service/useGetMovie";
import NewMoviesClient from "../../components/NewMoviesClient";

const page = async ({
  params,
}: {
  params: Promise<{ country_id: string }>;
}) => {
  const { country_id } = await params;

  const allMovies = await getMovies();

  // faqat shu country kinolari va created_by uchun default qiymat
  const countryMovies = allMovies
    .filter((el) => el.country === country_id)
    .map((el) => ({
      ...el,
      created_by: el.created_by ?? 0, // undefined bo'lsa 0 qo'yiladi
    }));

  return (
    <Containers>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-white text-2xl font-semibold">
          {country_id}
        </h1>
      </div>

      {/* Description */}
      <div className="text-gray-600 my-2">
        {country_id} kinolarini tomosha qiling!
      </div>

      {/* 👇 Yangi tugma + kinolar (CLIENT) */}
      <NewMoviesClient movies={countryMovies} />

      <CountrCart />
    </Containers>
  );
};

export default page;