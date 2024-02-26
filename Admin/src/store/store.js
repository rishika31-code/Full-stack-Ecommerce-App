import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./reducers/sidebarSlice";
import categorySlice from "./reducers/categorySlice";
import productSlice from "./reducers/productSlice";
import offerSlice from "./reducers/offerSlice";

const store = configureStore({
    reducer: {
        sideBarSlice: sidebarSlice,
        categorySlice,
        productSlice,
        offerSlice
    }
})

export default store 