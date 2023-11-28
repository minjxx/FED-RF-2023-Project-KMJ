import { FooterArea } from "./FooterArea";
import { MainArea } from "./MainArea";
import { TopArea } from "./TopArea";
import { cvCon } from "../modules/cvContext";
import { useCallback, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Layout(){
  const [mode,setMode] = useState(0);
  const chgMode = v => setMode(v);

  useLayoutEffect(()=>{
    window.scrollTo(0,0);
  })

  // 라우터 이동객체설정
  const goNav = useNavigate();

  // 라우터 이동함수 : pgName - 페이지이름 / param - 전달값
  const chgPage = useCallback((pgName,param) => goNav(pgName,param),[]);

  return(
    <cvCon.Provider value={{mode,chgMode,chgPage}}>
      <TopArea chgPageFn={chgPage} />
      <MainArea />
      <FooterArea />
    </cvCon.Provider>
  );
}