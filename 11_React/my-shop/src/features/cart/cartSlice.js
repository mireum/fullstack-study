import { createSlice } from '@reduxjs/toolkit';

// 장바구니 정보를 담을 Slice 만들기

const initialState = {
  cartList: [
    {
      id: '1',
      title: "Arcsaber 11 Pro",
      price: 299000,
      count: 2
    },
    {
      id: '3',
      title: "Aerus Z",
      price: 199000,
      count: 1
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState ,
  reducers: {

  }
});


export const selectCartList = state => state.cart.cartList; // 함수다

export default cartSlice.reducer;