// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { menAllData } from "../data/men_all_data";
import { useEffect, useState } from "react";
// 제이쿼리 불러오기
import $ from "jquery";

export function Men() {
  ////////// 후크 상태관리 변수 ////////////
  // 1. 검색어 후크상태변수 : 초기값은 전달된 검색어 안넣음
  const [kword,setKword] = useState(null);

  // 2. 출력개수 후크상태변수
  const [cntNum,setCntNum] = useState(0);

  // 3. 데이터 구성 상태변수 : [배열데이터,정렬상태]
  const [selData, setSelData] = useState([[],2])
  // - 정렬상태값 : 0 - 오름차순, 1 - 내림차순, 2 - 정렬전
  // 두가지값을 같이 관리하는 이유는 데이터정렬만 변경될 경우
  // 배열자체가 변경된 것으로 인식하지 않기때문이다!

  // 4. 데이터 건수 상태변수
  const [cnt, setCnt] = useState(0);
  
  const chkSearch = (e) => {
    // 1. 체크박스 아이디 : 검색항목의 값(cateName)
    const cid = e.target.id;

    // 2. 체크박스 체크여부 : checked (true/false)
    const chked = e.target.checked;
    console.log('아이디:',cid,chked);

    // 3. 기존 입력 데이터 가져오기
    // selData의 첫번째 배열값
    let temp = selData[0];
    console.log('첫번째 배열값',temp);

    // 결과집합배열변수 : 최종결과배열
    let lastList = [];

    // 4.체크박스 체크개수세기 : 1개초과시 배열합치기!
    let num = $('.chkhdn:checked').length;
    console.log('체크개수:',num);

    // 5. 체크박스 체크유무에 따른 분기
    // (1) 체크박스가 true일대 해당 검색어로 검색하기
    if(chked){
      // 현재데이터 변수에 담기(수정예정!)
      const nowList = menAllData.filter(v=>{
        if(v.cateName == cid) return true;
      }); /////////// filter //////////

      // 체크개수가 1초과일때 배열합치기
      if(num>1){ // 스프레드 연산자(...)사용!
        lastList = [...temp,...nowList];
      } //// if /////
      else{ // 하나일때
        lastList = nowList;
      }

    } /////////// if /////////
    // (2) 체크박스가 false일때 데이터 지우기
    else{
      console.log('지울데이터:',cid);
      // for문을 돌면서 배열데이터중 해당값을 지운다!
      for(let i=0; i<temp.length;i++){
        // -> 삭제대상:
        // 데이터중 cateName 항목값이 아이디명과 같은것
        if(temp[i].cateName==cid){
          // 해당항목 지우기
          // 배열지우기 메서드 : splice(순번,개수)
          temp.splice(i,1);
          // 주의! 배열을 지우면 전체개수가 1씩줄어든다!
          // 반드시 줄임처리할것!
          i--;

          // 참고테스트 : 배열삭제 delete는 무엇인가?
          // delete배열지우기는 값만지우고 주소는 남는다!
          // 지운후 값은 undefined로 남아진다!
          // delete temp[i];
          // -> 리스트처리시 에러발생함!
          // 여기서는 splice를 반드시 사용할것!

        } //////// if ///////
      } ///////// for ////////

      console.log('삭제처리된배열:',temp);

      // 결과처리하기 : 삭제처리된 temp를 결과에 넣기!
      lastList = temp;

    } /////////// else ///////////

    // 6. 검색결과 리스트 업데이트 하기
    setSelData([lastList,2]);
    setCnt(lastList.length);

  }; ////////////// chkSearch 함수 ///////////


  useEffect(() => {
    $(".opt-tit").click(function(){
      $(this).toggleClass("on");
      $(this).siblings(".opt-box").slideToggle("fast");
    });
    $(".filter-btn").click(function(){
      $(this).toggleClass("on");
      $(this).parent(".sort-box").siblings(".item-area").toggleClass("on");
    });
  },[]);

  return (
    <section className="sub-area">

      <div className="comm-title">
        <h2>men</h2>
      </div>

      <div className="sort-box">
        <button type="button" className="filter-btn"><FontAwesomeIcon icon={faFilter} /></button>
        <select name="aa" id="aa">
          <option value="1">정렬 기준</option>
          <option value="2">추천순</option>
          <option value="3">인기순</option>
          <option value="4">최신순</option>
        </select>
      </div> {/* sort-box */}

      <div className="item-area">
        <div className="filter">
          <div className="filter-list">
            <p className="opt-tit">아이콘</p>
            <div className="opt-box">
              <ul>
                <li>
                  <label htmlFor="optIcon1" className="chk-box">
                    <input type="checkbox" name="optIcon1" id="optIcon1" onChange={chkSearch} />
                    <span className="chk"></span>
                    척테일러올스타
                  </label>
                </li>
                <li>
                  <label htmlFor="optIcon2" className="chk-box">
                    <input type="checkbox" name="optIcon2" id="optIcon2" onChange={chkSearch} />
                    <span className="chk"></span>
                    척 70
                  </label>
                </li>
                <li>
                  <label htmlFor="optIcon3" className="chk-box">
                    <input type="checkbox" name="optIcon3" id="optIcon3" onChange={chkSearch} />
                    <span className="chk"></span>
                    런스타
                  </label>
                </li>
                <li>
                  <label htmlFor="optIcon4" className="chk-box">
                    <input type="checkbox" name="optIcon4" id="optIcon4" onChange={chkSearch} />
                    <span className="chk"></span>
                    원스타
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="filter-list">
            <p className="opt-tit">가격대</p>
            <div className="opt-box">
              <ul>
                <li>
                  <label htmlFor="price1" className="chk-box">
                    <input type="checkbox" name="price1" id="price1" />
                    <span className="chk"></span>
                    0 - 50,000원
                  </label>
                </li>
                <li>
                  <label htmlFor="price2" className="chk-box">
                    <input type="checkbox" name="price2" id="price2" />
                    <span className="chk"></span>
                    50,000 - 100,000원
                  </label>
                </li>
                <li>
                  <label htmlFor="price3" className="chk-box">
                    <input type="checkbox" name="price3" id="price3" />
                    <span className="chk"></span>
                    100,000 - 150,000원
                  </label>
                </li>
                <li>
                  <label htmlFor="price4" className="chk-box">
                    <input type="checkbox" name="price4" id="price4" />
                    <span className="chk"></span>
                    150,000 - 200,000원
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div> {/* filter */}

        <div className="item-inner col-4 mcol-2">
          <ul>
            {menAllData.map((v,i) => (
              <li key={i}>
                <a href="#">
                  <div className="img-wrap">
                    <img src={v.imgSrc} alt="상품사진" />
                  </div>
                  <div className="prod-info-box">
                    <div className="prod-cate">{v.cateName}</div>
                    <p className="prod-name">{v.itemName}</p>
                    <div className="prod-price">
                      {v.itemPrice}
                      <em className="price-unit">원</em>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div> {/* col-4 */}

      </div> {/* content-inner */}
    </section>
  );
}