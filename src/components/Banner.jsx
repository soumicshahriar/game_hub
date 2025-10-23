import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = ({ games }) => {
  return (
    <div className="my-6">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1500}
        loop={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="rounded-xl overflow-hidden"
      >
        {games.slice(0, 10).map((game) => (
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
