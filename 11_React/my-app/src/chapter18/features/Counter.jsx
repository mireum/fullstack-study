import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement }  from "./counterSlice";

// 5. 리액트 컴포넌트에서 Redux State와 Action 사용하기
function Counter(props) {
  // Reduc Store에 있는 state를 가져오는 함수
  const count = useSelector(state => state.counter.value);

  // Redux Store에 요청을 보내주는 함수
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button
          // 전역 상태를 업데이트하는 유일한 방법
          // dispatch() 함수: 액션 객체를 스토어에 보냄
          // -> 스토어는 해당 액션에 매칭되는 리듀서 함수를 실행시켜서 새로운 상태를 만들어 줌
          // decrement() 함수: 액션 (객체) 생성 함수
          // 함수 실행 결과:
          // {
          //   payload: undefined;
          //   type: "counter/decrement";
          // }
          // 실습: 인자값으로 액션 객체 직접 넣어보기
          onClick={() => dispatch(decrement())}
        >감소</button>
        <span>{count}</span>
        <button>증가</button>
      </div>
    </>
  );
}

export default Counter;

// dispatch는 store로 action 객체를 보냄
// store에서는 state를 꺼내와서 액션 객체와 같이 받고 함수 실행