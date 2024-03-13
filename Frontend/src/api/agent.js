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
    GET_CART: `http://localhost:${PORT}/user/getcart`,
    ADD_ADDRESS: `http://localhost:${PORT}/user/addaddress`,
    GET_ADDRESSES: `http://localhost:${PORT}/user/getaddresses`,
    GET_OFFERS: `http://localhost:${PORT}/user/getoffers`,
    CREATE_ORDER: `http://localhost:${PORT}/user/order/createorder`,
    ORDER_COMPLETED: `http://localhost:${PORT}/user/order/ordercompleted`,
    ORDER_FAILED: `http://localhost:${PORT}/user/order/orderfailed`,
    GET_ORDERS: `http://localhost:${PORT}/user/order/getorders`,
    GET_ORDER_DETAILS: `http://localhost:${PORT}/user/order/getorderdetails?orderid=`,
    GET_SEARCH_PRODUCTS: `http://localhost:${PORT}/user/search/getproducts?s=`,
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
    GET_CART,
    ADD_ADDRESS,
    GET_ADDRESSES,
    GET_OFFERS,
    CREATE_ORDER,
    ORDER_COMPLETED,
    ORDER_FAILED,
    GET_ORDERS,
    GET_ORDER_DETAILS,
    GET_SEARCH_PRODUCTS
} = apiEndPoints