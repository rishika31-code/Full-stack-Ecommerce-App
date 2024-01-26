import toast from "react-hot-toast"
import { ADD_CATEGORY, GET_ALL_CATEGORIES, ADD_SUBCATEGORY, GET_ALL_SUBCATEGORIES } from "../../api/agent"
import { addcategory, makeLoaderTrue, makeLoaderFalse, addSubCategory } from "../reducers/categorySlice"
import axios from "axios"

// to add a main category 
export const addCategoryAction = (categoryVal) => {
    return async (dispatch, getState) => {
        try {

            const { data } = await axios.post(ADD_CATEGORY, categoryVal)
            const { categories } = getState().categorySlice

            const categoryAdded = {
                name: data.name,
                imageUrl: data.imageUrl,
                id: data.id
            }


            const newCategory = [...categories, categoryAdded]
            dispatch(addcategory(newCategory))
            toast.success("Added !")
        } catch (err) {
            console.log(err)
        }
    }
}

// for getting all the main categories 
export const getAllCategoriesAction = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(GET_ALL_CATEGORIES)
            dispatch(addcategory(data))

        } catch (err) {
            console.log(err)
        }
    }
}


// for add a subcategory under the maincatgeory 
export const addSubCategoryAction = (subCategoryVal) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.post(ADD_SUBCATEGORY, subCategoryVal)
            const { subCategories } = getState().categorySlice
            // Added sub categroy 
            const addedSubcategory = {
                name: data.name,
                imageUrl: data.imageUrl,
                id: data.id,
                mainCategoryId: data.mainCategoryId,
            }

            const newSubCategory = [...subCategories, addedSubcategory]
            dispatch(addSubCategory(newSubCategory))
            toast.success('Added ! ')

        } catch (error) {
            console.log(error)
        }
    }
}


// for getting all the subcategories 

export const getAllSubcategoriesAction = () => {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.get(GET_ALL_SUBCATEGORIES)
            dispatch(addSubCategory(data))
        } catch (error) {
            console.log(error)
        }
    }
}