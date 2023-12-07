import { Link } from "react-router-dom";

export function LoopText() {
  return (
    <>
      <section className="main-loop">
        <h2 className="section-title invisible">텍스트 배너</h2>
        <div className="loop-area">
          <Link to="/kids" className="loop-wrap">
            <span className="loop-text">컨버스가 제안하는 따뜻하고 스타일리쉬한 윈터 슈즈 CLICK !</span>
            <span className="loop-text">컨버스가 제안하는 따뜻하고 스타일리쉬한 윈터 슈즈 CLICK !</span>
            <span className="loop-text">컨버스가 제안하는 따뜻하고 스타일리쉬한 윈터 슈즈 CLICK !</span>
            <span className="loop-text">컨버스가 제안하는 따뜻하고 스타일리쉬한 윈터 슈즈 CLICK !</span>
          </Link>
        </div>
      </section>
    </>
  );
}
