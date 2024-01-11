import { connect } from "@/database";
import { ObjectId } from "mongodb";

// 파일명을 index.js로 하면 경로에 포함되지 않는다.

// 삭제 방법2 - 두 방법의 코드가 똑같다
export default async function Delete(req, res) {
  const client = await connect;
  const db = await client.db('board');

  if (req.method === 'DELETE') {
    try {
      const result = await db.collection('post').deleteOne({ _id: new ObjectId(req.query.postId) });
      console.log(result);
      if (result.deletedCount === 0) {
        throw new Error('삭제 실패');
      }

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