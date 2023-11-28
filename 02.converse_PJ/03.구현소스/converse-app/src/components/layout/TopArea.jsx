// 제이쿼리
import $ from "jquery";

import { useEffect } from "react";

import { Link } from "react-router-dom";

// GNB 데이터
import { gnbMenu } from "../data/gnb";

export function TopArea() {
  useEffect(() => {
    // [ 대상 : header ] //////////////////////////////////////
    const header = document.querySelector(".header");
    // console.log(header);
    // 1. 스크롤 내리면 header에 on클래스 넣어서 흰색배경 나오게하기
    let headerHeight = header.offsetHeight;
    // console.log(headerHeight);
    window.onscroll = function () {
      let windowTop = window.scrollY;
      // console.log(windowTop);
      if (windowTop >= headerHeight) {
        // 세로 스크롤값이 헤더높이값보다 크거나 같으면
        header.classList.add("bgWhite"); // 헤더에 on 을 추가
      } else {
        // 아니면 헤더에 on 을 제거
        header.classList.remove("bgWhite");
      }
    };

    $(".header").mouseover(function () {
      $(this).addClass("on");
    });
    $(".header").mouseleave(function () {
      $(this).removeClass("on");
    });
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-wrap">
          <h1 className="logo">
            <a href="/" className="logo-img">
              <img src="./images/common/logo_black.png" alt="컨버스" />
            </a>
          </h1>
          <nav className="pc-nav">
            <ul className="menu-list-wrap">
              {/* gnb메뉴 데이터기반으로 li태그 생성 */}
              {gnbMenu.map((v, i) => (
                <li className="menu-list" key={i}>
                  {
                    // 하위메뉴가 있으면 일반 a요소에 출력
                    // 없으면 Link 라우팅 출력
                    // v.sub ? (<a href="#">{v.txt}</a>) : (<Link to={v.link}>{v.txt}</Link>)
                    <a href={v.link}>{v.txt}</a>
                  }
                  {
                    // 서브메뉴 데이터가 있으면 하위 그리기
                    v.sub && (
                      <div className="subMenu-wrap">
                        <div className="subMenu">
                          <strong className="depth1_title">{v.txt}</strong>
                          <ul className="depth2">
                            {v.sub.map((v, i) => (
                              <li className="depth2_list" key={i}>
                                {/* <Link to={v.link}>{v.txt}</Link> */}
                                <a href={v.link}>{v.txt}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )
                  }
                </li>
              ))}
            </ul>
          </nav>
          <div className="top-icon">
            <div className="top-search">
              <input type="text" className="top-input-box" placeholder="Search" />
              <button className="search-icon">검색</button>
            </div>
            <a href="#" className="user"></a>
            <a href="#" className="cart">
              <span className="cart-cnt">0</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
