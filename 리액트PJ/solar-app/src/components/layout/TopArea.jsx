// 상단영역 컴포넌트 ///
import React, { useEffect } from "react";

import { Link } from "react-router-dom";

//js불러오기
import topFn from "../func/top_area.js";

// 상단영역 CSS 불러오기
import "../../css/top_area.scss";
import "../../css/common/_core.scss";
import "../../css/common/_reset.scss";

// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function TopArea(props) {
  useEffect(() => {
    //상단공통함수
    topFn();
  }, []);
  //// 코드 리턴구역 //////////////
  return (
    <>
      <div id="header-area">
        <header className="header-area inbox">
          {/* <!-- 로고 --> */}
          <h1 className="logo">
            <a href="./" alt="나사 로고">
              <span className="ir">로고</span>
              <img src="./images/common/logo.png" alt="로고이미지" />
            </a>
          </h1>

          {/* <!-- 메뉴 --> */}
          <nav id="gnb">
            <ul>
              <li></li>
              <li>
                <a href="./earth.html">earth</a>
              </li>

              <li>
                <a href="./moon.html">moon</a>
              </li>

              <li>
                <a href="./saturn.html">saturn</a>
              </li>

              <li>
                <a href="./jupiter.html">jupiter</a>
              </li>
            </ul>
          </nav>

          {/* <!-- 기타 --> */}
          <div className="etc">
            {/* <!-- 검색버튼 --> */}
            <div className="search">
              <input type="text" id="input-box" className="input-box" />
              <div className="icon">
                {/* 폰트어썸 사용 */}
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>

            {/* <!-- 모바일 햄버거 버튼 --> */}
            <div className="mobile-btn">
              <div className="icon2">
                {/* 폰트어썸 사용 */}
                <FontAwesomeIcon icon={faBars} />
                <span className="ir">모바일 버튼</span>
        
              </div>
              <div className="icon3">
                {/* 폰트어썸 사용 */}
                <FontAwesomeIcon icon={faXmark} />
                <span className="ir">닫기 버튼</span>
              </div>
            </div>

            {/* <!-- 모바일 사이트맵 --> */}
            <div className="m-sitemap">
              <ul>
                <li>
                  <a href="./sun.html">sun</a>
                </li>
                <li>
                  <a href="./earth.html">earth</a>
                </li>
                <li>
                  <a href="./moon.html">moon</a>
                </li>
                <li>
                  <a href="./saturn.html">saturn</a>
                </li>
                <li>
                  <a href="./jupiter.html">jupiter</a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default TopArea;
