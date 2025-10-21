import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; // ✅ import both
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // ✅ also import navigation styles

const Banner = ({ games }) => {
  return (
    <div className="my-6">
      <Swiper
        pagination={{ type: "fraction" }}
        navigation={true}
        modules={[Pagination, Navigation]} // ✅ both modules included
        className="rounded-xl overflow-hidden"
      >
        {games.slice(0, 3).map((game) => (
          <SwiperSlide key={game.id}>
            <div
              className="relative h-64 md:h-96 bg-cover bg-center"
              style={{ backgroundImage: `url(${game.coverPhoto})` }}
            >
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
                <h2 className="text-2xl md:text-4xl font-bold">{game.title}</h2>
                <p className="text-sm md:text-base">{game.category}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
