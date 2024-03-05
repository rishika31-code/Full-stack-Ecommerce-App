import toast from "react-hot-toast"
import { GET_ORDERS } from "../../api/agent"
import axios from "axios"
import { addOrder } from "../reducers/OrderSlice"
export const getAllOrdersAction = (setLoader, setError) => {
    const token = localStorage.getItem("token")
    if (!token) {
        toast.error("user not found ! ")
        return
    }
    return async (dispatch) => {
        try {
            const { data } = await axios.get(GET_ORDERS, { headers: { token } })
            dispatch(addOrder(data))
            setLoader(false)

        } catch (error) {
            console.log(error)
            setError(true)
        }
    }
}