import { createSlice } from "@reduxjs/toolkit";

const productData = createSlice({
  name: "products",
  initialState: { initialList: [], productList: [], showProduct: [] },
  reducers: {
    setInitialList(state, action) {
      const initialData = action.payload;
      const newProduct = initialData.map((product) => {
        return { ...product, isChecked: false };
      });
      state.initialList = newProduct;
    },
    setProductList(state, action) {
      const newProductList = action.payload;
      state.productList = newProductList;
    },
    setShowProduct(state, action) {
      const newShowProduct = action.payload;
      state.showProduct = newShowProduct;
    },
  },
});

export const productActions = productData.actions;

export default productData;
