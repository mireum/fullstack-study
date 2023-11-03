import React from 'react';
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCount, increaseCount, selectCartList } from '../features/cart/cartSlice';

function Cart(props) {
  const dispatch = useDispatch();
  const cartList = useSelector(selectCartList);
  // console.log(cartList);
  const formatter = new Intl.NumberFormat('ko-KR');

  
  return (
    <>
      <Table hover>
        <thead>
          <tr>
            <th>No</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>1</td>
            <td>라켓</td>
            <td>2</td>
            <td>199,000원</td>
          </tr> */}

          {/* Quiz: cartList 반복 렌더링 및 데이터 바인딩 하기 */}
          {cartList.map((cart, index) => {
            const { id, title, price, count } = cart;
            return (
              <tr key={id}>
                <td>{index+1}</td>
                <td>{title}</td>
                <td>
                  <button onClick={() => dispatch(decreaseCount(id))}>
                    -
                  </button>
                  {count}
                  <button onClick={() => dispatch(increaseCount(id))}>
                    +
                  </button>
                </td>
                <td>{formatter.format(price*count)}원</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Cart;