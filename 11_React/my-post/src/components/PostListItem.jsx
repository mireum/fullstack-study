import React, { useState } from 'react';

function PostListItem(props) {
  const { posts, setPosts, currentIndex,  likeCount} = props;
  
  console.log(posts);
  return (
    <div>
      {/* 포스트 목록 */}
        {/* <div className='list'>
          <h4>{posts[0]}</h4>
          <p>2023년 1월 20일</p>
          <p>by goni.kim</p>
        </div>
        <div className='list'>
          <h4>{posts[1]}</h4>
          <p>2023년 1월 2일</p>
          <p>by alice</p>
        </div>
        <div className='list'>
          <h4>{posts[2]}</h4>
          <p>2023년 12월 20일</p>
          <p>by hero</p>
        </div> */}

        {/* Quiz: map()을 이용하여 posts 배열 반복 출력하기 */}
        {posts.map((el, index) => {
          return (
            <div key={index} className='list' onClick={() => {
              setShowPostDetail(true);
              setCurrentIndex(index);
            }}>
              <h4>{el}</h4>
              <p>2023년 1월 20일</p>
              <p>by kim</p>

              <hr />

              <div className='toolbar'>
                {/* 좋아요 기능 */}
                <span onClick={(e) => {
                  // (버그 수정)
                  // 현재는 좋아요 버튼을 누를 때 글 상세보기까지 같이 클릭됨!!
                  // 부모 - 자식 관계에 있을 때 이벤트 버블링이 일어남
                  e.stopPropagation();  // 상위 요소로 퍼지는 이벤트 버블링을 막음

                  const copyLikeCount = [...likeCount]; // 배열의 복사본 만들기(새로운 배열)
                  copyLikeCount[index]++;
                  setLikeCount(copyLikeCount);
                }}>
                  🤎 {likeCount[index]}
                </span>

                {/* 포스트 삭제하기 */}
                <span style={{ fontSize: 27 }} onClick={(e) => {
                  e.stopPropagation();

                  // Quiz: 삭제 기능 만들기
                  // div 하나를 직접 제거 하는 것 X
                  // state에서 제거하면 알아서 자동으로 렌더링 O
                  // const copyPosts = [...posts];
                  // copyPosts.splice(index, 1);
                  // setPosts(copyPosts);

                  // 또는 배열의 filter() 함수 사용
                  const filteredPosts = posts.filter((value, idx) => {
                    return index !== idx;  
                  });
                  setPosts(filteredPosts);

                  // (버그 수정) 삭제 시 해당 포스트의 좋아요 카운트도 같이 삭제
                  const copyLikeCount = [...likeCount];
                  copyLikeCount.splice(index, 1);
                  setLikeCount(copyLikeCount);
                }}>
                  🗑
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default PostListItem;