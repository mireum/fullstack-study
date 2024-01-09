import { connect } from "@/database";
import { ObjectId } from "mongodb";

export default async function detail(props) {
  console.log(props);
  const { postId } = props.params;

  const client = await connect;
  const db = await client.db('board');
  const post = await db.collection('post').findOne({ _id: new ObjectId(postId)});
  const { title, content } = post;

  return (
    <div>
      <h4>상세 페이지</h4>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}