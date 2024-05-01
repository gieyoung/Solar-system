///////////////목성 JS - jupiter.js

import mFn from './my_function.js';
  
  
  // 1. 대상선정 ///////////////
  // 스크롤 등장대상 : .hide-el (별도의 클래스를 줌!)
  const scAct = mFn.qsa(".hide-el");
  console.log('대상:',scAct);
  
//   스크롤 이벤트 설정
  mFn.addEvt(window, "scroll", showIt);
  
  function showIt() {
    // 클래스 on넣기 함수 호출하기
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
      ele.classList.contains('except')?
      mFn.qs('.bg-con').classList.add("on"):
      ele.classList.add("on");}
    // 기준값보다 크면 원상복귀(숨김-on빼기)
    else ele.classList.remove("on");
  } ///////////// addOn 함수 //////////////