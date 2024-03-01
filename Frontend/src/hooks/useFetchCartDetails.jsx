import { useDispatch } from "react-redux";
import { GET_CART } from "../api/agent";
import { useEffect } from "react";
import { getAddreesesAction } from "../store/actions/addressAction";
import { getOffersAction } from "../store/actions/offersActionS";
import axios from "axios";

const useFetchCartDetails = (
  cartItems,
  setLoader,
  setCart,
  setCartData,
  setAppliedOffer
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        await Promise.all([
          dispatch(getAddreesesAction()),
          dispatch(getOffersAction()),
        ]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // another useffect for update total item & price & fetch cart

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      (async () => {
        const { data } = await axios.get(GET_CART, {
          headers: { token: token },
        });
        setCart(data);
      })();

      setCartData(() => {
        let totalItems = 0;
        let price = 0;

        for (let i in cartItems) {
          price += cartItems[i].productType.price * cartItems[i].quantity;
          totalItems += cartItems[i].quantity;
        }
        setAppliedOffer(null);
        setLoader(false);
        return { totalItems: totalItems, totalPrice: price };
      });
    } else {
      toast.error("LogIn Again !");
    }
  }, [cartItems]);
};

export default useFetchCartDetails;
