import axios from "axios"
import { GET_CATEGORIES } from "../../api/agent"
import { addCategory } from "../reducers/categorySlice"


export const getCategoriesAction = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(GET_CATEGORIES)
            dispatch(addCategory(data))

        } catch (error) {
            console.log(error)
        }

    }
}

