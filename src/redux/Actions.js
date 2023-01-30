import {
  FETCH_PRODUCTS,
  FETCH_ERRORS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../redux/actionType";

const fetchProducts = (products) => {
  return {
    type: FETCH_PRODUCTS,
    payload: products,
  };
};

export const addToCart = (products) => {
  return {
    type: ADD_TO_CART,
    payload: products,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: id,
    },
  };
};

const fetchErrors = (err) => {
  return {
    type: FETCH_ERRORS,
    payload: err,
  };
};

export const fetchingData = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`https://dummyjson.com/products`);

      if (!res.ok) {
        throw new Error(`Something went wrong : ${res.status}`);
      }
      const data = await res.json();
      dispatch(fetchProducts(data));
    } catch (error) {
      dispatch(fetchErrors(error));
    }
  };
};
