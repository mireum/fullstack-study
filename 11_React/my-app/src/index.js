import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxUse from './chapter3/3.4/JsxUse';
import Library from './chapter3/Library';
import Clock from './chapter4/Clock';
import PropsUse from './chapter5/5.3/PropsUse';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 4장 예제
// 1초마다 Clock 컴포넌트를 렌더링하는 코드
// (실제 개발에서 이렇게 쓰는 경우는 없고 Stage를 변경해서 재렌더링 시킴)
// setInterval(() => {
//   root.render(
//     <Clock />
//   );
// }, 1000);

root.render(
  // <App />

  // 3장 예제
  // <JsxUse />
  // <Library />

  // <Clock />
  <PropsUse />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
