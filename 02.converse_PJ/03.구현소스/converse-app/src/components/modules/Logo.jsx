// 로고 컴포넌트
import { useContext } from "react";
import { cvCon } from "./cvContext";

export const Logo = (props) => {

  const myCon = useContext(cvCon);

  // 스타일 적용
  const myStyle = {
    top:{
      width: "132px",
      cursor: "pointer"
    },
    bottom:{
      width: "155px",
      marginBottom: "45px",
      cursor: "pointer"
    }
  };

  return (
    <h1 
    className="logo"
    style={myStyle[props.logoStyle]}
    onClick={()=>myCon.chgPage('/',{})}>
      <img src="./images/common/logo_black.png" alt="컨버스" />
    </h1>
  );
};
