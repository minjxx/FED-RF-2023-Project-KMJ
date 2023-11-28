import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { tMenuData } from "../data/trend_menu";

export function SwiperTrendTab({chgItemCatFn}) {
  return (
    <>
      <Swiper 
        slidesPerView={'auto'}
        spaceBetween={15}
        className="tab-btn"
      >
        {
          tMenuData.map((v,i)=>
            <SwiperSlide key={i}><button onClick={()=>chgItemCatFn(v.tabCode)}>{v.tabName}</button></SwiperSlide>
          )
        }
      </Swiper>
    </>
  );
}
