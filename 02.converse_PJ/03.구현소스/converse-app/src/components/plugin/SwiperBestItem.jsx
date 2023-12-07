import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { bItemData } from "../data/best_item";
import { Link } from "react-router-dom";

export function SwiperBestItem() {
  const swpr = useRef(null);

  return (
    <>
      <h2 className="section-title mPd20">
        on-line
        <br />
        best item
      </h2>
      <div className="btn-box">
        <button type="button" className="item-btn prev-btn" onClick={() => swpr.current.swiper.slidePrev()}></button>
        <button type="button" className="item-btn next-btn" onClick={() => swpr.current.swiper.slideNext()}></button>
      </div>
      <Swiper
        ref={swpr}
        slidesPerView={2.1}
        spaceBetween={20}
        breakpoints={{
          780: {
            slidesPerView: 3.1,
            spaceBetween: 25,
          },
          1080: {
            slidesPerView: 3.8,
            spaceBetween: 35,
          },
        }}
        pagination={{
          type: "progressbar",
        }}
        modules={[Pagination]}
        className="bestSwiper"
      >
        {bItemData.map((v, i) => (
          <SwiperSlide key={i}>
            <div className="img-wrap">
              <Link to="/men">
                <img src={v.imgSrc} alt="상품사진" />
              </Link>
            </div>
            <div className="prod-info-box">
              <div className="prod-cate">{v.cateName}</div>
              <p className="prod-name">
                <Link to="/men">{v.itemName}</Link>
              </p>
              <div className="prod-price">
                {v.itemPrice}
                <em className="price-unit">원</em>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
