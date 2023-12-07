import { Link } from "react-router-dom";
import { nItemData } from "../data/new_item";

export function NewItem() {
  return (
    <>
      <section className="main-sec main-new mPd20">
        <h2 className="section-title">new arrivals</h2>
        <div className="col-4 mcol-2 tab-cont">
          <ul>
            {nItemData.map((v,i) => (
              <li key={i}>
                <div className="img-wrap">
                <Link to="women"><img src={v.imgSrc} alt="상품사진" /></Link>
                </div>
                <div className="prod-info-box">
                  <div className="prod-cate">{v.cateName}</div>
                  <p className="prod-name"><Link to="women">{v.itemName}</Link></p>
                  <div className="prod-price">
                    {v.itemPrice}
                    <em className="price-unit">원</em>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bottom-btn">
          <Link to="/men" className="morebtn">
            view more
          </Link>
        </div>
      </section>
    </>
  );
}
