import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import categorySlice from "./reducers/categorySlice";
import authSlice from "./reducers/authSlice";
import cartSlice from "./reducers/cartSlice";
const store = configureStore({
    reducer: {
        productSlice,
        categorySlice,
        authSlice,
        cartSlice
    }
})


export default store