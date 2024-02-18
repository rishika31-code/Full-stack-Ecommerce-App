import toast from "react-hot-toast"
import axios, { Axios } from "axios"
import { ADD_TO_CART, DECREASE_CART_QUANTITIY, INCREASE_CART_QUANTITIY } from "../../api/agent"
import { setCartItem } from "../reducers/cartSlice"



// add to cart action 
export const addToCartAction = (cartData, setQuantity) => {
    return async (dispatch, getState) => {
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const { data } = await axios.post(ADD_TO_CART, cartData, {
                    headers: { token: token }
                })

                const newCartItems = {}
                newCartItems[data.productTypeId] = { ...data }
                const oldCartItems = getState().cartSlice.cartItems
                const allCartItems = { ...oldCartItems, ...newCartItems }
                dispatch(setCartItem(allCartItems))
                console.log(allCartItems)

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
    const { productTypeId } = cartData
    return async (dispatch, getState) => {
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const { data } = await axios.post(INCREASE_CART_QUANTITIY, cartData, {
                    headers: { token: token }
                })
                if (data) {
                    const oldCartItems = getState().cartSlice.cartItems
                    const clone = structuredClone(oldCartItems)
                    clone[productTypeId].quantity = data.quantity
                    dispatch(setCartItem(clone))
                }
            } catch (err) {
                console.log(err)
            }
        }
        else {
            toast.error("LogIn Again ! ")
        }


    }

}


// to decrease quantity on any specific product
export const decreaseQuantityAction = (cartData, setQuantity) => {
    const { productTypeId } = cartData
    return async (dispatch, getState) => {
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const { data } = await axios.post(DECREASE_CART_QUANTITIY, cartData, {
                    headers: { token: token }
                })
                const oldCartItems = getState().cartSlice.cartItems
                if (data.quantity >= 1) {
                    const clone = structuredClone(oldCartItems)
                    clone[productTypeId].quantity = data.quantity

                    dispatch(setCartItem(clone))
                }
                else {
                    const clone = { ...oldCartItems };
                    delete clone[productTypeId];
                    dispatch(setCartItem(clone));
                }

            } catch (err) {
                console.log(err)
                toast.error("error")
            }
        }
        else {
            toast.error("LogIn Again ! ")
        }


    }
}