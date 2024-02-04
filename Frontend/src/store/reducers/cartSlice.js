import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartslice',
    initialState: { cartItems: [] },
    reducers: {
        setCartItem(state, action) {
            state.cartItems = action.payload
        }
    }
})

//exports 
export const { setCartItem } = cartSlice.actions
export default cartSlice.reducer