import toast from "react-hot-toast";
import { ADD_PRODUCT, ADD_PRODUCT_TYPE, GET_ALL_PRODUCTS, GET_PRODUCT_TYPES } from "../../api/agent";
import { addProduct, addProductType } from "../reducers/productSlice";
import axios from "axios";


/**
 * 
 * @param {* product value that user want to add } productValues 
 * @param {* show modal function to close the modal } showModal 
 * @returns 
 */

// action for adding a new product
export const addProductAction = (productValues, showModal, setLoader) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.post(ADD_PRODUCT, productValues)

            // product that added in the db
            const addedProduct = {
                name: productValues.name,
                id: data.id,
                imageUrls: productValues.imageUrls,
                mainCategoryId: productValues.mainCategoryId,
                mainCategoryName: productValues.mainCategoryName,
                subCategoryId: productValues.subCategoryId,
                subCategoryName: productValues.subCategoryName,
            }

            const { products } = getState().productSlice
            const newProducts = [...products, addedProduct]

            // dispatching action 
            dispatch(addProduct(newProducts))
            showModal(false)
            toast.success("Product Added ! \n Now add diffrent types for this product ")

        } catch (err) {
            toast.error(err.response.data.message)
        }
        setLoader(false)
    }
}

// for getting all the products 
export const getAllProductsAction = (setError, setLoader) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(GET_ALL_PRODUCTS)
            if (data) {
                const allProducts = data.map((val) => {
                    const newObj = {
                        ...val,
                        imageUrls: JSON.parse(val.imageUrls),
                        mainCategoryId: val.mainCategory.id,
                        mainCategoryName: val.mainCategory.name,
                        subCategoryId: val.subCategory.id,
                        subCategoryName: val.subCategory.name
                    }
                    return newObj
                })
                dispatch(addProduct(allProducts))
                setLoader(false)
            }

        } catch (error) {
            setError(true)
            toast.error(error.response.data.message)
        }
    }
}

// for adding a product type 
export const addProductTypeAction = (typeValues, showModal) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.post(ADD_PRODUCT_TYPE, typeValues)
            const { productTypes } = getState().productSlice
            const newTypes = [...productTypes, data]
            dispatch(addProductType(newTypes))
            showModal(false)
        } catch (error) {
            console.log(error);
        }
    }
}


// get all produt action to get all the product types
export const getAllProductTypes = () => {
    return async (dispatch, getState) => {
        const { data } = await axios.get(GET_PRODUCT_TYPES)
        const allTypes = data.map((values) => {
            const obj = {
                id: values.id,
                type: values.type,
                price: values.price,
                productName: values.product.name,
                productId: values.productId,

            }
            return obj
        })
        dispatch(addProductType(allTypes))
    }
}


