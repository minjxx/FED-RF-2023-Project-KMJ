export function Main() {
  return (
    <>
      <section className="main-visual swiper-container">
        <h2 className="section-title invisible">메인배너</h2>
        
        <ul className="swiper-wrapper">
          <li className="swiper-slide">
            <span className="bg-circle"></span>
            <div className="main-title">
              <p>chuck taylor all star</p>
              <span className="bg-txt">all star</span>
            </div>
            <div className="shoes-img">
              <img src="./images/main/shoe01.png" alt="올스타" />
            </div>
            <a href="" className="morebtn">
              Shop now
            </a>
          </li>
          <li className="swiper-slide pf">
            <span className="bg-circle"></span>
            <div className="main-title">
              <p>platform sneakers</p>
              <span className="bg-txt">run star</span>
            </div>
            <div className="shoes-img">
              <img src="./images/main/shoe02.png" alt="런스타" />
            </div>
            <a href="" className="morebtn">
              Shop now
            </a>
          </li>
        </ul>
        <button type="button" className="controller-btn next-btn"></button>
        <button type="button" className="controller-btn prev-btn"></button>
      </section>
    </>
  );
} //////// Main 컴포넌트 ///////
