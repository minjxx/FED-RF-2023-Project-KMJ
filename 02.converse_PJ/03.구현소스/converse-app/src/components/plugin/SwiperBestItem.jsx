import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

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
        <SwiperSlide>
          <a href="">
            <div className="img-wrap">
              <img src="./images/main/item_01.jpg" alt="상품사진" />
            </div>
            <div className="prod-info-box">
              <div className="prod-cate">런스타</div>
              <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
              <div className="prod-price">
                92,000<em className="price-unit">원</em>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <div className="img-wrap">
              <img src="./images/main/item_01.jpg" alt="상품사진" />
            </div>
            <div className="prod-info-box">
              <div className="prod-cate">런스타</div>
              <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
              <div className="prod-price">
                92,000<em className="price-unit">원</em>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <div className="img-wrap">
              <img src="./images/main/item_01.jpg" alt="상품사진" />
            </div>
            <div className="prod-info-box">
              <div className="prod-cate">런스타</div>
              <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
              <div className="prod-price">
                92,000<em className="price-unit">원</em>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <div className="img-wrap">
              <img src="./images/main/item_01.jpg" alt="상품사진" />
            </div>
            <div className="prod-info-box">
              <div className="prod-cate">런스타</div>
              <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
              <div className="prod-price">
                92,000<em className="price-unit">원</em>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <div className="img-wrap">
              <img src="./images/main/item_01.jpg" alt="상품사진" />
            </div>
            <div className="prod-info-box">
              <div className="prod-cate">런스타</div>
              <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
              <div className="prod-price">
                92,000<em className="price-unit">원</em>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <div className="img-wrap">
              <img src="./images/main/item_01.jpg" alt="상품사진" />
            </div>
            <div className="prod-info-box">
              <div className="prod-cate">런스타</div>
              <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
              <div className="prod-price">
                92,000<em className="price-unit">원</em>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <div className="img-wrap">
              <img src="./images/main/item_01.jpg" alt="상품사진" />
            </div>
            <div className="prod-info-box">
              <div className="prod-cate">런스타</div>
              <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
              <div className="prod-price">
                92,000<em className="price-unit">원</em>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <div className="img-wrap">
              <img src="./images/main/item_01.jpg" alt="상품사진" />
            </div>
            <div className="prod-info-box">
              <div className="prod-cate">런스타</div>
              <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
              <div className="prod-price">
                92,000<em className="price-unit">원</em>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <div className="img-wrap">
              <img src="./images/main/item_01.jpg" alt="상품사진" />
            </div>
            <div className="prod-info-box">
              <div className="prod-cate">런스타</div>
              <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
              <div className="prod-price">
                92,000<em className="price-unit">원</em>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <div className="img-wrap">
              <img src="./images/main/item_01.jpg" alt="상품사진" />
            </div>
            <div className="prod-info-box">
              <div className="prod-cate">런스타</div>
              <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
              <div className="prod-price">
                92,000<em className="price-unit">원</em>
              </div>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
