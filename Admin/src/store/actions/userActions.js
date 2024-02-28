import axios from "axios"
import { GET_ALL_USERS } from "../../api/agent"
import { addUsers } from "../reducers/userSlice"
import toast from "react-hot-toast"

// get all users action to fecth all the users 
export const getAllUserAction = () => {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.get(GET_ALL_USERS)
            if (data) {
                dispatch(addUsers(data))
            }
            else {
                toast.error("error while getting all the users")
            }
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}