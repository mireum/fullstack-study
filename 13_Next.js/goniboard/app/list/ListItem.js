import Link from "next/link";
import DetailButton from "./DetailButton";

export default function ListItem({ post }) {
  return (
    <div className="list-item">
      {/* 페이지를 이동하는 방법(1) - Link 컴포넌트 */}
      {/* Link 컴포넌트를 사용하여 '/detail/글id'로 이동 */}
      <h4>
        {/* 문자열과 결합하면 Object가 문자열로 변함. 때문에 _id.toString() 생략 */}
        <Link href={`/detail/${post._id}`}>
          {post.title}
        </Link>
      </h4>

      {/* 페이지를 이동하는 방법(2) - useRouter */}
      <DetailButton postId={post._id.toString()} />

      <p>{post.content}</p>
    </div>
  );
};

// 상세 페이지 만들기
// 1) 글 제목 누르면 상세 페이지로 이동
// 2) DB에서 해당 게시글 가져와서 보여주기
// => 이때 상세 페이지 URL은? 지금까지의 방식: /detail/글의 아이디
// => /app/detail 폴더 안에 여러 폴더 만들면 비효율적
// => React: URL 파라미터, Express: 라우트 파라미터 (둘 다 같음)
// => Next.js: Dynamic Routes 사용 -> 파일 또는 폴더 이름을 대괄호로 묶어 생성 []