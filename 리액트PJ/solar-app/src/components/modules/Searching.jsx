import React from 'react';


// 데이터 불러오기 : 캐릭터 리스트 데이터
import { catListData } from "../data/swiper_cat";


// 캐릭터 리스트 결과 컴포넌트
import SearchingCat from "./SearchingCat";


// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


function Searching({ kword }) {
  // kword - 전달받은 키워드
  console.log("kword:", kword);
  // console.log("data:", catListData);
  return (
    <>
        {/* <!-- 검색버튼 --> */}
        <div className="search">
              <input className="input-box" 
              id="schin" 
              type="text" 
              placeholder="Filter by Keyword"
              defaultValue={kword}
              // 엔터키를 눌렀을때 검색실행!
              // 검색어 상태변수만 업데이트하면 끝!!!
              // -> setKw(검색어)
              />

              <div className="icon">
                {/* 폰트어썸 사용 */}
                <FontAwesomeIcon icon={faMagnifyingGlass} 
                className="schbtn"
                title="Open search"
                />
              </div>
            </div>
    </>
  );
}

export default Searching;