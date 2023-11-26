import { SwiperBrand } from "../plugin/SwiperBrand";

export function BrandDisplay() {
  return (
    <>
      <section className="main-sec main-brand">
          <h2 className="section-title">what's hot&amp;new</h2>
          <div className="banner-wrap">
            <SwiperBrand />
            <button type="button" className="controller-btn next-btn"></button>
            <button type="button" className="controller-btn prev-btn"></button>
          </div>
        </section>
    </>
  );
} //////// BrandDisplay 컴포넌트 ///////
