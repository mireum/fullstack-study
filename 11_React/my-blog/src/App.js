import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

// pages
import MainPage from './component/page/MainPage';

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

// 일반적으로 라우팅은 App 컴포넌트에 구현하게 되는데
// App 컴포넌트가 가장 처음으로 렌더링되는 최상위 컴포넌트이기 때문
function App() {
  return (
    <BrowserRouter>
      {/* 라우팅과 상관없이 띄울 것 */}
      <MainTitleText>미니 블로그</MainTitleText>  
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
