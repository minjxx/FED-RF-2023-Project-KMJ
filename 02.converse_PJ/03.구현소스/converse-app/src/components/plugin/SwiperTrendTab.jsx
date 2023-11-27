import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export function SwiperTrendTab() {
  return (
    <>
      <Swiper 
        slidesPerView={'auto'}
        spaceBetween={15}
        className="tab-btn"
      >
        <SwiperSlide className="active"><button>런스타</button></SwiperSlide>
        <SwiperSlide><button>척 70</button></SwiperSlide>
        <SwiperSlide><button>플랫폼</button></SwiperSlide>
        <SwiperSlide><button>스케이트보딩</button></SwiperSlide>
      </Swiper>
    </>
  );
}
