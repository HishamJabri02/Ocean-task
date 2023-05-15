import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        return;
      } else {
        console.log(action.payload);
        const { id, name, description, price, quantity } = action.payload;
        const item = {
          id,
          name,
          description,
          price,
          quantity,
        };
        state.items.push(item);
        state.totalQuantity++;
      }
      state.items.map(
        (item) => (state.totalPrice += item.quantity * item.price)
      );
    },
    updateProducts: (state, action) => {
      const id = action.payload[0];
      const quantity = action.payload[1];
      console.log(id);
      console.log(quantity);
      const updateItem = state.items.find((item) => item.id === id);
      updateItem.quantity = quantity;
      state.totalPrice = 0;
      state.items.map(
        (item) => (state.totalPrice += item.quantity * item.price)
      );
    },
    removeProducts: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalQuantity--;
    },
  },
});
export const { addProduct, updateProducts, removeProducts } = CartSlice.actions;
export default CartSlice.reducer;
