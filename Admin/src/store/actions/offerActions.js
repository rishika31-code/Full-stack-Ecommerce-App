import axios from "axios"
import { CREATE_OFFER, GET_CREATED_OFFERS, GET_GIVEN_OFFERS, GIVE_OFFER } from "../../api/agent"
import { addCreatedOffer, addGivenOffer } from "../reducers/offerSlice"
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

// get all created offers action to fecth all created offers
export const getAllCreatedOffersAction = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(GET_CREATED_OFFERS)
            if (data) {
                dispatch(addCreatedOffer(data))
            }
            else {
                toast.error("error while fetching created offers")
            }

        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

// get all gievn offers action to fecth all given offers
export const getAllGivenOffersAction = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(GET_GIVEN_OFFERS)
            if (data) {
                dispatch(addGivenOffer(data))
            }
            else {
                toast.error("error while fetching given offers")
            }

        } catch (error) {
            console.log(error)
            throw error
        }

    }
}

// give offer action to give offer to a user 
export const giveOfferAction = (offerDetails, setBtnLoader, showModal) => {
    return async (dispatch, getState) => {
        try {

            const { data } = await axios.post(GIVE_OFFER, offerDetails)
            const { givenOffers } = getState().offerSlice
            const newOffers = [...givenOffers, data]
            dispatch(addGivenOffer(newOffers))
            setBtnLoader(false)
            showModal(false)

        } catch (error) {
            console.log(error)
        }
    }
}