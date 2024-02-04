export const PORT = 4000


// all api
const apiEndPoints = {
    GET_CATEGORIES: `http://localhost:${PORT}/user/getcategories`,
    SIGNUP_USER: `http://localhost:${PORT}/user/signup`,
    LOGIN_USER: `http://localhost:${PORT}/user/login`,
    VERIFY_USER: `http://localhost:${PORT}/user/verifyuser`,
}



//exports
export const {
    GET_CATEGORIES,
    SIGNUP_USER,
    LOGIN_USER,
    VERIFY_USER
} = apiEndPoints