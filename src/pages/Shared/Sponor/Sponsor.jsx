import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import sponsor images
import img1 from "../../../assets/SponsorImg/1.png";
import img2 from "../../../assets/SponsorImg/2.png";
import img3 from "../../../assets/SponsorImg/3.png";
import img4 from "../../../assets/SponsorImg/4.png";
import img5 from "../../../assets/SponsorImg/5.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Sponsor = () => {
  return (
    <div className=" max-w-4xl mx-auto">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} loading="lazy" alt="sponsor logo image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} loading="lazy" alt="sponsor logo image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} loading="lazy" alt="sponsor logo image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} loading="lazy" alt="sponsor logo image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} loading="lazy" alt="sponsor logo image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sponsor;
