import { createSlice } from "@reduxjs/toolkit";
import { ProductState } from "../interface/productInterface";

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.unshift(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addProduct, updateProduct, deleteProduct, setProducts } =
  productSlice.actions;
export default productSlice.reducer;
