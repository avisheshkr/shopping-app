import { useReducer, useState } from "react";
import { CartContext } from "./CartContext";
import { data } from "../data";
import { cartReducer } from "../reducers/cartReducer";

const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: data,
    isChecked: false,
    isFastChecked: false,
    cartProducts: [],
    openCartBar: false,
    input: "",
    totalAmount: 0,
  });

  const [isCartPage, setIsCartPage] = useState(false);

  const showCartbar = () => {
    dispatch({
      type: "SHOW_CARTBAR",
    });
  };

  const sortByAsc = () => {
    dispatch({
      type: "SORT_ASC",
    });
  };

  const sortByDesc = () => {
    dispatch({
      type: "SORT_DESC",
    });
  };

  const includeOutofstock = () => {
    dispatch({
      type: "INCLUDE_OUTOFSTOCK",
    });
  };

  const showFastDelivery = () => {
    dispatch({
      type: "FAST_DELIVERY",
    });
  };

  const clearFilters = () => {
    dispatch({
      type: "CLEAR_FILTERS",
    });
  };

  const addCart = (data) => {
    dispatch({
      type: "ADD_CART",
      payload: data,
    });
  };

  const deleteCart = (data) => {
    dispatch({
      type: "DELETE_SELECTED_CART",
      payload: data,
    });
  };

  const handleChange = (data) => {
    dispatch({ type: "INPUT_CHANGE", payload: data });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        showCartbar,
        sortByAsc,
        sortByDesc,
        includeOutofstock,
        showFastDelivery,
        clearFilters,
        addCart,
        deleteCart,
        handleChange,
        isCartPage,
        setIsCartPage,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
