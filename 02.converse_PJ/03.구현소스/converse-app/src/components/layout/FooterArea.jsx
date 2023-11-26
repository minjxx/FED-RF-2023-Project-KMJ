// 제이쿼리
import $ from 'jquery';

// 폰트어썸 불러오기
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function FooterArea(){

  // 탑버튼 ////////////////////////
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".topBtn").addClass("on");
    } else {
      $(".topBtn").removeClass("on");
    }
  });
  const topBtn = () => {
    $(".topBtn").click(function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  return(
    <>
      <footer className="footer">
        <div className="footer-wrap">
          <div className="footer-left">
            <div className="footer-logo"><img src="./images/common/logo_white.png" alt="컨버스" /></div>
            <address>
              <p>
                <span>사업자명 : (유)컨버스코리아</span>
                <span>대표자명 : 이명재</span>
                <span>사업자등록번호 : 220-88-74818</span>
              </p>
              <p>
                <span>통신판매업 : 제2016-서울강남-00478호</span>
              </p>
              <p>
                <span>주소 : 서울특별시 강남구 테헤란로 152 (역삼동) 강남파이낸스센터 32층</span>
              </p>
              <p>
                <span>TEL : 080-987-0182</span>
                <span>이용문의 : conversekorea@converse.co.kr</span>
              </p>
            </address>
            <p className="copyright">2020 Converse Korea LLC. All Rights Reserved.</p>
          </div>
          <div className="footer-right">
            <div className="social">
              {/* 페이스북 아이콘 */}
              <a href="https://www.facebook.com/converse.kr" target="_blank" title="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              {/* 인스타 아이콘 */}
              <a href="https://www.instagram.com/converse_kr" target="_blank" title="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className="sitemap">
              <dl>
                <dt>support</dt>
                <dd><a href="#">고객지원센터</a></dd>
                <dd><a href="#">1:1 문의</a></dd>
                <dd><a href="#">주문/배송 조회</a></dd>
              </dl>
              <dl>
                <dt>information</dt>
                <dd><a href="#">컨버스에 대하여</a></dd>
                <dd><a href="#">회원가입</a></dd>
                <dd><a href="#">매장안내</a></dd>
                <dd><a href="#">공지사항</a></dd>
              </dl>
              <dl>
                <dt>policy</dt>
                <dd><a href="#">이용약관</a></dd>
                <dd><a href="#">개인정보처리방침</a></dd>
              </dl>
              <dl>
                <dt>family sites</dt>
                <dd><a href="#">nike</a></dd>
                <dd><a href="#" className="cap">jordan</a></dd>
              </dl>
            </div>
          </div>
        </div>
      </footer>
      {/* 탑버튼 */}
      <button className="topBtn" onClick={topBtn}></button>
    </>
  );
}