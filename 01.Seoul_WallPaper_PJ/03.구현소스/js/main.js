/* main.js */

// 모듈 불러오기 ///////
// DOM함수 모듈
import dFn from "./dom.js";
// 부드러운 스크롤 모듈
import { startSS, setPos } from "./smoothScroll23.js";


// 부드러운 스크롤 적용 //////////
startSS();

// 0. 새로고치면 스크롤바 위치캐싱후 맨위로 이동
setTimeout(() => {
  // 윈도우 스크롤 맨위로!
  window.scrollTo(0, 0);
  // 부드러운 스크롤 위치값 반영!
  setPos(0);
  // 안하면 원래 위치로 스크롤시 튐!
}, 400);
// 0. 스크롤바 트랙을 잡고 위치이동시 위치값 반영
dFn.addEvt(window, "mouseup", () => setPos(window.scrollY));
//////// mouseup /////////////

// 0. 키보드 방향키 이동시 위치값 반영
dFn.addEvt(window, "keyup", () => setPos(window.scrollY));
//////// mouseup /////////////



/********************************************* 
    함수 : scrTopBtn
    기능 : 사이트 탑버튼 (클릭시 페이지 최상단으로 이동)
*********************************************/
let scrTopBtn = dFn.qs("#topBtn");
// console.log('탑버튼:',scrTopBtn);

scrTopBtn.addEventListener("click", (e) => {
    // 기본기능 막기 : preventDefault()
    e.preventDefault();
    // 페이지 이동하기 : scrollTo()
    window.scrollTo({ top: 0, behavior: "smooth" });
}); 
//////////////// scrTopBtn ///////////////////


// [ gnb메뉴에 마우스 오버시 header에 .bgWhite 클래스 넣어서 흰색배경 나오게하기 ]
const gnbHover = dFn.qs("#gnb");
const headerBgChg = dFn.qs("#header");

dFn.addEvt(gnbHover,'mouseover',()=>{
    headerBgChg.classList.add('bgWhite');
});
dFn.addEvt(gnbHover,'mouseleave',()=>{
    headerBgChg.classList.remove('bgWhite');
});
//////////////////////////////////////////////////////


// [ 메인 검색 버튼 클릭시 .on 클래스 넣어서 검색영역 input 넓어지게하기 ]
const topSrchBtn = dFn.qs(".serach-icon");
const srchWidth = dFn.qs(".search-box .area");
dFn.addEvt(topSrchBtn,'click',()=>{
    srchWidth.classList.add('on');
    topSrchBtn.classList.toggle('on');
});
//////////////////////////////////////////////////////


// [ 햄버거버튼 클릭시 오른쪽에서 메뉴 노출 ]
const allMenuBtn = dFn.qs(".allMenuBtn");
const allMenuWrap = dFn.qs(".allMenuWrap");
const layerBg = dFn.qs(".allMenuWrap .layerBg");
const rightBox = dFn.qs(".right-box");

dFn.addEvt(allMenuBtn,'click',()=>{
    allMenuWrap.classList.toggle('on');
    allMenuBtn.classList.toggle('on');
    rightBox.classList.toggle('on');
});
dFn.addEvt(layerBg,'click',()=>{
    allMenuWrap.classList.toggle('on');
    allMenuBtn.classList.toggle('on');
    rightBox.classList.toggle('on');
});
/////////////////////////////////////////////


// [ 오른쪽 메뉴에 하위메뉴 노출 ]
const allMenuList = dFn.qsa(".allMenuWrap .allMenu > li");

for (let x of allMenuList) {
    // console.log('x:',x);

    // 오버시 //////////////
    x.onmouseover = () => {
        // console.log('오버:',x);
        // 1. 대상: 하위의 div
        let depthMenu = x.querySelector("div");

        // 2. 하위 ol요소의 높이값 알아오기
        let hv = depthMenu.querySelector("ul").offsetHeight;
        // console.log('높이값:',hv);

        // 3. 높이값 변경
        depthMenu.style.height = hv + "px";
        depthMenu.style.transition = "height .4s ease-out";
    }; ///////// mouseover ///////

    // 아웃시 ///////////////
    x.onmouseout = () => {
        // console.log('아웃:',x);
        // 1. 대상: 하위의 div
        let depthMenu = x.querySelector(".dep2");
        // 2. 높이값 변경
        depthMenu.style.height = "0";
    }; ///////// mouseout ///////
} /////////// for of ///////////
//////////////////////////////////////////////



// [ 메인페이지 콘텐츠1 4번째 영역에 도달한 경우 내용을 가로방향 이동하기 ]
// 이벤트 대상: window
// 이벤트 종류: scroll
// 위치대상: .tpg -> 스티키박스를 싸고있는 부모박스
const tpg = dFn.qs(".con1");
// 움직일대상: .slidePg>ul
const target = dFn.qs(".slidePg>ul");
// 고정시키는 마지막대상 : .slidePg .search-wrap
const searchSlide = dFn.qs(".slidePg .search-card");

// 광휠상태변수(0-허용,1-금지)
let stsWheel = 0;
// 휠제어시간
const TIME_WHEEL = 100;
// 휠단위수 (휠할때 증감하는수)
let numWheel = 0;

let winH = window.innerHeight;

// 윈도우 이벤트 걸기
dFn.addEvt(window, "scroll", moveSlide);

function moveSlide() {

    // 0. 휠이벤트 발생수 조절하기(광휠금지)
    if(stsWheel) return; // 막기
    stsWheel = 1; // 잠금!
    setTimeout(()=>stsWheel=0,TIME_WHEEL); // 해제

    // 1. 스티키 부모박스 바운딩top값
    let bTop = dFn.getBCR(tpg);
    // console.log('나야나!',bTop);

    // 2. 바운딩값으로  대상 left위치 변경하기
    // 움직일대상: 스티키박스 -> .slidePg>ul

    // (1) 윗쪽(0초과)일때 처음위치 재설정하기
    if (bTop > 0) {
        target.style.left = "0px";
    }
    // (2) 움직이기시작은 바운딩값이 0이하일때부터!!!
    // 한계는 -1600px
    else if (bTop <= 0 && bTop >= -winH*1.6) {
        target.style.left = bTop + "px";
    }
    else if (bTop < -winH*1.6 && bTop > -winH*2) {
        searchSlide.classList.remove('on');
    }
    else if (bTop <= -winH*2 && bTop >= -winH*2.5) {
        searchSlide.classList.add('on');
    }
    // (3) 마지막 한계 이후엔 한계값으로 셋팅!
    else {
        target.style.left =  -winH*2.5+"px";
    }
    
} //////////// moveSlide 함수 //////////////
///////////////////////////////////////////////////////////


// [ 따라다니는 마우스커서 ] ///////////////////////////////
// 1. 대상선정 : 
// (1) 움직일 대상 : .cuser-mover
const mover = dFn.qs('.cuser-mover');
// (2) 이벤트 대상 : document.body
const myBody = document.body;
// 무버 크기의 절반계산
let gap = mover.clientWidth/2;
//선택요소의 크기 JS
//width 는 clientWidth, height는 clientHeight
// console.log('무버width:',gap);

// 2. 이벤트 대상에 마우스 무드 이벤트가 적용될때 
// 무버가 따라다니게 기능구현
myBody.onmousemove = e => { // e - 이벤트 전달변수
    // 1. 위치값 가져오기 (박스중앙위치로 보정)
    let posx = e.pageX - gap;
    let posy = e.pageY - gap;
    // let posy = e.clientY - gap;
    // -> 만약 .cuser-mover가 fixed 포지션이면 브라우저 화면에서의 위치인 clientY를 사용한다!

    // 2. 무버에 위치값 적용하기
    mover.style.top = posy + 'px';
    mover.style.left = posx + 'px';

    // console.log('pageX:',e.pageX,'/ pageY:',e.pageY);
    // console.log('screenX:',e.screenX,'/ screenY:',e.screenY);
    // console.log('offsetX:',e.offsetX,'/ offsetY:',e.offsetY);
    // console.log('clientX:',e.clientX,'/ clientY:',e.clientY);

}; //onmousemove

// 이벤트 구역을 들어올때만 보이기 / 나가면 숨기기
myBody.onmouseenter = () => {
    mover.style.opacity = .5;
}; // mouseenter
myBody.onmouseleave = () => {
    mover.style.opacity = 0;
}; // mouseleave

// [3] a요소에 오버시 원 크게만들기
// 대상 : .link
const link = dFn.qsa('a');

// 한번에 셋팅하기
link.forEach(ele=>{
    // a요소에 마우스 들어올때
    ele.onmouseenter = () => mover.style.transform = 'scale(1.5)';
    // a요소에 마우스 나갈때
    ele.onmouseleave = () => mover.style.transform = 'scale(1)';
}); // forEach

// 푸터 영역만 마우스 커서 색상 변경
const footCursor = dFn.qsa('.footer-area');
// 한번에 셋팅하기
footCursor.forEach(ele=>{
    ele.onmouseenter = () => mover.style.backgroundColor = '#fff';
    ele.onmouseleave = () => mover.style.backgroundColor = 'var(--main-black)';
}); // forEach
//////////////////////////////////////////////////////////////////