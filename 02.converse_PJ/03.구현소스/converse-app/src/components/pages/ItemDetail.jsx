
import { useLocation } from "react-router-dom";
import "../../css/item_detail.css";
import { useRef } from "react";

export function ItemDetail() {

  //정규식함수(숫자 세자리마다 콤마해주는 기능)
  function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const location = useLocation();
  const { state } = location;

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
                <li>220</li>
                <li>225</li>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
