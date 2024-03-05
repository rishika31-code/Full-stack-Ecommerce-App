import axios from "axios";
import React, { useEffect } from "react";
import { GET_ORDER_DETAILS } from "../api/agent";

const useGetOrderDetails = (orderId, setLoader, setError, setFindedOrder) => {
  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("user not found");
        }
        const { data } = await axios.get(`${GET_ORDER_DETAILS}${orderId}`, {
          headers: { token },
        });
        setFindedOrder(data);
        setLoader(false);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);
};

export default useGetOrderDetails;
