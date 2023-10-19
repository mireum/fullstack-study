function MyButton() {
  const handleDelete = (id) => {
    console.log(`ID: ${id} 삭제됨`);
  };

  return (
    <>
      {/* 컴포넌트가 마운트될 때 함수가 실행되고 값이 onClick에 전달됨, 
      이후 클릭해도 undefined 전달됨 = 함수 실행 안됨 */}
      <button onClick={handleDelete(1)}> 
        삭제하기(잘못된 방법)
      </button>

      <br />

      {/* 첫번째 매겨변수 event로 들어오는 값은 event 객체임 */}
      <button onClick={(event) => {
        console.log(event); // 이벤트 객체(발생한 이벤트와 관련된 여러 기능이 담겨있음)
        console.log(event.target); // 현재 발생한 이벤트의 대상(여기서는 버튼 DOM 객체)
        handleDelete(1);
      }}>
        삭제하기
      </button>
    </>
  );
}

export default MyButton;