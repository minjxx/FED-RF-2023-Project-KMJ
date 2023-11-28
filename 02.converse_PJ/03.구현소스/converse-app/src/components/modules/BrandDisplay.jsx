import { SwiperBrand } from "../plugin/SwiperBrand";

export function BrandDisplay() {
  return (
    <>
      <section className="main-sec main-brand">
          <h2 className="section-title">what's hot&amp;new</h2>
          <div className="banner-wrap">
            <SwiperBrand />
          </div>
        </section>
    </>
  );
} //////// BrandDisplay 컴포넌트 ///////
