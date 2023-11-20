// Node의 CommonJS 모듈 시스템

const odd = '홀수입니다.';
const even = '짝수입니다.';

// 선언한 변수들을 다른 파일에서 쓸 수 있게 모듈로 만듦
// module.exports는 파일 안에서 단 한 번만 쓸 수 있음
// module.exports = odd; // 이렇게 쓰면 한 개만 내보낼 수 있음
// 여러 개를 내보내려면 객체를 module.exports에 대입
module.exports = {
  odd,
  even: even,
}