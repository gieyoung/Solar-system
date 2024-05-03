// !!!!나의 함수
import mFn from "./my_function.js";


// 스크롤 액션 JS

export default function TotopSlide(){

    // 대상:.totopslide
    const TotopSlide = mFn.qsa(".totopslide");
    

    /********************************** 함수의 추상화 **********************************/
    // const totopSlide = mFn.qs(asdf);
    // console.log(totopSlide)
    /********************************** 함수의 추상화 **********************************/
    

    // 기준값:
    const CRITERIA = window.innerHeight/2;

    // 이벤트 설정하기
    mFn.addEvt(window,'scroll',showIt);

    // 스크롤 이벤트 함수
    function showIt(){
        // 대상위치값
        let tgPos = mFn.getBCR(TotopSlide);
        // console.log(tgPos);

        if(tgPos < CRITERIA){
            TotopSlide.classList.add('on');
        }
        else{
            TotopSlide.classList.remove('on');
        }

    } //////// showIt 함수 ////////////





} 