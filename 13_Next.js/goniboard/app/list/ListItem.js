'use client'

import Link from "next/link";
import DetailButton from "./DetailButton";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function ListItem({ post }) {

  const router = useRouter();

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

      {/* 수정 버튼 */}
      <Link href={`/edit/${post._id}`}>🛠</Link>

      {/* 삭제 버튼 */}
      <span className="cursor-pointer" onClick={async (e) => {
        // 첫번째 방법, query string. http~ 쓰면 안됨
        // await axios.delete(`/api/post?postId=${post._id}`);

        // 두번째 방법 URL 파라미터
        await axios.delete(`/api/post/${post._id}`);

        // e.target.parentElement.remove();  // 요소 제거
        // location.href = '/list';  // 다시 list로 이동, 새로고침 발생
        router.refresh(); // soft refresh. 변동이 있는 일부분만 바꿔줌

      }}>🔪</span>

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
// 그 외
// \[변수명1]\[변수명2]\[변수명3]
// [...변수명]: Catch-all
// [[...변수명]]:Optional Catch-all

// 글 수정 기능 만들기
// 1) 수정 버튼 누르면 글 수정 페이지로 이동
// 2) 글 수정 페이지에 DB에서 가져온 내용을 채워넣기
// 3) 수정 버튼 누르면 DB에 있는 글 수정

// 글 삭제 기능 만들기
// 프론트단 JS 기능을 쓰려면 client 컴포넌트에서만 가능
// /list/page.js 파일을 전부 client컴포넌트로 바꾸는 것보다 필요한 일부분만 바꾸는게 나음
// => 전체를 바꿔버리면 검색 노출에 이점이 없음
// 즉, 큰 페이지는 server 컴포넌트로 두고 필요한 부분만 client 컴포넌트로 추출

// 1) /list/ListItem.js로 컴포넌트 추출
// 2) 글 데이터를 가져오는 2가지 방법
// - 부모(server 컴포넌트)에서 DB데이터를 꺼내와서 자식(client 컴포넌트)에게 props로 전달(권장됨)
// - client 컴포넌트에서 useEffect + axios를 사용하여 서버로 DB데이터 요청
//    -> 단점: 검색 노출이 잘 안될 수 있음
//    - useEffect를 쓰면 HTML 렌더링 이후에 실행되기 때문에 페이지 방문 시 텅 빈 HTML이 먼저 보임
//    - 검색엔진 봇이 방문 시 수집할 데이터가 없어 수집이 느림

// [Quiz]
// 글 삭제 기능 완성하기(2가지 방법)
// 1) /api/post?postId=글id로 DELETE 요청 시
// 2) /api/post/글id로 DELETE 요청 시