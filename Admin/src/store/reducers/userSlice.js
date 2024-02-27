import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userSlice",
    initialState: { users: [] },
    reducers: {
        getUser(state, action) {
            state.users = action.payload
        }
    }
})


export const { getUser } = userSlice.actions
export default userSlice.reducer