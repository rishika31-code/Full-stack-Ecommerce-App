const PORT = 4000

const agent = {
    ADD_CATEGORY: `http://localhost:${PORT}/admin/addcategory`,
    GET_ALL_CATEGORIES: `http://localhost:${PORT}/admin/getallcategories`,
    GET_ALL_SUBCATEGORIES: `http://localhost:${PORT}/admin/getallsubcategories`,
    ADD_SUBCATEGORY: `http://localhost:${PORT}/admin/addsubcategory`,
}




export const { ADD_CATEGORY, GET_ALL_CATEGORIES, GET_ALL_SUBCATEGORIES, ADD_SUBCATEGORY } = agent