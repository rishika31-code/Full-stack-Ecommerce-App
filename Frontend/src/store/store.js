import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import categorySlice from "./reducers/categorySlice";

const store = configureStore({
    reducer: {
        productSlice,
        categorySlice
    }
})


export default store