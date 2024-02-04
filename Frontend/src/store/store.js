import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import categorySlice from "./reducers/categorySlice";
import authSlice from "./reducers/authSlice";

const store = configureStore({
    reducer: {
        productSlice,
        categorySlice,
        authSlice
    }
})


export default store