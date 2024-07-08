// 메인영역 컴포넌트 ///
import React from "react";


// 메인영역 CSS 불러오기
import "../../css/main.scss";
import "../../css/common/_core.scss";
import "../../css/common/_reset.scss";

function Main(props) {
  return (
    <>
      {/* <!-- 섹션1-태양계 배너 --> */}
      <div id="main-area">
        <div calss="main-area inbox">
          <section calss="section panel">
            <div calss="banner-wrapper">
              <div calss="banner sun enable">
                <a href="./sun.html" calss="more">
                  <div calss="txt">
                    <p calss="title">SUN</p>
                    <span calss="content">
                      태양계의 중심에
                      <br />
                      존재하는 항성
                    </span>
                  </div>
                  <div calss="mobile_banner_dim"></div>
                </a>
              </div>
              <div calss="banner earth enable">
                <a href="./earth.html" calss="more">
                  <div calss="txt">
                    <p calss="title">EARTH</p>
                    <span calss="content">
                      생명체가 탄생하고 서식하는
                      <br />
                      유일한 천체
                    </span>
                    <div calss="mobile_banner_dim"></div>
                  </div>
                </a>
              </div>
              <div calss="banner moon enable">
                <a href="./moon.html" calss="more">
                  <div calss="txt">
                    <p calss="title">MOON</p>
                    <span calss="content">
                      지구의 위성이자
                      <br />
                      태양계의 가장 안쪽에 있는 위성
                    </span>
                    <div calss="mobile_banner_dim"></div>
                  </div>
                </a>
              </div>
              <div calss="banner saturn enable">
                <a href="./saturn.html" calss="more">
                  <div calss="txt">
                    <p calss="title">SATURN</p>
                    <span calss="content">
                      태양계의 여섯 번째 행성으로 <br />
                      두번째로 큰 크기
                    </span>
                    <div calss="mobile_banner_dim"></div>
                  </div>
                </a>
              </div>
              <div calss="banner jupiter enable">
                <a href="./jupiter.html" calss="more">
                  <div calss="txt">
                    <p calss="title">JUPITER</p>
                    <span calss="content">
                      {" "}
                      태양계의 다섯번째 행성으로 <br />
                      가장 큰 부피
                    </span>
                    <div calss="mobile_banner_dim"></div>
                  </div>
                </a>
              </div>
              <div calss="banner_dim" style={{ visibility: "hidden" }}></div>
            </div>
            <div calss="section_info_wrapper">
              <a calss="more-btn" href="./sun.html" target="_blank">
                <span calss="text-container">
                  <span calss="text">MORE</span>
                </span>
              </a>
            </div>
          </section>

          {/* <!--섹션2. 슬라이더 배너영역 --> */}
          <div id="ban-area">
            <section calss="ban-area">
              {/* <!-- 이동버튼 --> */}
              <div calss="btn-box">
                <a href="#" calss="abtn ab1"></a>
                <a href="#" calss="abtn ab2"></a>
              </div>
              {/* <!-- 블릿박스 --> */}
              <div calss="indic-box">
                <ol calss="indic"></ol>
              </div>
              <div calss="cont-box">
                {/* <!-- 슬라이드 박스 --> */}
                <div calss="slide-box">
                  <ul calss="slider"></ul>
                  {/* <!-- 이벤트 커버박스--> */}
                  <div calss="evt-cover">
                    <aside calss="ab1"></aside>
                    <aside calss="ab2"></aside>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
