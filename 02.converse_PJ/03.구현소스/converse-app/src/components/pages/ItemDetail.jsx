// 상품상세 페이지
import { useLocation } from "react-router-dom";
import "../../css/item_detail.css";
import { useEffect, useRef } from "react";

// 제이쿼리 불러오기
import $ from "jquery";

// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand,faBasketShopping,faCreditCard,faXmark } from "@fortawesome/free-solid-svg-icons";

export function ItemDetail() {

  //정규식함수(숫자 세자리마다 콤마해주는 기능)
  function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const location = useLocation();
  const { state } = location;

  // 모달창 띄우기
  const modalPop = () => {
    const modalPop = $('.modal');
    modalPop.fadeIn();
    $('body').css({"overflow-y":"hidden"});
    $('body').on('touchmove', function(e){
      e.preventDefault();
    });
  }
  // 모달창 닫기
  const modalClose = () => {
    const modalPop = $('.modal');
    modalPop.fadeOut();
    $('body').css({"overflow-y":"auto"});
    $('body').off('touchmove');
  }
  
  return (
    <>
      <section className="sub-area">
        <div className="detail-wrap">
          <div className="left-box">
            <img src={state.imgSrc} alt={state.itemName} />
          </div>
          <div className="right-box">
            <div className="prod-cate">{state.cateName}</div>
            <p className="prod-name">
              {state.itemName}
            </p>
            {
              // 데이터에 salePrice 있으면 할인율 나오고 없으면 안나오게
              state.salePrice ? (
                // 세일 O
                <>
                  <div className="price">
                    <span className="per">
                      {state.percent}
                      <em>%</em>
                    </span>
                    <span className="price-box">
                      {addComma(state.itemPrice)}
                      <em className="price-unit">원</em>
                    </span>
                  </div>
                  <div className="line-box">
                    {addComma(state.salePrice)}
                    <em className="price-unit">원</em>
                  </div>
                </>
              ) : (
                // 세일 X
                <div className="price-box">
                  {addComma(state.itemPrice)}
                  <em className="price-unit">원</em>
                </div>
              )
            }
            <div className="size-box">
              <p>사이즈 선택</p>
              <div className="radio_box">
                <div class="radio_btn">
                  <input id="size1" type="radio" name="userSize" value="230" />
                  <label for="size1">230</label>
                </div>
                <div class="radio_btn">
                  <input id="size2" type="radio" name="userSize" value="235" />
                  <label for="size2">235</label>
                </div>
                <div class="radio_btn">
                  <input id="size3" type="radio" name="userSize" value="240" />
                  <label for="size3">240</label>
                </div>
                <div class="radio_btn">
                  <input id="size4" type="radio" name="userSize" value="245" />
                  <label for="size4">245</label>
                </div>
                <div class="radio_btn">
                  <input id="size5" type="radio" name="userSize" value="250" />
                  <label for="size5">250</label>
                </div>
                <div class="radio_btn">
                  <input id="size6" type="radio" name="userSize" value="255" />
                  <label for="size6">255</label>
                </div>
                <div class="radio_btn">
                  <input id="size7" type="radio" name="userSize" value="260" />
                  <label for="size7">260</label>
                </div>
                <div class="radio_btn">
                  <input id="size8" type="radio" name="userSize" value="265" />
                  <label for="size8">265</label>
                </div>
                <div class="radio_btn">
                  <input id="size9" type="radio" name="userSize" value="270" />
                  <label for="size9">270</label>
                </div>
                <div class="radio_btn">
                  <input id="size10" type="radio" name="userSize" value="275" />
                  <label for="size10">275</label>
                </div>
                <div class="radio_btn">
                  <input id="size11" type="radio" name="userSize" value="280" />
                  <label for="size11">280</label>
                </div>
                <div class="radio_btn">
                  <input id="size12" type="radio" name="userSize" value="285" />
                  <label for="size12">285</label>
                </div>
                <div class="radio_btn">
                  <input id="size13" type="radio" name="userSize" value="290" />
                  <label for="size13">290</label>
                </div>
                <div class="radio_btn">
                  <input id="size14" type="radio" name="userSize" value="295" />
                  <label for="size14">295</label>
                </div>
                <div class="radio_btn">
                  <input id="size15" type="radio" name="userSize" value="300" />
                  <label for="size15">300</label>
                </div>
              </div>

              <button className="guide-btn" onClick={modalPop}>
                <FontAwesomeIcon icon={faExpand} />
                사이즈를 찾아보세요!
              </button>
            </div> {/* size-box 끝 */}
            <div className="total-box">
              <span className="title">총 합계</span>
              <div className="total-price">
                <strong>{addComma(state.itemPrice)}</strong><em>원</em>
              </div>
            </div>
            <div className="buy-btns">
              <button className="btn cart"><FontAwesomeIcon icon={faBasketShopping} />장바구니</button>
              <button className="btn"><FontAwesomeIcon icon={faCreditCard} />구매하기</button>
            </div>
          </div> {/* right-box 끝 */}
        </div> {/* detail-wrap 끝 */}

        {/* 사이즈 가이드 팝업 */}
        <section className="modal">
          <div className="moder-inner">
              <button className="modal-close" onClick={modalClose}><FontAwesomeIcon icon={faXmark} /></button>
              <h3>사이즈 차트</h3>
              <div className="chart">
                <img src="./images/sub/detail/size_guide.jpg" alt="사이즈 가이드" />
              </div>
          </div>
        </section> {/* modal 끝 */}

      </section> {/* sub-area 끝 */}
    </>
  );
}
