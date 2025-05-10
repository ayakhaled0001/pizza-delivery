import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/user/userSlice";
import cartSlice from "./features/cart/cartSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
