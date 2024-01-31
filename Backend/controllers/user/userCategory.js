const Products = require('../../models/products')
const MainCategories = require('../../models/mainCategories')
const ProductType = require('../../models/productType')
const SubCategories = require('../../models/subCategories')

const userCategory = {
    getCategories: async (req, res) => {
        try {
            const dbRes = await MainCategories.findAll({
                include: [{ model: Products, include: [{ model: ProductType }] }]
            })

            // parsing the images in product array  
            const categories = dbRes.map((category) => {
                category.products.forEach(product => {
                    product.imageUrls = JSON.parse(product.imageUrls);
                });
                return category;
            });

            res.send(categories)

        } catch (error) {
            res.status(500).send({ message: 'Some error occured' })
        }
    },

    getCategoryByid: async (req, res) => {
        const { id } = req.query
        try {
            const dbRes = await SubCategories.findAll({
                where: { mainCategoryId: id },
                include: [{ model: Products }]
            })
            res.send(dbRes)

        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'Some error occured' })
        }
    }



}


module.exports = userCategory