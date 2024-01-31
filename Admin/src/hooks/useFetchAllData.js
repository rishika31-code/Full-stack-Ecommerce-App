import {
  getAllCategoriesAction,
  getAllSubcategoriesAction,
} from "../store/actions/categoryActions";

import { useDispatch } from "react-redux";
import {
  getAllProductTypes,
  getAllProductsAction,
} from "../store/actions/productActions";
import { useEffect } from "react";


const useFetchAllData = () => {
  const dispatch = useDispatch();

  // useffect for fetching all categories
  useEffect(() => {
    
    dispatch(getAllCategoriesAction());
    dispatch(getAllSubcategoriesAction());
    dispatch(getAllProductsAction());
    dispatch(getAllProductTypes());
  }, []);


}

export default useFetchAllData