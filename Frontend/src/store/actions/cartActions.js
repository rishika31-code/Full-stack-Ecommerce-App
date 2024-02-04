import toast from "react-hot-toast"
import { setCartItem } from "../reducers/cartSlice"
import axios from "axios"
import { ADD_TO_CART } from "../../api/agent"




// add to cart action 
export const addToCartAction = (cartData, setQuantity) => {
    return async (dispatch, getstate) => {
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const { data } = await axios.post(ADD_TO_CART, cartData, {
                    headers: { token: token }
                })
                console.log(data)

            } catch (err) {
                console.log(err)
                toast.error(err.response.data.message)
            }
        }
        else {
            toast.error("LogIn Again ! ")
        }
    }
}