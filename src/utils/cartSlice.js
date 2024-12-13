const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
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
