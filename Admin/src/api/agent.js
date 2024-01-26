const PORT = 4000

const agent = {
    ADD_CATEGORY: `http://localhost:${PORT}/admin/addcategory`,
    GET_ALL_CATEGORIES: `http://localhost:${PORT}/admin/getallcategories`,
}




export const { ADD_CATEGORY, GET_ALL_CATEGORIES } = agent