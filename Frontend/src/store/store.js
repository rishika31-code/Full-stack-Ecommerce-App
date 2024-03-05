import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import categorySlice from "./reducers/categorySlice";
import authSlice from "./reducers/authSlice";
import cartSlice from "./reducers/cartSlice";
import addressSlice from "./reducers/addressSlice";
import offerSlice from "./reducers/offerSlice";
import orderSlice from './reducers/orderSlice'

const store = configureStore({
    reducer: {
        productSlice,
        categorySlice,
        authSlice,
        cartSlice,
        addressSlice,
        offerSlice,
        orderSlice
    }
})


export default store