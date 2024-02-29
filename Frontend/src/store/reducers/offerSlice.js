import { createSlice } from "@reduxjs/toolkit";

const offerSlice = createSlice({
    name: "offerSlice",
    initialState: { offers: [] },
    reducers: {
        addOffers(state, action) {
            state.offers = action.payload
        }
    }
})


export const { addOffers } = offerSlice.actions
export default offerSlice.reducer