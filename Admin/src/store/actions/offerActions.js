import axios from "axios"
import { CREATE_OFFER } from "../../api/agent"

export const createOfferAction = (createdOffer) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.post(CREATE_OFFER, createdOffer)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
}