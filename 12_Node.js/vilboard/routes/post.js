const express = require('express');
const { client } = require('../database/index');
const db = client.db('board');  // board 데이터베이스에 연결. 없으면 생성됨

const router = express.Router();

// 글 목록 기능 만들기
// GET /post 라우터
router.get('/', async (req, res) => {
  const posts = await db.collection('post').find({}).toArray(); // 컬렉션의 모든 document를 출력하는 법. mongoose와 다르게 배열로 만들어줘야함
  console.log(posts);
});

module.exports = router;