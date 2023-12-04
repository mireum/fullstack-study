const passport = require('passport');
const local = require('./localStrategy'); // 로컬 로그인 전략(=로그인 시 어떻게 처리할지 동작)
const { ObjectId } = require('mongodb');
const { client } = require('../database/index');
const db = client.db('board');  // board 데이터베이스에 연결. 없으면 생성됨

// passport를 이해하는 핵심 부분 작성
module.exports = () => {
  // req.login()으로 로그인 시 자동으로 실행되며, 세션 객체(req.session)에 어떤 데이터를 저장할지 정함
  // 
  passport.serializeUser((user, done) => {
    console.log(user);  // 로그인 중인 사용자 정보

    // 첫번째 인자값: 에러 발생 시 에러 값
    // 두번째 인자값: 세션에 저장할 데이터(일단 서버 메모리에 저장됨)
    // 로그인 시 사용자 데이터를 세션에 저장하는데 세션에 사용자 정보를 모두 저장하면
    // 세션의 용량이 커지고 데이터 일관성에 문제가 발생하므로 아이디만 저장
    done(null, user._id); // _id만 저장
    // done(null, { id: user._id, username: user.username }); // 이런 식으로 저장 가능, 참고
  });

  passport.deserializeUser();

  local();
};