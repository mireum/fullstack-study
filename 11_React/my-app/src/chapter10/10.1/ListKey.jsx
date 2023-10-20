import { useState } from "react";

function ListKey() {
  const [list, setList] = useState(['과제하기', '복습하기']);
  const [value, setValue] = useState('');

  const addToList = () => {
    // 잘못된 코드
    // list.push(value); // 직접 변경하면 재렌더링이 안 일어남(push는 원본을 변경시킴)
    // console.log(list);
    // setList(list);  // 근데 set함수를 쓴다고 하더라도 기존 배열을 넣어주면 값의 변경을 감지하지 못한다.
    // list에는 주소가 들어있기 때문.

    // 올바른 코드 - 기존 배열을 복사하여 새로운 배열(새로운 주소값)을 만들어야 함
    // setList([value, ...list]); // 값만 넣는 형태
    setList(prevList => [value, ...prevList]); // 함수형 업데이트 사용

    // input에 입력한 이전 값 초기화
    setValue('');
  };
  return (
    <>
      <input type="text" value={value} onChange={(e) => { setValue(e.target.value); }} />
      <button onClick={addToList}>추가</button>
      <ul>
        {list.map((item, index) => {
          return <li>{item}</li>
        })}
      </ul>
    </>
  );
}

export default ListKey;