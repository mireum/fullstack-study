import { createSlice } from "@reduxjs/toolkit";

// 3. Redux State Slice 만들기

// state 초기값으로 원시값, 배열, 객체 등 모든 데이터 타입 사용 가능
// 아래와 같이 주로 객체 형태로 사용함(가독성도 좋고 state 관리 및 변경이 편함)
const initialState = {
  value: 0,
};


// 전역 state 만드는 방법
// useState()랑 비슷한 역할을 하는데 Redux에서는 state 하나를 slice라고 부름
// createSlice() 함수: state이름, 초기값 설정, 액션 및 리듀서 함수를 만드는 것을 도와줌
// 인자값으로 name, initialState, reducers 속성을 갖는 객체를 넣음
export const counterSlice = createSlice({
  name: 'counter', // state 이름(추후 action 이름을 만드는 데도 쓰임)
  initialState,  // state 초기값(위에서 객체 형태로 정의)
  // state를 변경하는 함수(reducer)들을 정의하고 관련 action을 생성해줌
  // 현재 state와 action 객체를 파라미터로 받아오고 필요한 경우 상태를 업데이트하고 새 상태를 반환하는 함수
  reducers: {
    increment: (state) => { // 첫 번째 파라미터: 현재 state를 받아옴
      // 이거 안 해도 됨
      // const copyObj = {
      //   ...state
      // };
      // copyObj.value += 1; 
      state.value += 1; // 배열 또는 객체의 경우에도 직접 수정하는 형태로 작성 가능!!
      // 실제로는 상태를 직접 변경하지 않고 내부적으로 state 복사본을 만들어서 그 복사본을 변경하고 새로운 상태를 반환함
      // 가능한 이유? immer 라이브러리가 내장되어 불변성 관리를 해주기 때문
    },
    decrement: (state) => {
      state.value -= 1;
    },
  }
});


console.log(counterSlice);

// 각 reducer에 대한 액션 생성 함수들이 객체 형태로 들어있음
// 액션 생성 함수: 해당 액션 객체를 만들어준다
export const { increment, decrement } = counterSlice.actions;

// 위에서 정의한 리듀서 함수들
export default counterSlice.reducer;