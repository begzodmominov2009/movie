"use client";

import Containers from "../../ui/Containers";
import SwiperSection from "../SwiperSection/SwiperSection";
import HomeBannerCard from "./components/HomeBanner/HomeBannerCard";

const bannerData = [
  {
    id: 1,
    title: "Yulduzning advokati",
    rating: 7.3,
    poster:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1400&q=80",
    tags: ["Komediya", "2025", "Janubiy Koreya"],
  },
  {
    id: 2,
    title: "Yulduzning advokati",
    rating: 7.3,
    poster:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1400&q=80",
    tags: ["Komediya", "2025", "Janubiy Koreya"],
  },
  {
    id: 2,
    title: "Fallout 2-fasl",
    rating: 8.3,
    poster:
      "https://images.unsplash.com/photo-1523597020744-b68b1edd6c92?auto=format&fit=crop&w=1400&q=80",
    tags: ["Jangari & Sarguzasht", "2025", "AQSH"],
  },
];

type CardType = {
  id: number;
  title: string;
  rating: number;
  poster: string;
  tags: string[];
};

const HomeBanner = ({ visible = 2 }) => {
  return (
    <Containers className="mt-6">
      <SwiperSection
        variant="hero"
        gap={14}
        autoplay
        loop
        visible={visible} // ✅ SEN SHU YERDAN BOSHQARASAN
        heroBreakpoints={{
          0: { slidesPerView: 1.1 },
          640: { slidesPerView: 1.05 },
          768: { slidesPerView: 1.15 },
          1024: { slidesPerView: 2 },
        }}
        items={bannerData}
        renderItem={(item: CardType) => <HomeBannerCard item={item} />}
      />
    </Containers>
  );
};

export default HomeBanner;
