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

import { cvCon } from "../modules/cvContext";
import { useContext, useEffect } from "react";

export function Main() {
  const myCon = useContext(cvCon);
  myCon.chgMode(1);

  useEffect(()=>{
    return(()=>{
      myCon.chgMode(0);
    })
  },[])

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
