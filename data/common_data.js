// 공통요소 데이터 객체 - common_data.js

const comData = {
  // 1. 상단영역 코드
  headerArea:`    
  <header class="header-area inbox">
  <!-- 로고 -->
  <h1 class="logo">
    <a href="/index.html" alt="나사 로고"
      ><span class="ir">로고</span>
      <img src="../images/common/logo.png" alt="로고이미지" />
    </a>
  </h1>

  <!-- 메뉴 -->
  <nav id="gnb"></nav>

  <!-- 기타 -->
  <div class="etc">
    <!-- 검색버튼 -->
    <div class="search">
      <input type="text" id="input-box" class="input-box" />
      <label for="input-box" class="fa-solid fa-magnifying-glass icon"></label>
    </div>

    <!-- 모바일 버튼 -->
  </div>
</header>
  `,
  // 2. 하단영역 코드
  footerArea:`    
  <footer class="footer-area">
        <!-- 옆으로 움직이는 태양계 -->
        <div class="move-gallery">
          <h3>Solar System</h3>
          <div class="gbox"></div>
        </div>

        <div class="inbox">
          <!-- 돌아가는 3d 궤도 애니메이션 -->
          <div class="spinner-box">
            <div class="blue-orbit leo"></div>
            <div class="green-orbit leo"></div>
            <div class="red-orbit leo"></div>
            <div class="white-orbit w1 leo"></div>
            <div class="white-orbit w2 leo"></div>
            <div class="white-orbit w3 leo"></div>
          </div>

          <!-- sns공유하기 -->
          <ul class="sns">
            <li>
              <a href=""><i class="fa-brands fa-square-facebook"></i></a>
            </li>
            <li>
              <a href=""><i class="fa-brands fa-square-instagram"></i></a>
            </li>
            <li>
              <a href=""><i class="fa-brands fa-square-twitter"></i></a>
            </li>
          </ul>
          <!-- 저작권 표시 -->
          <div class="copy-right">
            <p>
              This site is maintained by the Planetary Science Communications team at<br />
              NASA’s Jet Propulsion Laboratory for NASA’s Science Mission Directorate.
            </p>
          </div>
        </div>
        <!-- 탑버튼 -->
        <a href="javascript:;" class="top-btn on"><span class="ir">상단으로 이동</span></a>
      </footer>
  

  `,
}; /////////// comData 객체 ////////////////



// 내보내기
export default comData;