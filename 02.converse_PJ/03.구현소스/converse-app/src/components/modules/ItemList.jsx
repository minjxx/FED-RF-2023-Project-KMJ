import { useEffect } from "react";
// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { allData } from "../data/all_data";

// 제이쿼리 불러오기
import $ from "jquery";
import { Link } from "react-router-dom";

export function ItemList({ cat }) {
  // console.log(cat);

  const selData = allData[cat];
  console.log('데이터',selData);

  useEffect(() => {
    // 필터 타이틀 클릭했을때 필터 리스트박스 클래스 on넣기
    $(".opt-tit").click(function () {
      $(this).toggleClass("on");
      $(this).siblings(".opt-box").slideToggle("fast");
    });
    // 필터 숨기기 버튼 클릭했을때 on 들어오게 하기
    $(".filter-btn").click(function () {
      $(this).toggleClass("on");
      $(this).parent(".sort-box").siblings(".item-area").toggleClass("on");
    });
  }, []);

  // 리턴코드 /////////////////////
  return (
    <>
      <section className="sub-area">
        <div className="comm-title">
          <h2>{cat}</h2>
        </div>
        <div className="sort-box">
          <button type="button" className="filter-btn">
            <FontAwesomeIcon icon={faFilter} />
          </button>
          <select name="aa" id="aa">
            <option value="1">정렬 기준</option>
            <option value="2">오름차순</option>
            <option value="3">내림차순</option>
          </select>
        </div>
        {/* sort-box 끝 */}
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
                      <span className="chk"></span>척 70
                    </label>
                  </li>
                  <li>
                    <label htmlFor="optIcon3" className="chk-box">
                      <input type="checkbox" name="optIcon3" id="optIcon3" />
                      <span className="chk"></span>
                      플랫폼
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
          </div>
          {/* filter 끝 */}
          <div className="item-inner col-4 mcol-2">
            <ul>{<MakeList data={selData} />}</ul>
          </div>
          {/* col-4 끝 */}
        </div>
        {/* content-inner 끝 */}
      </section>
    </>
  );
}

// 하위 컴포넌트 //////
function MakeList({data}){
//   console.log(data);
  return data.map((v, i) => (
    <li key={i}>
        <div className="img-sec">
          <div className="img-wrap">
            <a href=""><img src={v.imgSrc} alt="상품사진" /></a>
          </div>
          <span className="ico"><img src="./images/common/icon_cart.png" alt="장바구니" /></span>
        </div>
        <div className="prod-info-box">
          <div className="prod-cate">{v.cateName}</div>
          <p className="prod-name"><a href="">{v.itemName}</a></p>
          {
            // 데이터에 salePrice 있으면 할인율 나오고 없으면 안나오게
            v.salePrice ? (
              <div className="price-box sale">
                <div className="prod-price">
                  {v.itemPrice}<em className="price-unit">원</em>
                </div>
                <div className="sale-box">
                  <span className="per">{v.percent}<em>%</em></span>
                  <span className="sale-price">{v.salePrice}<em className="price-unit">원</em></span>
                </div>
              </div>
            ) : (
              <div className="prod-price">
                {v.itemPrice}<em className="price-unit">원</em>
              </div>
            )
          }
        </div>
    </li>
  ));
};
