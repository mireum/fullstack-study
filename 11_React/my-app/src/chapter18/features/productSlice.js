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

export default productSlice.reducer;