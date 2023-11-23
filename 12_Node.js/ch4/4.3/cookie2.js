const http = require('http');
const fs = require('fs').promises;
const path = require('path');

// 문자열로 된 쿠키를 객체로 바꿔주는 함수
const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {  // 구조 분해 할당
      acc[k.trim()] = decodeURIComponent(v);  // 인코딩된 한글이 있을까봐 디코드
      return acc;
    }, {});

http.createServer(async (req, res) => {
  const cookies = parseCookies(req.headers.cookie); // mycookie=test; => { mycookie: test }

  console.log(req.url);
  // 주소가 /login으로 시작하는 경우
  if (req.url.startsWith('/login')) {
    const url = new URL(req.url, 'http://localhost:8084');  // 상대 경로 앞에 붙여줄 base url
    const name = url.searchParams.get('name');  // 쿼리스트링에서 name 추출
    const expires = new Date();
    // 쿠키 유효 시간을 현재시간 + 5분으로 설정
    expires.setMinutes(expires.getMinutes() + 5);

    console.log(name);  // 한글일 때 encodeURIComponent로 인코딩 안하면 쿠키에 이상한 문자 들어갔다고 에러 발생
    res.writeHead(302, {  // 302: 리다이렉션
      location: '/', // 이 주소로 돌려보내라
      'set-cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`
    });
  }
})
  .listen(8084, () => {
    console.log('8084번 포트에서 서버 대기 중입니다!');
  });