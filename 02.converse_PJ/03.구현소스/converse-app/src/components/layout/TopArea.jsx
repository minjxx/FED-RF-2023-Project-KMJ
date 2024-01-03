// 제이쿼리
import $ from "jquery";

import { useContext, useEffect } from "react";

import { Link } from "react-router-dom";

// GNB 데이터
import { gnbMenu } from "../data/gnb";

import { cvCon } from "../modules/cvContext";
import { Logo } from "../modules/Logo";

export function TopArea() {
  const myCon = useContext(cvCon);

  useEffect(() => {
    const header = $(".header");
    const headerHeight = header.innerHeight();
    $(window).scroll(function () {
      let windowTop = $(window).scrollTop();
      if (windowTop >= headerHeight) {
        header.addClass("bgWhite");
      } else {
        header.removeClass("bgWhite");
      }
    });

    header.mouseover(function () {
      $(this).addClass("on");
    });
    header.mouseleave(function () {
      $(this).removeClass("on");
    });

    // 모바일
    $(".hambtn").click(function(){
      $(this).toggleClass("on");
      $(".mo-menu").toggleClass("on");
    });
    $(".mo-menu-list .menu-list").click(function(){
      $(".mo-menu").toggleClass("on");
      $(".hambtn").toggleClass("on");
    });
    $(".mo-icon a").click(function(){
      $(".mo-menu").toggleClass("on");
      $(".hambtn").toggleClass("on");
    });

  }, []);

  return (
    <>
      {/* <header className="header" style={myCon.mode?{position:''}:{position:'sticky',boxShadow:'0 3px 10px rgba(0, 0, 0, .1)',backgroundColor:'#fff'}}> */}
      <header className={myCon.mode ? "header" : "header sub"}>
        <div className="header-wrap">
          <Logo logoStyle="top" />
          <nav className="pc-nav">
            <ul className="menu-list-wrap">
              {/* gnb메뉴 데이터기반으로 li태그 생성 */}
              {gnbMenu.map((v, i) => (
                <li className="menu-list" key={i}>
                  {
                    <Link to={v.link}>{v.txt}</Link>
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
                                <Link to={v.link}>{v.txt}</Link>
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
          <div className="top-icon log-icon">
            <div className="top-search">
              <input type="text" className="top-input-box" placeholder="Search" style={myCon.mode ? { backgroundColor: "" } : { backgroundColor: "var(--gray-color)" }} />
              <button className="search-icon">검색</button>
            </div>
            <Link to="/login" className="user"></Link>
            <Link to="" className="cart">
              <span className="cart-cnt">0</span>
            </Link>
          </div>
          {/* 모바일용 햄버거 버튼 */}
          <div className="hambtn">
            <span></span>
            <span></span>
          </div>
          {/* 모바일 메뉴 */}
          <div className="mo-menu">
            <div className="layerBg"></div>
            <div className="menu-box">
              <div className="mo-icon log-icon">
                <Link to="/login" className="user"></Link>
                <Link to="" className="cart">
                  <span className="cart-cnt">0</span>
                </Link>
              </div>
              <div className="menu-inner">
                <div className="schBox">
                  <input type="text" placeholder="Search" />
                  <button type="submit" className="search-icon">검색</button>
                </div>
                <div className="inner">
                  <ul className="mo-menu-list">
                    {/* gnb메뉴 데이터기반으로 li태그 생성 */}
                    {gnbMenu.map((v, i) => (
                      <li className="menu-list" key={i}>
                        {
                          <Link to={v.link}>{v.txt}</Link>
                        }
                        {
                          // 서브메뉴 데이터가 있으면 하위 그리기
                          v.sub && (
                            <div className="mo-sub">
                              <ul className="depth2">
                                {v.sub.map((v, i) => (
                                  <li className="depth2_list" key={i}>
                                    <Link to={v.link}>{v.txt}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        }
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
