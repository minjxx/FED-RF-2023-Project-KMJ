// 로고 컴포넌트
import { useContext } from "react";
import { cvCon } from "./cvContext";

export const Logo = (props) => {

  const myCon = useContext(cvCon);

  return (
    <h1 
    className="logo" 
    onClick={()=>myCon.chgPage('/',{})}>
      <img src="./images/common/logo_black.png" alt="컨버스" />
    </h1>
  );
};
