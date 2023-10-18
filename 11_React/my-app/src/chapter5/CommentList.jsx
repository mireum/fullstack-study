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
      <Comment name={comments[0].name} content={comments[0].content}/>
      <Comment name={comments[1].name} content={comments[1].content}/>
      <Comment name={comments[2].name} content={comments[2].content}/>
      
      
    </div>
  );
}

export default CommentList;