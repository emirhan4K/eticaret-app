import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  selectedProduct: {},
  loading: false,
};

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => { //Adresten ürünleri çek ve bana dön.
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
});

export const productSlice = createSlice({ 
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending,(state)=>{ //İstek Attığında BEKLEMEDEYKEN (LOADİNG) true yap İCON GÖZÜKECEK 
        state.loading = true;
    })
    builder.addCase(getAllProducts.fulfilled,(state,action)=>{ //Başarılı şekilde ULAŞILDIĞINDA LOADİNG false yap ve setle
        state.loading =false;
        state.products = action.payload;
    })
  },
});
 
export const {} = productSlice.actions;

export default productSlice.reducer;
