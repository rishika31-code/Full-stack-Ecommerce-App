export const PORT = 4000


// all api
const apiEndPoints = {
    GET_CATEGORIES: `http://localhost:${PORT}/user/getcategories`,
    SIGNUP_USER: `http://localhost:${PORT}/user/signup`,
    LOGIN_USER: `http://localhost:${PORT}/user/login`,
    VERIFY_USER: `http://localhost:${PORT}/user/verifyuser`,
    ADD_TO_CART: `http://localhost:${PORT}/user/addtocart`,
    INCREASE_CART_QUANTITIY: `http://localhost:${PORT}/user/increasequantity`,
    DECREASE_CART_QUANTITIY: `http://localhost:${PORT}/user/decreasequantity`,
    GET_CART: `http://localhost:${PORT}/user/getcart`

}



//exports
export const {
    GET_CATEGORIES,
    SIGNUP_USER,
    LOGIN_USER,
    VERIFY_USER,
    ADD_TO_CART,
    INCREASE_CART_QUANTITIY,
    DECREASE_CART_QUANTITIY,
    GET_CART
} = apiEndPoints