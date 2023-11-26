import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export function SwiperBenefit() {
  return (
    <>
      <Swiper 
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]} 
        className="mySwiper"
      >
        <SwiperSlide><img src="./images/main/benefit01.png" alt="앱다운로드 안내" /></SwiperSlide>
        <SwiperSlide><img src="./images/main/benefit02.png" alt="멤버쉽 안내" /></SwiperSlide>
      </Swiper>
    </>
  );
}
