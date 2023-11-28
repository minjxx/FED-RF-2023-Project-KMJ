import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { bItemData } from "../data/best_item";

export function SwiperBestItem() {

  const swpr = useRef(null);

  return (
    <>
      <h2 className="section-title">
        on-line
        <br />
        best item
      </h2>
      <div className="btn-box">
        <button type="button" className="item-btn prev-btn" onClick={()=>swpr.current.swiper.slidePrev()}></button>
        <button type="button" className="item-btn next-btn" onClick={()=>swpr.current.swiper.slideNext()}></button>
      </div>
      <Swiper
        ref={swpr}
        slidesPerView={3.8}
        spaceBetween={40}
        pagination={{
          type: "progressbar",
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {bItemData.map((v,i) => (
          <SwiperSlide key={i}>
            <a href="#">
              <div className="img-wrap">
                <img src={v.imgSrc} alt="상품사진" />
              </div>
              <div className="prod-info-box">
                <div className="prod-cate">{v.cateName}</div>
                <p className="prod-name">{v.itemName}</p>
                <div className="prod-price">
                  {v.itemPrice}
                  <em className="price-unit">원</em>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
