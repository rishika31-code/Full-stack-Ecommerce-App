import { ADD_CATEGORY, GET_ALL_CATEGORIES } from "../../api/agent"
import { addcategory, makeLoaderTrue, makeLoaderFalse } from "../reducers/categorySlice"
import axios from "axios"


export const addCategoryAction = (categoryVal) => {
    return async (dispatch, getState) => {
        try {

            const { data } = await axios.post(ADD_CATEGORY, categoryVal)
            const oldCategories = getState().categorySlice.categories
            console.log(oldCategories)

            const categoryAdded = {
                name: data.name,
                imageUrl: data.imageUrl,
                id: data.id
            }
            const newCategory = [...oldCategories, categoryAdded]
            dispatch(addcategory(newCategory))

        } catch (err) {
            console.log(err)
        }
    }
}


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