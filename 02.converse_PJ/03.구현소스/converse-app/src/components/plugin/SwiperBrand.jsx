import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { brandData } from "../data/brand_display";

export function SwiperBrand() {
  const swpr = useRef(null);
  return (
    <>
      <button type="button" className="controller-btn next-btn" onClick={() => swpr.current.swiper.slideNext()}></button>
      <button type="button" className="controller-btn prev-btn" onClick={() => swpr.current.swiper.slidePrev()}></button>
      <Swiper
        ref={swpr}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={25}
        loop={true}
        breakpoints={{
          780: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
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
