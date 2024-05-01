///////////////목성 JS - jupiter.js

import mFn from "./my_function.js";

const scAct = mFn.qsa(".desc");
console.log('대상:',scAct);

// 스크롤 등장액션 이벤트 설정하기
mFn.addEvt(window, "scroll", showIt);

// 3. 함수 만들기 ///////////////
// 3-1. 스크롤 등장액션 함수
function showIt() {
  // 클래스 on넣기 함수 호출하기

  // forEach메서드 처리방법
  scAct.forEach(ele=>addOn(ele));
} /////////// showIt 함수 /////////////

// 스크롤 등장 기준설정 : 화면의 2/3
const CRITERIA = (window.innerHeight / 3) * 2;
// console.log("기준값:", CRITERIA);

//// [ 클래스 on 넣기 함수 ] ///////////
function addOn(ele) {
  // ele - 대상요소
  // 바운딩값 구하기
  let bcrVal = mFn.getBCR(ele);
  // console.log(bcrVal);

  // 기준값보다 작을때 등장
  if (bcrVal < CRITERIA) {
    ele.classList.add("on");
  }
  // 기준값보다 크면 원상복귀(숨김-on빼기)
  else ele.classList.remove("on");
} ///////////// addOn 함수 //////////////
