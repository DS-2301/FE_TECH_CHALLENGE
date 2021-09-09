import { getCart, addItem, removeItem, calculateSum } from "../cart";
import { getProducts, setFetchingStatus } from "../products";
import axios from "axios";

export const fetchData = () => async (dispatch) => {
  dispatch(setFetchingStatus(true));
  try {
    const { data } = await axios.get(
      "https://main-api.fulhaus.com/fulhaus-tech-test/get-products"
    );
    dispatch(getCart());
    dispatch(getProducts(data));
  } catch (error) {
  } finally {
    dispatch(setFetchingStatus(false));
  }
};
