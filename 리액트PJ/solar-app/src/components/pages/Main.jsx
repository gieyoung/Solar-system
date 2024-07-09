import React, { useEffect } from "react";

//css불러오기
import '../../css/main.scss';

//js불러오기
import mainFn from "../func/main.js";
import slideFn from "../func/slide.js";
import setSlide from "../func/drag_slide_multi.js";


export default function Main() {
  useEffect(() => {
    // 메인 함수호출
    mainFn();
    slideFn();
    setSlide('banbx');

  }, []);

  // 코드리턴구역
  return (
    <>
      {/* <!-- 섹션1-태양계 배너 --> */}
      <div id="main-area">
        <div className="main-area inbox">
          <section className="section panel">
            <div className="banner-wrapper">
              <div className="banner sun enable">
                <a href="./sun.html" className="more">
                  <div className="txt">
                    <p className="title">SUN</p>
                    <span className="content">
                      태양계의 중심에
                      <br />
                      존재하는 항성
                    </span>
                  </div>
                  <div className="mobile_banner_dim"></div>
                </a>
              </div>
              <div className="banner earth enable">
                <a href="./earth.html" className="more">
                  <div className="txt">
                    <p className="title">EARTH</p>
                    <span className="content">
                      생명체가 탄생하고 서식하는
                      <br />
                      유일한 천체
                    </span>
                    <div className="mobile_banner_dim"></div>
                  </div>
                </a>
              </div>
              <div className="banner moon enable">
                <a href="./moon.html" className="more">
                  <div className="txt">
                    <p className="title">MOON</p>
                    <span className="content">
                      지구의 위성이자
                      <br />
                      태양계의 가장 안쪽에 있는 위성
                    </span>
                    <div className="mobile_banner_dim"></div>
                  </div>
                </a>
              </div>
              <div className="banner saturn enable">
                <a href="./saturn.html" className="more">
                  <div className="txt">
                    <p className="title">SATURN</p>
                    <span className="content">
                      태양계의 여섯 번째 행성으로 <br />
                      두번째로 큰 크기
                    </span>
                    <div className="mobile_banner_dim"></div>
                  </div>
                </a>
              </div>
              <div className="banner jupiter enable">
                <a href="./jupiter.html" className="more">
                  <div className="txt">
                    <p className="title">JUPITER</p>
                    <span className="content">
                      {" "}
                      태양계의 다섯번째 행성으로 <br />
                      가장 큰 부피
                    </span>
                    <div className="mobile_banner_dim"></div>
                  </div>
                </a>
              </div>
              <div className="banner_dim" style={{visibility: 'hidden'}}></div>
            </div>
            <div className="section_info_wrapper">
              <a className="more-btn" href="./sun.html" target="_blank">
                <span className="text-container">
                  <span className="text">MORE</span>
                </span>
              </a>
            </div>
          </section>

          {/* <!--섹션2. 슬라이더 배너영역 --> */}
          <div id="ban-area">
            <section className="ban-area">
              {/* <!-- 이동버튼 --> */}
              <div className="btn-box">
                <a href="#" className="abtn ab1"></a>
                <a href="#" className="abtn ab2"></a>
              </div>
              {/* <!-- 블릿박스 --> */}
              <div className="indic-box">
                <ol className="indic"></ol>
              </div>
              <div className="cont-box">
                {/* <!-- 슬라이드 박스 --> */}
                <div className="slide-box">
                  <ul className="slider"></ul>
                  {/* <!-- 이벤트 커버박스--> */}
                  <div className="evt-cover">
                    <aside className="ab1"></aside>
                    <aside className="ab2"></aside>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}///////////////Main////////////////
