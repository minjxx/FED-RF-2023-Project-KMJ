import { SwiperBestItem } from "../plugin/SwiperBestItem";

export function BestItem() {
  return (
    <>
      <section className="main-sec main-best">
        <h2 className="section-title">
          on-line
          <br />
          best item
        </h2>
        <div className="btn-box">
          <button type="button" className="item-btn prev-btn"></button>
          <button type="button" className="item-btn next-btn"></button>
        </div>

        <div className="best-wrap">
          <SwiperBestItem />
        </div>
      </section>
    </>
  );
}
