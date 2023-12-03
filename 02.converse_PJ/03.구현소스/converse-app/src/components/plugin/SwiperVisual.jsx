import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectFade, Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-fade';
import "swiper/css/navigation";

export function SwiperVisual() {
  return (
    <>
      <Swiper 
        loop={true}
        effect={'fade'}
        // autoplay={{
        //   delay: 6000,
        //   disableOnInteraction: false,
        // }}
        navigation={true}
        modules={[EffectFade, Autoplay, Navigation]} 
        className="mainSwiper"
      >
        <SwiperSlide>
        <span className="bg-circle"></span>
            <div className="main-title">
              <p>chuck taylor all star</p>
              <span className="bg-txt">all star</span>
            </div>
            <div className="shoes-img">
              <img src="./images/main/shoe01.png" alt="올스타" />
            </div>
            <a href="" className="morebtn">
              Shop now
            </a>
        </SwiperSlide>
        <SwiperSlide className="pf">
        <span className="bg-circle"></span>
            <div className="main-title">
              <p>platform sneakers</p>
              <span className="bg-txt">run star</span>
            </div>
            <div className="shoes-img">
              <img src="./images/main/shoe02.png" alt="런스타" />
            </div>
            <a href="" className="morebtn">
              Shop now
            </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
