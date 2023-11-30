import { nItemData } from "../data/new_item";



export function All() {
  return (
    <section className="sub-area">

      <div className="comm-title">
        <h2>men</h2>
      </div>

      <div className="sort-box">
        <button className="filter-btn">필터 숨기기</button>
        <select name="aa" id="aa">
          <option value="1">정렬 기준</option>
          <option value="2">추천순</option>
          <option value="3">인기순</option>
          <option value="4">최신순</option>
        </select>
      </div> {/* sort-box */}

      <div className="content-inner">
        <div className="filter">
          <div className="filter-list">
            <p className="opt-tit">아이콘</p>
            <div className="opt-box">
              <ul>
                <li>
                  <input type="checkbox" name="optIcon1" id="optIcon1" />
                  <label htmlFor="optIcon1">척테일러올스타</label>
                </li>
                <li>
                  <input type="checkbox" name="optIcon2" id="optIcon2" />
                  <label htmlFor="optIcon2">척 70</label>
                </li>
                <li>
                  <input type="checkbox" name="optIcon3" id="optIcon3" />
                  <label htmlFor="optIcon3">런스타</label>
                </li>
                <li>
                  <input type="checkbox" name="optIcon4" id="optIcon4" />
                  <label htmlFor="optIcon4">원스타</label>
                </li>
                <li>
                  <input type="checkbox" name="optIcon5" id="optIcon5" />
                  <label htmlFor="optIcon5">잭퍼셀</label>
                </li>
              </ul>
            </div>
          </div>
        </div> {/* filter */}

        <div className="col-4">
          <ul>
            {nItemData.map((v,i) => (
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