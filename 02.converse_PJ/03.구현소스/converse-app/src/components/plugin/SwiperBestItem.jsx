import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { bItemData } from "../data/best_item";

export function SwiperBestItem() {
  return (
    <>
      <h2 className="section-title">
        on-line
        <br />
        best item
      </h2>
      <div className="btn-box">
        <button type="button" className="item-btn prev-btn"></button>
        <button type="button" className="item-btn next-btn"></button>
      </div>
      <Swiper
        slidesPerView={3.8}
        spaceBetween={40}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
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
