/* main.js */

// 모듈 불러오기 ///////
// DOM함수 모듈
import dFn from "./dom.js";

// trend 탭 상품 영역
$(function() {
    let tabBtn = $(".main-trend .tab-btn > ul > li"); //버튼 설정
    let tabCont = $(".main-trend .tab-cont .tab-box"); //콘텐츠 설정
    tabCont.hide().eq(0).show(); //첫번째 콘텐츠만 보이게 설정

    tabBtn.click(function(){
        const index = $(this).index(); //클릭한 번호를 저장
        // console.log(index);
        $(this).addClass("active").siblings().removeClass("active"); //내가 클릭한 버튼에 클래스를 추가하고 나머지 버튼은 삭제
        tabCont.eq(index).show().siblings().hide(); //내가 클릭한 버튼의 콘텐츠는 보여주고 나머지는 숨김
    });
});

/////////////////////////////////////
/// 인트로 동영상 클릭시 플레이하기 ////
// 대상: .intro-mv-img
// 이벤트: click
// -> 가상요소 플레이버튼 클릭시
// 이벤트 버블링으로 본 박스가 반응함!
// 1. 대상 선정하기
const mvBox = dFn.qs(".intro-mv-img");

// 2. 이벤트 설정하기
dFn.addEvt(mvBox, "click", showMv);

// 이벤트연결 상태변수(한번만 실행키위한 변수)
let stsShowMv = 0;

// 3. 함수만들기
function showMv() {
  if (stsShowMv) return; 
  stsShowMv = 1;

  // 동영상 넣기
  // 대상: 나자신(.intro-mv-img)
  this.innerHTML = `
    <video src='./images/main/main_video.mp4' autoplay controls></video>
  `;

  // 가상요소 플레이버튼 없애기위해 .off지우기
  this.classList.remove("off");
} ///////// showMv 함수 ///////////

// 메인 비주얼 슬라이드
const mainVisualSwiper = new Swiper(".main-visual.swiper-container", {
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    effect: "fade",
    loop: true,
    slidesPerView: 1,
    navigation:{
        nextEl:".main-visual .next-btn", 
        prevEl:".main-visual .prev-btn",
    },
});

// 브랜드 배너 슬라이드
const bestSwiper = new Swiper(".main-best .swiper-container", {
    slidesPerView: 3.8,
    spaceBetween: 40,
    pagination: {
        el: ".main-best .swiper-pagination",
        type:'progressbar',
    },
    navigation:{
        nextEl:".main-best .next-btn", 
        prevEl:".main-best .prev-btn",
    },

});

// 트렌드 영역 카테고리 슬라이드
const trCateSwiper = new Swiper(".main-trend .swiper-container", {
    slidesPerView: 'auto',
    spaceBetween: 15,
});

// 브랜드 배너 슬라이드
const brandSwiper = new Swiper(".main-brand .swiper-container", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 25,
    loop: true,
    pagination: {
        el: ".main-brand .swiper-pagination",
        clickable: true,
    },
    navigation:{
        nextEl:".main-brand .next-btn", 
        prevEl:".main-brand .prev-btn",
    },

});
// 혜택 배너 슬라이드
const benefitSwiper = new Swiper(".main-benefit .swiper-container", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1,
});

//////////////////////////////////////////////////////