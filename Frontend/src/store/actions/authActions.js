import axios from "axios"
import { LOGIN_USER, SIGNUP_USER, VERIFY_USER } from "../../api/agent"
import toast from "react-hot-toast"
import { setUserDetails, closeAuthModal, setUserLoggedIn } from "../reducers/authSlice"
import { setCartItem } from "../reducers/cartSlice"

export const signUpAction = (userData, setBtnLoader) => {
    return async (dispatch, getState) => {
        try {
            setBtnLoader(true)
            const { data } = await axios.post(SIGNUP_USER, userData)

            // getting the user details form data 
            const userDetails = {
                name: data.name,
                email: data.email
            }

            // storing the user details in the store 
            dispatch(setUserDetails(userDetails))
            dispatch(closeAuthModal())
            dispatch(setUserLoggedIn())

            localStorage.setItem('token', data.token)
            toast.success("Account Created !")

        } catch (err) {
            toast.error(err.response.data.message)
        }
        setBtnLoader(false)

    }
}


// login action
export const logInAction = (userData, setBtnLoader) => {
    return async (dispatch, getState) => {
        try {
            setBtnLoader(true)
            const { data } = await axios.post(LOGIN_USER, userData)

            // getting the user details form data 
            const userDetails = {
                name: data.name,
                email: data.email
            }
            // storing the user details in the store 
            dispatch(setUserDetails(userDetails))

            // reforming the cart items storing the producttypeId as a key
            const cartItems = {}
            data.cart.forEach(element => {
                cartItems[element.productTypeId] = { ...element }
            });

            dispatch(setCartItem(cartItems))
            dispatch(closeAuthModal())
            dispatch(setUserLoggedIn())

            localStorage.setItem('token', data.token)
            toast.success("Succesfully LoggedIn !")


        } catch (err) {
            toast.error(err.response.data.message)
        }

        setBtnLoader(false)
    }
}


// verify user on page refreh 
export const verifyUserAction = (token, setLoader) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.post(VERIFY_USER, { token })

            // getting the user details form data 
            const userDetails = {
                name: data.name,
                email: data.email
            }
            // storing the user details in the store 
            dispatch(setUserDetails(userDetails))

            // reforming the cart items storing the producttypeId as a key
            const cartItems = {}
            data.cart.forEach(element => {
                cartItems[element.productTypeId] = { ...element }
            });

            dispatch(setCartItem(cartItems))
            dispatch(setUserLoggedIn())
            setLoader(false)
        } catch (error) {
            console.log(error)
            toast.error("LogIn Again !")
            setLoader(false)
        }
    }
}

