import React from 'react';

function PostDetail(props) {
  return (
    <div>
      <h4>제목: {props.posts[props.currentIndex]}</h4>
      <p>날짜: 2023년 1월 20일</p>
      <p>작성자: goni.kim</p>
      <p>... 상세 내용 ...</p>
    </div>
  );
}

export default PostDetail;

// 어떤 것을 컴포넌트로 만들 것인가?
// 1. 반복적인 HTML이 발생할 때
// 2. 큰 덩어리들
// 3. 여기저기 자주 출현하는 것들(재사용을 위해)
// but, 컴포넌트로 너무 쪼개는 것도 안 좋음!

