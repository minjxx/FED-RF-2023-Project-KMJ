import $ from "jquery";

import { SwiperTrendTab } from "../plugin/SwiperTrendTab";
import { tItemData } from "../data/trend_item";
import { useEffect, useState } from "react";

export function Trend() {

  const [itemCat,setItemCat] = useState("cont1");
  const chgItemCat = (txt) => setItemCat(txt);

  const selData = tItemData[itemCat];

  useEffect(()=>{
    // trend 탭 상품 영역
  $(function () {
    let tabBtn = $(".main-trend .tab-btn .swiper-slide"); //버튼 설정
    // let tabCont = $(".main-trend .tab-cont .tab-box"); //콘텐츠 설정
    tabBtn.eq(0).addClass("active"); // 첫번째 탭버튼 active 넣기
    // tabCont.hide().eq(0).show(); //첫번째 콘텐츠만 보이게 설정

    tabBtn.click(function () {
      //const index = $(this).index(); //클릭한 번호를 저장
      // console.log(index);
      $(this).addClass("active").siblings().removeClass("active"); //내가 클릭한 버튼에 클래스를 추가하고 나머지 버튼은 삭제
      // tabCont.eq(index).show().siblings().hide(); //내가 클릭한 버튼의 콘텐츠는 보여주고 나머지는 숨김
    });
    
  });
  },[])
  

  return (
    <>
      <section className="main-sec main-trend">
        <h2 className="section-title">trend style</h2>
        <div className="tab-wrap">
          <SwiperTrendTab chgItemCatFn={chgItemCat} />

          <div className="col-4 tab-cont">
            {/* 1 */}
            <div className="tab-box">
              <ul>
                {selData.map((v, i) => (
                  <li key={i}>
                    <a href="">
                      <div className="img-wrap">
                        <img src={v.imgSrc} alt="상품사진" />
                      </div>
                      <div className="prod-info-box">
                        <div className="prod-cate">{v.cateName}</div>
                        <p className="prod-name">
                          {v.itemName}
                        </p>
                        <div className="prod-price">
                          {v.itemPrice}<em className="price-unit">원</em>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
           </div>
        </div>
        {/* // tab-wrap */}
      </section>
    </>
  );
}
