import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: []
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToProductList: (state, { payload: productName }) => {
      state.productList.push(productName);
    }
  }
});

export const { addToProductList } = productSlice.actions;

// 데이터를 가공해서 export 할 수도 있음
export const selectProductList = state => state.product.productList;

// default는 한 파일 당 한번만 쓸 수 있다. 
// default로 export할 것은 import로 가져올 때 괄호를 치면 안된다
export default productSlice.reducer;