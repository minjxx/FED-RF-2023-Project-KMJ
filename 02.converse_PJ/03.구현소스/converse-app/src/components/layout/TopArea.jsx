// 제이쿼리
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";

export function TopArea() {

  // [ 대상 : header ] //////////////////////////////////////
  const header = $(".header");
  // console.log(header);
  // 1. 스크롤 내리면 header에 on클래스 넣어서 흰색배경 나오게하기
  let headerHeight = header.innerHeight();
  // console.log(headerHeight);
  $(window).scroll(function(){
    let windowTop = window.scrollTo();
    // console.log(windowTop);
  });

  $(".header").on('mouseover',()=> {
    console.log('a');
  })

  $(".header").mouseover(function() {
    console.log('aaa');
    $(this).addClass('on');
  });
  $(".header").mouseleave(function() {
    console.log('bbb');
    $(this).addClass('on');
  });

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
              <li className="menu-list">
                <a href="#">men</a>
                <div className="subMenu-wrap">
                  <div className="subMenu">
                    <strong className="depth1_title">men</strong>
                    <ul className="depth2">
                      <li className="depth2_list">
                        <a href="#">ALL</a>
                      </li>
                      <li className="depth2_list">
                        <a href="#">NEW</a>
                      </li>
                      <li className="depth2_list">
                        <a href="#">BEST</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="menu-list">
                <a href="#">women</a>
                <div className="subMenu-wrap">
                  <div className="subMenu">
                    <strong className="depth1_title">women</strong>
                    <ul className="depth2">
                      <li className="depth2_list">
                        <a href="#">ALL</a>
                      </li>
                      <li className="depth2_list">
                        <a href="#">NEW</a>
                      </li>
                      <li className="depth2_list">
                        <a href="#">BEST</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="menu-list">
                <a href="#">kids</a>
                <div className="subMenu-wrap">
                  <div className="subMenu">
                    <strong className="depth1_title">kids</strong>
                    <ul className="depth2">
                      <li className="depth2_list">
                        <a href="#">ALL</a>
                      </li>
                      <li className="depth2_list">
                        <a href="#">NEW</a>
                      </li>
                      <li className="depth2_list">
                        <a href="#">BEST</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="menu-list">
                <a href="#">event</a>
              </li>
              <li className="menu-list">
                <a href="#">sale</a>
              </li>
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
