import { createSlice } from "@reduxjs/toolkit";

const ProductDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    productId: null,
  },
  reducers: {
    selectProduct: (state, action) => {
      state.productId = action.payload;
    },
  },
});

export const { selectProduct } = ProductDetailSlice.actions;

export default ProductDetailSlice.reducer;
