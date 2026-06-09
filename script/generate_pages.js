const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

const navItems = [
  ['sub_01.html', '혼자하기'],
  ['sub_02.html', '데이트코스'],
  ['sub_03.html', '가족나들이'],
  ['sub_04.html', '아이와함께'],
  ['board.html', '게시판'],
  ['ai.html', 'ai추천'],
];

const subMenus = [
  ['sub_01.html', ['요즘 핫한', '근처에서 찾기', '가볍게 즐기기', '취미/힐링', '혼밥 맛집', '집에서 즐기기']],
  ['sub_02.html', ['분위기 좋은 곳', '이색 데이트', '맛집 데이트', '사진 스팟', '산책/야외 데이트', '실내 데이트']],
  ['sub_03.html', ['야외 나들이', '체험/놀이시설', '가족 외식 추천', '쇼핑/복합몰', '근교 나들이', '전시/공연']],
  ['sub_04.html', ['영유아 추천 (0~3세)', '유아/아동 활동', '교육/체험', '키즈카페', '실내 놀거리', '야외 놀이터']],
  ['board.html', ['후기', '인증샷', '질문하기', '자유게시판', '인기글', '공지사항']],
  ['ai.html', ['맞춤 추천 받기', '취향 분석', '내 취향 저장', '추천 기록', '추천 설정']],
];

const pages = {
  'sub_02.html': {
    title: '데이트코스',
    subtitle: '둘만의 분위기와 취향을 담은 하루 코스',
    visualClass: 'date',
    chips: ['#분위기 좋은 곳', '#이색 데이트', '#맛집 데이트', '#사진 스팟'],
    sections: [
      ['성수 감성 카페 투어', '커피와 전시, 산책이 이어지는 가벼운 데이트 코스', '서울 성동구 성수동', '11:00 ~ 21:00', '4.6'],
      ['한강 노을 피크닉', '노을 시간에 맞춰 즐기는 여유로운 야외 데이트', '서울 여의도 한강공원', '17:00 ~ 22:00', '4.7'],
      ['익선동 한옥 골목', '한옥 골목과 작은 맛집이 이어지는 감성 산책', '서울 종로구 익선동', '12:00 ~ 22:00', '4.5'],
      ['남산 야경 산책', '서울 야경을 보며 천천히 걷는 클래식 코스', '서울 중구 남산공원', '상시 개방', '4.6'],
      ['잠실 석촌호수', '계절마다 다른 풍경을 즐기는 호수 산책', '서울 송파구 잠실동', '상시 개방', '4.4'],
      ['북촌 사진 스팟', '골목마다 사진 찍기 좋은 고즈넉한 코스', '서울 종로구 북촌로', '10:00 ~ 18:00', '4.5'],
    ],
  },
  'sub_03.html': {
    title: '가족나들이',
    subtitle: '아이부터 어른까지 함께 즐기는 주말 추천',
    visualClass: 'family',
    chips: ['#주말 나들이', '#가족 외식', '#체험 활동', '#근교 힐링'],
    sections: [
      ['서울숲 피크닉', '넓은 잔디와 산책길이 있는 도심 속 가족 쉼터', '서울 성동구 뚝섬로', '상시 개방', '4.7'],
      ['국립과천과학관', '아이와 함께 과학을 쉽고 재미있게 만나는 공간', '경기 과천시 상하벌로', '09:30 ~ 17:30', '4.6'],
      ['하남 스타필드', '쇼핑, 식사, 휴식을 한 번에 해결하는 복합몰', '경기 하남시 미사대로', '10:00 ~ 22:00', '4.4'],
      ['남양주 물의정원', '자연 풍경을 따라 걷기 좋은 근교 산책 코스', '경기 남양주시 조안면', '상시 개방', '4.5'],
      ['어린이대공원', '동물, 놀이, 산책을 함께 즐기는 클래식 명소', '서울 광진구 능동로', '05:00 ~ 22:00', '4.5'],
      ['파주 헤이리마을', '전시와 카페, 책방이 모인 문화 나들이', '경기 파주시 탄현면', '10:00 ~ 19:00', '4.4'],
    ],
  },
  'sub_04.html': {
    title: '아이와함께',
    subtitle: '아이의 속도에 맞춰 고른 안전하고 알찬 코스',
    visualClass: 'kids',
    chips: ['#키즈카페', '#교육체험', '#실내놀거리', '#짧은 외출'],
    sections: [
      ['서울상상나라', '놀이와 체험을 통해 배우는 어린이 복합문화공간', '서울 광진구 능동로', '10:00 ~ 18:00', '4.6'],
      ['북서울꿈의숲', '숲길과 전망대, 잔디가 있는 편안한 외출지', '서울 강북구 월계로', '상시 개방', '4.5'],
      ['키즈 쿠킹 클래스', '작은 손으로 직접 만드는 즐거운 요리 체험', '서울 마포구 합정동', '예약제', '4.4'],
      ['어린이 도서관', '조용히 책을 읽고 쉬어가기 좋은 실내 코스', '서울 송파구 오금로', '09:00 ~ 18:00', '4.5'],
      ['창의 공방 체험', '만들기 활동으로 집중력을 키우는 원데이 클래스', '서울 서초구 방배동', '예약제', '4.4'],
      ['실내 스포츠 놀이터', '날씨 걱정 없이 뛰어놀 수 있는 활동 공간', '경기 성남시 분당구', '10:00 ~ 20:00', '4.3'],
    ],
  },
  'ai.html': {
    title: 'AI추천',
    subtitle: '취향과 상황을 조합해 오늘에 맞는 장소를 찾아요',
    visualClass: 'ai',
    chips: ['#맞춤 추천', '#취향 분석', '#추천 기록', '#설정 저장'],
    sections: [
      ['오늘의 맞춤 코스', '기분, 시간, 위치를 반영한 하루 추천을 받아보세요', 'Pickly AI', '실시간 추천', '4.8'],
      ['취향 분석 리포트', '자주 선택한 태그를 기반으로 취향을 정리해줘요', '내 취향 저장소', '상시 이용', '4.7'],
      ['근처 추천 받기', '현재 위치 주변에서 부담 없는 장소를 골라줘요', '위치 기반', '상시 이용', '4.6'],
      ['비 오는 날 추천', '날씨에 맞는 실내 코스와 조용한 공간을 추천해요', '날씨 기반', '상시 이용', '4.5'],
      ['혼자/함께 모드', '동행 유형에 따라 분위기와 동선을 다르게 제안해요', '상황 기반', '상시 이용', '4.7'],
      ['추천 기록', '지난 추천을 다시 보고 마음에 든 장소를 저장해요', '마이 Pickly', '상시 이용', '4.6'],
    ],
  },
};

function header(activeHref = '') {
  const nav = navItems.map(([href, label], index) => {
    const menu = subMenus[index][1].map(item => `<li><a href="${href}">${item}</a></li>`).join('');
    const align = index === 0 ? '' : ` align${index + 1}`;
    const ai = href === 'ai.html' ? ' class="ai_recom"' : '';
    const active = href === activeHref ? ' class="is-active"' : '';
    return `<li${ai}><a href="${href}"${active}>${label}</a><ul class="lnb${align}">${menu}</ul></li>`;
  }).join('');

  return `<header class="container">
        <div class="topset">
            <div class="Fav_box"><a href="favorites.html"><img src="images/icon_fav.png" alt="즐겨찾기">Favorites</a></div>
            <div class="login_box">
                <div class="login">
                    <a href="login.html"><img src="images/icon_login.png" alt="로그인">LOGIN</a>
                    <a href="join.html" class="log_line"><img src="images/icon_join.png" alt="회원가입">JOIN</a>
                    <a href="sitemap.html"><img src="images/icon_sitemap.png" alt="사이트맵">SITEMAP</a>
                </div>
                <div class="logout">
                    <a href="login.html"><img src="images/icon_login.png" alt="로그아웃">LOGOUT</a>
                    <a href="join.html" class="log_line"><img src="images/icon_join.png" alt="회원가입">JOIN</a>
                    <a href="sitemap.html"><img src="images/icon_sitemap.png" alt="사이트맵">SITEMAP</a>
                </div>
            </div>
        </div>
        <h1><a href="index.html"><img src="images/logo.png" alt="픽클리"></a></h1>
        <nav class="gnb"><ul>${nav}</ul></nav>
    </header>`;
}

function footer() {
  return `<footer>
        <div class="foot">
            <img src="images/foot_logo.png" alt="">
            <div class="foot_tit">Pickly 더 나은 하루를 위한 추천 서비스</div>
            <div class="foot_add">
                <p><strong>이메일</strong> contact@pickly.com</p>
                <p><span>운영시간 </span> 평일 09:00 - 18:00</p>
            </div>
            <ul class="foot_service">
                <li><a href="terms.html">이용약관</a></li>
                <li><a href="privacy.html">개인정보처리방침</a></li>
                <li><a href="support.html">고객센터</a></li>
                <li><a href="partner.html">제휴 문의 서비스</a></li>
                <li><a href="guide.html">이용 가이드</a></li>
            </ul>
            <div class="foot_copyright">© 2026 Pickly. Designed by KimHyeok.</div>
        </div>
    </footer>`;
}

function doc(title, body, activeHref = '') {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pickly - ${title}</title>
    <link rel="stylesheet" href="css/font.css">
    <link rel="stylesheet" href="css/sub.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined">
</head>
<body>
    ${header(activeHref)}
    ${body}
    ${footer()}
</body>
</html>
`;
}

function categoryPage(file, data) {
  const cards = data.sections.map((item, index) => `<li>
                    <a href="place_detail.html?title=${encodeURIComponent(item[0])}">
                        <div class="sub-card-media sheet-${data.visualClass}"><img src="images/sub_category_sheet.png" alt=""></div>
                        <div class="list_box">
                            <div class="list_txt">
                                <h5>${item[0]}<span>${item[1]}</span></h5>
                                <p class="star">★ ${item[4]}</p>
                            </div>
                            <p><span><img src="images/icon_location.png" alt="">${item[2]}</span> <strong><img src="images/icon_time.png" alt="">${item[3]}</strong></p>
                        </div>
                    </a>
                </li>`).join('');
  const chips = data.chips.map((chip, index) => `<li${index === 0 ? ' class="on"' : ''}><a href="${file}?tag=${encodeURIComponent(chip.replace('#', ''))}">${chip}</a></li>`).join('');
  const dateBestCourse = file === 'sub_02.html' ? `<section class="date-best-course">
        <div class="scontainer">
            <div class="date-best-head">
                <div>
                    <span>BEST COURSE</span>
                    <h3>이번 주 데이트 코스</h3>
                    <p>이동 동선과 분위기를 함께 고려한 Pickly 추천 루트예요.</p>
                </div>
                <a href="ai.html?mode=recommend">AI로 코스 다시 받기</a>
            </div>
            <div class="date-course-panel">
                <a href="place_detail.html?title=${encodeURIComponent('성수 노을 데이트 코스')}" class="date-course-visual">
                    <img src="images/sub_category_sheet.png" alt="">
                    <div class="visual-badge">
                        <strong>성수 노을 데이트</strong>
                        <span>카페 · 전시 · 와인바</span>
                    </div>
                </a>
                <div class="date-course-content">
                    <div class="course-score">
                        <strong>★ 4.8</strong>
                        <span>2인 추천 만족도</span>
                    </div>
                    <ol class="course-timeline">
                        <li><em>01</em><div><strong>성수 감성 카페</strong><span>15:00 · 대화하기 좋은 조용한 시작</span></div></li>
                        <li><em>02</em><div><strong>작은 전시 산책</strong><span>17:00 · 사진과 취향을 나누는 시간</span></div></li>
                        <li><em>03</em><div><strong>서울숲 노을길</strong><span>18:30 · 해질녘에 맞춘 산책 루트</span></div></li>
                        <li><em>04</em><div><strong>와인바 마무리</strong><span>20:00 · 부담 없는 저녁 코스</span></div></li>
                    </ol>
                    <div class="course-meta">
                        <p><span class="material-symbols-outlined">schedule</span>약 5시간</p>
                        <p><span class="material-symbols-outlined">near_me</span>도보 중심</p>
                        <p><span class="material-symbols-outlined">favorite</span>분위기형</p>
                    </div>
                </div>
            </div>
        </div>
    </section>` : '';
  const introSection = `<section class="sub-page-intro${file === 'sub_02.html' ? ' date-intro-lower' : ''}">
        <div class="scontainer">
            <div class="intro-copy">
                <h3><img src="images/sub_tit_icon.png" alt="">${data.title}</h3>
                <p>${data.subtitle}</p>
            </div>
            <ul class="bs_list">${chips}</ul>
        </div>
    </section>`;
  const body = `<div class="sub1_top sub-top-${data.visualClass}">
        <div class="txt">
            <h2>${data.title}<span>${data.subtitle}</span></h2>
        </div>
    </div>
    ${file === 'sub_02.html' ? `${dateBestCourse}${introSection}` : `${introSection}${dateBestCourse}`}
    <section class="bemyself_box sub-list-page">
        <div class="scontainer">
            <div class="rec_list"><ul>${cards}</ul></div>
        </div>
    </section>`;
  return doc(data.title, body, file);
}

function aiPage() {
  const body = `<div class="ai-hero">
        <div class="scontainer">
            <div class="ai-hero-copy">
                <span>Pickly AI Recommendation</span>
                <h2>오늘의 상황을 말하면<br>AI가 하루 코스를 조합해줘요</h2>
                <p>기분, 시간, 동행, 위치 신호를 함께 읽어서 지금 가장 어울리는 장소와 활동을 추천합니다.</p>
                <div class="ai-hero-actions">
                    <a href="#ai-console">추천 시작하기</a>
                    <a href="guide.html">이용 가이드</a>
                </div>
            </div>
            <div class="ai-orbit" aria-hidden="true">
                <div class="ai-core"><span class="material-symbols-outlined">auto_awesome</span><strong>AI</strong></div>
                <p class="node n1">Mood</p>
                <p class="node n2">Place</p>
                <p class="node n3">Time</p>
                <p class="node n4">Taste</p>
            </div>
        </div>
    </div>
    <section class="ai-console-section" id="ai-console">
        <div class="scontainer">
            <div class="ai-console">
                <div class="ai-prompt-panel">
                    <div class="panel-head">
                        <span class="material-symbols-outlined">neurology</span>
                        <div>
                            <h3>AI 추천 콘솔</h3>
                            <p>원하는 하루를 자연스럽게 입력해보세요.</p>
                        </div>
                    </div>
                    <label class="ai-prompt-box">
                        <span>오늘은 어떤 하루가 필요해요?</span>
                        <textarea placeholder="예: 퇴근 후 2시간 정도, 조용하지만 분위기 있는 데이트 코스 추천해줘. 너무 멀지 않고 사진도 예쁘게 나왔으면 좋겠어."></textarea>
                    </label>
                    <div class="ai-signal-grid">
                        <button type="button">혼자</button>
                        <button type="button" class="active">데이트</button>
                        <button type="button">가족</button>
                        <button type="button">아이와</button>
                        <button type="button" class="active">저녁</button>
                        <button type="button">실내</button>
                        <button type="button">산책</button>
                        <button type="button">사진</button>
                    </div>
                    <div class="ai-console-actions">
                        <a href="search.html?ai=true">추천 생성하기</a>
                        <a href="ai.html?mode=settings">취향 설정</a>
                    </div>
                </div>
                <div class="ai-result-panel">
                    <div class="ai-result-top">
                        <span>LIVE MATCH</span>
                        <strong>92%</strong>
                    </div>
                    <h3>성수 노을 감성 코스</h3>
                    <p>카페에서 시작해 작은 전시를 보고, 해질녘 서울숲 산책으로 마무리하는 루트예요.</p>
                    <ol>
                        <li><em>01</em><span>성수 카페 거리</span><strong>15:00</strong></li>
                        <li><em>02</em><span>팝업 전시</span><strong>17:00</strong></li>
                        <li><em>03</em><span>서울숲 노을 산책</span><strong>18:30</strong></li>
                    </ol>
                    <a href="place_detail.html?title=${encodeURIComponent('성수 노을 감성 코스')}">자세히보기</a>
                </div>
            </div>
        </div>
    </section>
    <section class="ai-insight-section">
        <div class="scontainer">
            <div class="ai-section-title">
                <span>AI INSIGHT</span>
                <h3>추천에 반영된 취향 신호</h3>
            </div>
            <div class="ai-insight-grid">
                <article><span class="material-symbols-outlined">favorite</span><strong>분위기 우선</strong><p>조용함, 감성, 사진 스팟 태그가 강하게 반영됐어요.</p></article>
                <article><span class="material-symbols-outlined">route</span><strong>짧은 이동</strong><p>도보와 대중교통으로 이어지는 동선을 우선했어요.</p></article>
                <article><span class="material-symbols-outlined">schedule</span><strong>저녁 시간대</strong><p>노을과 야경이 예쁜 시간대를 기준으로 추천했어요.</p></article>
            </div>
        </div>
    </section>
    <section class="ai-feed-section">
        <div class="scontainer">
            <div class="ai-section-title">
                <span>RECOMMEND QUEUE</span>
                <h3>AI가 준비한 다음 추천</h3>
            </div>
            <div class="ai-feed-list">
                <a href="place_detail.html?title=${encodeURIComponent('비 오는 날 실내 데이트')}"><strong>비 오는 날 실내 데이트</strong><span>전시 · 티룸 · 조용한 저녁</span><em>87%</em></a>
                <a href="place_detail.html?title=${encodeURIComponent('혼자 회복하는 휴식 코스')}"><strong>혼자 회복하는 휴식 코스</strong><span>숲길 · 도서관 · 스파</span><em>84%</em></a>
                <a href="place_detail.html?title=${encodeURIComponent('아이와 짧은 외출 코스')}"><strong>아이와 짧은 외출 코스</strong><span>체험 · 실내 놀이 · 간식</span><em>81%</em></a>
            </div>
        </div>
    </section>`;

  return doc('AI추천', body, 'ai.html');
}

function boardPage() {
  const notices = [
    ['[공지]', 'Pickly 서비스 이용 안내', '06.09'],
    ['[이벤트]', '여름 추천 태그 이벤트', '06.03'],
    ['[후기]', '혼자 산책 코스 다녀왔어요', '05.28'],
    ['[질문]', '비 오는 날 데이트 장소 추천해주세요', '05.22'],
    ['[인증샷]', '서울숲 피크닉 사진 공유', '05.17'],
    ['[자유]', '요즘 마음에 든 카페 이야기', '05.10'],
  ];
  const rows = notices.map(([type, text, date]) => `<li><a href="post_detail.html?title=${encodeURIComponent(text)}"><strong>${type}</strong><span>${text}</span><em>${date}</em></a></li>`).join('');
  const body = `<div class="sub1_top sub-top-board"><div class="txt"><h2>게시판<span>Pickly 이용자들의 이야기와 소식을 모아봤어요</span></h2></div></div>
    <section class="board-page">
        <div class="scontainer">
            <div class="board-head">
                <h3><img src="images/sub_tit_icon.png" alt="">게시판</h3>
                <a href="board_write.html">글쓰기</a>
            </div>
            <ul class="board-tabs">
                <li class="on"><a href="board.html">전체</a></li><li><a href="board.html?type=review">후기</a></li><li><a href="board.html?type=qna">질문하기</a></li><li><a href="board.html?type=notice">공지사항</a></li>
            </ul>
            <ul class="board-list">${rows}</ul>
        </div>
    </section>`;
  return doc('게시판', body, 'board.html');
}

function simpleInfoPage(file, data) {
  const body = `<div class="sub1_top sub-top-util"><div class="txt"><h2>${data.title}<span>${data.subtitle}</span></h2></div></div>
    <section class="info-page">
        <div class="scontainer">
            <div class="info-layout">
                <aside>
                    <h3>Pickly</h3>
                    <ul>
                        <li><a href="terms.html">이용약관</a></li>
                        <li><a href="privacy.html">개인정보처리방침</a></li>
                        <li><a href="support.html">고객센터</a></li>
                        <li><a href="partner.html">제휴 문의</a></li>
                        <li><a href="guide.html">이용 가이드</a></li>
                    </ul>
                </aside>
                <article>
                    <h3>${data.title}</h3>
                    <p>${data.desc}</p>
                    <div class="info-box">${data.items.map(item => `<p><strong>${item[0]}</strong><span>${item[1]}</span></p>`).join('')}</div>
                    <a href="${data.ctaHref}" class="info-cta">${data.cta}</a>
                </article>
            </div>
        </div>
    </section>`;
  return doc(data.title, body);
}

function detailPage(file, data) {
  const body = `<div class="sub1_top sub-top-util"><div class="txt"><h2>${data.title}<span>${data.subtitle}</span></h2></div></div>
    <section class="detail-page">
        <div class="scontainer">
            <div class="detail-hero">
                <div class="sub-card-media sheet-ai"><img src="images/sub_category_sheet.png" alt=""></div>
                <div>
                    <span>${data.badge}</span>
                    <h3>${data.title}</h3>
                    <p>${data.desc}</p>
                    <div class="detail-actions">
                        <a href="favorites.html">즐겨찾기 담기</a>
                        <a href="ai.html">비슷한 추천 받기</a>
                    </div>
                </div>
            </div>
            <ul class="detail-info">
                ${data.items.map(item => `<li><strong>${item[0]}</strong><span>${item[1]}</span></li>`).join('')}
            </ul>
        </div>
    </section>`;
  return doc(data.title, body);
}

function searchPage() {
  const body = `<div class="sub1_top sub-top-util"><div class="txt"><h2>검색 결과<span>태그와 키워드에 맞는 추천을 모아봤어요</span></h2></div></div>
    <section class="search-page">
        <div class="scontainer">
            <div class="board-head"><h3><img src="images/sub_tit_icon.png" alt="">검색 결과</h3><a href="ai.html">AI추천</a></div>
            <ul class="board-tabs"><li class="on"><a href="search.html">전체</a></li><li><a href="sub_01.html">혼자하기</a></li><li><a href="sub_02.html">데이트</a></li><li><a href="sub_03.html">가족</a></li></ul>
            <div class="rec_list"><ul>
                ${['익선동 한옥거리','서울숲 피크닉','성수 감성 카페','북서울꿈의숲','한강 노을 산책','청수당 스파'].map((title, i) => `<li><a href="place_detail.html?title=${encodeURIComponent(title)}"><div class="sub-card-media sheet-${['date','family','date','kids','date','ai'][i]}"><img src="images/sub_category_sheet.png" alt=""></div><div class="list_box"><div class="list_txt"><h5>${title}<span>Pickly가 고른 추천 장소</span></h5><p class="star">★ 4.${i + 3}</p></div><p><span><img src="images/icon_location.png" alt="">서울</span> <strong><img src="images/icon_time.png" alt="">상시 확인</strong></p></div></a></li>`).join('')}
            </ul></div>
        </div>
    </section>`;
  return doc('검색 결과', body);
}

function boardWritePage() {
  const body = `<div class="sub1_top sub-top-board"><div class="txt"><h2>글쓰기<span>Pickly에서 발견한 하루를 공유해보세요</span></h2></div></div>
    <section class="utility-page"><div class="utility-card board-write-card">
        <h3>글쓰기</h3><p>후기, 질문, 인증샷을 자유롭게 남겨보세요.</p>
        <form><label><span>분류</span><input type="text" placeholder="후기 / 질문 / 인증샷"></label><label><span>제목</span><input type="text" placeholder="제목 입력"></label><label><span>내용</span><textarea placeholder="내용 입력"></textarea></label><button type="button">등록하기</button></form>
        <ul><li><a href="board.html">게시판으로 돌아가기</a></li></ul>
    </div></section>`;
  return doc('글쓰기', body, 'board.html');
}

function utilityPage(file, data) {
  const fields = data.fields.map(field => `<label><span>${field}</span><input type="text" placeholder="${field} 입력"></label>`).join('');
  const extra = data.links.map(link => `<li><a href="${link[0]}">${link[1]}</a></li>`).join('');
  const body = `<div class="sub1_top sub-top-util"><div class="txt"><h2>${data.title}<span>${data.subtitle}</span></h2></div></div>
    <section class="utility-page">
        <div class="utility-card">
            <h3>${data.title}</h3>
            <p>${data.desc}</p>
            ${data.fields.length ? `<form>${fields}<button type="button">${data.button}</button></form>` : `<div class="empty-state"><span class="material-symbols-outlined">${data.icon}</span><p>${data.empty}</p></div>`}
            <ul>${extra}</ul>
        </div>
    </section>`;
  return doc(data.title, body);
}

const utilityPages = {
  'login.html': {
    title: 'LOGIN',
    subtitle: 'Pickly 계정으로 취향 추천을 이어가세요',
    desc: '저장한 추천과 취향 설정을 불러올 수 있어요.',
    fields: ['아이디', '비밀번호'],
    button: '로그인',
    icon: 'login',
    empty: '',
    links: [['join.html', '회원가입'], ['favorites.html', '즐겨찾기 보기']],
  },
  'join.html': {
    title: 'JOIN',
    subtitle: '나에게 맞는 하루를 더 정확하게 추천받아요',
    desc: '기본 정보를 입력하면 Pickly 추천을 저장할 수 있어요.',
    fields: ['이름', '이메일', '비밀번호'],
    button: '회원가입',
    icon: 'person_add',
    empty: '',
    links: [['login.html', '이미 계정이 있어요'], ['sitemap.html', '사이트맵']],
  },
  'favorites.html': {
    title: 'Favorites',
    subtitle: '마음에 든 장소와 코스를 모아두는 공간',
    desc: '아직 저장된 즐겨찾기가 없어요. 마음에 드는 추천을 발견하면 담아보세요.',
    fields: [],
    button: '',
    icon: 'favorite',
    empty: '저장한 추천이 여기에 표시됩니다.',
    links: [['sub_01.html', '혼자하기 추천 보기'], ['ai.html', 'AI추천 받기']],
  },
};

function sitemapPage() {
  const groups = subMenus.map(([href, items], index) => `<div>
                <h4><a href="${href}">${navItems[index][1]}</a></h4>
                <ul>${items.map(item => `<li><a href="${href}">${item}</a></li>`).join('')}</ul>
            </div>`).join('');
  const body = `<div class="sub1_top sub-top-util"><div class="txt"><h2>SITEMAP<span>Pickly의 모든 메뉴를 한눈에 확인하세요</span></h2></div></div>
    <section class="sitemap-page"><div class="scontainer"><h3><img src="images/sub_tit_icon.png" alt="">사이트맵</h3><div class="sitemap-grid">${groups}</div></div></section>`;
  return doc('사이트맵', body);
}

Object.entries(pages).forEach(([file, data]) => {
  fs.writeFileSync(path.join(root, file), file === 'ai.html' ? aiPage() : categoryPage(file, data), 'utf8');
});

fs.writeFileSync(path.join(root, 'board.html'), boardPage(), 'utf8');

Object.entries(utilityPages).forEach(([file, data]) => {
  fs.writeFileSync(path.join(root, file), utilityPage(file, data), 'utf8');
});

fs.writeFileSync(path.join(root, 'sitemap.html'), sitemapPage(), 'utf8');

const infoPages = {
  'terms.html': {
    title: '이용약관',
    subtitle: 'Pickly 서비스를 이용하기 위한 기본 안내',
    desc: '서비스 이용에 필요한 기본 조건과 이용자의 권리를 안내합니다.',
    items: [['서비스 이용', 'Pickly는 취향 기반 장소와 활동 정보를 제공합니다.'], ['콘텐츠', '추천 정보는 참고용이며 방문 전 운영 정보를 확인해주세요.'], ['계정', '회원 정보는 추천 저장과 개인화 기능에 사용됩니다.']],
    cta: '이용 가이드 보기',
    ctaHref: 'guide.html',
  },
  'privacy.html': {
    title: '개인정보처리방침',
    subtitle: '개인 정보는 필요한 범위에서 안전하게 다룹니다',
    desc: 'Pickly는 추천 품질 향상과 계정 관리를 위해 최소한의 정보를 사용합니다.',
    items: [['수집 항목', '이메일, 선호 태그, 즐겨찾기 정보를 사용합니다.'], ['이용 목적', '맞춤 추천과 저장 기능 제공에 활용됩니다.'], ['보관', '회원 탈퇴 요청 시 관련 정보를 정리합니다.']],
    cta: '고객센터 문의',
    ctaHref: 'support.html',
  },
  'support.html': {
    title: '고객센터',
    subtitle: '궁금한 점이나 불편한 점을 알려주세요',
    desc: '서비스 이용 중 생긴 문의를 확인하고 도움을 받을 수 있어요.',
    items: [['이메일', 'contact@pickly.com'], ['운영시간', '평일 09:00 - 18:00'], ['자주 묻는 질문', '로그인, 추천 설정, 즐겨찾기 관련 문의를 도와드립니다.']],
    cta: '게시판에 질문하기',
    ctaHref: 'board_write.html',
  },
  'partner.html': {
    title: '제휴 문의',
    subtitle: 'Pickly와 함께 좋은 하루를 제안해보세요',
    desc: '공간, 브랜드, 지역 콘텐츠 제휴를 위한 안내 페이지입니다.',
    items: [['제휴 분야', '장소 추천, 이벤트, 지역 큐레이션'], ['문의 방식', '서비스 소개와 제휴 제안 내용을 보내주세요.'], ['검토', '담당자가 확인 후 순차적으로 연락드립니다.']],
    cta: '고객센터 보기',
    ctaHref: 'support.html',
  },
  'guide.html': {
    title: '이용 가이드',
    subtitle: 'Pickly를 더 편하게 쓰는 방법',
    desc: '필터와 태그, AI추천을 활용해 오늘의 장소를 빠르게 찾아보세요.',
    items: [['맞춤 설정', '기분, 활동 유형, 시간대를 골라 추천을 좁힙니다.'], ['즐겨찾기', '마음에 드는 장소는 Favorites에 담아둡니다.'], ['AI추천', '상황을 입력하면 Pickly가 코스를 제안합니다.']],
    cta: 'AI추천 받기',
    ctaHref: 'ai.html',
  },
};

Object.entries(infoPages).forEach(([file, data]) => {
  fs.writeFileSync(path.join(root, file), simpleInfoPage(file, data), 'utf8');
});

fs.writeFileSync(path.join(root, 'place_detail.html'), detailPage('place_detail.html', {
  title: '장소 상세',
  subtitle: '추천 장소의 분위기와 이용 정보를 확인하세요',
  badge: 'PICKLY PLACE',
  desc: '선택한 장소의 핵심 정보와 비슷한 추천으로 이어지는 상세 화면입니다.',
  items: [['추천 포인트', '분위기, 접근성, 시간대가 잘 맞는 장소입니다.'], ['이용 팁', '방문 전 운영 시간과 예약 여부를 확인해주세요.'], ['연결 추천', '비슷한 태그의 장소를 AI추천에서 이어서 볼 수 있어요.']],
}), 'utf8');

fs.writeFileSync(path.join(root, 'post_detail.html'), detailPage('post_detail.html', {
  title: '게시글 상세',
  subtitle: 'Pickly 이용자의 이야기를 자세히 읽어보세요',
  badge: 'BOARD STORY',
  desc: '게시판 글의 본문과 관련 추천으로 이어지는 상세 화면입니다.',
  items: [['작성자', 'Pickly 사용자'], ['분류', '후기 / 질문 / 공지'], ['관련 메뉴', '게시판에서 더 많은 이야기를 확인할 수 있어요.']],
}), 'utf8');

fs.writeFileSync(path.join(root, 'search.html'), searchPage(), 'utf8');
fs.writeFileSync(path.join(root, 'board_write.html'), boardWritePage(), 'utf8');

['index.html', 'sub_01.html'].forEach(file => {
  const fullPath = path.join(root, file);
  let html = fs.readFileSync(fullPath, 'utf8');

  html = html
    .replace(/<div class="Fav_box"><a href="#">/g, '<div class="Fav_box"><a href="favorites.html">')
    .replace(/<a href="#"><img src="images\/icon_login.png" alt="로그인">LOGIN<\/a>/g, '<a href="login.html"><img src="images/icon_login.png" alt="로그인">LOGIN</a>')
    .replace(/<a href="#" class="log_line"><img src="images\/icon_join.png" alt="회원가입">JOIN<\/a>/g, '<a href="join.html" class="log_line"><img src="images/icon_join.png" alt="회원가입">JOIN</a>')
    .replace(/<a href="#"><img src="images\/icon_sitemap.png" alt="사이트맵">SITEMAP<\/a>/g, '<a href="sitemap.html"><img src="images/icon_sitemap.png" alt="사이트맵">SITEMAP</a>')
    .replace(/<a href="#"><img src="images\/icon_login.png" alt="로그인">LOGOUT<\/a>/g, '<a href="login.html"><img src="images/icon_login.png" alt="로그인">LOGOUT</a>')
    .replace(/<a href="#">데이트코스<\/a>/g, '<a href="sub_02.html">데이트코스</a>')
    .replace(/<a href="#">가족나들이<\/a>/g, '<a href="sub_03.html">가족나들이</a>')
    .replace(/<a href="#">아이와함께<\/a>/g, '<a href="sub_04.html">아이와함께</a>')
    .replace(/<a href="#">게시판<\/a>/g, '<a href="board.html">게시판</a>')
    .replace(/<a href="#">ai추천<\/a>/g, '<a href="ai.html">ai추천</a>');

  const menuMap = {
    '요즘 핫한': 'sub_01.html',
    '근처에서 찾기': 'sub_01.html?tag=near',
    '가볍게 즐기기': 'sub_01.html?tag=light',
    '취미/힐링': 'sub_01.html?tag=healing',
    '혼밥 맛집': 'sub_01.html?tag=solo-food',
    '집에서 즐기기': 'sub_01.html?tag=home',
    '분위기 좋은 곳': 'sub_02.html?tag=mood',
    '이색 데이트': 'sub_02.html?tag=unique',
    '맛집 데이트': 'sub_02.html?tag=food',
    '사진 스팟': 'sub_02.html?tag=photo',
    '산책/야외 데이트': 'sub_02.html?tag=walk',
    '실내 데이트': 'sub_02.html?tag=indoor',
    '야외 나들이': 'sub_03.html?tag=outdoor',
    '체험/놀이시설': 'sub_03.html?tag=activity',
    '가족 외식 추천': 'sub_03.html?tag=family-food',
    '쇼핑/복합몰': 'sub_03.html?tag=mall',
    '근교 나들이': 'sub_03.html?tag=suburb',
    '전시/공연': 'sub_03.html?tag=show',
    '영유아 추천 (0~3세)': 'sub_04.html?tag=baby',
    '유아/아동 활동': 'sub_04.html?tag=kids',
    '교육/체험': 'sub_04.html?tag=edu',
    '키즈카페': 'sub_04.html?tag=kids-cafe',
    '실내 놀거리': 'sub_04.html?tag=indoor',
    '야외 놀이터': 'sub_04.html?tag=playground',
    '짧은 외출 코스': 'sub_04.html?tag=short',
    '후기': 'board.html?type=review',
    '인증샷': 'board.html?type=photo',
    '질문하기': 'board_write.html',
    '자유게시판': 'board.html?type=free',
    '인기글': 'board.html?type=popular',
    '공지사항': 'board.html?type=notice',
    '맞춤 추천 받기': 'ai.html?mode=recommend',
    '취향 분석': 'ai.html?mode=taste',
    '내 취향 저장': 'ai.html?mode=save',
    '추천 기록': 'ai.html?mode=history',
    '추천 설정': 'ai.html?mode=settings',
  };

  Object.entries(menuMap).forEach(([text, href]) => {
    html = html.replace(new RegExp(`<a href="#">${text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</a>`, 'g'), `<a href="${href}">${text}</a>`);
  });

  html = html
    .replace(/action="\/search"/g, 'action="search.html"')
    .replace(/href="#" class="btit"/g, 'href="board.html?type=popular" class="btit"')
    .replace(/href="#" class="tit"/g, 'href="board.html" class="tit"')
    .replace(/href="#" class="rec"/g, 'href="place_detail.html?action=recommend" class="rec"')
    .replace(/href="#" class="nrec"/g, 'href="place_detail.html?action=not-recommend" class="nrec"')
    .replace(/href="#" class="reset"/g, 'href="ai.html?refresh=true" class="reset"')
    .replace(/href="#" class="setting"/g, 'href="ai.html?mode=settings" class="setting"')
    .replace(/<a href="#" id="filter-btn"><span><img src="images\/sub_icon_filter.png" alt=""><\/span>맞춤 설정<\/a>/g, '<button type="button" id="filter-btn"><span><img src="images/sub_icon_filter.png" alt=""></span>맞춤 설정</button>')
    .replace(/<a href="javascript:void\(0\)" id="filter-btn"><span><img src="images\/sub_icon_filter.png" alt=""><\/span>맞춤 설정<\/a>/g, '<button type="button" id="filter-btn"><span><img src="images/sub_icon_filter.png" alt=""></span>맞춤 설정</button>')
    .replace(/<li><a href="#">#([^<]+)<\/a><\/li>/g, '<li><a href="search.html?tag=$1">#$1</a></li>')
    .replace(/<p><a href="#"><span>#<\/span>([^<]+)<\/a><\/p>/g, '<p><a href="search.html?tag=$1"><span>#</span>$1</a></p>')
    .replace(/<a href="#">자세히보기<\/a>/g, '<a href="place_detail.html">자세히보기</a>')
    .replace(/<a href="#">([^<]+)<span>/g, '<a href="place_detail.html?title=$1">$1<span>')
    .replace(/<a href="#"><li>/g, '<a href="post_detail.html"><li>')
    .replace(/<a href="#">\s*<div class="list_img">/g, '<a href="place_detail.html"><div class="list_img">')
    .replace(/<a href="#">\s*<p class="rtit">/g, '<a href="post_detail.html"><p class="rtit">')
    .replace(/<li class="list_on"><img src="images\/btn_slide_on.png" alt=""><a href="#">/g, '<li class="list_on"><img src="images/btn_slide_on.png" alt=""><a href="board.html?type=popular">')
    .replace(/<li><img src="images\/btn_slide_off.png" alt=""><a href="#">새롭게 도착한 이야기<\/a><\/li>/g, '<li><img src="images/btn_slide_off.png" alt=""><a href="board.html?type=new">새롭게 도착한 이야기</a></li>')
    .replace(/<li><img src="images\/btn_slide_off.png" alt=""><a href="#">꼭 읽어보면 좋은 이야기<\/a><\/li>/g, '<li><img src="images/btn_slide_off.png" alt=""><a href="board.html?type=recommend">꼭 읽어보면 좋은 이야기</a></li>')
    .replace(/<li><a href="#">이용약관<\/a><\/li>/g, '<li><a href="terms.html">이용약관</a></li>')
    .replace(/<li><a href="#">개인정보처리방침<\/a><\/li>/g, '<li><a href="privacy.html">개인정보처리방침</a></li>')
    .replace(/<li><a href="#">고객센터<\/a><\/li>/g, '<li><a href="support.html">고객센터</a></li>')
    .replace(/<li><a href="#">제휴 문의 서비스<\/a><\/li>/g, '<li><a href="partner.html">제휴 문의 서비스</a></li>')
    .replace(/<li><a href="#">이용 가이드<\/a><\/li>/g, '<li><a href="guide.html">이용 가이드</a></li>')
    .replace(/href="#"/g, 'href="search.html"');

  html = html
    .replace(/<li><a href="search.html">요즘 핫한<\/a><\/li>/g, '<li><a href="sub_01.html">요즘 핫한</a></li>')
    .replace(/<a href="search.html"> 독립 서점<\/a>/g, '<a href="search.html?tag=독립서점"> 독립 서점</a>')
    .replace(/<a href="search.html"> 조용한 북카페<\/a>/g, '<a href="search.html?tag=북카페"> 조용한 북카페</a>')
    .replace(/<a href="search.html"> 심야 식당<\/a>/g, '<a href="search.html?tag=심야식당"> 심야 식당</a>')
    .replace(/<a href="search.html"> 1인 스파\/마사지<\/a>/g, '<a href="search.html?tag=스파마사지"> 1인 스파/마사지</a>')
    .replace(/<div class="reset"><a href="search.html"><img src="images\/sub_icon_reset.png" alt="">다시 추천 받기<\/a><\/div>/g, '<div class="reset"><a href="ai.html?refresh=true"><img src="images/sub_icon_reset.png" alt="">다시 추천 받기</a></div>')
    .replace(/<li class="on"><a href="search.html">#나만의 온전한 휴식<\/a><\/li>/g, '<li class="on"><a href="search.html?tag=나만의 온전한 휴식">#나만의 온전한 휴식</a></li>')
    .replace(/<a href="search.html">\s*<div>/g, '<a href="post_detail.html"><div>');

  fs.writeFileSync(fullPath, html, 'utf8');
});
