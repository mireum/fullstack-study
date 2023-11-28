// Quiz1: 프로젝트 세팅해보기
// dotenv 설정
// app 관련 설정들(전역속성) 설정
// 공통 미들웨어 작성(morgan, static, body-parser, cookie-parser, express-session)
// 기본 '/' 라우터 작성
// 404, 에러 처리 미들웨어
// 서버 연결

const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');

// dotenv
dotenv.config();

// 포트 설정
const app = express();
app.set('port', process.env.PORT || 3000);

// morgan
app.use(morgan('dev'));

// static
app.use('/', express.static(path.join(__dirname, 'public')));

// cookie-parser
app.use(cookieParser(process.env.COOKIE_SECRET));

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// express-session
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

  res.sendFile(path.join(__dirname, '/index.html'));
});

// 404 미들웨어
app.use((req, res, next) => {
  res.status(404).send('404 NOT FOUND');
});

// 에러 처리 미들웨어
app.use((err, req, res, next) => {
  res.status(500).send('에러 발생');
});

// 서버 연결
app.listen(app.get('port'), () => {
  console.log('서버 실행!');
});