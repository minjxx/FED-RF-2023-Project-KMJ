import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { benefitData } from "../data/benefit_data";
import { moBenefitData } from "../data/benefit_data _mo";

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
        className="bfitSwiper"
      >
        {benefitData.map((v, i) => (
          <SwiperSlide key={i}>
            <img src={v.imgSrc} alt={v.title} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mBfitSwiper"
      >
        {moBenefitData.map((v, i) => (
          <SwiperSlide key={i}>
            <img src={v.imgSrc} alt={v.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
