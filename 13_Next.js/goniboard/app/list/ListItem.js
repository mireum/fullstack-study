export default function ListItem({ post }) {
  return (
    <div className="list-item">
      <h4>{post.title}</h4>
      <p>{post.content}</p>
    </div>
  );
};

// 상세 페이지 만들기
// 1) 글 제목 누르면 상세 페이지로 이동
