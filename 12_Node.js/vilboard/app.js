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
const passport = require('passport');

dotenv.config();

// 라우터 가져오기
const indexRouter = require('./routes/index');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
// DB 연결 함수 가져오기
const { connect } = require('./database/index');
// ./passport/index.js 가져오기
const passportConfig = require('./passport');

const app = express();
passportConfig(); // passport/index.js에서 내보낸 함수 = passport 설정 실행
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');  // view engine의 확장자 지정
connect();  // 몽고디비에 연결

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public'))); // '/' 생략 가능
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,  // 개발단계에선 false. 기본이 false
  },
  name: 'session-cookie',
}));

// passport 미들웨어 설정
app.use(passport.initialize()); // 요청(req) 객체에 passport 설정이 추가됨(req.isAuthenticated, req.login, req.logout 등)
app.use(passport.session());  // req.session 객체에 passport 정보를 저장
// req.session 객체는 express-session에서 생성하는 것이므노 passport 미들웨어는 express-session 미들웨어보다 뒤에 연결해야 함

// 라우터를 미들웨어로 등록
app.use('/', indexRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
  const error = new Error( `${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 서버에서 대기 중');
});