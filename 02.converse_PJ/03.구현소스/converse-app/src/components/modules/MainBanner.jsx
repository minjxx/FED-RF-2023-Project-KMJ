import { SwiperVisual } from "../plugin/SwiperVisual";

export function MainBanner() {
  return (
    <>
      <section className="main-visual">
        <h2 className="section-title invisible">메인배너</h2>
        <SwiperVisual />
      
        {/* 원본화살표 */}
        {/* <button type="button" className="controller-btn next-btn"></button>
        <button type="button" className="controller-btn prev-btn"></button> */}
      </section>
    </>
  );
}
