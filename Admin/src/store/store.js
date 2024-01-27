import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./reducers/sidebarSlice";
import categorySlice from "./reducers/categorySlice";
import productSlice from "./reducers/productSlice";
const store = configureStore({
    reducer: {
        sideBarSlice: sidebarSlice,
        categorySlice,
        productSlice

    }
})

export default store 