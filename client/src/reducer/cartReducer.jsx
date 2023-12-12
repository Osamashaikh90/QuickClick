// import React from 'react'

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // console.log(id, color, amount, product);
    state = state || { cart: [] };

    let existingProduct = state.cart
      ? state.cart.find((curPro) => curPro.id === action.payload._id + color)
      : null;

    if (existingProduct) {
      let updateProduct = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newQuantity = curElem.amount + amount;
          if (newQuantity >= curElem.max) {
            newQuantity = curElem.max;
          }
          return {
            ...curElem,
            amount: newQuantity,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updateProduct,
      };
    } else {
      let cartProduct;
      cartProduct = {
        id: id + color,
        name: product.name,
        color: color,
        amount: amount,
        image: product.image[0],
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "REMOVE_PRODUCT") {
    let updateCart = state.cart.filter(
      (curElem) => curElem.id !== action.payload
    );
    return {
      ...state,
      cart: updateCart,
    };
  }
  //clear cart
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;
        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    //always return after map
    return { ...state, cart: updatedProduct };
  }
  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;
        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }
        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  /*if (action.type === "CART_ITEM_VALUE") {
    let updatedItemValue = state.cart.reduce((initialValue, curElem) => {
      let { amount } = curElem;
      initialValue = initialValue + amount;
      return initialValue;
    }, 0);
    return {
      ...state,
      total_item: updatedItemValue,
    };
  }
  if (action.type === "CART_TOTAL_ITEM_PRICE") {
    let total_price = state.cart.reduce((initialValue, curElem) => {
      let { price, amount } = curElem;

      initialValue = initialValue + price * amount;
      return initialValue;
    }, 0);
    return {
      ...state,
      total_price: total_price,
    };
  }*/
  //Combining both the anouve reducer in one
  if (action.type === "CART_ITEM_VALUE") {
    let updatedItemValue = state.cart.reduce((initialValue, curElem) => {
      let { amount } = curElem;
      initialValue = initialValue + amount;
      return initialValue;
    }, 0);

    return {
      ...state,
      total_item: updatedItemValue,
    };
  } else if (action.type === "CART_TOTAL_ITEM_PRICE") {
    let total_price = state.cart.reduce((initialValue, curElem) => {
      let { price, amount } = curElem;
      initialValue = initialValue + price * amount;
      return initialValue;
    }, 0);

    return {
      ...state,
      total_price: total_price,
    };
  }

  // if (action.type === "CART_ITEM_PRICE_TOTAL") {
  //   let { total_item, total_price } = state.cart.reduce(
  //     (accum, curElem) => {
  //       let { price, amount } = curElem;

  //       accum.total_item += amount;
  //       accum.total_price += price * amount;

  //       return accum;
  //     },
  //     {
  //       total_item: 0,
  //       total_price: 0,
  //     }
  //   );
  //   return {
  //     ...state,
  //     total_item,
  //     total_price,
  //   };
  // }
  else {
    // Handle other action types if necessary
    return state;
  }
};

export default cartReducer;
