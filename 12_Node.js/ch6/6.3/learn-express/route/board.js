const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, Board');
});

router.get('/sub/:case', (req, res) => {
  if (req.params.case === notice) {
    res.send('공지사항 게시판');
  } else if (req.params.case === qna) {
    res.send('문의 게시판');
  } else {
    res.send('404 NOT FOUND');
  }
});

// app.get('/board/sub/notice', (req, res) => {
//   res.send('공지사항 게시판');
// });
// app.get('/board/sub/qna', (req, res) => {
//   res.send('문의 게시판');
// });