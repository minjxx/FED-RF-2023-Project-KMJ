import $ from "jquery";

import { SwiperTrendTab } from "../plugin/SwiperTrendTab";

export function Trend() {

  // trend 탭 상품 영역
  $(function() {
    let tabBtn = $(".main-trend .tab-btn .swiper-slide"); //버튼 설정
    let tabCont = $(".main-trend .tab-cont .tab-box"); //콘텐츠 설정
    tabBtn.eq(0).addClass('active'); // 첫번째 탭버튼 active 넣기
    tabCont.hide().eq(0).show(); //첫번째 콘텐츠만 보이게 설정

    tabBtn.click(function(){
        const index = $(this).index(); //클릭한 번호를 저장
        // console.log(index);
        $(this).addClass("active").siblings().removeClass("active"); //내가 클릭한 버튼에 클래스를 추가하고 나머지 버튼은 삭제
        tabCont.eq(index).show().siblings().hide(); //내가 클릭한 버튼의 콘텐츠는 보여주고 나머지는 숨김
    });
  });

  return (
    <>
      <section className="main-sec main-trend">
        <h2 className="section-title">trend style</h2>
        <div className="tab-wrap">
          <SwiperTrendTab />

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
    </>
  );
}
