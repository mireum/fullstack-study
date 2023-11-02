import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  selectedProduct: null,
};

// 상품 정보를 담을 slice 만들기
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.productList = action.payload;
    },
    getSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
    addMoreProducts: (state, action) => {
      action.payload.map((el) => state.productList.push(el));
    },
  }
});

// 액션 생성 함수
export const { getAllProducts, getSelectedProduct, clearSelectedProduct, addMoreProducts } = productSlice.actions;

// 선택자 함수
export const selectProductList = (state) => state.product.productList; // product는 store에서 지정한 이름
export const selectSelectedProduct = (state) => state.product.selectedProduct;

// 리듀서 함수들
export default productSlice.reducer;