import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProduct = createAsyncThunk("items/fetchProduct", async () => {
  const response = await fetch(
    "https://33c4a073-b2f8-4046-bfa0-a3b8920cc1c1.mock.pstmn.io/api/products?page=1"
  );
  const result = response.json();
  return result;
});
export const ProductSlice = createSlice({
  name: "items",
  initialState: {
    products: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.products = action.payload;
      state.products = state.products.response.data;
    });
  },
});
export default ProductSlice.reducer;
