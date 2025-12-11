import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  nextId: 1,
};

const productSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    addProducts: (prevState, action) => {
      prevState.products.push({
        id: prevState.nextId,
        ...action.payload,
      });
      prevState.nextId++;
    },

    deleteProducts: (prevState, action) => {
      const newProducts = prevState.products.filter((product) => {
        return product.id !== action.payload;
      });
      prevState.products = newProducts;

      console.log(newProducts);
    },

    editProducts: (prevState, action) => {
      const newProducts = prevState.products.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        }
        return product;
      });
      prevState.products = newProducts;

      // const { id, name, qty, price, status } = action.payload;
      // const newData = {};
      // const existingData = prevState.products.find((x) => x.id == id);
      // if (
      //   existingData.name != name ||
      //   existingData.qty != qty ||
      //   existingData.price != price ||
      //   existingData.status != status
      // ) {
      //   newData.id = id;
      //   newData.name = name;
      //   newData.qty = qty;
      //   newData.price = price;
      //   newData.status = status;
      // }
      // console.log(newData, "DATA BARU");
      // prevState.products = newData;
    },
  },
});

export const { addProducts, deleteProducts, editProducts } =
  productSlice.actions;
export default productSlice.reducer;
