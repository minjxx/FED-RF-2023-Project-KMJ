// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
// 제이쿼리 불러오기
import $ from "jquery";
import { kAllData } from "../data/kid_all_data";

export function Kids() {
  useEffect(() => {
    $(".opt-tit").click(function(){
      $(this).toggleClass("on");
      $(this).siblings(".opt-box").slideToggle("fast");
    });
    $(".filter-btn").click(function(){
      $(this).toggleClass("on");
      $(this).parent(".sort-box").siblings(".item-area").toggleClass("on");
    });
  },[]);
  return (
    <section className="sub-area">

      <div className="comm-title">
        <h2>women</h2>
      </div>

      <div className="sort-box">
        <button type="button" className="filter-btn"><FontAwesomeIcon icon={faFilter} /></button>
        <select name="aa" id="aa">
          <option value="1">정렬 기준</option>
          <option value="2">추천순</option>
          <option value="3">인기순</option>
          <option value="4">최신순</option>
        </select>
      </div> {/* sort-box */}

      <div className="item-area">
        <div className="filter">
          <div className="filter-list">
            <p className="opt-tit">아이콘</p>
            <div className="opt-box">
              <ul>
                <li>
                  <label htmlFor="optIcon1" className="chk-box">
                    <input type="checkbox" name="optIcon1" id="optIcon1" />
                    <span className="chk"></span>
                    척테일러올스타
                  </label>
                </li>
                <li>
                  <label htmlFor="optIcon2" className="chk-box">
                    <input type="checkbox" name="optIcon2" id="optIcon2" />
                    <span className="chk"></span>
                    척 70
                  </label>
                </li>
                <li>
                  <label htmlFor="optIcon3" className="chk-box">
                    <input type="checkbox" name="optIcon3" id="optIcon3" />
                    <span className="chk"></span>
                    런스타
                  </label>
                </li>
                <li>
                  <label htmlFor="optIcon4" className="chk-box">
                    <input type="checkbox" name="optIcon4" id="optIcon4" />
                    <span className="chk"></span>
                    원스타
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="filter-list">
            <p className="opt-tit">가격대</p>
            <div className="opt-box">
              <ul>
                <li>
                  <label htmlFor="price1" className="chk-box">
                    <input type="checkbox" name="price1" id="price1" />
                    <span className="chk"></span>
                    0 - 50,000원
                  </label>
                </li>
                <li>
                  <label htmlFor="price2" className="chk-box">
                    <input type="checkbox" name="price2" id="price2" />
                    <span className="chk"></span>
                    50,000 - 100,000원
                  </label>
                </li>
                <li>
                  <label htmlFor="price3" className="chk-box">
                    <input type="checkbox" name="price3" id="price3" />
                    <span className="chk"></span>
                    100,000 - 150,000원
                  </label>
                </li>
                <li>
                  <label htmlFor="price4" className="chk-box">
                    <input type="checkbox" name="price4" id="price4" />
                    <span className="chk"></span>
                    150,000 - 200,000원
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div> {/* filter */}

        <div className="item-inner col-4">
          <ul>
            {kAllData.map((v,i) => (
              <li key={i}>
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
              </li>
            ))}
          </ul>
        </div> {/* col-4 */}

      </div> {/* content-inner */}
    </section>
  );
}