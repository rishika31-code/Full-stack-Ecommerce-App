const Products = require('../../models/products')
const ProductType = require('../../models/productType')
const MainCategories = require('../../models/mainCategories')

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
    }
}


module.exports = product