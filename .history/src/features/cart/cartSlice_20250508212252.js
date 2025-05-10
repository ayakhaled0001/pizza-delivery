import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzaId: 12,
      name: "mediterran",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload :newitem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload id of the pizza item
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {},
    const item = 
    decreaseItemQuantity(state, action) {},
    clearCart(state, action) {},
  },
});
