// 컨버스 로그인 css 불러오기
import { Link } from "react-router-dom";
// import "../../css/notice.css";

// 컨텍스트 API를 사용하는 컴포넌트 파일에서 불러옴!
import { cvCon } from "../modules/cvContext";
import { useContext } from "react";

export function Notice() {

  // 컨텍스트 API 사용하기
  const myCon = useContext(cvCon);

  return (
    <>
      <section className="sub-area">
        <h2>공지사항!!!!</h2>
      </section>
    </>
  );
}