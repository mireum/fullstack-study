import Comment from "./Comment";

const comments = [
  {
    name: '최지우',
    content: '안녕하세요 반갑습니다.'
  },
  {
    name: '이지우',
    content: '재미있어요 리액트~'
  },
  {
    name: '박지우',
    content: '리액트 재밌네요'
  },
  {
    name: '김지우',
    content: '리액트 너무 어려워요!'
  },
];

// 댓글들을 포함하는 컴포넌트
function CommentList(props) {
  return (
    <div>
      {/* Quiz: props를 추가하여 name과 comtent 값 전달 */}
      {/* <Comment name={comments[0].name} content={comments[0].content}/>
      <Comment name={comments[1].name} content={comments[1].content}/>
      <Comment name={comments[2].name} content={comments[2].content}/> */}
      
      {/* 배열을 동적으로 렌더링해야할 때에는 배열의 map() 함수를 사용
      (map(): 배열 안에 있는 각 요소를 이용하여 새로운 배열을 만듦) 
      일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 만들면 됨 */}
      {comments.map((comment, index) => {
        return (
          <Comment key={index} name={comment.name} content={comment.content} /> // 배열이 4개라 댓글도 4개 나옴
        );
      })}

      {/* map() 함수의 결과 */}
      {[
        <Comment key={0} name='최지우' content='안녕하세요 반갑습니다.' />,
        <Comment key={1} name='이지우' content='안녕하세요 반갑습니다.' />,
        <Comment key={2} name='박지우' content='리액트 재밌네요' />,
        <Comment key={3} name='김지우' content='리액트 너무 어려워요!' />
      ]}

      {/* 코드 단축 시 */}
      {comments.map((comment, index) => <Comment key={index} name={comment.name} content={comment.content} /> )}

    </div>
  );
}

export default CommentList;