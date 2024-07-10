// 검색결과 리스트 컴포넌트
import React from "react";

// CSS불러오기
import "../../css/searching_cat.scss";

// 라우터돔 Link
import { Link } from "react-router-dom";

function SearchingCat({ dt }) {
  // dt - 검색된 배열데이터

  // total - 검색된 배열데이터 개수
  const total = dt.length;
  console.log("데이터수:", total);

  return (
    <>
      {
        // 데이터 개수가 0이 아닐때 출력
        total > 0 && (
          <ul className="clist">
            {dt.map((v, i) => (
              <li key={i}>
                <Link
                  to={v.link}
                  /* state로 3가지 값을 넘겨준다! */
                  state={{
                    alignment: v.alignment, // 행성이름
                    cdesc: v.cdesc, // 행성설명
                    link: v.link, // 행성링크
                  }}
                >
                  <h2>{v.alignment}</h2>
                  <h3>{v.cdesc}</h3>
                </Link>
              </li>
            ))}
          </ul>
        )
      }
      {
        // 선택데이터가 0개이면 아래 출력
        total == 0 && <h2 style={{ textAlign: "center" }}>검색어가 없습니다.</h2>
      }
    </>
  );
}

export default SearchingCat;
