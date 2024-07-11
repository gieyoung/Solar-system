// 목성 2번쨰 설명부분 컴포넌트
import React from "react";
import { jupiter_desc_data } from "../js/jupiter_data";

function JupiTxt(props) {
  const selData = jupiter_desc_data;

  return (
    <section className="sub-jupiter jupiter2">
      {/* <!-- 2-1.설명 첫번째 --> */}
      {selData.map((v,i) => (
        <div className={"desc desc"+(i+1)+" cont-txt"}>
          <div className={"desc"+(i+1)+"-img desc-imgbx"}>
            <img src={`/images/jupiter/main_bg${i+1}.jpg`} alt="목성사진" />
          </div>
          <div className={"desc"+(i+1)+"-text"}>
            <p>
              <strong className="cont-tit">{v.tit}</strong>
              <br />
              <br />
              {v.txt[0]}
              <br />
              <br />
              {v.txt[1]}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default JupiTxt;
