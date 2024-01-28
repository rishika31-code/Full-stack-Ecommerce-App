const Product = require('../../models/admin/products')
const MainCategories = require('../../models/admin/mainCategories')
const SubCategories = require('../../models/admin/subCategories')


// for add a new product 
const productController = {
    addProduct: async (req, res) => {
        const { name, imageUrls, mainCategoryId, subCategoryId, description } = req.body
        try {
            const jsonImages = JSON.stringify(imageUrls)
            const dbRes = await Product.create({
                name,
                imageUrls: jsonImages,
                description,
                mainCategoryId,
                subCategoryId
            })

            res.send({ id: dbRes.id, message: "Success" })

        } catch (error) {
            res.status(500).send({ message: 'Some error occured' })
        }

    },


    // for fetching all the products 
    getAllProduct: async (req, res) => {
        try {
            const dbRes = await Product.findAll({
                include: [
                    { model: MainCategories },
                    { model: SubCategories }
                ]
            })

            res.send(dbRes)
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = productController