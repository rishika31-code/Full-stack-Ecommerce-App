const Product = require('../../models/admin/products')
const MainCategories = require('../../models/admin/mainCategories')
const SubCategories = require('../../models/admin/subCategories')


const productController = {
    addProduct: async (req, res) => {
        const { productName, imageUrl, category, subcategory } = req.body
        try {
            const dbRes = await Product.create({ productName, imageUrl: JSON.stringify(imageUrl), category, subcategory })
            console.log(dbRes)

        } catch (error) {
            res.status(400).send({ message: "Something went wrong" })
        }

    },

    getAllProduct: async (req, res) => {
        try {
            const dbRes = await Product.findAll({
                include: [
                    { model: MainCategories },
                    { model: SubCategories, }
                ]
            })

            res.send(dbRes)
        } catch (error) {

        }
    }

}

module.exports = productController