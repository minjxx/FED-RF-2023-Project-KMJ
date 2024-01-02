import { useEffect, useState, useRef, useContext } from "react";
// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
// 상품 리스트 데이터 불러오기
import { allData } from "../data/all_data";
// 제이쿼리 불러오기
import $ from "jquery";
import { Link } from "react-router-dom";

export function ItemList({ cat }) {

  // 현재 컴포넌트 새로운 카테고리 상태여부를 위한 참조변수
  const chkSts = useRef(cat); // 이전카테고리를 항상 기억함
  
  // 데이터 상태관리 변수
  const [selData, setSelData] = useState(allData[cat]);

  // 데이터 구성 상태변수 : [배열데이터,정렬상태]
  // 정렬상태값:0 -오름차순, 1- 내림차순, 2- 정렬전
  const [sortData, setSortData] = useState([selData, 2]);

  // 변경될 데이터 원본과 분리하여 데이터 변경하기위한 참조변수
  const transData = useRef(JSON.parse(JSON.stringify(selData)));
  // -> 깊은복사로 원본데이터와 연결성 없음!!!
  // 주의: 사용시 current 속성을 씀!
  
  // 상품 개수
  let itemCnt = selData.length;
  const [cnt, setCnt] = useState(itemCnt);

  /******************************************* 
    함수명: changeList
    기능: 체크박스에 따른 리스트 변경하기
  *******************************************/
  const changeList = (e) => {

    // 1. 체크박스 아이디
    const cid = e.target.id;

    // 2. 체크박스 체크여부 : checked (true/false)
    const chked = e.target.checked;
    // console.log("아이디:", cid, chked);

    let temp = selData;
    // console.log("temp = 현재카테의 셀데이타", temp);

    let lastList = [];

    // 3.체크박스 체크개수세기 : 1개초과시 배열합치기!
    let num = $(".chkbx:checked").length;
    // console.log("체크개수:", num);

    // 4. 체크박스 체크유무에 따른 분기
    // (1) 체크박스가 true일대 해당 검색어로 검색하기
    // -> 데이터 추가시 원본에서 데이터를 만들고 참조변수에 추가함!
    if (chked) {
      // 현재데이터 변수에 담기(원본데이터로 부터!)
      const selList = transData.current.filter((v) => {
        if (v.alignment === cid) return true;
      }); /////////// filter //////////

      // 체크개수가 1초과일때 배열합치기
      if (num > 1) {
        lastList = [...temp, ...selList];
        // console.log('selData',temp);
        // console.log('selList 현재선택',selList,cid);
        // console.log('lastList 하나이상 이전전택',lastList);
      } //// if /////
      else {
        // 하나일때
        lastList = selList;
        // console.log('lastList 하나일때',lastList);
      }
    } /////////// if /////////

    // (2) 체크박스가 false일때 데이터 지우기
    // -> 참조변수에 있는 데이터를 기준으로 데이터를 삭제함!
    else {
      lastList = temp.filter((v)=>v.alignment !== cid);

      if(num<1){
        lastList = transData.current;
      }
    } /////////// else ///////////

    // 6. 검색결과 리스트 업데이트 하기
    // console.log('lastList 최종',lastList);
    setSelData(lastList);
    setCnt(lastList.length);
  }; ////////////// changeList 함수 ///////////


  //////////////////////////////
  // 리스트 정렬 함수 ///////////
  //////////////////////////////
  const sortList = (e) => {
    // 0 - 오름차순, 1- 내림차순
    const optVal = e.target.value;
    // console.log("선택옵션:", optVal);

    // 재정렬할 데이터를 가져온다 
    // (->map() 으로 기존 배열을 새로 만들어서 연.결성을 끊어준다!)
    let temp = selData.map(v=>v); //sortData[0];
    // console.log("임시데이터", temp);

    temp.sort((a, b) => {
      if (optVal == 1) {
        return Number(a.itemPrice) == Number(b.itemPrice) ? 0 : Number(a.itemPrice) > Number(b.itemPrice) ? -1 : 1;
      } else if (optVal == 0) {
        return Number(a.itemPrice) == Number(b.itemPrice) ? 0 : Number(a.itemPrice) > Number(b.itemPrice) ? 1 : -1;
      }
    });
    // 데이터 정렬후 정렬변경 반영하기
    setSelData(temp);
    setSortData([temp, Number(optVal)]);
    // console.log("정렬후", temp, "선택값", optVal);
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
      $(this).parents(".sort-box").siblings(".item-area").toggleClass("on");
    });
  }, []);

  useEffect(() => {
    // console.log("실행", cat, chkSts.current);
    // 참조변수 업데이트전에 들어온 cat과 비교
    if (cat !== chkSts.current) {
      // console.log("새카테고리시작!");
      $("#sel").val("2");
      $(".chkbx").prop("checked", false);
      setSelData(allData[cat]);
      transData.current = allData[cat];
      setCnt(allData[cat].length);
    }

    // 참조변수 업데이트
    chkSts.current = cat;
  });

  // 리턴코드 /////////////////////
  return (
    <>
      <section className="sub-area">
        <div className="comm-title">
          <h2>{cat}</h2>
        </div>
        <div className="sort-box">
          <div>
            <button type="button" className="filter-btn">
              <FontAwesomeIcon icon={faFilter} />
            </button>
            <span className="item-cnt">총 <b>{cnt}</b>개 상품</span>
          </div>
          {/* 정렬박스 */}
          <select name="sel" id="sel" className="sel" onChange={sortList}>
            <option value="2">정렬 기준</option>
            <option value="0">낮은가격순</option>
            <option value="1">높은가격순</option>
          </select>
        </div>
        {/* sort-box 끝 */}
        <div className="item-area">
          <div className="filter-box">
            <div className="filter-list">
              <p className="opt-tit">카테고리</p>
              <div className="opt-box">
                <ul>
                  <li>
                    <label htmlFor="allstar" className="chk-box">
                      <input type="checkbox" name="allstar" id="allstar" onChange={changeList} className="chkbx" />
                      <span className="chk"></span>
                      척테일러올스타
                    </label>
                  </li>
                  <li>
                    <label htmlFor="chuk70" className="chk-box">
                      <input type="checkbox" name="chuk70" id="chuk70" onChange={changeList} className="chkbx" />
                      <span className="chk"></span>
                      척70
                    </label>
                  </li>
                  <li>
                    <label htmlFor="run" className="chk-box">
                      <input type="checkbox" name="run" id="run" onChange={changeList} className="chkbx" />
                      <span className="chk"></span>
                      런스타
                    </label>
                  </li>
                  <li>
                    <label htmlFor="one" className="chk-box">
                      <input type="checkbox" name="one" id="one" onChange={changeList} className="chkbx" />
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
      {/* <CartList /> */}
    </>
  );
}

// 하위 컴포넌트 //////
function MakeList({ data }) {
  //정규식함수(숫자 세자리마다 콤마해주는 기능)
  function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // console.log(data);
  return data.map((v, i) => (
    <li key={i}>
      <div className="img-sec">
        <div className="img-wrap">
          <Link to="">
            <img src={v.imgSrc} alt="상품사진" />
          </Link>
        </div>
        <span className="ico">
          <img src="./images/common/icon_cart.png" alt="장바구니" />
        </span>
      </div>
      <div className="prod-info-box">
        <div className="prod-cate">{v.cateName}</div>
        <p className="prod-name">
          <Link to="">{v.itemName}</Link>
        </p>
        {
          // 데이터에 salePrice 있으면 할인율 나오고 없으면 안나오게
          v.salePrice ? (
            // 세일 O
            <div className="price-box sale">
              <div className="prod-price">
                {addComma(v.salePrice)}
                <em className="price-unit">원</em>
              </div>
              <div className="sale-box">
                <span className="per">
                  {v.percent}
                  <em>%</em>
                </span>
                <span className="sale-price">
                  {addComma(v.itemPrice)}
                  <em className="price-unit">원</em>
                </span>
              </div>
            </div>
          ) : (
            // 세일 X
            <div className="prod-price">
              {addComma(v.itemPrice)}
              <em className="price-unit">원</em>
            </div>
          )
        }
      </div>
    </li>
  ));
}
