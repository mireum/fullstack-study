const numbers = [1, 2, 3, 4, 5];

function NumberList() {
  // 리액트 엘리먼트로 이루어진 배열
  // 배열을 반복 렌더링할 때는 key 속성을 필수로 넣어야 함
  // 여기서는 임시로 배열의 index를 넣음
  const listItems = numbers.map((number, index) => {
    return <li key={index}>{number}</li>;
  });
  console.log(listItems);
  return (
    <>
      <ul>
        {listItems}
      </ul>

      <ul>
        {numbers.map((number, index) => {
          return <li key={index}>{number}</li>
        })}
      </ul>
    </>
  );
}

export default NumberList;