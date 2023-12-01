const express = require('express');
const { ObjectId } = require('mongodb');
const { client } = require('../database/index');
const db = client.db('board');  // board 데이터베이스에 연결. 없으면 생성됨

const router = express.Router();

// 글 목록 기능 만들기
// GET /post 라우터
router.get('/', async (req, res) => {
  const posts = await db.collection('post').find({}).toArray(); // 컬렉션의 모든 document를 출력하는 법. mongoose와 다르게 배열로 만들어줘야함
  console.log(posts);

  // 글 목록 페이지 만들어서 웹페이지에 서버(DB) 데이터 꽂아 넣기 => 템플릿 엔진 사용
  // res.render('list');

  // 서버 데이터를 ejs 파일에 넣으려면
  // 1) ejs 파일로 데이터 전달
  // 2) ejs 파일 안에서 <%= 데이터 %>
  // 3) ejs 문법으로 HTML 안에서도 JS 사용하려면 <% 자바스크립트 코드 %>
  res.render('list', { posts });
});

// 글 작성 기능 만들기
// 사용자가 작성한 글을 DB에 저장해주기
// 1) 글 작성 페이지에서 작성한 내용을 서버로 전송
// 2) 서버는 전달받은 내용을 검사(유효성 검사)
// 프론트와 더불어 이중 체크 해주면 좋음
// => 프론트엔드 코드 및 데이터는 위조가 가능하기 때문
// => 또는 POSTMAN 같은 툴을 써서 요청을 보내면 프론트의 유형성 검사를 안 거침
// 3) 이상 없으면 DB에 저장


// GET /post/write 라우터
router.get('/write', (req, res) => {
  res.render('write');
});

// POST /post/write 라우터
router.post('/write', (req, res, next) => {
  console.log(req.body);  
  // 클라이언트가 보낸 데이터 -> 요청 본문에 담김 -> body-parser가 분석해서 req.body에 객체로 저장

  // DB 예외 처리
  try {
    const title = req.body.title;
    const content = req.body.content;

    // 유효성 검사 추가하기
    // 제목이 비어있으면 저장 안함
    if (!title) { 
      res.json({
        flag: false,
        message: '제목을 입력하세요'
      });
    } else {
      // Quiz: DB에 저장하기
      db.collection('post').insertOne({ title, content });
  
      // 동기식 요청이면 다른 페이지로 이동
      // res.redirect('/post');

      // 비동기식(Ajax) 요청이면 성공 데이터와 함께 응답
      // 응답으로 redirect와 render는 사용 안 하는게 좋음
      // 리액트는 새로고침이 필요없으므로
      res.json({
        flag: true,
        message: '등록 성공'
      });
    }
  } catch (err) {
    // (참고) 예외처리는 정답이 없음, 회사/팀의 룰 또는 기획 의도에 따라 달라짐
    err.status = 500;
    next(err);
  }
});


// 글 상세보기 만들기
// /post/글id 입력하면 해당 글의 상세 페이지를 보여줌
// 1) /post/글id 요청 보내기
// 2) { _id: 글id } 조건으로 글을 DB에서 찾아서
// 3) 해당 글을 ejs 파일에 꽂아서 보내줌

// GET /post/:id 라우터
router.get('/:id', async (req, res, next) => {
  res.render('detail');

  // DB에서 글 가져오기
  // 테스트
  // const post = await db.collection('post').findOne({ _id: '65683e88a6e5f0745c180e5a' });
  // console.log(post);  // ObjectId 가 객체이므로 null 찍힘

  const post = await db.collection('post').findOne({ _id: new ObjectId
    ('65683e88a6e5f0745c180e5a') });
  console.log(post);
});


module.exports = router;