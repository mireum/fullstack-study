const express = require('express');
const Comment = require('../schemas/comment')

const router = express.Router();

// 댓글 등록 댓글을 DB로
router.post('/', async (req, res, next) => {
  try {
    const comment = await Comment.create({
      commenter: req.body.id,
      comment: req.body.comment,
    });
    console.log(comment); // 생성된 댓글 데이터
    const result = await Comment.populate(comment, { path: 'commenter' })
    // commenter의 ObjectId로 참조하는 실제 사용자 객체로 바꿔줌
    // 댓글 등록 시 Network > Preview나 Response에서 확인
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
});


module.exports = router;