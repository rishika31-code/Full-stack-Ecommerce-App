import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./reducers/sidebarSlice";
import categorySlice from "./reducers/categorySlice";

const store = configureStore({
    reducer: {
        sideBarSlice: sidebarSlice,
        categorySlice

    }
})

export default store 