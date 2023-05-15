import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/ProductSlice";
import CartSlice from "./Slices/CartSlice";
export default configureStore({
  reducer: {
    app: productReducer,
    carts: CartSlice,
  },
});
