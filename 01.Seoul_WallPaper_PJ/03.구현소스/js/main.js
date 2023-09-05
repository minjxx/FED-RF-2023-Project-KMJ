/* main.js */


// 공통 DOM 선택함수
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);

/********************************************* 
    함수 : scrTopBtn
    기능 : 사이트 탑버튼 (클릭시 페이지 최상단으로 이동)
*********************************************/
let scrTopBtn = qs('#topBtn');
// console.log('탑버튼:',scrTopBtn);

scrTopBtn.addEventListener('click',(e)=>{
    // 기본기능 막기 : preventDefault()
    e.preventDefault();
    // 페이지 이동하기 : scrollTo()
    window.scrollTo({top:0,behavior:'smooth'});
}); // 
