import { useEffect } from "react";

export function MainVideo() {
  useEffect(() => {

    /////////////////////////////////////
    /// 인트로 동영상 클릭시 플레이하기 ////
    // 대상: .intro-mv-img
    // 이벤트: click
    // -> 가상요소 플레이버튼 클릭시
    // 이벤트 버블링으로 본 박스가 반응함!
    // 1. 대상 선정하기
    const mvBox = document.querySelector(".intro-mv-img");
  
    // 2. 이벤트 설정하기
    // document.addEventListener(mvBox, "click", showMv);
  
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
  },[]);

  return (
    <>
      <section className="main-sec main-video">
        <h2 className="section-title invisible">홍보 영상</h2>
        <div className="flow-container">
          <div className="flow-wrap">
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
          </div>
        </div>
        <div className="intro-mv-img off">
          <img src="./images/main/video_thumbnail_img01.jpg" alt="영상 썸네일 이미지" />
          <button type="button" className="play-btn">
            <i className="fa-solid fa-play"></i> Play
          </button>
        </div>
        <div className="flow-container reverse">
          <div className="flow-wrap">
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
            <span className="flow-text">Converse Video</span>
          </div>
        </div>
      </section>
    </>
  );
} //////// MainVideo 컴포넌트 ///////
