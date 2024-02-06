import toast from "react-hot-toast"
import axios from "axios"
import { ADD_TO_CART } from "../../api/agent"
import { setCartItem } from "../reducers/cartSlice"



// add to cart action 
export const addToCartAction = (cartData, setQuantity) => {
    return async (dispatch, getstate) => {
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const { data } = await axios.post(ADD_TO_CART, cartData, {
                    headers: { token: token }
                })

                const newCartItems = {}
                newCartItems[data.productTypeId] = { ...data }
                const oldCartItems = getstate().cartSlice.cartItems
                console.log(typeof oldCartItems + " old")
                const allCartItems = [{ ...oldCartItems }, newCartItems]

                dispatch(setCartItem(allCartItems))
                setQuantity(data.quantity)

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


// to increase qunatity on any specific product 
export const increaseQuantityAction = (cartData, setQuantity) => {

}


// to decrease quantity on any specific product

export const decreaseQuantityAction = (cartData, setQuantity) => {

}