import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// POST앱 CRUD 만들기
// C: Create(등록)
// R: Read(목록, 상세보기)
// U: Update(수정)
// D: Delete(삭제)

function App() {
  // 서버에서 가져온 데이터라고 가정
  const [posts, setPosts] = useState(['리액트 잘 쓰려면?', 
  '자바스크립트 핵심 문법', '스타일링 가이드']);

  return (
    <>
      {/* 상단 헤더 만들기 */}
      <header className='header--dark'>
        <h4>Gonilog</h4>
        <nav>
          <ul>
            <li>트렌딩</li>
            <li>최신</li>
          </ul>
        </nav>
      </header>

      <div className='inner'>
        {/* 포스트 목록 */}
        <div className='list'>
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
        </div>

        {/* Quiz: map()을 이용하여 posts 배열 반복 출력하기 */}
        
        {posts.map(el => {
          return (
            <div className='list'>
              <h4>{el}</h4>
              <p>2023년 1월 20일</p>
              <p>by kim</p>
            </div>
          )
        })}
          
        
      </div>
    </>
  );
}

export default App;
