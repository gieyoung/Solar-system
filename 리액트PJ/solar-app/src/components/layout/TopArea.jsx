// 상단영역 컴포넌트 ///
import React from "react";

import { Link } from "react-router-dom";

// 상단영역 CSS 불러오기
import "../../css/top_area.scss";
import "../../css/common/_core.scss";
import "../../css/common/_reset.scss";

function TopArea(props) {
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
              <label htmlFor="input-box" className="fa-solid fa-magnifying-glass icon"></label>
            </div>

            {/* <!-- 모바일 햄버거 버튼 --> */}
            <div className="mobile-btn">
              <span className="ir">모바일버튼</span>
              <i className="fa-solid fa-bars icon2">
                {" "}
                <span className="ir">햄버거 아이콘</span>
              </i>
              <i className="fa-solid fa-xmark icon3">
                {" "}
                <span className="ir">닫기 아이콘</span>
              </i>
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
