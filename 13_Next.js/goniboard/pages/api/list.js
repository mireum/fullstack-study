import { connect } from "@/database";

export default async function Handler(req, res) {
  const client = await connect;
  const db = await client.db('board');
  const posts = await db.collection('post').find().toArray();

  if (req.method === 'GET') {
    res.json({
      flag: true,
      posts
    })
  } else {
    res.json({
      flag: false,
    })
  }
}