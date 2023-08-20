/* eslint-disable react/prop-types */
// import React from 'react'
import PriceFormator from "../../helpers/PriceFormator";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../context/cartContext";
const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeProduct, setIncrease, setDecrease } = useCartContext();
  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      <div className="cart-hide">
        <p>
          <PriceFormator price={price} />
        </p>
      </div>
      <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrease(id)}
      />
      <div className="cart-hide">
        <p>
          <PriceFormator price={price * amount} />
        </p>
      </div>
      <div>
        <FaTrash className="remove_icon" onClick={() => removeProduct(id)} />
      </div>
    </div>
  );
};

export default CartItem;
