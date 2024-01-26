const MainCategories = require('../../models/admin/mainCategories')
const SubCategories = require('../../models/admin/subCategories')
const categoryControllers = {

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

    // to add different subcategory
    addSubCategory: async (req, res) => {
        const { subcategoryName, subcategoryUnit, price, category } = req.body
        if (subcategoryName, subcategoryUnit, price, category) {
            try {
                const dbRes = await SubCategories.create({ subcategoryName, subcategoryUnit, price, category })
                console.log(dbRes)

            } catch (error) {
                res.status(400).send({ message: "Something went wrong !" })
            }
        }
    }




}


module.exports = categoryControllers