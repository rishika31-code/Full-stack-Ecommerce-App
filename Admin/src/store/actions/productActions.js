import toast from "react-hot-toast";
import { ADD_PRODUCT, GET_ALL_PRODUCTS } from "../../api/agent";
import { addProduct } from "../reducers/productSlice";
import axios from "axios";

// action for adding a new product
export const addProductAction = (productValues) => {
    return async (dispatch, getState) => {
        try {

            const { data } = await axios.post(ADD_PRODUCT, productValues)

            // finding maincategory & subcategory for this product 
            const { categories, subCategories } = getState().categorySlice
            const findedCategory = categories.find((category) => {
                return Number(category.id) === Number(productValues.mainCategoryId)
            })
            const findedSubCategory = subCategories.find((subCategory) => {
                return Number(subCategory.id) === Number(productValues.subCategoryId)
            })

            // product that added in the db
            const addedProduct = {
                name: productValues.name,
                id: data.id,
                imageUrls: productValues.imageUrls,
                mainCategoryId: productValues.mainCategoryId,
                mainCategoryName: findedCategory.name,
                subCategoryId: productValues.subCategoryId,
                subCategoryName: findedSubCategory.name,
            }

            const { products } = getState().productSlice
            const newProducts = [...products, addedProduct]

            // dispatching action 
            dispatch(addProduct(newProducts))
            toast.success("Product Added ! \n Now add diffrent types for this product ")

        } catch (error) {
            console.log(error)
        }
    }
}


export const getAllProductsAction = () => {
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
                console.log(allProducts)
                dispatch(addProduct(allProducts))
            }



        } catch (error) {
            console.log(error);
        }
    }
}