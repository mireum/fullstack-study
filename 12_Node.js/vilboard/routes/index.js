const express = require('express');

const { client } = require('../database/index');
const db = client.db('board');  // board 데이터베이스에 연결. 없으면 생성됨

const router = express.Router();

// GET / 라우터
router.get('/', (req, res) => {
  res.render('main.ejs');

  // if (req.query.error) alert(error);
});

// GET /insert 라우터
// DB에 데이터 저장하기 테스트(테스트 후 데이터 삭제)
router.get('/insert', async (req, res) => {
  // JS Object 형태로 저장(엄밀히 JS Object는 아니고 MongoDB자료형인 BSON이다)
  try {
    await db.collection('post').insertOne({ 
      title: '제발 들어가라', 
      content: '들어갔니?' 
    });
    res.send('데이터 저장 완료');
  } catch (err) {
    console.error(err);
  }
});

// DB에 데이터 전체 삭제하기 테스트
router.get('/delete-all', async (req, res) => {
  await db.collection('post').deleteMany({});
  res.send('데이터 전체 삭제 완료');
});

// GET /cors
router.get('/cors', (req, res) => {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.send('데이터 응답 테스트');
});

// Quiz: /time으로 접속하면 현재 서버의 날짜/시간을 보여주는 기능 만들기
// time.ejs로 웹페이지 만들어서 그 안에 서버의 시간을 넣어 보내주면 됨
router.get('/time', (req, res) => {
  res.render('time', { date: new Date(), datetime: Date.now() });
});

module.exports = router;