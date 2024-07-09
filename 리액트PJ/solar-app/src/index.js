import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Main from "./components/pages/Main";
import Earth from "./components/pages/Earth";
import Jupiter from "./components/pages/Jupiter";
import Member from "./components/pages/Member";
import Login from "./components/pages/Login";

export default function MainComponent() {
  return (
    // 라우터 루트로 라우터 구성시작
    // basename 속성은 package.json의 "homepage"속성값을
    // 읽어옴 (읽는 방법은 process.env.PUBLIC_URL)
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* 중요!!! 레이아웃 컴포넌트를 루트로 설정!
        루트 Route 는 홀로닫지말고 반드시 다른
        하위 라우트를 감싸도록한다!!! */}
        <Route path="/" element={<Layout />}>
          {/* 하위 라우트 셋팅 
        -> path설정대신 index키워드를 쓰면 
        첫페이지로 구성됨 -> MainArea 컴포넌트 <Outlet/>에
        출력된다!*/}
<<<<<<< HEAD
=======
          <Route index element={<Main />} />
>>>>>>> bdef537a2e3474a34729265fc1746f026f7168ea
          <Route path="earth" element={<Earth />} />
          <Route path="jupiter" element={<Jupiter />} />
          <Route path="member" element={<Member />} />
          <Route path="login" element={<Login />} />
        </Route>
        {/* Layout 루트 Route로 하위 Route를 감싼다! */}
      </Routes>
    </BrowserRouter>
  );
}

/// 컴포넌트 출력 ///
// 먼저 root 객체 만들기
const root = ReactDOM.createRoot(document.querySelector("#root"));
// 출력하기
root.render(<MainComponent />);
