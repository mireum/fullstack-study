// 기본적인 서버 구조 작성하기
// 1) dotenv 설정
// 2) app 관련 설정들(전역속성) 설정
// 3) 공통 미들웨어 설정
// (morgan, static, body-parser, cookie-parser, express-session)
// 4) 404 처리 미들웨어
// 5) 에러 처리 미들웨어 + error.ejs
// 6) 서버 연결

const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

dotenv.config();

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname, 'public')));

app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true
  },
  name: 'session-cookie',
}));

// '/' 라우터
app.get('/', (req, res) => {

  res.send('hello');
});

app.use((req, res, next) => {
  res.status(404).send('404 NOT FOUND');
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log('서버 실행!');
});