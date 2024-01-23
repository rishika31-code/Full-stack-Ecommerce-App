import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./reducers/sidebarSlice";

const store = configureStore({
    reducer: {
        sideBarSlice: sidebarSlice
    }
})

export default store 