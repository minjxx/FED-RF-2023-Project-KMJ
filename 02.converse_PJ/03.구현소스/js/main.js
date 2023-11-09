/* main.js */
/* main.js */

// 모듈 불러오기 ///////
// DOM함수 모듈
import dFn from "./dom.js";

/*******************************************/
/* 인트로 화면에서 숨겨져있다가 페이드인하는 js */
loadIntro();

function loadIntro() {
    const introFade = $(".intro-fade");
    //console.log(introFade);

    setTimeout(() => {
        introFade.fadeIn(1500);
    }, 1000);
}
/*******************************************/