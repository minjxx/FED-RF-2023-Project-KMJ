import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

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
        <SwiperSlide>
          <a href="#" className="info-link"></a>
          <figure className="imgSet">
            <img src="./images/main/brand01.jpg" alt="converse" />
          </figure>
          <dl className="brand-info">
            <dt>give all things cozy</dt>
            <dd>따뜻한 소재로 겨울 내내 포근한 척 스니커즈</dd>
          </dl>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="info-link"></a>
          <figure className="imgSet">
            <img src="./images/main/brand02.jpg" alt="converse" />
          </figure>
          <dl className="brand-info">
            <dt>level up in leather</dt>
            <dd>견고한 레더로 럭셔리하게 재해석한 척 스니커즈</dd>
          </dl>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="info-link"></a>
          <figure className="imgSet">
            <img src="./images/main/brand03.jpg" alt="converse" />
          </figure>
          <dl className="brand-info">
            <dt>converse for kids</dt>
            <dd>포근하고 따뜻한 플리스 이지-온 컨버스 키즈</dd>
          </dl>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="info-link"></a>
          <figure className="imgSet">
            <img src="./images/main/brand04.jpg" alt="converse" />
          </figure>
          <dl className="brand-info">
            <dt>converse color</dt>
            <dd>가을 룩에 어울리는 나만의 컬러를 찾아보세요</dd>
          </dl>
        </SwiperSlide>
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
