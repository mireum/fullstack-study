const express = require('express');

const { client } = require('../database/index');
const db = client.db('board');  // board 데이터베이스에 연결. 없으면 생성됨

const router = express.Router();

// GET / 라우터
router.get('/', (req, res) => {
  res.render('main.ejs');
});

// GET /insert 라우터
// DB에 데이터 저장하기 테스트(테스트 후 데이터 삭제)
router.get('/insert', (req, res) => {
  db.collection('post').insertOne({ title: '제발 들어가라' });
  res.send('데이터 저장 완료');
});

module.exports = router;