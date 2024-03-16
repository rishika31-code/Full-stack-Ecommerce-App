import axios from "axios"
import { GET_CATEGORIES } from "../../api/agent"
import { addCategory } from "../reducers/categorySlice"
import toast from "react-hot-toast"

export const getCategoriesAction = (setLoader) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(GET_CATEGORIES)
            dispatch(addCategory(data))
            setLoader(false)
        } catch (error) {
            toast.error(err.response.data.message)
        }

    }
}

