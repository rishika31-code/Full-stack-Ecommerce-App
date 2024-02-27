import axios from "axios"
import { CREATE_OFFER, GET_CREATED_OFFERS } from "../../api/agent"
import { addCreatedOffer } from "../reducers/offerSlice"
import toast from "react-hot-toast"

// create offer action for create an offer and store into db
export const createOfferAction = (addedOffer, setLoader, setOffers, showModal) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.post(CREATE_OFFER, addedOffer)
            const { createdOffers } = getState().offerSlice
            const newOffers = [...createdOffers, data]
            dispatch(addCreatedOffer(newOffers))
            toast.success("Offer Created")
            setOffers(null)
            showModal(false)
        } catch (error) {
            console.log(error)
        }
        setLoader(false)
    }
}

// get created offers action to fecth all created offers from db
export const getAllCreatedOffers = () => {
    return async (dispatch, getState) => {
        const { data } = await axios.get(GET_CREATED_OFFERS)
        if (data) {
            dispatch(addCreatedOffer(data))
        }
    }
}

