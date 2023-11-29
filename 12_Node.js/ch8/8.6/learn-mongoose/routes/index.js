// 서버 코드는 응답을 보내는 라우터 위주로 공부

const express = require('express');
const User = require('../schemas/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await User.find({});  // 전부 다 가져옴, 비동기 함수 find를 기다리기 위해 async-await
    res.render('mongoose', { users }); // 확장자 .ejs 생략, DB에서 찾아온 데이터를 mongoose.ejs에 넘겨서 렌더링
  } catch (err) {
    next(err);
  }
});

module.exports = router;