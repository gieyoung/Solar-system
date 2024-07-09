import React, { useEffect } from "react";

//css
import "../../css/jupiter.scss";
import "../../css/common/_core.scss";
import "../../css/common/_reset.scss";

import mFn from "../js/my_function.js";

function Jupiter(props) {
  const scDesc = mFn.qsa(".desc");
  const scWhite = mFn.qs(".white-box");
  // const moon4Page = mFn.qs(".jupit5-head");
  const moon4 = mFn.qsa(".moon");
  // console.log('대상:',scDesc);

  // console.log(moon4[1]);

  // 스크롤 등장 기준설정 : 화면의 2/3
  const CRITERIA = (window.innerHeight / 3) * 2;
  // console.log("기준값:", CRITERIA);

  // 맨위로 올리기
  window.scroll({
    top: 0,
    behavior: "smooth",
  });

  ////////////////////////////////////////////////////////////////////////
  //   여기안에 스크롤 넣어야함

  useEffect(() => {
    if (!scWhite) return;
    const handleScroll = () => {
      // 스크롤 등장 기준설정 : 화면의 2/3
      const CRITERIA = (window.innerHeight / 3) * 2;

      // const bcrVal = cont2.getBoundingClientRect();
      // // console.log(CRITERIA,bcrVal);

      // if (bcrVal.top < CRITERIA) {
      //   cont2.style.top = "0rem";
      //   cont2.style.opacity = "1";
      //   cont2.style.transition = ".5s ease-out";

      // forEach메서드 처리방법
      scDesc.forEach((ele) => {
        if (!ele) return;
        addOn(ele);
      });

      let bcrValWhite = scWhite.getBoundingClientRect();

      if (bcrValWhite.top < CRITERIA) {
        scWhite.style.left = "100%";
        scWhite.style.width = "0%";
        scWhite.style.transition = "1s ease-out";
      } else {
        scWhite.style.left = "0%";
        scWhite.style.width = "100%";
        scWhite.style.transition = "1s ease-out";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //// [ 클래스 on 넣기 함수 ] ///////////
  function addOn(ele) {
    // ele - 대상요소
    // 바운딩값 구하기
    let bcrVal = ele.getBoundingClientRect();
    // console.log(bcrVal);

    // 기준값보다 작을때 등장
    if (bcrVal.top < CRITERIA) {
      ele.classList.add("on");
    }
    // 기준값보다 크면 원상복귀(숨김-on빼기)
    else ele.classList.remove("on");
  } ///////////// addOn 함수 //////////////

  ////////////////////////////////////////////////////////////////////////

  // 1. 모바일 이벤트 등록하기 ////////////
  // 대상 : window
  window.addEventListener("touchstart", touchStartFn);
  window.addEventListener("touchend", touchEndFn);
  const more = mFn.qs(".jupiter-more");

  function touchStartFn(e) {
    more.style.fontFamily = "Freesentation-9Black";
  } /////////// touchStartFn 함수 ////////////

  function touchEndFn(e) {
    more.style.fontFamily = "Pretendard-Regular";
  } /////////// touchEndFn 함수 ////////////

  // const ifrData= "https://solarsystem.nasa.gov/gltf_embed/2375";
  // window.postMessage(ifrData, '*');

  // 데이터 수신
  // window.onmessage = function (e) {
  //   if (e.origin === "https://solarsystem.nasa.gov/gltf_embed/2375") {
  //     // 처리
  //     console.log(e.data);
  //   }
  // };

  return (
    <>
      {/* <!-- 첫페이지:제목 --> */}
      <section className="jupiter jupiter1">
        {/* <!-- 배경 --> */}
        <video
          src="/images/jupiter/jupiter video/j-main-bg.mp4"
          autoPlay
          loop
        ></video>
        <div className="jupiter1-bg"></div>

        <div className="jupiter1-text">
          <h1 className="main-tit">JUPITER</h1>
          <p className="main-txt">
            Jupiter's signature stripes and swirls are actually cold, windy
            clouds of ammonia and water, floating in an atmosphere of hydrogen
            and helium.
            <br />
            <br />
            The dark orange stripes are called belts, while the lighter bands
            are called zones, and they flow east and west in opposite
            directions. Jupiter’s iconic Great Red Spot is a giant storm bigger
            than Earth that has raged for hundreds of years.
            {/* <!-- Jupiter is the fifth planet from the Sun, and the largest in the solar system – more than twice as massive as the other planets combined. --> */}
          </p>
        </div>
      </section>

      {/* <!-- 두번째페이지 : 설명 --> */}
      <section className="jupiter jupiter2">
        {/* <!-- 2-1.설명 첫번째 --> */}
        <div className="desc desc1 cont-txt">
          <div className="desc1-img">
            <img src="/images/jupiter/main_bg2.jpg" alt="목성사진" />
          </div>
          <div className="desc1-text">
            <p>
              <strong className="cont-tit">Potential for Life</strong>
              <br />
              <br />
              Jupiter’s environment is probably not conducive to life as we know
              it. The temperatures, pressures, and materials that characterize
              this planet are most likely too extreme and volatile for organisms
              to adapt to.
              <br />
              <br />
              While planet Jupiter is an unlikely place for living things to
              take hold, the same is not true of some of its many moons. Europa
              is one of the likeliest places to find life elsewhere in our solar
              system. There is evidence of a vast ocean just beneath its icy
              crust, where life could possibly be supported.
            </p>
          </div>
        </div>
        {/* <!-- 2-2.설명 두번째 --> */}
        <div className="desc desc2 cont-txt">
          <div className="desc2-img">
            <img src="./images/jupiter/main_bg.jpg" alt="목성사진" />
          </div>
          <div className="desc2-text">
            <p>
              <strong className="cont-tit">Size and Distance</strong>
              <br />
              <br />
              With a radius of 43,440.7 miles (69,911 kilometers), Jupiter is 11
              times wider than Earth. If Earth were the size of a grape, Jupiter
              would be about as big as a basketball.
              <br />
              <br />
              From an average distance of 484 million miles (778 million
              kilometers), Jupiter is 5.2 astronomical units away from the Sun.
              One astronomical unit (abbreviated as AU), is the distance from
              the Sun to Earth. From this distance, it takes sunlight 43 minutes
              to travel from the Sun to Jupiter.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- 세번째페이지 : 3D --> */}
      <section className="jupiter jupiter3">
        <div className="white-box"></div>
        <div className="jupiter3-cont">
          <div className="jupiter3-text cont-txt">
            <h3 className="cont-tit">Surface</h3>
            <p>
              As a gas giant, Jupiter doesn’t have a true surface. The planet is
              mostly swirling gases and liquids. While a spacecraft would have
              nowhere to land on Jupiter, it wouldn’t be able to fly through
              unscathed either. The extreme pressures and temperatures deep
              inside the planet crush, melt, and vaporize spacecraft trying to
              fly into the planet.
            </p>
          </div>
          <iframe
            className="imodel ifr"
            // src="https://solarsystem.nasa.gov/gltf_embed/2375"
            frameBorder="0"
            loading="eager"
            
          ></iframe>
        </div>
      </section>

      {/* <!-- 네번째페이지 : 위성 4가지 --> */}
      <section className="jupiter jupiter4">
        <div className="jupit5-head sub-tit">
          <h2>Moons of Jupiter</h2>
        </div>
        <div className="moon-cont">
          {/* <!-- 4-1. 첫번째 위성 : Ganymede --> */}
          <div className="moon1 moon">
            <a
              href="https://science.nasa.gov/jupiter/moons/ganymede/"
              target="_blank"
            >
              <div className="moon-txt cont-tit">Ganymede</div>
              <div className="moon-img">
                <img
                  src="./images/jupiter/Ganymede.jpg"
                  alt="목성위성 가니메데 사진"
                />
              </div>
              <div className="moon1-text M-text">
                <h4 className="cont-tit">Ganymede</h4>
                <p className="cont-txt">
                  Ganymede is Jupiter's largest moon, and the largest moon in
                  our solar system. It's even bigger than Mercury, and Pluto.
                </p>
              </div>
            </a>
          </div>
          {/* <!-- 4-2. 두번째 위성 : Callisto --> */}
          <div className="moon2 moon">
            <a
              href="https://science.nasa.gov/jupiter/moons/callisto/"
              target="_blank"
            >
              <div className="moon-txt cont-tit">Callisto</div>
              <div className="moon-img">
                <img
                  src="./images/jupiter/Callisto.jpg"
                  alt="목성위성 칼리스토 사진"
                />
              </div>
              <div className="moon2-text M-text">
                <h4 className="cont-tit">Callisto</h4>
                <p className="cont-txt">
                  Callisto is Jupiter’s second largest moon and the third
                  largest moon in our solar system.
                </p>
              </div>
            </a>
          </div>
          {/* <!-- 4-3. 세번째 위성 : Io --> */}
          <div className="moon3 moon">
            <a
              href="https://science.nasa.gov/jupiter/moons/io/"
              target="_blank"
            >
              <div className="moon-txt cont-tit">Io</div>
              <div className="moon-img">
                <img src="./images/jupiter/Io.jpg" alt="목성위성 이오 사진" />
              </div>
              <div className="moon3-text M-text">
                <h4 className="cont-tit">Io</h4>
                <p className="cont-txt">
                  Io is Jupiter's third largest moon, and the most volcanically
                  active world in our solar system.
                </p>
              </div>
            </a>
          </div>
          {/* <!-- 4-2. 네번째 위성 : Europa --> */}
          <div className="moon4 moon">
            <a
              href="https://science.nasa.gov/jupiter/moons/io/"
              target="_blank"
            >
              <div className="moon-txt cont-tit">Europa</div>
              <div className="moon-img">
                <img
                  src="./images/jupiter/Europa.jpg"
                  alt="목성위성 유로파 사진"
                />
              </div>
              <div className="moon4-text M-text">
                <h4 className="cont-tit">Europa</h4>
                <p className="cont-txt">
                  Europa is Jupiter's fourth largest moon. It's about 90% the
                  size of Earth’s Moon.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="jupiter-more cont-tit">
          <a
            href="https://science.nasa.gov/jupiter/moons/all-jupiter-moons/"
            target="_blank"
          >
            <span>MORE</span>
            <i className="fa-solid fa-circle-right"></i>
          </a>
        </div>
      </section>
      {/* <!-- 다번째페이지 :  목성에 관한 9가지--> */}
      <section className="jupiter jupiter5">
        <div className="jupit5-cont">
          <div className="sub-tit">
            <h2>ALL ABOUT JUPITER</h2>
          </div>
          <div className="jupit5-gbox">
            <div className="jupit5-box">
              <div className="circle-num">1</div>
              <div className="jupit5-text cont-txt">
                <h3>The Biggest</h3>
                <p>
                  For scale, Jupiter's Great Red Spot is about the size of
                  Earth.
                </p>
              </div>
            </div>
            <div className="jupit5-box">
              <div className="circle-num">2</div>
              <div className="jupit5-text cont-txt">
                <h3>Fifth From the Sun</h3>
                <p>
                  Jupiter's distance from the Sun is 5.2 times the Earth-Sun
                  distance.
                </p>
              </div>
            </div>
            <div className="jupit5-box">
              <div className="circle-num">3</div>
              <div className="jupit5-text cont-txt">
                <h3>Short and Long</h3>
                <p>
                  Jupiter's day lasts only 10 Earth hours; its year is 12 Earth
                  years.
                </p>
              </div>
            </div>
            <div className="jupit5-box">
              <div className="circle-num">4</div>
              <div className="jupit5-text cont-txt">
                <h3>Nowhere to Land</h3>
                <p>
                  As a gas giant, Jupiter has no solid surface. It may have an
                  Earth-sized core.
                </p>
              </div>
            </div>
            <div className="jupit5-box">
              <div className="circle-num">5</div>
              <div className="jupit5-text cont-txt">
                <h3>MASSIVE WORLD, LIGHT ELEMENTS</h3>
                <p>
                  Jupiter's atmosphere is made up mostly of hydrogen (H2) and
                  helium (He).
                </p>
              </div>
            </div>
            <div className="jupit5-box">
              <div className="circle-num">6</div>
              <div className="jupit5-text cont-txt">
                <h3>Big and Light</h3>
                <p>Jupiter's atmosphere is mostly hydrogen and helium.</p>
              </div>
            </div>
            <div className="jupit5-box">
              <div className="circle-num">7</div>
              <div className="jupit5-text cont-txt">
                <h3>Many Moons</h3>
                <p>As of July 2023, Jupiter had 95 moons.</p>
              </div>
            </div>
            <div className="jupit5-box">
              <div className="circle-num">8</div>
              <div className="jupit5-text cont-txt">
                <h3>Exploration</h3>
                <p>Seven robots flew past; two stayed in orbit.</p>
              </div>
            </div>
            <div className="jupit5-box">
              <div className="circle-num">9</div>
              <div className="jupit5-text cont-txt">
                <h3>Super Storm</h3>
                <p>
                  The Great Red Spot is a storm that has raged for more than 100
                  years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Jupiter;
