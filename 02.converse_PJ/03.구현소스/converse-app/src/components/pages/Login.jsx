// 컨버스 로그인 css 불러오기
import { Link } from "react-router-dom";
import "../../css/login.css";

// 컨텍스트 API를 사용하는 컴포넌트 파일에서 불러옴!
import { cvCon } from "../modules/cvContext";
import { useContext } from "react";

export function Login() {

  // 컨텍스트 API 사용하기
  const myCon = useContext(cvCon);

  return (
    <>
      <section className="sub-area">
        <div className="login-sec">
          <h2>로그인</h2>
          <div className="input-box">
            <input type="text" placeholder="아이디를 입력해주세요" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="비밀번호를 입력해주세요" />
          </div>
          <div className="findbtn">
            <Link to="">아이디 찾기</Link>
            <Link to="">비밀번호 찾기</Link>
          </div>
          <button className="loginbtn">로그인</button>
          <Link to="/member" className="joinbtn">회원가입</Link>
        </div>
      </section>
    </>
  );
}