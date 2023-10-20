import { useState } from "react";

const students = [
  {
    id: '1',
    name: '김재현',
    email: 'geoblo@naver.com'
  },
  {
    id: '2',
    name: '유재석',
    email: 'you@example.com'
  },
  {
    id: '3',
    name: '이이경',
    email: '22kyung@example.com'
  },
  {
    id: '4',
    name: '이미주',
    email: 'joo@example.com'
  }
];
// 출석부 컴포넌트

function AttendanceBook() {
  const [list, setList] = useState(students);
  // const studentsList = [...list];

  return (
    <ul>
      {/* Quiz: 배열을 반복 렌더링 해보기 */}
      {list.map((e) => {
        return <li>{e.name} ({e.email})</li>
      })}
    </ul>
  );
}

export default AttendanceBook;