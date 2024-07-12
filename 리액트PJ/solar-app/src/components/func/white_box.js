// 목성 토성 화이트박스 애니

import mFn from "../func/my_function.js";

const whiteBox = function () {
  const scDesc = mFn.qsa(".desc");
  const scWhite = mFn.qs(".white-box");
  const moon4 = mFn.qsa(".moon");

  // 스크롤 등장 기준설정 : 화면의 2/3
  const CRITERIA = (window.innerHeight / 3) * 2;

  // if (!scWhite) return;
  const handleScroll = () => {
    // 스크롤 등장 기준설정 : 화면의 2/3
    const CRITERIA = (window.innerHeight / 3) * 2;

    // const bcrVal = cont2.getBoundingClientRect();
    console.log(CRITERIA);

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
};

export default whiteBox;
