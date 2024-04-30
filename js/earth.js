

// 나의 함수 불러오기
import mFn from "./my_function.js";

// 공통 처리 데이터 불러오기
import comData from "../data/common_data.js";

// GNB 메뉴 데이터 불러오기 /////
import gnbData from "../data/gnb_data.js";

// 왼쪽으로 흘러가는 태양계 재귀함수 불러오기
import moveSollar from "./call_myself.js";




// earth-pg2가로로 드래그 넘어가는거 earth_dance.js 불러오기
import earthDance from "./earth_dance.js";
earthDance();



/****************************************************
     [ 상단/하단 공통 함수 ]
******************************************************/
setElement(); // 함수호출!!!

export default function setElement() {
  // 1.대상선정: #header-area, #footer-area
  const headerArea = mFn.qs("#header-area");
  const footerArea = mFn.qs("#footer-area");

  // 2. 코드넣기 ///////
  headerArea.innerHTML = comData.headerArea;
  footerArea.innerHTML = comData.footerArea;



  
/****************************************************
     [ GNB메뉴 ]
******************************************************/
 
  makeMenu();
 
  // [ GNB메뉴코드 만들기 함수 ]
  function makeMenu() {
    mFn.qs("#gnb").innerHTML = `
    <ul>
    ${Object.keys(gnbData)
      .map(
        (v) => `
        <li>
          ${`
                ${gnbData[v]
                  .map(
                    (v) => `
                      <li>
                        <a href="./${v}.html">${v}</a>
                      </li>          
                    `
                  )
                  .join("")}
            `}
        </li>
      `
      )
      .join("")}
  </ul>
        
  `;
  } ////////// makeMenu 함수 //////////

/****************************************************
     [ 검색버튼 클릭시 검색창 열고 닫기 ]
******************************************************/

  // 1. 대상선정
  // 검색버튼
  const icon = mFn.qs(".icon");
  // 검색창
  const search = mFn.qs(".search");

  // 2. 함수실행: 검색버튼 클릭시 검색창 열리고 닫히기
  icon.onclick = () => {
    search.classList.toggle("on");
  };

  /****************************************************
     [ 왼쪽으로 흘러가는 태양계 재귀함수 ]
******************************************************/

  moveSollar();

  /****************************************************
     [ top버튼-클릭시 상단으로 이동하는 버튼]
******************************************************/

  const topBtn = mFn.qs(".top-btn");

  topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }; ///////click///////////
} /////////// setElement 함수 ///////////////
