import React from 'react';
import { Table } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { selectCartList } from '../features/cart/cartSlice';

function Cart(props) {
  const cartList = useSelector(selectCartList);
  // console.log(cartList);
  
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
          {cartList.map((item) => {
            const { id, title, price, count } = item;
            return (
              <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Cart;