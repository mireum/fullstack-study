import { connect } from "@/database";

export default async function Handler(req, res) {
  const client = await connect;
  const db = await client.db('board');
  
  console.log(req.body);
  
  if (req.method === 'POST') {
    const { title, content } = req.body;
    await db.collection('post').insertOne({ title, content });
    res.json({
      flag: true,
      message: '저장 성공'
    })
  }

}