// 메인 CSS불러오기
import "../../css/main.css";
import { BestItem } from "../modules/BestItem";
import { Benefit } from "../modules/Benefit";
import { BrandDisplay } from "../modules/BrandDisplay";
import { MainBanner } from "../modules/MainBanner";
import { MainVideo } from "../modules/MainVideo";
import { NewItem } from "../modules/NewItem";
import { Trend } from "../modules/Trend";
import { LoopText } from "../modules/LoopText";

export function Main() {
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
        <LoopText />

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
