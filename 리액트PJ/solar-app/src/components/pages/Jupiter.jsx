import React, { useEffect } from "react";

//css
import "../../css/jupiter.scss";
import "../../css/common/_common.scss";
import "../../css/common/_core.scss";
import "../../css/common/_reset.scss";

import mFn from "../js/my_function.js";

// 데이터
import { jupiter_about_data,jupiter_moons_data } from "../js/jupiter_data.js";

import $ from "jquery";

function Jupiter(props) {
  const selData = jupiter_moons_data;
  const selData2 = jupiter_about_data;

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
    const scDesc = mFn.qsa(".desc");
    const scWhite = mFn.qs(".white-box");
    // const moon4Page = mFn.qs(".jupit5-head");
    const moon4 = mFn.qsa(".moon");

    // if (!scWhite) return;
    const handleScroll = () => {
      // 스크롤 등장 기준설정 : 화면의 2/3
      const CRITERIA = (window.innerHeight / 3) * 2;

      // const bcrVal = cont2.getBoundingClientRect();
      console.log(CRITERIA);

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

  // // 1. 모바일 이벤트 등록하기 ////////////
  // // 대상 : window
  // window.addEventListener("touchstart", touchStartFn);
  // window.addEventListener("touchend", touchEndFn);
  // const more = mFn.qs(".jupiter-more");

  // function touchStartFn(e) {
  //   more.style.fontFamily = "Freesentation-9Black";
  // } /////////// touchStartFn 함수 ////////////

  // function touchEndFn(e) {
  //   more.style.fontFamily = "Pretendard-Regular";
  // } /////////// touchEndFn 함수 ////////////

  return (
    <>
      {/* <!-- 첫페이지:제목 --> */}
      <section className="sub-jupiter jupiter1">
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
      <section className="sub-jupiter jupiter2">
        {/* <!-- 2-1.설명 첫번째 --> */}
        <div className="desc desc1 cont-txt">
          <div className="desc1-img desc-imgbx">
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
          <div className="desc2-img desc-imgbx">
            <img src="/images/jupiter/main_bg.jpg" alt="목성사진" />
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
      <section className="sub-jupiter jupiter3">
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
            src="https://solarsystem.nasa.gov/gltf_embed/2375"
            frameBorder="0"
            loading="eager"
          ></iframe>
        </div>
      </section>

      {/* <!-- 네번째페이지 : 위성 4가지 --> */}
      <section className="sub-jupiter jupiter4">
        <div className="jupit5-head sub-tit">
          <h2>Moons of Jupiter</h2>
        </div>
        <div className="moon-cont">
          {selData.map((v, i) => (
            <div className={"moon" + (i + 1) + " moon"} key={i}>
              <a
                href={"https://science.nasa.gov/jupiter/moons/" + v.name + "/"}
                target="_blank"
              >
                <div className="moon-txt cont-tit">{v.name}</div>
                <div className="moon-img">
                  <img
                    src={"./images/jupiter/" + v.name + ".jpg"}
                    alt={v.name}
                  />
                </div>
                <div className={"moon" + (i + 1) + "-text M-text"}>
                  <h4 className="cont-tit">{v.name}</h4>
                  <p className="cont-txt">{v.txt}</p>
                </div>
              </a>
            </div>
          ))}
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
      <section className="sub-jupiter jupiter5">
        <div className="jupit5-cont">
          <div className="sub-tit">
            <h2>ALL ABOUT JUPITER</h2>
          </div>
          <div className="jupit5-gbox">
            {selData2.map((v, i) => (
              <div className="jupit5-box" key={i}>
                <div className="circle-num">{v.idx}</div>
                <div className="jupit5-text cont-txt">
                  <h3>{v.tit}</h3>
                  <p>{v.txt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Jupiter;
