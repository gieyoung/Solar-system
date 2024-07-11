import React from "react";
import { useEffect } from "react";

function Esection2(props) {
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


    return (
        <div id="pg2" className="e_page">
           
            <section className="pg2 ofhidden">
                <div className="epg etpg">
                    <div className="eslidePg">
                        <ul>
                            <li>
                                <div>
                                    <p>Scroll➡</p>
                                </div>
                            </li>
                            <li className="e-moveleft">
                                <p className="cont-tit">Namesake</p>
                                <p className="cont-txt">
                                    The name Earth is at least 1,000 years old.
                                    All of the planets, except for Earth, were
                                    named after Greek and Roman gods and
                                    goddesses. However, the name Earth is a
                                    Germanic word, which simply means “the
                                    ground.”
                                </p>
                                <img
                                    src="/images/earth/earth_back.webp"
                                    alt=""
                                />
                                <p className="fliker">Drag➡</p>
                            </li>
                            <li className="e-moveleft">
                                <p className="cont-tit">Potential for Life</p>
                                <p className="cont-txt">
                                    Earth has a very hospitable temperature and
                                    mix of chemicals that have made life
                                    abundant here. Most notably, Earth is unique
                                    in that most of our planet is covered in
                                    liquid water, since the temperature allows
                                    liquid water to exist for extended periods
                                    of time. Earth's vast oceans provided a
                                    convenient place for life to begin about 3.8
                                    billion years ago. Some of the features of
                                    our planet that make it great for sustaining
                                    life are changing due to the ongoing effects
                                    of climate change.
                                </p>
                                <img
                                    src="/images/earth/Potential_for_Life.jpg"
                                    alt=""
                                />
                            </li>
                            <li className="e-moveleft">
                                <p className="cont-tit">Size and Distance</p>
                                <p className="cont-txt">
                                    With an equatorial diameter of 7926 miles
                                    (12,760 kilometers), Earth is the biggest of
                                    the terrestrial planets and the fifth
                                    largest planet in our solar system. From an
                                    average distance of 93 million miles (150
                                    million kilometers), Earth is exactly one
                                    astronomical unit away from the Sun because
                                    one astronomical unit (abbreviated as AU),
                                    is the distance from the Sun to Earth. This
                                    unit provides an easy way to quickly compare
                                    planets' distances from the Sun. It takes
                                    about eight minutes for light from the Sun
                                    to reach our planet.
                                </p>
                                <img
                                    src="/images/earth/Size_and_Distance.jpg"
                                    alt=""
                                />
                            </li>
                            <li className="e-moveleft">
                                <p className="cont-tit">Orbit and Rotation</p>
                                <p className="cont-txt">
                                    As Earth orbits the Sun, it completes one
                                    rotation every 23.9 hours. It takes 365.25
                                    days to complete one trip around the Sun.
                                    That extra quarter of a day presents a
                                    challenge to our calendar system, which
                                    counts one year as 365 days. To keep our
                                    yearly calendars consistent with our orbit
                                    around the Sun, every four years we add one
                                    day. That day is called a leap day, and the
                                    year it's added to is called a leap year.
                                </p>
                                <img
                                    src="/images/earth/Orbit_and_Rotation.jpg"
                                    alt=""
                                />
                            </li>
                            <li className="e-moveleft">
                                <p className="cont-tit">Formation</p>
                                <p className="cont-txt">
                                    When the solar system settled into its
                                    current layout about 4.5 billion years ago,
                                    Earth formed when gravity pulled swirling
                                    gas and dust in to become the third planet
                                    from the Sun. Like its fellow terrestrial
                                    planets, Earth has a central core, a rocky
                                    mantle, and a solid crust.
                                </p>
                                <img
                                    src="/images/earth/earth_fomation.jpg"
                                    alt=""
                                />
                            </li>
                            <li className="e-moveleft">
                                <p className="cont-tit">Structure</p>
                                <p className="cont-txt">
                                    Earth is composed of four main layers,
                                    starting with an inner core at the planet's
                                    center, enveloped by the outer core, mantle,
                                    and crust. The inner core is a solid sphere
                                    made of iron and nickel metals about 759
                                    miles (1,221 kilometers) in radius. There
                                    the temperature is as high as 9,800 degrees
                                    Fahrenheit (5,400 degrees Celsius).
                                    Surrounding the inner core is the outer
                                    core. This layer is about 1,400 miles (2,300
                                    kilometers) thick, made of iron and nickel
                                    fluids.
                                </p>
                                <img
                                    src="/images/earth/Structure.webp"
                                    alt=""
                                />
                            </li>
                            <li className="e-moveleft">
                                <p className="cont-tit">Surface</p>
                                <p className="cont-txt">
                                    Like Mars and Venus, Earth has volcanoes,
                                    mountains, and valleys. Earth's lithosphere,
                                    which includes the crust (both continental
                                    and oceanic) and the upper mantle, is
                                    divided into huge plates that are constantly
                                    moving. For example, the North American
                                    plate moves west over the Pacific Ocean
                                    basin, roughly at a rate equal to the growth
                                    of our fingernails. Earthquakes result when
                                    plates grind past one another, ride up over
                                    one another, collide to make mountains, or
                                    split and separate.
                                </p>
                                <img
                                    src="/images/earth/surface.jpg"
                                    alt=""
                                />
                            </li>
                            <li>
                                <div></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Esection2;
