import { FooterArea } from "./FooterArea";
import { MainArea } from "./MainArea";
import { TopArea } from "./TopArea";
import { cvCon } from "../modules/cvContext";
import { useEffect, useLayoutEffect, useState } from "react";

export function Layout(){
  const [mode,setMode] = useState(0);
  const chgMode = v => setMode(v);

  useLayoutEffect(()=>{
    window.scrollTo(0,0);
  })

  return(
    <cvCon.Provider value={{mode,chgMode}}>
      <TopArea />
      <MainArea />
      <FooterArea />
    </cvCon.Provider>
  );
}