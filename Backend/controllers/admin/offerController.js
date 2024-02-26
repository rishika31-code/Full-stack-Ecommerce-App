const { createOfferService } = require("../../services/offerServices")



const offerController = {
    createOffer: async (req, res) => {
        console.log(req.body)
        const { offerName, minimumValue, discount } = req.body
        try {
            if (offerName && minimumValue && discount) {
                const dbRes = await createOfferService(offerName, minimumValue, discount)
                return res.send(dbRes)
            }
            else {
                res.status(500).send({ message: "some fields are blank" })
            }
        } catch (error) {
            res.status(500).send({ message: "error while creating offer", error })
        }
    }


}


module.exports = offerController