import Containers from "@/app/components/ui/Containers";
import { getAktorById } from "@/service/useGetAktorsId";
import Link from "next/link";

type PageProps = {
  params: Promise<{ actors_id: string }>; // params allaqachon object
};

const Page = async ({ params }: PageProps) => {
  // 1️⃣ Promise → object
  const rawParams = await params;

  // ❌ JSON.parse YO‘Q
  const aktorId = rawParams.actors_id;

  console.log("AKTOR ID:", aktorId);

  const aktor = await getAktorById(aktorId);

  if (!aktor) {
    return (
      <Containers>
        <h1 className="text-white">Aktor topilmadi ❌</h1>
      </Containers>
    );
  }

  return (
    <Containers className="">
      <div className="bg-white/8 p-[5px] rounded-[10px] px-[10px] my-[20px] ">
        <ul className=" flex gap-2.5 items-center">
          <Link href={"/"} className="text-[13px] text-gray-600 hover:text-white">
            Home
          </Link>
          <li className="text-green-500">
            -
          </li>
          <Link href={"/actors/"} className="text-[13px] text-gray-600 hover:text-white">
            Aktors
          </Link>
          <li className="text-green-500">
            -
          </li>
          <li className="text-white text-[13px] font-bold">
            {aktor.full_name}
          </li>
        </ul>
      </div>


      <div className="  grid   md:grid-cols-2  gap-[10px] px-[5px]  ">
        <div className="w-[300px] h-[500px]  overflow-hidden rounded-xl">
          <img
            src={aktor.photo_url}
            alt={aktor.full_name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="pt-[20px]">
          <h1 className="text-2xl font-bold text-white">
            {aktor.full_name}
          </h1>
          <p className="text-white border-b-2 border-green-500 pb-1 my-[20px]">
            Biografiyasi
          </p>
          <div className="bg-transparent border border-white/20 rounded-2xl group  p-3 transition ">
            <p className="text-white/70 mt-2">
              {aktor.biography ?? "Ma’lumot yo‘q"}
            </p>
          </div>
        </div>
      </div>
    </Containers>
  );
};

export default Page;