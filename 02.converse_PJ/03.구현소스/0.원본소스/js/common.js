/* main.js */

// 모듈 불러오기 ///////
// DOM함수 모듈
import dFn from "./dom.js";

// [ 대상 : header ] //////////////////////////////////////
const header = dFn.qs(".header");
// 1. 스크롤 내리면 header에 on클래스 넣어서 흰색배경 나오게하기]
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
// 2. gnb메뉴에 마우스 오버시 header에 .on 클래스 넣어서 흰색배경 나오게하기 ]
dFn.addEvt(header, "mouseover", () => {
  header.classList.add("on");
});
dFn.addEvt(header, "mouseleave", () => {
  header.classList.remove("on");
});
/////////////////////////////////////////////////////////

// 탑버튼 ////////////////////////
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $(".topBtn").addClass("on");
  } else {
    $(".topBtn").removeClass("on");
  }
});
$(".topBtn").click(function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
