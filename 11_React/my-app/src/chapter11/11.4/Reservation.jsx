import { useState } from "react";

function Reservation() {
  // 여러 개의 입력 제어하기 => 여러 개의 state 선언
  const [breakfast, setBreakfast] = useState(false);
  const [numberOfGuests, setNumberOfGuests] = useState(2);
  const [roomType, setRoomType] = useState('SINGLE');

  const handleBreakfastChange = (e) => {
    console.log(e.target.checked);
    setBreakfast(e.target.checked);
  };

  const handleGuestsChange = (e) => {
    console.log(e.target.value);
    setNumberOfGuests(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`조식 여부: ${breakfast}, 투숙객 수: ${numberOfGuests}, 룸 타입: ${roomType}`);
  };

  const handleRoomChange = (e) => {
    console.log(e.target.value);
    setRoomType(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        조식 여부:
        <input 
          type="checkbox" 
          // checked 속성은 checkbox랑 radio 타입에 존재하고 boolean 타입의 값
          checked={breakfast}
          // value도 사용 가능
          onChange={handleBreakfastChange}
        />
      </label>
      <br />
      <label>
        투숙객 수:
        <input 
          type="number" 
          value={numberOfGuests}
          onChange={handleGuestsChange}  
        />
      </label>

      <br />

      룸 타입:
      <label>
        <input 
          type="radio" 
          name="roomType"
          value="SINGLE"
          checked={roomType==="SINGLE"}
          onChange={handleRoomChange}
        />  
        싱글
      </label>
      <label>
        <input 
          type="radio"
          name="roomType" 
          value="DOUBLE"
          checked={roomType==="DOUBLE"}
          onChange={handleRoomChange}
        />
        더블
      </label>
      <label>
        <input 
          type="radio" 
          name="roomType"
          value="TWIN"
          checked={roomType==="TWIN"}
          onChange={handleRoomChange}
        />
        트윈
      </label>


      <button type="submit">제출</button>
    </form>
  );
}

export default Reservation;