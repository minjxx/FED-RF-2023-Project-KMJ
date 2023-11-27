// 제이쿼리
import $ from "jquery";

import { useEffect } from "react";
// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { bMenu } from "../data/bmenu";

export function FooterArea() {
  useEffect(() => {
    // 탑버튼 ////////////////////////
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $(".topBtn").addClass("on");
      } else {
        $(".topBtn").removeClass("on");
      }
    });
    $(".topBtn").click(function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footer-wrap">
          <div className="footer-left">
            <div className="footer-logo">
              <img src="./images/common/logo_white.png" alt="컨버스" />
            </div>
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
              {bMenu.map((v, i) => (
                <dl key={i}>
                  <dt>{v.txt}</dt>
                  {v.sub.map((v, i) => (
                    <dd key={i}>
                      <a href={v.link}>{v.txt}</a>
                    </dd>
                  ))}
                </dl>
              ))}
            </div>
          </div>
        </div>
      </footer>
      {/* 탑버튼 */}
      <button className="topBtn"></button>
    </>
  );
}
