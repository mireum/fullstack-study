import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import styled from 'styled-components';

const TodoListItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  /* 짝수번째 배경색 지정 */
  &:nth-child(even) {
    background: #f8f9fa;
  }

  /* 엘리먼트 사이사이에 위쪽 테두리 넣기 */
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    /* 아이콘 스타일링 */
    font-size: 1.5rem;
  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;  // 차지할 수 있는 영역 모두 차지
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;

  &:hover {
    color: #ff8787;
  }
`;

// 각 할 일 항목에 대한 정보를 보여주는 컴포넌트
// todo 객체를 props로 받아와 상태에 따라 다른 스타일의 UI를 보여줌
function TodoListItem(props) {
  console.log(props);
  const { id, text, checked } = props.todo;

  return (
    <TodoListItemWrapper>
      <CheckBox>
        { checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </CheckBox>
      <Text>{text}</Text>
      <Remove>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoListItemWrapper>
  );
}

// 각 할 일 항목에 대한 정보를 보여주는 컴포넌트
// todo 객체를 props로 받아와 상태에 따라 다른 스타일의 UI를 보여줌
export default TodoListItem;