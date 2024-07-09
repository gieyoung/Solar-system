import React, { useEffect } from 'react';
import Esection1 from '../modules/Esection1';
import Esection2 from '../modules/Esection2';
import Esection3 from '../modules/Esection3';
import Esection4 from '../modules/Esection4';
import '../../css/earth.scss';

function Earth() {
////////////이거 잘 안됨 다음에 수정하기 ******************************************
    /////////////////////////.e-moveleft에 클래스 on 주기//////////////////////////
    useEffect(() => {
        // 대상선택(.e-moveleft)
        const eMoveleft = document.querySelectorAll('.e-moveleft');

        // 화면 너비의 반을 기준값으로 설정합니다.
        const CRITERIA = window.innerWidth / 2;

        // 휠 이벤트 핸들러 함수를 정의합니다.
        const showIt = (e) => {
            // wheel 이벤트의 deltaY 속성을 사용하여 스크롤 방향을 가져옵니다.
            const deltaY = e.deltaY;

            // eMoveleft 배열을 순회하며 각 요소의 위치를 검사
            eMoveleft.forEach(ele => {
                 // 각 요소의 현재 위치 정보 left값 변수 설정
                // let tgPos = ele.getBoundingClientRect().left;
                let tgPos = ele.scrollLeft;

                // 현재 위치가 기준값보다 작으면 클래스를 추가하고, 크면 클래스를 제거합니다.
                if (deltaY < 0 && tgPos < CRITERIA) {
                    ele.classList.add('on'); // 휠을 위로 올릴 때
                } else if (deltaY > 0 && tgPos >= CRITERIA) {
                    ele.classList.remove('on'); // 휠을 아래로 내릴 때
                }
            });
        };

        // wheel 이벤트를 window에 등록합니다.
        window.addEventListener('wheel', showIt);

        // 컴포넌트가 언마운트될 때 wheel 이벤트 리스너를 제거하는 clean-up 함수를 반환합니다.
        return () => {
            window.removeEventListener('wheel', showIt);
        };
    }, []);



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


    ////////////////////////////////////////////오토스크롤 기능(화면에 멈추기)///////////////////////////
    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const sectionHeight = window.innerHeight;

            // Determine the new scroll position
            let newScroll = window.scrollY + (deltaY > 0 ? sectionHeight : -sectionHeight);

            // Ensure the new scroll position is within bounds
            newScroll = Math.max(0, Math.min(newScroll, sectionHeight * 3));

            window.scrollTo({
                top: newScroll,
                behavior: 'smooth',
            });
        };

        window.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);


    return (
        <div className="earth-section">
            <Esection1 />
            <Esection2 />
            <Esection3 />
            <Esection4 />
        </div>
    );
}

export default Earth;