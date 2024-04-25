// 상단 하단 공통 JS - common.js

import mFn from "./my_function.js";

/****************************************************
     [ 검색창 클릭시 열고 닫기 ]
     ******************************************************/

const icon = mFn.qs(".icon");
const search = mFn.qs(".search");

icon.onclick = () => {
  search.classList.toggle("on");
};
