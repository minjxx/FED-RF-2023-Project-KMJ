// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { menAllData } from "../data/men_all_data";

export function All() {
  return (
    <section className="sub-area">

      <div className="comm-title">
        <h2>men</h2>
      </div>

      <div className="sort-box">
        <button type="button" className="filter-btn">필터 숨기기<FontAwesomeIcon icon={faFilter} /></button>
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
                    <span class="chk"></span>
                    척테일러올스타
                  </label>
                </li>
                <li>
                  <label htmlFor="optIcon2" className="chk-box">
                    <input type="checkbox" name="optIcon2" id="optIcon2" />
                    <span class="chk"></span>
                    척 70
                  </label>
                </li>
                <li>
                  <label htmlFor="optIcon3" className="chk-box">
                    <input type="checkbox" name="optIcon3" id="optIcon3" />
                    <span class="chk"></span>
                    런스타
                  </label>
                </li>
                <li>
                  <label htmlFor="optIcon4" className="chk-box">
                    <input type="checkbox" name="optIcon4" id="optIcon4" />
                    <span class="chk"></span>
                    원스타
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div> {/* filter */}

        <div className="item-inner col-4">
          <ul>
            {menAllData.map((v,i) => (
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