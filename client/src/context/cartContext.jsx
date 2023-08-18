/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";
const CartContext = createContext();
const getLocalCartData = () => {
  let newCardData = localStorage.getItem("QuickClickCart");
  if (newCardData == []) {
    return [];
  } else {
    return JSON.parse(newCardData);
  }
};
const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 4000,
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };
  const removeProduct = (id) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: id });
  };
  //clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  //to add data in localstorage
  //localstorage pass the value in string but our cart data is in array format
  useEffect(() => {
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    localStorage.setItem("QuickClickCart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeProduct,
        clearCart,
        setIncrease,
        setDecrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

//*Global Context
const useCartContext = () => {
  return useContext(CartContext);
};
// eslint-disable-next-line react-refresh/only-export-components
export { CartProvider, useCartContext };
