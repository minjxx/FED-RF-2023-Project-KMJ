// 메인 CSS불러오기
import "../../css/main.css";
import { Benefit } from "../modules/Benefit";
import { BestItem } from "../modules/BestItem";
import { BrandDisplay } from "../modules/BrandDisplay";
import { MainVideo } from "../modules/MainVideo";
import { Trend } from "../modules/Trend";

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
        <BestItem />

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
        <Trend />

        {/* video */}
        <MainVideo />

        {/* BrandDisplay */}
        <BrandDisplay />

        {/* Benefit */}
        <Benefit />
      </main>
    </>
  );
}
