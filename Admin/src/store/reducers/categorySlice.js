import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "categoryslice",
    initialState: { categories: [], loader: false },
    reducers: {
        addcategory(state, action) {
            state.categories = action.payload
        },
        makeLoaderTrue(state) {
            state.loader = true
        },
        makeLoaderFalse(state) {
            state.loader = false
        }
    }
})

//exports
export default categorySlice.reducer
export const { addcategory, makeLoaderTrue, makeLoaderFalse } = categorySlice.actions