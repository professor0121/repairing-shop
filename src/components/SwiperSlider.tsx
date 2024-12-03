// components/SwiperSlider.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const SwiperSlider = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide>
          <div className="slide-content">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">Slide 3</div>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
