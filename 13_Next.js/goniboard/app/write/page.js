export default function Write() {
  return (
    <div className="p-20">
      <h4>글쓰기</h4>
      <form id="write-form" action="" method="">
        <label htmlFor="title">제목</label>
        <input type="text" id="title" name="title"/>
        <label htmlFor="content">내용</label>
        <input type="text" id="content" name="content"/>
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

// 글 작성 기능 만들기(feat. Next.js에서 서버 기능 만들기)
// 1) 글 작성 페이지
// 2) 작성한 글을 서버로 전송
// 3) 서버에서 검사 후 DB에 저장

// API Routes 방식(참고: 최신 버전에서는 Route Handlers 방식으로 대체❗❕)
// api 코드의 폴더 구조
// /pages/api/test.js => /api/test로 HTTP 요청이 오면 test.js 안의 코드가 실행됨
// (실습)
// 1) 브라우저로 GET 요청 테스트
// /api/test