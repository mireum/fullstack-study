import { connect } from "@/database";
import { ObjectId } from "mongodb";


// 삭제 방법2
export default async function Delete(props) {
  const client = await connect;
  const db = await client.db('board');
  const { postId } = props.query;
  console.log(postId);

  const result = await db.collection('post').deleteOne({ _id: new ObjectId(postId)});

}