import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToProductList } from './productSlice';


function ProductList(props) {
  const product = useSelector(state => state.product.productList);

  const dispatch = useDispatch();

  const [productName, setProductName] = useState('');


  return (
    <>
      <p>
        상품 추가:
        <input 
          type="text" 
          value={productName}
          onChange={(e) => { setProductName(e.target.value) }}
        />
        <button
          type='button'
          onClick={() => {
            return (
            dispatch(addToProductList(productName)),
            setProductName('')
            );
          }}
        >
          추가
        </button>
      </p>
      <p>상품 목록</p>
      <ul>
        {product && product.map((el) => <li>{el}</li>)}
        
      </ul>
    </>
  );
}

export default ProductList;