// backend server port 
const PORT = 4000

// add admin apis
const agent = {
    ADD_CATEGORY: `http://localhost:${PORT}/admin/addcategory`,
    GET_ALL_CATEGORIES: `http://localhost:${PORT}/admin/getallcategories`,
    GET_ALL_SUBCATEGORIES: `http://localhost:${PORT}/admin/getallsubcategories`,
    GET_ALL_PRODUCTS: `http://localhost:${PORT}/admin/getallproducts`,
    ADD_SUBCATEGORY: `http://localhost:${PORT}/admin/addsubcategory`,
    ADD_PRODUCT: `http://localhost:${PORT}/admin/addproduct`
}




//exports 
export const {
    ADD_CATEGORY,
    GET_ALL_CATEGORIES,
    GET_ALL_SUBCATEGORIES,
    ADD_SUBCATEGORY,
    ADD_PRODUCT,
    GET_ALL_PRODUCTS
} = agent