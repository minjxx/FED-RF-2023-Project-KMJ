// 메인 CSS불러오기
import "../../css/main.css";
import { BestItem } from "../modules/BestItem";
import { Benefit } from "../modules/Benefit";
import { BrandDisplay } from "../modules/BrandDisplay";
import { MainBanner } from "../modules/MainBanner";
import { MainVideo } from "../modules/MainVideo";
import { NewItem } from "../modules/NewItem";
import { Trend } from "../modules/Trend";

export function MainArea() {
  return (
    <>
      <main className="main">
        {/* main banner */}
        <MainBanner />

        {/* best item */}
        <BestItem />

        {/* new arrivals */}
        <NewItem />

        {/* loop text */}
        <section className="main-loop">
          <h2 className="section-title invisible">텍스트 배너</h2>
          <div>
            <a href="" className="loop-wrap">
              <span className="loop-text">컨버스가 제안하는 따뜻하고 스타일리쉬한 윈터 슈즈 CLICK !</span>
              <span className="loop-text">컨버스가 제안하는 따뜻하고 스타일리쉬한 윈터 슈즈 CLICK !</span>
              <span className="loop-text">컨버스가 제안하는 따뜻하고 스타일리쉬한 윈터 슈즈 CLICK !</span>
              <span className="loop-text">컨버스가 제안하는 따뜻하고 스타일리쉬한 윈터 슈즈 CLICK !</span>
            </a>
          </div>
        </section>

        {/* trend style */}
        <Trend />

        {/* video */}
        <MainVideo />

        {/* BrandDisplay */}
        <BrandDisplay />

        {/* Benefit */}
        <Benefit />
      </main>
    </>
  );
}
