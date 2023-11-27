import { nItemData } from "../data/new_item";

export function NewItem() {
  return (
    <>
      <section className="main-sec main-new">
        <h2 className="section-title">new arrivals</h2>
        <div className="col-4 tab-cont">
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
        </div>
        <div className="bottom-btn">
          <a href="#" className="morebtn">
            view more
          </a>
        </div>
      </section>
    </>
  );
}
