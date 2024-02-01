const Products = require('../../models/products')
const ProductType = require('../../models/productType')
const MainCategories = require('../../models/mainCategories')
const SubCategories = require('../../models/subCategories')

const product = {
    getProductDetails: async (req, res) => {
        const { id } = req.query
        try {
            const dbRes = await Products.findOne({
                where: { id: id },
                include: [
                    { model: ProductType },
                    { model: MainCategories }
                ]
            })
            dbRes.imageUrls = JSON.parse(dbRes.imageUrls)
            res.send(dbRes)

        } catch (error) {
            res.status(500).send({ message: 'Some error occured' })
        }
    },

    getProductBySubCategory: async (req, res) => {
        let { subid, id } = req.query
        try {
            if (subid == 'all') {
                const dbRes = await Products.findAll({
                    where: { mainCategoryId: id },
                    include: [{ model: ProductType }]

                })

                // parsing the product urls 
                dbRes.forEach((product) => {
                    product.imageUrls = JSON.parse(product.imageUrls)
                })
                res.send(dbRes)
            }
            else {
                const dbRes = await Products.findAll({
                    where: { subCategoryId: subid },
                    include: [{ model: ProductType }]

                })

                // parsing the product urls 
                dbRes.forEach((product) => {
                    product.imageUrls = JSON.parse(product.imageUrls)
                })
                res.send(dbRes)
            }
        } catch (error) {
            res.status(500).send({ message: 'Some error occured' })
        }
    }
}


module.exports = product