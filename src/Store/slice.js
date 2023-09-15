import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const product = action.payload;
      state.push(product);
    },

    remove: (state, action) => {
      const itemToRemove = action.payload;
      return state.filter((item) => item.id !== itemToRemove.id);
    }
  }
});

export const { add, remove } = Slice.actions;
export default Slice.reducer;
