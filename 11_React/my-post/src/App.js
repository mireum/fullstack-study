import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PostDetail from './components/PostDetail';
import PostListItem from './components/PostListItem';

// POST앱 CRUD 만들기
// C: Create(등록)
// R: Read(목록, 상세보기)
// U: Update(수정)
// D: Delete(삭제)

function App() {
  // 서버에서 가져온 데이터라고 가정
  // const [posts, setPosts] = useState(['리액트 잘 쓰려면?', 
  // '자바스크립트 핵심 문법', '스타일링 가이드']);

  // const [showPostDetail, setShowPostDetail] = useState(false);
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [likeCount, setLikeCount] = useState([0, 0, 0]);
  // const [value, setValue] = useState('');
  
  const [posts, setPosts] = useState({
    postContent: ['리액트 잘 쓰려면?', '자바스크립트 핵심 문법', '스타일링 가이드'],
    showPostDetail: false,
    currentIndex: 0,
    likeCount: [0, 0, 0],
    value: ''
  });
  const { postContent, showPostDetail, currentIndex, likeCount, value } = posts;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPosts(prevInputs => ({
      ...prevInputs,
      [name]: value 
    }))
  };

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
        <PostListItem postContent={postContent} setPosts={setPosts}
          currentIndex={currentIndex} likeCount={likeCount} 
        />
      </div>


      {/* 포스트 상세보기 */}
      {/* Quiz: input에 제목 입력 후 등록 버튼 누르면 맨 앞에 새로운 포스트 추가
      
      1) input을 제어 컴포넌트로 만들어서 사용자가 입력한 값을 state로 저장해서 관리
      2) 등록 버튼 클릭 시 posts 상태에 맨 앞에 새로운 데이터 추가
      */}
      <input type='text' value={value} name='value' onChange={handleInputChange} />
      <button type='button' onClick={(e) => {
        // div 하나를 새로 생성 X
        // posts state에 요소 하나 추가하면 자동으로 렌더링 O
        // const copyPosts = [...posts];
        // copyPosts.unshift(value);

        // 또는 spread 연산자로!
        const copyPosts = [value, ...postContent];
        setPosts(copyPosts);
        // setValue('');

        // (버그 수정) 포스트 하나 추가 시 좋아요 카운트도 같이 추가
        const copyLikeCount = [0, ...likeCount];
        setLikeCount(copyLikeCount);
      }}>
        포스트 등록
      </button>


      {/* Quiz: 조건부 렌더링 */}
      {showPostDetail && <PostDetail posts={posts} currentIndex={currentIndex} setPosts={setPosts} />}

    </>
  );
}

export default App;


// 배열이나 객체 형태의 state 변경할 때 주의!
// 1. state 변경 함수(set함수)의 특징
// 기존 state가 신규 state랑 같은 경우, 변경 안 함
// 2. 배열/객체의 특징
// 변수에 주소(참조)값이 저장됨

// (참고) 왜 새로고침하면 다 없어질까?
// 새로고침 시 HTML/CSS/JS 파일을 다시 읽어오기 때문
// 데이터를 유지하려면 서버에 보내서 DB에 영구 저장하고
// 새로고침 발생 시 DB에서 다시 읽어오면 됨



// <추가 개선 과제>
// 1. PostListItem 컴포넌트 추출 

// 2. 날짜 및 작성자, 좋아요 수 등 데이터를 문자열이 아닌 객체 형태로 처리해보기
// state에 글 제목만 저장되어 있는게 아니라 날짜같은 것도 저장해두고 보여주는 식이면 굿
// => 글 등록 시 현재 날짜까지 같이 저장되도록 하면 나이스

// 3. input에 아무것도 입력안하고 등록 버튼 누르는거 막기
// 유저의 의도치않은 행동을 막는 코드도 많이 짜야 안전한 사이트가 됨
// 1) 미입력시 비활성화 -> 입력이 생기면 버튼 활성화
// 2) 등록 버튼 누를 시 유효성 검사

// 4. 포스트 수정할 때 input으로 입력받은 내용으로 수정해보기

// 5. 글 오름차순 정렬

// 6. 그 외 개선 및 구현할 것 많으니 자유롭게 연습해보기