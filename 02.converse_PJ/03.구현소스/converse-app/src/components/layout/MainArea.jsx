// 메인 CSS불러오기
import "../../css/main.css";

export function MainArea() {
  return (
    <>
      <main className="main">
        {/* main banner */}
        <section className="main-visual swiper-container">
          <h2 className="section-title invisible">메인배너</h2>
          <ul className="swiper-wrapper">
            <li className="swiper-slide">
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
            </li>
            <li className="swiper-slide pf">
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
            </li>
          </ul>
          <button type="button" className="controller-btn next-btn"></button>
          <button type="button" className="controller-btn prev-btn"></button>
        </section>

        {/* best item */}
        <section className="main-sec main-best">
          <h2 className="section-title">
            on-line
            <br />
            best item
          </h2>
          <div className="btn-box">
            <button type="button" className="item-btn prev-btn"></button>
            <button type="button" className="item-btn next-btn"></button>
          </div>
          <div className="best-wrap">
            <div className="swiper-container">
              <ul className="swiper-wrapper">
                <li className="swiper-slide">
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
                </li>
                <li className="swiper-slide">
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
                </li>
                <li className="swiper-slide">
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
                </li>
                <li className="swiper-slide">
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
                </li>
                <li className="swiper-slide">
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
                </li>
                <li className="swiper-slide">
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
                </li>
              </ul>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>

        {/* new arrivals */}
        <section className="main-sec main-new">
          <h2 className="section-title">new arrivals</h2>
          <div className="col-4 tab-cont">
            <ul>
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
            </ul>
          </div>
          <div className="bottom-btn">
            <a href="" className="morebtn">
              view more
            </a>
          </div>
        </section>

        {/* loop text */}
        <section className="main-loop">
          <h2 className="section-title invisible">텍스트 배너</h2>
          <div>
            <a href="" className="loop-wrap">
              <span className="loop-text">컨버스가 제안하는 따뜻하고 스타일리쉬한 윈터 슈즈 CLICK !</span>
              <span className="loop-text">컨버스가 제안하는 따뜻하고 스타일리쉬한 윈터 슈즈 CLICK !</span>
              <span className="loop-text">컨버스가 제안하는 따뜻하고 스타일리쉬한 윈터 슈즈 CLICK !</span>
              <span className="loop-text">컨버스가 제안하는 따뜻하고 스타일리쉬한 윈터 슈즈 CLICK !</span>
            </a>
          </div>
        </section>

        {/* trend style */}
        <section className="main-sec main-trend">
          <h2 className="section-title">trend style</h2>
          <div className="tab-wrap">
            <div className="tab-btn swiper-container">
              <ul className="swiper-wrapper">
                <li className="swiper-slide active">
                  <a href="#">런스타</a>
                </li>
                <li className="swiper-slide">
                  <a href="#">척 70</a>
                </li>
                <li className="swiper-slide">
                  <a href="#">플랫폼</a>
                </li>
                <li className="swiper-slide">
                  <a href="#">스케이트보딩</a>
                </li>
              </ul>
            </div>
            {/* // tab-btn */}

            <div className="col-4 tab-cont">
              {/* 1 */}
              <div className="tab-box">
                <ul>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                </ul>
              </div>
              {/* 2 */}
              <div className="tab-box">
                <ul>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_02.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_02.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_02.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_02.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_02.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_02.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_02.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_02.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              {/* 3 */}
              <div className="tab-box">
                <ul>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_03.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_03.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_03.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_03.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_03.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_03.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_03.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_03.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              {/* 4 */}
              <div className="tab-box">
                <ul>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_02.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_02.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_02.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_02.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_02.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_02.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_02.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="img-wrap">
                        <img src="./images/main/item_02.jpg" alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">런스타</div>
                        <p className="prod-name">척테일러 올스타 컨스트럭트 빈티지 화이트</p>
                        <div className="prod-price">
                          92,000<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* // col-4 */}
          </div>
          {/* // tab-wrap */}
        </section>

        {/* video */}
        <section className="main-sec main-video">
          <h2 className="section-title invisible">홍보 영상</h2>
          <div className="flow-container">
            <div className="flow-wrap">
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
            </div>
          </div>
          <div className="intro-mv-img off">
            <img src="./images/main/video_thumbnail_img01.jpg" alt="영상 썸네일 이미지" />
            <button type="button" className="play-btn">
              <i className="fa-solid fa-play"></i> Play
            </button>
          </div>
          <div className="flow-container reverse">
            <div className="flow-wrap">
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
              <span className="flow-text">Converse Video</span>
            </div>
          </div>
        </section>

        {/* brand */}
        <section className="main-sec main-brand">
          <h2 className="section-title">what's hot&new</h2>
          <div className="banner-wrap">
            <div className="swiper-container">
              <ul className="swiper-wrapper">
                <li className="swiper-slide">
                  <a href="" className="info-link"></a>
                  <figure className="imgSet">
                    <img src="./images/main/brand01.jpg" alt="converse" />
                  </figure>
                  <dl className="brand-info">
                    <dt>give all things cozy</dt>
                    <dd>따뜻한 소재로 겨울 내내 포근한 척 스니커즈</dd>
                  </dl>
                </li>
                <li className="swiper-slide">
                  <a href="" className="info-link"></a>
                  <figure className="imgSet">
                    <img src="./images/main/brand02.jpg" alt="converse" />
                  </figure>
                  <dl className="brand-info">
                    <dt>level up in leather</dt>
                    <dd>견고한 레더로 럭셔리하게 재해석한 척 스니커즈</dd>
                  </dl>
                </li>
                <li className="swiper-slide">
                  <a href="" className="info-link"></a>
                  <figure className="imgSet">
                    <img src="./images/main/brand03.jpg" alt="converse" />
                  </figure>
                  <dl className="brand-info">
                    <dt>converse for kids</dt>
                    <dd>포근하고 따뜻한 플리스 이지-온 컨버스 키즈</dd>
                  </dl>
                </li>
                <li className="swiper-slide">
                  <a href="" className="info-link"></a>
                  <figure className="imgSet">
                    <img src="./images/main/brand04.jpg" alt="converse" />
                  </figure>
                  <dl className="brand-info">
                    <dt>converse color</dt>
                    <dd>가을 룩에 어울리는 나만의 컬러를 찾아보세요</dd>
                  </dl>
                </li>
              </ul>
            </div>
            <button type="button" className="controller-btn next-btn"></button>
            <button type="button" className="controller-btn prev-btn"></button>
            <div className="swiper-pagination"></div>
          </div>
        </section>

        {/* benefit */}
        <section className="main-sec main-benefit">
          <h2 className="section-title invisible">메인 혜택 배너</h2>
          <div className="swiper-container">
            <ul className="swiper-wrapper">
              <li className="swiper-slide">
                <img src="./images/main/benefit01.png" alt="앱다운로드 안내" />
              </li>
              <li className="swiper-slide">
                <img src="./images/main/benefit02.png" alt="멤버쉽 안내" />
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
