import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToProductList, selectProductList } from './productSlice';


function ProductList(props) {
  // const productList = useSelector(state => state.product.productList);
  const productList = useSelector(selectProductList);

  const dispatch = useDispatch();

  const [productName, setProductName] = useState('');

  const handleAddProduct = () => {
    dispatch(addToProductList(productName));
    setProductName('');
  };

  return (
    <>
      <p>
        상품 추가:
        <input 
          type="text" 
          value={productName}
          onChange={(e) => { setProductName(e.target.value) }}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleAddProduct();
            }
          }}
        />
        <button
          type='button'
          onClick={() => {handleAddProduct()}}
        >
          추가
        </button>
      </p>
      <p>상품 목록</p>
      <ul>
        {productList && productList.map((el, index) => <li key={index}>{el}</li>)}
        
      </ul>
    </>
  );
}

export default ProductList;