const MainCategories = require('../../models/mainCategories')
const SubCategories = require('../../models/subCategories')
const categoryController = {

    // to add main category 
    addCategory: async (req, res) => {

        const { name, imageUrl } = req.body
        try {
            const dbRes = await MainCategories.create({ name, imageUrl })
            const data = { message: "Category added", name, imageUrl, id: dbRes.id }

            res.status(200).send(data)

        } catch (error) {
            res.status(400).send({ message: 'Something went wrong' })
        }


    },

    // get all categories
    getAllCategories: async (req, res) => {
        try {
            const dbRes = await MainCategories.findAll()
            res.send(dbRes)

        } catch (error) {
            res.status(400).send({ message: 'Something went wrong' })
        }
    },



    // for adding a subcategory
    addSubCategory: async (req, res) => {
        const { name, imageUrl, categoryId } = req.body
        try {
            const dbRes = await SubCategories.create({ name, imageUrl, mainCategoryId: categoryId })
            const addedSubCategory = {
                name,
                imageUrl,
                id: dbRes.id,
                mainCategoryId: categoryId
            }
            res.send(addedSubCategory)

        } catch (error) {
            res.status(400).send({ message: "Something went wrong !" })
        }

    },

    // for getting all the subcategories 
    getAllSubCategories: async (req, res) => {
        try {
            const dbRes = await SubCategories.findAll()
            res.send(dbRes)
        } catch (error) {
            res.status(400).send({ message: "Something went wrong !" })
        }
    }




}


module.exports = categoryController