import React from "react";
import { useEffect } from "react";

function Esection4(props) {
//////////////////////////////////////////////.e-moveup에 on주기/////////////////////////////////////////////////
useEffect(() => {
    // 대상선정(.e-moveup)
    const eMoveup = document.querySelectorAll('.e-moveup');

    // 화면 높이 기준
    const CRITERIA = window.innerHeight / 1000 * 999;

    // 클래스on주는 함수 생성
    const showIt = () => {
        // 모든 e-moveup 요소들에 대해 반복문
        eMoveup.forEach(ele => {
            // 각 요소의 현재 위치 정보 top값  변수 설정
            let tgPos = ele.getBoundingClientRect().top;
            
            // 각요소의 현제위치 < 화면높이 기준 이면 add클래스 on, 그렇지 않으면 remove클래스 on
            if (tgPos < CRITERIA) {
                ele.classList.add('on');
            } else {
                ele.classList.remove('on');
            }
        });
    };

    // 스크롤 이벤트를 window에 등록합니다.
    window.addEventListener('scroll', showIt);

    // 소멸자: 컴포넌트 언마운트시 소멸~~~~~~
    return () => {
        window.removeEventListener('scroll', showIt);
    };
}, []);// 한번만 실행


    return (
        <div id="pg4" className="e_page">
            <section className="pg4 inbox">
                <div className="cont-box">
                    <div className="pg4-txtbox">
                        <p className="desc-txt cont-txt e-moveup">
                            NASA SPACE PLACE
                        </p>
                        <h2 className="sub-tit e-moveup">Kid-Friendly Earth</h2>
                        <p className="cont-txt e-moveup">
                            Our home planet Earth is a rocky, terrestrial
                            planet. It has a solid and active surface with
                            mountains, valleys, canyons, plains and so much
                            more. Earth is special because it is an ocean
                            planet. Water covers 70% of Earth's surface. Earth's
                            atmosphere is made mostly of nitrogen and has plenty
                            of oxygen for us to breathe. The atmosphere also
                            protects us from incoming meteoroids, most of which
                            break up before they can hit the surface.
                        </p>
                        <a className="cont-txt" href="#">
                            NASA Space Place: All About Earth ▶
                        </a>
                    </div>
                    <div className="pg4-imgbox e-moveup">
                        <img
                            src="./assets/images/earth/pg4_kindly.webp"
                            alt="Kid-Friendly Earth"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Esection4;
