// !!!!나의 함수
import mFn from "./my_function.js";


// 스크롤 액션 JS

export default function TotopSlide(asdf){

    // 대상:.totopslide
    const totopSlide = mFn.qs(asdf);
    console.log(totopSlide)
    

    // 기준값:
    const CRITERIA = window.innerHeight/2;

    // 이벤트 설정하기
    mFn.addEvt(window,'scroll',showIt);

    // 스크롤 이벤트 함수
    function showIt(){
        // 대상위치값
        let tgPos = mFn.getBCR(totopSlide);
        // console.log(tgPos);

        if(tgPos < CRITERIA){
            totopSlide.classList.add('on');
        }
        else{
            totopSlide.classList.remove('on');
        }

    } //////// showIt 함수 ////////////





} 