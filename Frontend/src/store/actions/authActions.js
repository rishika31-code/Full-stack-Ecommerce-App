import axios from "axios"
import { LOGIN_USER, SIGNUP_USER, VERIFY_USER } from "../../api/agent"
import toast from "react-hot-toast"
import { setUserDetails, closeAuthModal, setUserLoggedIn } from "../reducers/authSlice"

export const signUpAction = (userData) => {
    return async (dispatch, getState) => {
        try {
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

    }
}


// login action
export const logInAction = (userData) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.post(LOGIN_USER, userData)

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
            toast.success("Succesfully LoggedIn !")


        } catch (err) {
            toast.error(err.response.data.message)
        }
    }
}


// verify user on page refreh 
export const verifyUserAction = (token) => {
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
            dispatch(setUserLoggedIn())

        } catch (error) {
            console.log(error)
            toast.error("LogIn Again !")
        }
    }
}

