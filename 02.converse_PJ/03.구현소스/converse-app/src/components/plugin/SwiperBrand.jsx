import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { brandData } from "../data/brand_display";

export function SwiperBrand() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={25}
        slidesPerGroup={2}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {brandData.map((v, i) => (
          <SwiperSlide key={i}>
            <a href={v.link} className="info-link"></a>
            <figure className="imgSet">
              <img src={v.imgSrc} alt="converse" />
            </figure>
            <dl className="brand-info">
              <dt>{v.title}</dt>
              <dd>{v.subTxt}</dd>
            </dl>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

/* const brandSwiper = new Swiper(".main-brand .swiper-container", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 25,
    loop: true,
    pagination: {
        el: ".main-brand .swiper-pagination",
        clickable: true,
    },
    navigation:{
        nextEl:".main-brand .next-btn", 
        prevEl:".main-brand .prev-btn",
    },

}); */
