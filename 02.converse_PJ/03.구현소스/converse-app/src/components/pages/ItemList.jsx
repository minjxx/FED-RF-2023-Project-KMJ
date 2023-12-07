import { useEffect, useRef, useState } from "react";
// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
// 상품 리스트 데이터 불러오기
import { allData } from "../data/all_data";
// 제이쿼리 불러오기
import $ from "jquery";
import { CartList } from "../modules/CartList";


export function ItemList({ cat }) {
  // console.log(cat);

  // 현재 컴포넌트 새로운 카테고리 상태여부를 위한 참조변수
  const chkSts = useRef(cat); // 이전카테고리를 항상 기억함

  const [selData,setSelData] = useState(allData[cat]);
  // console.log('데이터',selData);

  // 데이터 구성 상태변수 : [배열데이터,정렬상태]
  // 정렬상태값:0 -오름차순, 1- 내림차순, 2- 정렬전
  const [sortData,setSortData] = useState([selData,2]);

  
  //////////////////////////////
  // 체크박스 검색함수 //////////
  /////////////////////////////
  const chkSearch = (e) => {
    // 체크박스 아이디 : 검색항목의 값(alignment)
    const cid = e.target.id;

    // 체크박스 체크 여부 (true/false)
    const chked = e.target.checked;
    console.log('아이디:',cid,chked);

    // 기존 입력 데이터 가져오기
    // sortData의 첫번째 배열값
    let temp = sortData[0];
    // console.log(temp);

    // 결과집합배열변수 : 최종결과배열
    let lastList = [];

    // 체크박스 체크개수 세기 : 1개 초과시 배열합치기!
    let num = $('.chkhdn:checked').length;
    // console.log('체크개수:',num);

    if(chked){
      // 현재데이터 변수에 담기
      const nowList = selData.filter(v=>{
        if(v.alignment == cid) return true;
      }); ///////// filter /////////////////

      // 체크개수가 1초과일때 배열합치기
      if(num>1){ // 스프레드 연산자(...)사용!
        lastList = [...temp,...nowList];
      } /////// if /////////
      else{ // 하나일때
        lastList = nowList;
      }
    } //////////// if ////////////////
    // 체크박스가 false일때 데이터 지우기
    else{
      console.log('지울데이터:',cid);
      // for문 돌면서 배열데이터중 해당값을 지운다
      for(let i=0; i<temp.length;i++){
        // -> 삭제대상:
        // 데이터중 alignment 항목값이 아이디명과 같은것
        if(temp[i].alignment==cid){
          // 해당항목 지우기
          temp.splice(i,1);
          i--;
        } ///////// if /////////
      } //////////// for ////////////
      console.log('삭제처리된배열:',temp);

      // 결과처리
      lastList = temp;
    } /////// else /////////

    console.log('최종리스트',lastList);
    setSelData(lastList)

    // 결과 업데이트
    // setSortData([selData,2]);

  }; ////////////// chkSearch 함수 //////////

  //////////////////////////////
  // 리스트 정렬 함수 ///////////
  //////////////////////////////
  const sortList = (e) => {
    // 0 - 오름차순, 1- 내림차순
    const optVal = e.target.value;
    console.log('선택옵션:',optVal);

    // 재정렬할 데이터를 가져온다
    let temp = selData;//sortData[0];
    console.log('임시데이터',temp);

    temp.sort((a,b)=>{
      if(optVal == 1){
        return a.itemName==b.itemName?0:a.itemName>b.itemName?-1:1;
      }
      else if(optVal == 0){
        return a.itemName==b.itemName?0:a.itemName>b.itemName?1:-1;
      }
    });
    // 데이터 정렬후 정렬변경 반영하기
    setSelData(temp);
    setSortData([temp,Number(optVal)]);
    console.log('정렬후',temp,'선택값',optVal);
  }; ////////////// sortList 함수 //////////

  useEffect(() => {
    // 필터 타이틀 클릭했을때 필터 리스트박스 클래스 on넣기
    $(".opt-tit").click(function () {
      $(this).toggleClass("on");
      $(this).siblings(".opt-box").slideToggle("fast");
    });
    // 필터 숨기기 버튼 클릭했을때 on 들어오게 하기
    $(".filter-btn").click(function () {
      $(this).toggleClass("on");
      $(this).parent(".sort-box").siblings(".item-area").toggleClass("on");
    });
  }, []);
  
  useEffect(()=>{

    console.log('실행',cat,chkSts.current);
    // 참조변수 업데이트전에 들어온 cat과 비교
    if(cat!==chkSts.current) {
      console.log('새카테고리시작!');
      $("#sel").val('2');
      $(".chkhdn").prop("checked",false);
      setSelData(allData[cat]);
    }

    // 참조변수 업데이트
    chkSts.current=cat;

  });

  // 리턴코드 /////////////////////
  return (
    <>
      <section className="sub-area">
        <div className="comm-title">
          <h2>{cat}</h2>
        </div>
        <div className="sort-box">
          <button type="button" className="filter-btn">
            <FontAwesomeIcon icon={faFilter} />
          </button>
          {/* 정렬박스 */}
          <select name="sel" id="sel" className="sel" onChange={sortList}>
              <option value="2">정렬 기준</option>
              <option value="0">오름차순</option>
              <option value="1">내림차순</option>
          </select>
        </div>
        {/* sort-box 끝 */}
        <div className="item-area">
          <div className="filter">
            <div className="filter-list">
              <p className="opt-tit">아이콘</p>
              <div className="opt-box">
                <ul>
                  <li>
                    <label htmlFor="allstar" className="chk-box">
                      <input type="checkbox" name="allstar" id="allstar" onChange={chkSearch} className="chkhdn" />
                      <span className="chk"></span>
                      척테일러올스타
                    </label>
                  </li>
                  <li>
                    <label htmlFor="chuk70" className="chk-box">
                      <input type="checkbox" name="chuk70" id="chuk70" onChange={chkSearch} className="chkhdn" />
                      <span className="chk"></span>척 70
                    </label>
                  </li>
                  <li>
                    <label htmlFor="run" className="chk-box">
                      <input type="checkbox" name="run" id="run" onChange={chkSearch} className="chkhdn" />
                      <span className="chk"></span>
                      런스타
                    </label>
                  </li>
                  <li>
                    <label htmlFor="one" className="chk-box">
                      <input type="checkbox" name="one" id="one" onChange={chkSearch} className="chkhdn" />
                      <span className="chk"></span>
                      원스타
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* filter 끝 */}
          <div className="item-inner col-4 mcol-2">
            <ul>{<MakeList data={selData} />}</ul>
          </div>
          {/* col-4 끝 */}
        </div>
        {/* content-inner 끝 */}
      </section>
      {/* 장바구니 */}
      <CartList />
    </>
  );
}

// 하위 컴포넌트 //////
function MakeList({data}){
  
  //정규식함수(숫자 세자리마다 콤마해주는 기능)
  function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const useCart = (e) => {

  }; ////////////// sortList 함수 //////////

  // console.log(data);
  return data.map((v, i) => (
    <li key={i}>
        <div className="img-sec">
          <div className="img-wrap">
            <a href=""><img src={v.imgSrc} alt="상품사진" /></a>
          </div>
          <span className="ico" onClick={useCart}><img src="./images/common/icon_cart.png" alt="장바구니" /></span>
        </div>
        <div className="prod-info-box">
          <div className="prod-cate">{v.cateName}</div>
          <p className="prod-name"><a href="">{v.itemName}</a></p>
          {
            // 데이터에 salePrice 있으면 할인율 나오고 없으면 안나오게
            v.salePrice ? (
              <div className="price-box sale">
                <div className="prod-price">
                  {addComma(v.itemPrice)}<em className="price-unit">원</em>
                </div>
                <div className="sale-box">
                  <span className="per">{v.percent}<em>%</em></span>
                  <span className="sale-price">{addComma(v.salePrice)}<em className="price-unit">원</em></span>
                </div>
              </div>
            ) : (
              <div className="prod-price">
                {addComma(v.itemPrice)}<em className="price-unit">원</em>
              </div>
            )
          }
        </div>
    </li>
  ));
};
