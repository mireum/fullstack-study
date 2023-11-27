const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

// dotenv(닷엔브): 환경변수(시스템에 때른 설정값이나 비밀키 등) 관리
// 별도의 파일로 관리하는 이유는 보안과 설정의 편의성 때문
// 1차 보안: 소스코드가 털리면 코드 안에 적어둔 비밀키나 서명 등이 같이 유출됨(하드코딩 지양)
// 2차 보안: .env는 github이나 드라이브(클라우드)에 올리지 않음
dotenv.config();  // 주로 맨 위에 작성(그래야 밑에서 쓸 수 있으니까)




const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html')); 
});


app.listen(app.get('port'), () => {
  console.log(app.get('port') + '번에서 익스프레스 서버 실행');
});

