const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  state: {
    items: ["burger", "pizza"],
  },

  reducers: {
    additems: (state, action) => {
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.items.pop();
    },

    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export default cartSlice.reducer;
export const { additems, removeItem, clearCart } = cartSlice.actions;
