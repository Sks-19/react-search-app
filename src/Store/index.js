import { configureStore } from "@reduxjs/toolkit";
import productData from "./product";

const store = configureStore({
  reducer: {
    products: productData.reducer,
  },
});

export default store;
