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
              <ul>
                {/* 라디오버튼으로 변경 */}
                <li>230</li>
                <li>235</li>
                <li>240</li>
                <li>245</li>
                <li>250</li>
                <li>255</li>
                <li>260</li>
                <li>265</li>
                <li>270</li>
                <li>275</li>
                <li>280</li>
                <li>285</li>
                <li>290</li>
                <li>295</li>
                <li>300</li>
              </ul>
              {/* 위에 사이즈 선택영역 라디오버튼으로 변경 */}
              {/* <div>
                <label htmlFor="">
                  <input type="radio" name="" id="" />
                </label>
              </div> */}
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
