

import TotopSlide from "./earth_totop_slide.js";

const tgEle = ["#pg3","#pg4"];
tgEle.forEach(v=>{
    new TotopSlide(v);
})
// earth 오토 스크롤+ pg2 스크롤시가로 움직임
import auto_scroll from "./earth_auto_scroll.js";
auto_scroll();

