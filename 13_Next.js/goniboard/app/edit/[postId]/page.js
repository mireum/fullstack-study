import { connect } from "@/database";
import { ObjectId } from "mongodb";

export default async function edit(props) {
  const client = await connect;
  const db = await client.db('board');
  const { postId } = props.params;

  const result = await db.collection('post').findOne({ _id: new ObjectId(postId) });
  const {_id, title, content} = result;
  return (
    <div className="p-20">
      <h4>수정</h4>
      <form id="edit-form" action="/api/post/edit" method="POST">
        <input type="hidden" name="id" defaultValue={_id.toString()}/>
        <label htmlFor="title">제목</label>
        <input type="text" id="title" name="title" defaultValue={title}/>
        <label htmlFor="content">내용</label>
        <input type="text" id="content" name="content" defaultValue={content}/>
        <button type="submit">등록</button>
      </form>
    </div>
  );
}