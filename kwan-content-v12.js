// DEF site content — all pages built from blocks. Edit copy here.
(function () {
const A = (p) => 'assets/' + p, U = (p) => 'assets/us/' + p;

const ABOUT = [
  { type: 'head', eyebrow: 'About · 회사소개', title: ['실력으로 검증받은', '두 개의 팀.'], lead: '홈쇼핑에서 3년 연속 카테고리 1위를 만든 팀, 2017년부터 미국 현장을 지켜 온 팀. 각자의 시장에서 결과로 증명했고, 필요할 때는 한 팀으로 움직입니다.', viz: 'teams' },
  { type: 'cards', tone: 'paper', eyebrow: 'Two teams · 두 사업팀', title: ['각자의 시장에서,', '끝까지 책임집니다.'], minw: '320px', items: [
    { n: '홈쇼핑 사업팀 · 뷰티 전문', t: '브랜드를 만들고, 방송에서 이깁니다.', d: '상품 기획과 브랜드 설계로 시작해 생방송, 추가 편성, 다른 홈쇼핑사 입점까지 맡습니다.', cta: '홈쇼핑 사업 보기', go: 'homeshopping' },
    { n: '미국 진출 사업팀 · 카테고리 제한 없음', t: '한국 브랜드를 미국 시장에 세웁니다.', d: '크리에이터 캠페인으로 알리고, 현지 판매처 입점과 팝업으로 판매까지 잇습니다.', cta: '미국 진출 사업 보기', go: 'usa' } ], note: '두 팀은 각자 움직이고, 필요할 때는 한 팀으로 움직입니다.' },

  { type: 'people', eyebrow: '홈쇼핑 사업팀 · 대표', title: ['홈쇼핑 뷰티 최전선에서', '17년을 보낸 두 사람.'], items: [
    { slot: 'about-ban', name: '반연주', en: 'Yeonju Ban', role: '공동대표', lines: ['NS홈쇼핑 · 뷰티 MD', '현대홈쇼핑 · 뷰티 MD', '현대홈쇼핑 · 뷰티 파트장', '2024 · DEF 홈쇼핑 사업 시작', '2024 — 2026 · 카테고리 1위 3년 연속'], d: 'NS홈쇼핑과 현대홈쇼핑에서 뷰티 MD로 일했고, 현대홈쇼핑 뷰티 파트장을 지냈습니다. 2024년 홈쇼핑 사업을 시작한 뒤 3년 연속 카테고리 1위를 만들었습니다.' },
    { slot: 'about-ahn', name: '안호성', en: 'Hosung Ahn', role: '공동대표', lines: ['현대홈쇼핑 · 뷰티 선임 MD', '현대홈쇼핑 · 데이터방송 파트장', '뷰티 커머스 총괄', 'DEF · 상품 기획 · 방송 전략'], d: '현대홈쇼핑에서 뷰티 선임 MD와 데이터방송 파트장을 지냈고, 뷰티 커머스를 이끌었습니다. 상품 기획과 방송 전략을 맡고 있습니다.' } ] },
  { type: 'nums', items: [
    { v: '3', u: '년 연속', l: '홈쇼핑 카테고리 1위' }, { v: '5,500', u: '억', l: '누적 매출' },
    { v: '500', u: '개', l: '상품' }, { v: '500', u: '개', l: '협력사' }, { v: '17', u: '년', l: '홈쇼핑 경력' } ] },
  { type: 'qa', tone: 'paper', eyebrow: '홈쇼핑 사업팀', q: ['지금도 홈쇼핑에서 유니콘 브랜드가', '나올 수 있냐고 묻는다면.'], a: '네, 만들 수 있습니다.', lead: '홈쇼핑 경험이 없던 신설 법인이 10개월 만에 260억 원을 만들었습니다. 판매가 줄던 카테고리에서도, 여러 번 고전한 브랜드로도 1위를 만들었습니다.' },
  { type: 'emblems', eyebrow: '홈쇼핑 사업팀 · 성과', title: ['말이 아닌 성과로 증명합니다.'], lead: '홈쇼핑 사업이 만든 3년의 성과입니다. 지금도 홈쇼핑 업계에서 연간 200억 원 이상 브랜드를 만들고 있는 팀입니다.', items: [
    { y: '2026', t: '스킨케어', d: '5개월 139억 원' }, { y: '2025', t: '마스크 · 팩', d: '메디힐 유일 홈쇼핑 파트너사' }, { y: '2024', t: '헤어 · 두피', d: '10개월 260억 원' } ], cta: '홈쇼핑 사업 보기', go: 'homeshopping' },

  { type: 'split', tone: 'paper', eyebrow: '미국 진출 사업팀 · 함께한 기업', title: ['18년 동안 쌓은 경험으로', '한 팀처럼 움직입니다.'], paras: ['출판에서 시작해 디자인, 유통, 미국 현장까지. DEF 미국 진출 사업을 실행하는 팀이 해 온 일입니다.'], img: U('community-ue.webp'), cap: '미국 인플루언서 커뮤니티', defs: [
    { k: '2008년부터', v: '브랜드를 만들다 — 진에어 디자인 리뉴얼부터 기내지 발간까지 · 대한항공 50주년 엠블럼, 평창 올림픽 기념 보딩패스 · 삼성전자 캐릭터 · 콘텐츠 디자인' },
    { k: '2015년 유통 확장부터', v: '팔리게 하다 — 롯데면세점 메인 모델 에이전시 · 입점 운영 · 신세계면세점 · 갤러리아백화점 프리미엄 유통 운영 · 펜할리곤스 · 야만 한국 첫 도입과 정착' },
    { k: '2017년 미국 진출부터', v: '세계로 잇다 — 한애가 · 107 · 발효미학 · 소서 · 슬로우레시피, 창업기부터 함께한 브랜드들 · 미국 인플루언서 130명 파트너십' } ] },
  { type: 'rows', eyebrow: '미국 진출 사업팀 · 연혁', title: ['2008년부터 지금까지.'], lead: '2008년 출판으로 시작해 디자인, 유통, 글로벌 마케팅을 한 팀 안에서 함께 키워 왔습니다. 세 부문이 하나의 프로젝트를 같이 보고 각자의 전문성을 연결합니다.', items: [
    { k: '2008', t: '출판사 설립', d: '브랜드의 스토리를 만드는 일에서 시작' },
    { k: '2010', t: '디자인 · 브랜딩 에이전시', d: '스토리에 디자인을 입히다' },
    { k: '2015', t: '유통 확장 (클로이 에비뉴 합병)', d: '만든 것을 팔리는 곳으로' },
    { k: '2017', t: '미국 진출 · 현지 법인 설립', d: '무대를 세계로' },
    { k: '2022', t: '아마존 · 미국 오프라인 캠페인', d: '실행 경험을 쌓다' },
    { k: '2026', t: 'MCN 시작', d: '18년의 경험을 크리에이터와 잇다', hot: true } ], note: 'DEF 미국 진출 사업을 실행하는 팀의 이력입니다.', cta: '걸어온 길 자세히', go: 'usa-team' },

  { type: 'defs', tone: 'paper', eyebrow: 'Overview · 회사 개요', title: ['한눈에 보는 DEF'], items: [
    { k: '회사명', v: 'DEF' }, { k: '대표', v: '반연주 · 안호성' }, { k: '사업', v: '홈쇼핑 (뷰티) · 미국 진출 (전 카테고리)' },
    { k: '홈쇼핑', v: '2024 · 2025 · 2026 카테고리 1위' }, { k: '미국 진출', v: '2017년 미국 현지 법인 설립 · 크리에이터 130명' },
    { k: '소재지', v: '서울특별시 송파구 법원로 128 SKV1 B1005' }, { k: '문의', v: 'def@deflab.kr' } ] },
];

const HS = [
  { type: 'head', eyebrow: 'Practice 01 · 홈쇼핑 · 뷰티 전문', title: ['3년 연속 카테고리 1위.', '결과로 말합니다.'], lead: '상품 기획부터 방송 이후까지, 17년 차 MD 출신 대표들이 직접 맡습니다. 홈쇼핑이 처음인 브랜드도 이기게 만듭니다.' },
  { type: 'stats', minw: '200px', items: [
    { v: '3년 연속', l: '카테고리 1위', s: '2024 · 2025 · 2026' }, { v: '75%', l: '신상품 성공률', s: '업계 평균 20%' },
    { v: '260억', l: '론칭 10개월 매출', s: '헤어 · 두피' }, { v: '최다', l: '매진 방송', s: '2026 뷰티 신상품 기준' } ] },
  { type: 'onair', tone: 'navy', eyebrow: 'On Air · 매진 방송', title: ['가장 많은 매진을 만든 팀.'], sub: '2026년 뷰티 신상품 기준', lead: '실제 방송 화면입니다. 브랜드는 오프라인 미팅에서 공개합니다.', imgs: [1,2,3,4,5,6,7,8,9].map(i => A('so-' + String(i).padStart(2,'0') + '.jpg')) },
  { type: 'cards', eyebrow: 'Engagement · 협업 방식', title: ['맡은 일은', '처음부터 끝까지.'], minw: '280px', items: [
    { n: '01', t: '제품 개발', d: '브랜드가 있든 없든, 제품이 있든 없든 DEF가 전부 맡아 진행합니다.' },
    { n: '02', t: '운영', d: '17년 차 MD 출신 대표들이 직접 홈쇼핑 운영을 합니다.' },
    { n: '03', t: '전략적 파트너십', d: '적은 수의 브랜드에 집중하고자, 엄선하는 구조로 일합니다.', feat: true } ] },
  { type: 'rows', tone: 'paper', eyebrow: 'Process · 진행 순서', title: ['첫 미팅부터 추가 편성까지.'], items: [
    { k: 'Step 1', t: '미팅', d: '협력사의 상황과 업무 범위를 정합니다.' }, { k: 'Step 2', t: '진단', d: '맞는 홈쇼핑사와 카테고리를 제안합니다.' },
    { k: 'Step 3', t: '상품 설계', d: '컨셉, 구성, 가격을 정합니다.' }, { k: 'Step 4', t: '방송 준비', d: '첫 방송에 필요한 준비를 함께합니다.' },
    { k: 'Step 5', t: '론칭', d: '생방송을 함께 운영합니다.' }, { k: 'Step 6', t: '추가 편성', d: '결과를 근거로 다음 방송을 잡습니다.' } ] },
  { type: 'acc', faq: true, eyebrow: 'FAQ · 자주 묻는 질문', title: ['궁금하신 것들.'], items: [
    { t: '홈쇼핑이 처음이어도 되나요?', d: '네. 홈쇼핑 경험이 없던 신설 법인이 10개월 만에 카테고리 1위를 했습니다.' },
    { t: '아직 제품이 없어도 되나요?', d: '네. 제조사 선정과 내용물 개발부터 같이 합니다.' },
    { t: '뷰티가 아닌 제품도 가능한가요?', d: '네. DEF는 뷰티 전문 홈쇼핑 에이전시이지만, 식품 카테고리에서도 업계 톱클래스 성과를 내고 있습니다. 생활 카테고리로도 확장을 준비하고 있습니다. 다만 퀄리티를 위해 소수의 브랜드와만 함께합니다.' },
    { t: '비용은 어떻게 정하나요?', d: '협업 방식과 범위에 따라 다릅니다. 첫 미팅 후 안내드립니다.' },
    { t: '레퍼런스를 볼 수 있나요?', d: '브랜드 보호를 위해 오프라인 미팅에서 직접 보여드립니다.' } ] },
  { type: 'cards', tone: 'paper', eyebrow: 'Next · 다음 단계', title: ['제품 이야기부터 들려주세요.'], minw: '320px', items: [
    { t: '홈쇼핑 상담', d: '정리가 덜 됐어도 괜찮습니다. 대표가 직접 읽고 연락드립니다.', cta: '홈쇼핑 상담 신청', go: 'contact' },
    { t: '홈쇼핑을 맡기면서, 미국 진출도 함께.', d: 'DEF는 미국 진출 사업도 합니다. 다른 회사를 따로 찾지 않아도 됩니다.', cta: '미국 진출 사업 보기', go: 'usa' } ] },
];

const PHILO = [
  { type: 'mega', hero: true, eyebrow: 'Philosophy · 철학', title: ['우리는 이렇게', '싸웁니다.'], lead: 'DEF라는 이름에 담은 뜻, 그리고 비즈니스 전장에서 우리가 지키는 원칙입니다.' },
  { type: 'defname', eyebrow: 'DEF Philosophy · 01', title: ['DEF라는 이름에 담은 것.'], items: [
    { suf: 'INITION', ko: 'DEFINITION · 정의', t: '명확하게. 정확하게. 명백하게.', d: '모호한 말로 일하지 않습니다. 무엇을, 언제까지, 어떤 결과로 만들지 처음부터 분명히 정의하고 그대로 해냅니다.' },
    { suf: 'ENDER', ko: 'DEFENDER · 수호자', t: '전우를 지키며, 함께 싸웁니다.', d: '고객사는 우리의 전우입니다. 비즈니스 전장에서 내 편처럼 보호하고, 끝까지 함께 싸웁니다.' } ] },
  { type: 'duo', tone: 'paper', eyebrow: 'DEF Philosophy · 02', title: ['비즈니스 시장에서', '살아남는 단 두 가지.'], items: [
    { n: '01', t: '유능함', d: '어떤 문제든 해결할 수 있는 실력.' },
    { n: '02', t: '전우애', d: '상대방의 진정한 성공을 위해 함께 싸우는 마음.' } ] },
  { type: 'viz', viz: 'comrades' },
  { type: 'mega', eyebrow: 'DEF Philosophy · 03 · Skill without loyalty', title: ['아무리 실력이 좋아도,', '혼자만 살겠다고 하면', '결국 죽습니다.'], lead: '둘 중 하나만으로는 살아남을 수 없습니다.' },
  { type: 'mega', tone: 'paper', eyebrow: 'DEF Philosophy · 04 · Loyalty without skill', title: ['아무리 진심을 다해도,', '실력이 없으면', '죽습니다.'] },
  { type: 'mega', tone: 'navy', eyebrow: 'DEF Philosophy · 05 · Skill & Loyalty', fx: 'merge', title: ['그래서'], lead: '두 가지가 함께 있어야만, 지금의 홈쇼핑과 미국 시장에서 살아남을 수 있습니다.' },
  { type: 'mega', eyebrow: 'Closing', title: ['실력과 전우애.'], lead: '이 가치에 동의한다면, 시작해 보시죠.', sign: 'DEF 대표 반연주 · 안호성' },
];

const ABOUT_TABS = [
  { id: 'about', ko: '회사소개', en: 'Company' },
  { id: 'about-letter', ko: '인사말', en: 'Letter' },
];
const LETTER = [
  { type: 'mega', hero: true, eyebrow: 'Letter · 인사말', title: ['오직 실력으로', '검증받는 세계.'], lead: '무슨 일이든 맡으면 해결하는 사람들. 고도로 훈련된 전문가들. DEF가 일하는 방식이자, 함께할 사람에게 요구하는 기준입니다.' },
  { type: 'viz', viz: 'elite' },
  { type: 'prose', eyebrow: '01 · 기회', title: ['홈쇼핑과 미국 시장,', '지금은 분명한 기회입니다.'], paras: [
    'K-뷰티가 세계의 흐름을 만들고 있고, 누구든 브랜드를 시작할 수 있는 시장이 열렸습니다. 홈쇼핑은 이미 모여 있는 고객에게 곧바로 닿는 채널이고, 미국은 한국 화장품의 1위 수출국이 됐습니다.',
    '하지만 시작하기 쉬워진 만큼 살아남기는 어려워졌습니다. 경쟁은 치열해졌고, 진입 장벽과 비용은 그 어느 때보다 높습니다.' ] },
  { type: 'mega', tone: 'navy', accent: true, eyebrow: 'Warning · 경고', title: ['예전처럼 해서는', '필패입니다.'], lead: '잘되는 몇몇 브랜드만 보고 나도 될 것이라 생각하는 순간, 그 길은 필패로 이어집니다.' },
  { type: 'viz', viz: 'migration' },
  { type: 'prose', tone: 'paper', eyebrow: '02 · 현실', title: ['몇 개의 성공 사례만 보고', '뛰어들면 집니다.'], paras: [
    '플랫폼은 고객을 모아 주지만, 그만큼 수수료 부담이 크고 정보의 비대칭 속에서 휘둘리기 쉽습니다. 시장은 매일 바뀌고, 방송 당일의 판단 하나가 결과를 가릅니다.',
    '이 시장을 깊이 알고, 실제로 이겨 본 팀과 함께하지 않으면 버티기 어렵습니다.' ] },
  { type: 'stat', tone: 'navy', eyebrow: '17 years · 시장 최전선에서', big: '17', title: '결국은 유능함과 전우애입니다.', lead: '단순한 고객과 파트너의 관계로는 이길 수 없습니다. 17년간 시장 최전선에서 직접 겪었고, 지금도 매일 목격하고 있는 진실입니다.' },
  { type: 'duo', eyebrow: '03 · 우리가 약속하는 것', title: ['우리가 약속하는', '두 가지.'], items: [
    { n: '01', t: '실력', d: '말이 아니라 결과로 증명합니다. 레퍼런스로 검증된 실력만 내놓습니다.' },
    { n: '02', t: '신뢰', d: '숨기지 않고 정직하게 말합니다. 결정은 언제나 함께 내립니다.' } ] },
  { type: 'viz', viz: 'grid' },
  { type: 'prose', tone: 'paper', eyebrow: '04 · 전우 전략', title: ['비즈니스 현장은', '전쟁터입니다.'], paras: [
    '그래서 우리는 고객과 파트너의 관계를 넘어섭니다. 전장에서 서로의 등을 맡기는 전우처럼, 한번 함께하면 끝까지 의리를 지킵니다.',
    '맡은 일은 해결합니다. 어떤 상황에서도 등을 돌리지 않습니다. 우리는 이것을 전우 전략이라 부릅니다.' ] },
  { type: 'stat', tone: 'navy', eyebrow: 'Proof · 우리가 믿는 것이 만든 결과', big: 'No.1', title: '최근 3년, 카테고리 1위를 연속으로 만들어 냈습니다.', lead: '2024 헤어 · 두피, 2025 마스크 · 팩, 2026 스킨케어. 우리가 믿는 방식이 증명한 결과입니다.' },
  { type: 'photo', img: U('roundtable.webp'), cap: '베벌리힐스 뷰티클래스' },
  { type: 'mega', eyebrow: 'Closing', title: ['실력과 전우애.'], lead: '이 가치에 동의한다면, 시작해 보시죠.', sign: 'DEF 대표 반연주 · 안호성' },
];

const US_TABS = [
  { id: 'usa', ko: '소개', en: 'Overview' },
  { id: 'usa-services', ko: '서비스', en: 'Services' },
  { id: 'usa-team', ko: '걸어온 길', en: 'Our Story' },
  { id: 'usa-work', ko: '실적', en: 'Track Record' },
  { id: 'usa-creators', ko: '크리에이터', en: 'Creators' },
  { id: 'usa-join', ko: 'For Creators', en: 'Join Us' },
];
const CTA_US = { type: 'cta', title: '실력과 신뢰로 증명하겠습니다.', lead: '첫 미팅 30분 동안 브랜드의 지금과 목표를 듣습니다.', cta: '프로젝트 문의하기', go: 'contact' };

const US = {
  'usa': [
    { type: 'head', eyebrow: 'Practice 02 · 미국 진출 · 카테고리 제한 없음', title: ['From Korea', 'to the USA.'], serifEn: true, lead: '좋은 브랜드가 더 넓은 시장에서 선택받도록. K-뷰티, K-푸드, 라이프스타일 브랜드의 브랜딩과 크리에이터 콘텐츠, 국내외 유통을 연결합니다.', img: U('community-ue.webp'), cta: '미국 진출 문의하기', go: 'contact' },
    { type: 'split', eyebrow: 'Mission · 미션', title: ['좋은 한국 브랜드를,', '미국 시장 한가운데에.'], paras: ['좋은 브랜드에는 좋은 이유가 있습니다. DEF는 그 이유가 세계에 닿도록 돕습니다. 스토리, 디자인, 유통, 마케팅, 전환까지 브랜드에 필요한 일을 하나의 경험으로 묶습니다.', '지금 필요한 일부터 다음 시장으로 나아가는 과정까지 함께합니다.'], img: U('roundtable.webp') },
    { type: 'stat', tone: 'navy', eyebrow: '2025 한국 화장품 수출 · 역대 최대 · 세계 2위', big: '$11.4B', title: '그리고 처음으로, 미국이 한국 화장품의 1위 수출국이 됐습니다.', lead: '세계가 한국의 아름다움을 찾고 있고, 그중 가장 큰 시장이 미국입니다. 문이 열려 있는 시간은 생각보다 짧습니다. 먼저 건너간 브랜드가 그 시장의 기준이 됩니다.', note: '출처: 식품의약품안전처 2025년 화장품 생산 · 수출 통계 (2026 발표)' },
    { type: 'cards', eyebrow: 'The Standard · 파트너의 기준', title: ['한국 브랜드가 세계로 가는 지금,', '파트너의 기준이 바뀌고 있습니다.'], lead: '캠페인 한 번 대행하고 끝나는 방식으로는 부족합니다. 이제 브랜드가 묻는 것은 세 가지입니다.', minw: '260px', items: [
      { n: '질문 하나', t: '관계', d: '한 번으로 끝나지 않을 파트너인가.' }, { n: '질문 둘', t: '성과', d: '무엇이 움직였는지 숫자로 보여주는가.' }, { n: '질문 셋', t: '신뢰', d: '일이 어긋났을 때 무엇을 하는가.' } ], note: 'DEF의 미국 진출 사업은 이 세 질문에 답하도록 짜여 있습니다.' },
    { type: 'cards', tone: 'paper', eyebrow: 'What we do · 하는 일', title: ['필요한 일이 한 곳에 다 있습니다.'], minw: '200px', items: [
      { n: '01 · 스토리', t: '스토리를 만듭니다', d: '브랜드 스토리 · 메시지, 브랜드 포지셔닝, 출판 · 간행물' },
      { n: '02 · 디자인', t: '디자인을 입힙니다', d: 'CI · BI 아이덴티티, 패키지 · 지면 디자인, 숏폼 · UGC 콘텐츠' },
      { n: '03 · 유통', t: '제품에 날개를 답니다', d: '면세점 · 백화점 입점, 프리미엄 편집숍, 이커머스 · 자사몰' },
      { n: '04 · 마케팅', t: '세상에 닿게 합니다', d: '인플루언서 캠페인, SNS 운영 · 시딩, 미국 진출 전략 · PR' },
      { n: '05 · 전환', t: '매출로 잇습니다', d: '아마존 마켓플레이스, 팝업 이벤트, 성과 리포트' } ], cta: '서비스 전체 보기', go: 'usa-services' },
    { type: 'cards', eyebrow: 'Start here · 무엇으로 오셨나요', title: ['지금 고민하는 한 가지부터', '들려주세요.'], minw: '300px', items: [
      { n: '브랜드라면', t: '다음 성장을 함께 설계합니다.', d: '브랜드를 새로 정비하고 싶을 때, 콘텐츠를 꾸준히 만들고 싶을 때, 해외 시장으로 넓히고 싶을 때. 지금 상황에 맞는 실행 방법을 함께 찾습니다.', cta: '프로젝트 상담하기', go: 'contact' },
      { n: '처음 오셨나요', t: '서비스를 미리 고르지 않으셔도 됩니다.', d: '브랜드의 지금 상황과 목표를 남겨 주시면, 어떤 일부터 시작할지 함께 정리하겠습니다.', cta: '무엇이든 문의하기', go: 'contact' },
      { n: '걸어온 길', t: '2008년부터 쌓아 온 경험.', d: '연혁, 해외 브랜드를 한국에 들여온 이야기, 베벌리힐스 사례를 볼 수 있습니다.', cta: '걸어온 길 보기', go: 'usa-team' },
      { n: '크리에이터라면', t: 'Your voice, unchanged.', d: 'DEF와 함께할 크리에이터를 찾습니다. 팔로워 수 기준도, 독점 계약도 없습니다.', cta: 'For Creators', go: 'usa-join' },
      { n: '홈쇼핑도 함께', t: '뷰티 브랜드라면, 홈쇼핑도 함께.', d: '3년 연속 카테고리 1위를 만든 홈쇼핑 사업을 같이 진행할 수 있습니다.', cta: '홈쇼핑 사업 보기', go: 'homeshopping' } ] },
  ],
  'usa-services': [
    { type: 'head', eyebrow: 'USA · Services · 서비스', title: ['브랜드의 다음 단계에', '필요한 일을 함께 합니다.'], lead: '브랜드 하나를 통째로 맡기셔도 되고, 필요한 것만 고르셔도 됩니다. 제목을 누르면 무엇을 맡는지 볼 수 있습니다.' },
    { type: 'acc', eyebrow: 'Services · 서비스 8', title: ['필요한 것만 골라 맡기세요.'], items: [
      { t: '전체 브랜드 컨설팅', s: '브랜드 전체를 보고 다음 한 걸음을 정합니다.', d: '브랜드 전반을 함께 보고 무엇부터 손댈지 순서를 잡습니다. 어느 시장의 누구에게 갈지 정하고, 스토리 · 디자인 · 유통 · 마케팅 · 전환 가운데 지금 필요한 것을 골라 붙입니다. 캠페인 한 건으로 끝내지 않고, 시장에서 브랜드의 점유율을 넓히는 데까지 목표를 두고 함께 갑니다.' },
      { t: '브랜딩', s: '브랜드의 이야기를 하나의 아이덴티티로.', d: '브랜드 스토리와 CI · BI부터 패키지 · 제품 디자인까지, 브랜드가 세상에 보이는 모든 접점을 설계합니다. 진에어 CI · BI 리뉴얼, 대한항공 기념 프로젝트를 진행한 디자인팀이 맡습니다.', tags: ['브랜드 스토리', 'CI · BI', '제품 디자인'] },
      { t: '쇼핑몰 제작 · 운영', s: '브랜드의 온라인 공간을 만들고 운영까지 함께합니다.', d: '브랜드 사이트, 자사몰, 랜딩페이지, 팝업 사이트를 목적에 맞게 기획하고 만듭니다. 직접 제작, Shopify, Amazon 중 브랜드의 규모와 목표에 맞는 방식을 함께 정하고, 만든 뒤의 운영과 개선까지 이어갑니다.', tags: ['브랜드 사이트', '자사몰', '랜딩페이지', '팝업 사이트'] },
      { t: '인플루언서 마케팅', s: '캠페인 하나를 기획부터 발행까지.', d: '캠페인 목표와 브랜드에 맞춰 기획, 크리에이터 섭외, 콘텐츠 제작과 검수, 발행까지 전 과정을 함께합니다. 검증된 크리에이터 풀에서 브랜드의 타깃과 톤에 맞는 크리에이터를 골라 제안합니다.' },
      { t: '캠페인 월 구독 패키지', s: '한 번의 캠페인보다, 쌓이는 자산으로.', d: '브랜드에 맞는 크리에이터 인원과 월 콘텐츠 발행량을 정해 꾸준히 캠페인을 운영합니다. 브랜드를 이해하는 크리에이터와 콘텐츠를 계속 쌓아 장기적인 브랜드 자산을 만듭니다.' },
      { t: 'SNS 운영 대행', s: '계정 하나를 한 팀이 맡습니다.', d: '인스타그램 · 틱톡 · 유튜브 계정을 맡아 꾸준히 운영합니다. 콘텐츠 제작부터 댓글 · DM 응대까지 한 팀이 합니다.', tags: ['인스타그램', '틱톡', '유튜브', '기타'] },
      { t: '팝업스토어', s: '보여주기에서 끝나지 않는 팝업.', d: '미국, 한국, 그 밖의 지역에서 팝업을 기획하고 엽니다. 브랜드와 맞는 인플루언서와 바이어를 초대해 판매로 잇습니다.', tags: ['미국', '한국', '기타 지역'] },
      { t: '해외 매장 입점', s: '해외 매대에 오르기까지 함께 준비합니다.', d: '미국 현지 온 · 오프라인 채널, 슬로우레시피 같은 해외 타깃 유통 채널, 글로벌 마켓플레이스 입점까지 해외 진출에 필요한 과정을 함께 준비합니다. 면세점과 백화점 유통을 10년 넘게 해 온 팀이 채널별 입점 전략, 유통 구조 설계, 바이어 소통을 맡습니다.', tags: ['미국 백화점', '타겟', '아마존', '슬로우레시피', '기타'] } ], note: '어느 것을 맡길지 아직 정하지 않으셨어도 괜찮습니다. 문의부터 주시면 함께 정리하겠습니다.' },
    { type: 'cards', tone: 'paper', eyebrow: 'Starting point · 시작점', title: ['어디서부터 시작할지', '함께 정합니다.'], minw: '300px', items: [
      { n: '브랜드 정비', t: '좋은 제품인데 소개와 디자인이 일관되지 않습니다', d: '→ 포지셔닝 · 핵심 메시지 · 비주얼 가이드 · 주요 판매 접점 개선안' },
      { n: '크리에이터 콘텐츠', t: '단발 협업이라 콘텐츠와 반응이 쌓이지 않습니다', d: '→ 크리에이터 제안 · 콘텐츠 기획 · 제작 · 발행 일정 · 성과 정리' },
      { n: '미국 시장 진출', t: '어떤 채널과 메시지부터 시작할지 모릅니다', d: '→ 시장 · 채널 검토 · 현지 콘텐츠 방향 · 유통 준비 · 실행 계획' } ], note: '제안 산출물은 운영 상황을 확인한 뒤 확정합니다.' },
    { type: 'acc', faq: true, eyebrow: 'FAQ · 자주 묻는 것', title: ['궁금하신 것들.'], items: [
      { t: '서비스 하나만 맡길 수 있나요?', d: '필요한 서비스부터 의뢰하실 수 있습니다. 목표와 지금 운영 상황을 확인한 뒤 범위를 정합니다.' },
      { t: '비용은 어떻게 정하나요?', d: '제작물 수, 크리에이터 구성, 운영 기간, 콘텐츠 활용 범위에 따라 달라집니다. 상담 후 포함 업무와 별도 비용을 나눠 안내합니다.' },
      { t: '이미 운영 중인 채널이 있어도 가능한가요?', d: '지금 채널과 운영 방식을 먼저 확인하고, 필요한 부분의 협업 범위를 정합니다.' },
      { t: '성과는 어떻게 확인하나요?', d: '캠페인 시작 전에 확인할 지표와 보고 주기를 합의합니다. 도달 · 참여 · 전환은 나눠서 설명합니다.' },
      { t: '콘텐츠를 광고에 다시 쓸 수 있나요?', d: '사용 매체 · 기간 · 지역 등 활용 조건을 프로젝트별로 협의합니다.' },
      { t: '뷰티가 아닌 브랜드도 되나요?', d: '네. 미국 진출 사업은 카테고리 제한이 없습니다. K-푸드, 라이프스타일 브랜드와도 일합니다.' } ] },
    CTA_US,
  ],
  'usa-team': [
    { type: 'head', eyebrow: 'USA · Our Story · 걸어온 길', title: ['18년 동안 쌓은 경험으로', '한 팀처럼 움직입니다.'], lead: '출판에서 시작해 디자인, 유통, 미국 현장까지. DEF 미국 진출 사업을 실행하는 팀이 해 온 일입니다.', img: U('ue-office.webp') },
    { type: 'rows', eyebrow: 'History · 연혁', title: ['2008년부터 지금까지.'], lead: '2008년 출판으로 시작해 디자인, 유통, 글로벌 마케팅을 한 팀 안에서 함께 키워 왔습니다. 세 부문이 하나의 프로젝트를 같이 보고 각자의 전문성을 연결합니다.', items: [
      { k: '2008', t: '출판사 설립', d: '브랜드의 스토리를 만드는 일에서 시작' },
      { k: '2010', t: '디자인 · 브랜딩 에이전시', d: '스토리에 디자인을 입히다' },
      { k: '2015', t: '유통 확장 (클로이 에비뉴 합병)', d: '만든 것을 팔리는 곳으로' },
      { k: '2017', t: '미국 진출 · 현지 법인 설립', d: '무대를 세계로' },
      { k: '2022', t: '아마존 · 미국 오프라인 캠페인', d: '실행 경험을 쌓다' },
      { k: '2026', t: 'MCN 시작', d: '18년의 경험을 크리에이터와 잇다', hot: true } ], note: 'DEF 미국 진출 사업을 실행하는 팀의 이력입니다.' },
    { type: 'split', tone: 'paper', eyebrow: 'Why we believe · 우리가 믿는 근거', title: ['이 길을 반대 방향에서', '먼저 걸었습니다.'], paras: ['런던의 향수 펜할리곤스, 일본의 뷰티 기기 야만. 이 해외 브랜드들을 한국 시장에 처음 소개하고 자리 잡게 했습니다.', '낯선 시장의 문을 열고, 유통을 뚫고, 소비자의 말로 옮기는 일을 이미 해 봤습니다. 지금은 같은 길을 한국 브랜드를 위해 거꾸로 엽니다.'], img: U('yaman-counter.webp'), cap: '야만 · 국내 매장' },
    { type: 'split', rev: true, eyebrow: 'Field · 현장 · 사례', title: ['베벌리힐스에서', 'K-뷰티의 공간을 열었습니다.'], paras: ['미국 소비자에게 낯선 K-뷰티 브랜드를 알리는 것이 과제였습니다. 광고를 사는 대신 사람을 초대했습니다. 현지 법인으로 인플루언서 커뮤니티를 만들고, 브랜드에 필요한 크리에이터와 매거진, 바이어에게 초대장을 보냈습니다.', '베벌리힐스 페닌슐라 호텔 뷰티클래스와 뷰티콘 · 코스모프로프 부스에서 초대받은 사람들이 직접 써 봤고, 그 경험이 온라인 입소문과 비즈니스로 이어졌습니다. 이때 쌓인 네트워크가 지금 DEF 크리에이터 사업의 뿌리입니다.'], img: U('roundtable.webp'), cap: '베벌리힐스 뷰티클래스', note: '뷰티콘은 방문객 4만 3천 명, SNS 도달 22억에 이르는 미국 최대 뷰티 행사입니다 (뷰티콘 공식 소개 기준. 행사 전체 규모이며 DEF 단독 성과가 아닙니다).' },
    { type: 'gallery', imgs: [{ src: U('beautycon-sign.webp'), cap: 'Beautycon' }, { src: U('us_booth.webp'), cap: '박람회 부스' }, { src: U('community-ue.webp'), cap: '인플루언서 커뮤니티' }] },
    { type: 'split', tone: 'paper', eyebrow: 'Culture · 문화 경험', title: ['마케팅을 넘어,', '문화로 기억되게.'], paras: ['전통 한옥에서 팝업과 문화 행사를 여러 차례 기획하고 운영했습니다. K-뷰티 체험, 전통 문화 프로그램, 해외 VIP와 바이어 초청까지 진행했습니다.', '제품보다 문화로 기억되는 브랜드를 만듭니다.'], img: U('soseo.webp'), cap: '한옥 팝업 · 소서' },
    CTA_US,
  ],
  'usa-work': [
    { type: 'head', eyebrow: 'USA · Track Record · 실적', title: ['한국 대표 기업들과', '값진 경험을 쌓아 왔습니다.'], lead: '스토리, 디자인, 유통, 마케팅, 전환. 다섯 가지를 한 팀 안에서 해 왔습니다.', img: U('us_booth.webp') },
    { type: 'cards', eyebrow: 'Clients · 함께한 기업', title: ['한국 대표 기업들이', '함께했습니다.'], minw: '300px', items: [
      { n: '2008년부터', t: '브랜드를 만들다', d: '진에어 디자인 리뉴얼부터 기내지 발간까지 · 대한항공 50주년 엠블럼, 평창 올림픽 기념 보딩패스 · 삼성전자 캐릭터 · 콘텐츠 디자인' },
      { n: '2015년 유통 확장부터', t: '팔리게 하다', d: '롯데면세점 메인 모델 에이전시 · 입점 운영 · 신세계면세점 · 갤러리아백화점 프리미엄 유통 운영 · 펜할리곤스 · 야만 한국 첫 도입과 정착' },
      { n: '2017년 미국 진출부터', t: '세계로 잇다', d: '한애가 · 107 · 발효미학 · 소서 · 슬로우레시피 — 창업기부터 함께한 브랜드들 · 미국 인플루언서 130명 파트너십' } ] },
    { type: 'split', tone: 'paper', eyebrow: 'Story & Design · 스토리 · 디자인', title: ['스토리에 디자인을 얹으면', '브랜딩이 됩니다.'], paras: ['브랜드 아이덴티티를 처음부터 다시 그리고, 올림픽 기념 보딩패스를 만들고, 90권이 넘는 간행물을 펴냈습니다. 디자인은 이 팀의 출발점입니다.'], img: U('air-identity.webp'), cap: '진에어 아이덴티티', defs: [
      { k: '아이덴티티', v: '진에어 디자인 리뉴얼 · UHIC · 한애가 · 107 CI' }, { k: '기념 작업', v: '대한항공 50주년 엠블럼 · 평창 올림픽 기념 보딩패스' }, { k: '출판', v: '매거진 · 브로셔 · 단행본 90권 이상' } ] },
    { type: 'split', rev: true, eyebrow: 'Retail · 유통', title: ['입점과 판매까지', '한 팀이 함께합니다.'], paras: ['면세점과 백화점, 온라인까지. 프리미엄 유통 채널에서 10년 넘게 브랜드의 입점과 운영을 맡아 왔습니다. 인지도를 만드는 데서 끝내지 않고, 매대에 오르고 판매되는 데까지 책임집니다.'], img: U('yaman-counter.webp'), cap: '야만 · 국내 매장', defs: [
      { k: '면세', v: '롯데 · 신세계 · 신라 · 현대 · 공항 면세점 입점 · 운영' }, { k: '오프라인', v: '백화점 · 프리미엄 편집숍 · 팝업' }, { k: '온라인', v: '이커머스 · 자사몰 연계' } ] },
    { type: 'split', tone: 'paper', eyebrow: 'Global Marketing · 글로벌 마케팅', title: ['2017년부터', '미국 현장에서 뛰었습니다.'], paras: ['미국에 법인을 세우고, 인플루언서 커뮤니티를 만들고, 박람회 부스에서 소비자를 직접 만나며 쌓은 현장 감각입니다.'], img: U('global_booth.webp'), cap: '미국 박람회', defs: [
      { k: '거점', v: '미국 현지 법인 (2017 설립) · 인플루언서 커뮤니티 운영' }, { k: '실행', v: '아마존 · 타겟 운영 · 노드스트롬 · 메이시스 백화점 · 얼타 · JCPenney · SNS · 인플루언서 캠페인 · PR' }, { k: '현장', v: '뷰티콘 · 코스모프로프 부스 · 미디어 데스크사이드 · 팝업 · 브랜드 행사' } ] },
    { type: 'cards', eyebrow: 'MCN · 2026', title: ['캠페인마다', '새로 섭외하지 않습니다.'], lead: '필요할 때마다 낯선 크리에이터를 찾아 섭외하면 검증과 관계가 빠집니다. DEF는 검증을 거친 크리에이터 풀과 함께합니다. 같은 사람들이 브랜드를 이어서 맡아 톤이 흔들리지 않고, 관계가 쌓일수록 콘텐츠가 자연스러워집니다.', minw: '260px', items: [
      { t: '검증', d: '팬층 · 참여 · 이력을 확인한 크리에이터만 풀에 들어옵니다.' }, { t: '관계', d: '한 번 거래로 끝내지 않고 브랜드를 이어서 맡습니다.' }, { t: '신선도', d: '분기마다 풀을 평가하고 다시 구성합니다.' } ], cta: '크리에이터 보기', go: 'usa-creators' },
    { type: 'split', tone: 'navy', rev: true, eyebrow: 'Campaign · 슬로우레시피', title: ['K-사우나를 상자 하나에 담아', '세계로 보냈습니다.'], paras: ['슬로우레시피와 함께 만든 캠페인입니다. 한국의 사우나 문화를 집에서 따라 할 수 있는 루틴으로 풀고, 열 곳이 넘는 한국 브랜드의 제품을 한 상자에 담아 전 세계로 배송했습니다.', '크리에이터가 직접 써 보고 설명하는 영상이 그 상자를 팔았습니다.'], img: U('us-booth-hand.webp') },
    { type: 'cards', tone: 'paper', eyebrow: 'Method · 일하는 방식', title: ['캠페인이 끝나도', '남는 것이 있게 합니다.'], lead: '감보다 기록을 보고 정합니다.', minw: '320px', items: [
      { t: '쌓이는 것', d: '브랜드를 이해하는 크리에이터들이 매달 콘텐츠를 만들고, 도달 · 참여 · 전환과 현지 소비자 반응을 캠페인마다 정리합니다. 다음 캠페인은 그 기록을 보고 정합니다.' },
      { t: '남는 것', d: '캠페인 콘텐츠는 한 번 쓰고 버리지 않습니다. 광고 소재로 다시 쓸 수 있는 활용권을 통해 브랜드의 장기 자산이 되고, 인지도는 현지 유통으로 이어집니다.' } ] },
    CTA_US,
  ],
  'usa-creators': [
    { type: 'head', eyebrow: 'USA · Creators · 크리에이터', title: ['같은 크리에이터가 꾸준히,', '광고보다 일상처럼.'], lead: '리서치부터 제작, 크리에이터까지. 브랜드 콘텐츠를 처음부터 끝까지 만듭니다.', img: U('us-booth-hand.webp') },
    { type: 'cards', eyebrow: 'Research first · 조사 우선', title: ['캠페인보다 조사가 먼저입니다.'], lead: '무엇을 만들지 정하기 전에 시장부터 봅니다. 시장, 경쟁 브랜드, 채널을 분석하고 그 결과에 맞춰 콘텐츠를 만듭니다.', minw: '260px', items: [
      { n: '01', t: '조사', d: '시장 · 경쟁 브랜드 · 채널에서 지금 반응이 오는 것을 찾습니다.' }, { n: '02', t: '분석', d: '자료를 깊이 분석해 영상의 방향을 정합니다.' }, { n: '03', t: '제작', d: '정한 방향대로 일곱 단계를 거쳐 만듭니다.' } ] },
    { type: 'chips', tone: 'paper', eyebrow: 'Production · 만드는 방식', title: ['영상 한 편,', '일곱 단계를 거칩니다.'], lead: '크리에이터에게 맡기고 기다리지 않습니다. 제작 스튜디오에서 단계마다 직접 확인하며 만듭니다.', items: ['준비', '스타일', '각본', '샘플 영상', '촬영본', '가편집', '승인'], note: '일곱 단계를 모두 통과해야 발행됩니다. 기준에 못 미치면 그 단계로 돌아가 다시 만듭니다. 채널: 인스타그램 · 틱톡 · 유튜브' },
    { type: 'split', eyebrow: 'Since 2017', title: ['2017년부터 쌓아 온', '네트워크입니다.'], paras: ['2017년 미국 현지 법인을 세우고 인플루언서 커뮤니티를 만들었습니다. 베벌리힐스 뷰티클래스, 뷰티콘 · 코스모프로프 현장, 미국 인플루언서 130명과의 파트너십이 지금 크리에이터 사업의 뿌리입니다.'], img: U('community-ue.webp'), cap: '미국 크리에이터 행사' },
    { type: 'split', tone: 'paper', rev: true, portrait: true, eyebrow: 'Lead Creator · 리드 크리에이터', title: ['1세대 크리에이터', '유니언니'], paras: ['메인 캠페인의 얼굴입니다. DEF의 크리에이터 사업은 유니언니와 함께 시작했습니다. 유튜브 · 인스타그램 EuniUnni에서 10년 넘게 한국 뷰티를 영어로 소개해 왔습니다. LA에서 자랐고 한국에서 활동합니다.'], img: U('lead-creator.webp'), tags: ['뷰티', '메인 캠페인', '브랜드 페이스'], links: [{ t: 'YouTube · @EuniUnni', href: 'https://www.youtube.com/@EuniUnni' }, { t: 'Instagram · @euniunni', href: 'https://www.instagram.com/euniunni/' }] },
    { type: 'cards', eyebrow: 'Creator Pool · 크리에이터 풀', title: ['숫자보다, 오래 함께할', '크리에이터를 찾습니다.'], lead: '같은 크리에이터가 브랜드를 이어서 맡아, 캠페인마다 톤을 다시 맞출 필요가 없습니다.', minw: '260px', items: [
      { t: '검증', d: '팬층 · 참여 · 이력을 확인한 크리에이터만 풀에 들어옵니다.' }, { t: '관계', d: '한 번으로 끝내지 않고 브랜드를 계속 맡습니다.' }, { t: '신선도', d: '분기마다 풀을 평가하고 다시 구성합니다.' } ] },
    { type: 'rows', tone: 'paper', eyebrow: 'Status · 진행 현황', title: ['맡긴 뒤에는', '단계마다 알려 드립니다.'], lead: '캠페인이 어느 단계에 있는지 담당자가 그때그때 알려 드립니다.', items: [
      { k: '01', t: '접수됨', d: '접수 완료. 이 단계까지 내용을 고칠 수 있습니다.' }, { k: '02', t: '기획 중', d: 'DEF가 캠페인을 기획합니다.' },
      { k: '03', t: '기획안 도착', d: '목표와 실행 범위를 담은 기획안을 보내드립니다.' }, { k: '04', t: '진행 확정', d: '크리에이터와 일정을 확정합니다.' },
      { k: '05', t: '진행 중', d: '일곱 단계 제작이 진행됩니다.' }, { k: '06', t: '종료', d: '발행 후 결과 리포트를 드립니다.' } ] },
    { type: 'cta', title: '한 건으로 시작하셔도 되고, 매달 이어가셔도 됩니다.', lead: '단건 캠페인도, 월 구독도 문의하기에서 바로 남기실 수 있습니다.', cta: '문의하기', go: 'contact' },
  ],
  'usa-join': [
    { type: 'head', eyebrow: 'For Creators', title: ['Your voice, unchanged.', 'Your opportunities, wider.'], serifEn: true, lead: 'Connect with brands that fit your style. DEF takes care of the business side (partnership proposals, terms, schedules and payments) so you can focus on your content.', img: U('global_booth.webp'), cta: 'Apply', go: 'apply' },
    { type: 'cards', eyebrow: 'How we work', title: ['Good work starts with', 'understanding each other.'], lead: "We start by listening: what you create, and which brands you would like to work with. Then we set a direction together, based on your channel's voice and what you want from a partnership.", minw: '260px', items: [
      { t: 'No exclusivity required.', d: 'You can work with DEF and with others at the same time. We do not restrict that.' },
      { t: 'Brand partnerships', d: 'We look for partnerships that fit your content and your interests.' },
      { t: 'Terms', d: 'We set out scope, schedule, payment and usage terms clearly.' },
      { t: 'Production support', d: "We organise the brand's requests and keep the conversation moving through production." },
      { t: 'Payment', d: 'We follow the agreed terms and keep you posted on payment dates and progress.' } ] },
    { type: 'split', tone: 'paper', rev: true, portrait: true, eyebrow: 'Who you work with', title: ['EuniUnni, a pioneering', 'K-beauty creator'], paras: ['The face of our flagship campaigns. She has introduced Korean beauty for over ten years. She grew up in LA, lives in Korea, and runs her channels in English.'], img: U('lead-creator.webp'), bullets: ['We set a direction that fits your channel before you meet the brand.', 'We work through filming and editing problems with you.', "We organize and pass on the brand's requests, and keep a record of what was discussed."], links: [{ t: 'YouTube · @EuniUnni', href: 'https://www.youtube.com/@EuniUnni' }, { t: 'Instagram · @euniunni', href: 'https://www.instagram.com/euniunni/' }] },
    { type: 'rows', eyebrow: 'How to apply', title: ['Here is how the process works.'], lead: '01 Application received · 02 Channel review and a conversation · 03 Terms shared · 04 Contract and project proposals', items: [
      { k: 'Day 0', t: 'Apply and meet', d: 'Once you send your application, we have a 30-minute conversation.' },
      { k: 'Day 7', t: 'Channel review and terms', d: 'We review your channels and content, then put terms in writing.' },
      { k: 'Day 14', t: 'Contract', d: 'We read it together, line by line, and sign.' },
      { k: 'Day 21', t: 'First campaign proposal', d: 'We bring you campaigns that fit your channel and audience.' },
      { k: 'Day 30', t: 'Publish and get paid', d: 'Your first content goes live, and the first payment follows under the agreed terms.', hot: true } ], note: 'This is one example. The actual timeline can change depending on the channel review and the projects in hand. We confirm the first campaign and payment dates once the terms are agreed.' },
    { type: 'acc', faq: true, tone: 'paper', eyebrow: 'FAQ', title: ['Questions we hear a lot'], items: [
      { t: 'Can I apply with a small following?', d: "There is no minimum follower count. We look at your channel's voice, how consistently you post, and how well you know your field." },
      { t: 'Do I have to sign exclusively?', d: 'No. DEF does not require exclusivity. You can work with DEF and with others at the same time.' },
      { t: 'Can I turn down an offer?', d: 'Yes. If it is not a fit for you, just tell us so.' },
      { t: 'How are fees and payment dates decided?', d: 'We put how it is calculated, what is deducted and when it is paid in writing before you sign.' },
      { t: 'Can I keep my existing brand partnerships?', d: 'Yes. Because DEF does not require exclusivity, you do not have to end anything you already have.' },
      { t: 'How far can my content be used?', d: 'Paid usage, re-edits, duration, territory and likeness are agreed for each project in advance. Nothing is used beyond what was agreed.' },
      { t: 'How does a partnership end?', d: 'The term and how to end it are written into the contract. If work is in progress when it ends, we agree together how to finish it.' },
      { t: 'Can I apply from outside Korea?', d: 'Yes. We will confirm which regions and languages we can work in, and how payments are handled.' } ] },
    { type: 'apply', eyebrow: 'Apply', title: ['Ready when you are.'], lead: 'Send the application and you will hear back once we have reviewed your channels.' },
  ],
};

window.KWAN_CONTENT = { PHILO, ABOUT, HS, US, US_TABS, ABOUT_TABS, LETTER };
})();
