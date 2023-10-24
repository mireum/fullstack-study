import React from 'react';

// 렌더링과 상관없는 고정값들은 전역변수로 선언(주로 상수들)
const unitConvert = {
  mm: {
    name: '밀리미터',
    ratio: 1000
  },
  cm: {
    name: '센티미터',
    ratio: 100
  },
  m: {
    name: '미터',
    ratio: 1
  },
  km: {
    name: '킬로미터',
    ratio: 0.001
  },
  inch: {
    name: '인치',
    ratio: 39.370079
  }
};


function UnitInput(props) {
  const { unit, length } = props;

  return (
    <>
     <input type="text" value={length * unitConvert[unit].ratio} disabled /> 
     {unitConvert[unit].name}
    </>
  );
}

export default UnitInput;

// select로 단위 선택하고 다른 단위들로 출력이 나오도록 해보기