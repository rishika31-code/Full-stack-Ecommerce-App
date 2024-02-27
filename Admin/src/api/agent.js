// backend server port 
const PORT = 4000

// all admin apis
const agent = {
    ADD_CATEGORY: `http://localhost:${PORT}/admin/addcategory`,
    GET_ALL_CATEGORIES: `http://localhost:${PORT}/admin/getallcategories`,
    GET_ALL_SUBCATEGORIES: `http://localhost:${PORT}/admin/getallsubcategories`,
    GET_ALL_PRODUCTS: `http://localhost:${PORT}/admin/getallproducts`,
    ADD_SUBCATEGORY: `http://localhost:${PORT}/admin/addsubcategory`,
    ADD_PRODUCT: `http://localhost:${PORT}/admin/addproduct`,
    ADD_PRODUCT_TYPE: `http://localhost:${PORT}/admin/addproducttype`,
    GET_PRODUCT_TYPES: `http://localhost:${PORT}/admin/getallproducttypes`,
    CREATE_OFFER: `http://localhost:${PORT}/admin/offer/createoffer`,
    GET_CREATED_OFFERS: `http://localhost:${PORT}/admin/offer/getcreatedoffers`,
    GET_ALL_USERS: `http://localhost:${PORT}/admin/user/getusers`,
}

//exports 
export const {
    ADD_CATEGORY,
    GET_ALL_CATEGORIES,
    GET_ALL_SUBCATEGORIES,
    ADD_SUBCATEGORY,
    ADD_PRODUCT,
    GET_ALL_PRODUCTS,
    ADD_PRODUCT_TYPE,
    GET_PRODUCT_TYPES,
    CREATE_OFFER,
    GET_CREATED_OFFERS
} = agent