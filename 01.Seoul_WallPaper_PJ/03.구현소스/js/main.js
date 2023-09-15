/* main.js */

// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),

    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),

    // 바운딩top값 리턴함수
    getBCR: (ele) => ele.getBoundingClientRect().top,
}; /////// domFn 객체 /////////////

/********************************************* 
    함수 : scrTopBtn
    기능 : 사이트 탑버튼 (클릭시 페이지 최상단으로 이동)
*********************************************/
let scrTopBtn = domFn.qs("#topBtn");
// console.log('탑버튼:',scrTopBtn);

scrTopBtn.addEventListener("click", (e) => {
    // 기본기능 막기 : preventDefault()
    e.preventDefault();
    // 페이지 이동하기 : scrollTo()
    window.scrollTo({ top: 0, behavior: "smooth" });
}); 
//////////////// scrTopBtn ///////////////////



// [ 3번째 영역에 도달한 경우 내용을 가로방향 이동하기 ]
// 이벤트 대상: window
// 이벤트 종류: scroll
// 위치대상: .tpg -> 스티키박스를 싸고있는 부모박스
const tpg = domFn.qs(".con1");
// 움직일대상: .slidePg>ul
const target = domFn.qs(".slidePg>ul");
// 고정시키는 마지막대상 : .slidePg>ul>li:last-child
const slideLast = domFn.qs(".slidePg>ul>li:last-child");

// 광휠상태변수(0-허용,1-금지)
let stsWheel = 0;
// 휠제어시간
const TIME_WHEEL = 160;
// 휠단위수 (휠할때 증감하는수)
let numWheel = 0;

// 윈도우 이벤트 걸기
domFn.addEvt(window, "scroll", moveSlide);

function moveSlide() {

    // 0. 휠이벤트 발생수 조절하기(광휠금지)
    if(stsWheel) return; // 막기
    stsWheel = 1; // 잠금!
    setTimeout(()=>stsWheel=0,TIME_WHEEL); // 해제

    // 1. 스티키 부모박스 바운딩top값
    let bTop = domFn.getBCR(tpg);
    console.log('나야나!',bTop);

    // 2. 바운딩값으로  대상 left위치 변경하기
    // 움직일대상: 스티키박스 -> .slidePg>ul

    // (1) 윗쪽(0초과)일때 처음위치 재설정하기
    if (bTop > 0) {
        target.style.left = "0px";
    }
    // (2) 움직이기시작은 바운딩값이 0이하일때부터!!!
    // 한계는 -3000px
    else if (bTop <= 0 && bTop >= -1600) {
        target.style.left = bTop + "px";
    }
    else if (bTop <= -1600 && bTop >= -1600) {
        // slideLast.classList.add('on');
    }
    // (3) 마지막 한계 이후엔 한계값으로 셋팅!
    else {
        target.style.left = "-1600px";
    }
    
} //////////// moveSlide 함수 //////////////
