// components/SwiperSlider.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module

// import "./SwiperSlider.css"; // Import custom CSS

const SwiperSlider = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Add Autoplay to modules
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000, // Time between slides in milliseconds
          disableOnInteraction: false, // Autoplay continues even after user interaction
        }}
      >
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/my_site_image-1.jpg" alt="Slide 1" className="slide-image" />
            <div className="slide-text">We provide amazing services</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/image1.png" alt="Slide 2" className="slide-image" />
            <div className="slide-text">Your satisfaction is our goal</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="images/image1.png" alt="Slide 3" className="slide-image" />
            <div className="slide-text">Join us for the best experience</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
