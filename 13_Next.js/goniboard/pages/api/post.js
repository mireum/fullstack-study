import { connect } from "@/database";
import { ObjectId } from "mongodb";

export default async function Handler(req, res) {
  const client = await connect;
  const db = await client.db('board');
  
  console.log(req.body);
  
  if (req.method === 'POST') {
    const { title, content } = req.body;

    // 데이터 유효성 검사
    if (!title) {
      return res.status(500).json({
        flag: false,
        message: '제목 입력하세요'
      })
    }

    // DB 에러 예외 처리
    try {
      await db.collection('post').insertOne({ title, content });
      // res.json({
      //   flag: true,
      //   message: '저장 성공'
      // })
  
      // 응답과 동시에 페이지 이동시키기
      res.redirect(302, '/list'); // 응답 코드 생략 시 기본값: 307(Temporary redirect)
    } catch (err) {
      console.error(err);
      res.status(500).json({
        flag: false,
        message: '등록 실패'
      })
    }
  }
  else if (req.method === 'DELETE') {
    try {
      const result = await db.collection('post').deleteOne({ _id: new ObjectId(req.query.postId) });
      console.log(result);

      res.json({
        flag: true,
        message: '삭제 성공'
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        flag: true,
        message: err.message
      });
    }
  }

}