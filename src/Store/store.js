import { configureStore } from "@reduxjs/toolkit";
import items from "./slice.js";
const store = configureStore({
  reducer: {
    add: items
  }
});

export default store;
