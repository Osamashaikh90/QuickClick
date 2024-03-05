/* eslint-disable react/prop-types */
// import React from 'react'
import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Button } from "../../styles/Button";
import CartAmountToggle from "./CartAmountToggle";
import { useCartContext } from "../../context/cartContext";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { _id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  // console.log("AddToCart - Product ID:", _id);
  // console.log("AddToCart - Color:", color);
  // console.log("AddToCart - Amount:", amount);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors:
          {colors &&
            colors.map((curCol, index) => {
              return (
                <button
                  style={{ background: curCol }}
                  key={index}
                  className={color === curCol ? "btnStyle active" : "btnStyle "}
                  onClick={() => {
                    setColor(curCol);
                  }}
                >
                  {color === curCol ? <FaCheck className="checkStyle" /> : null}
                </button>
              );
            })}
          hola
        </p>
      </div>
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <NavLink
        to="/cart"
        onClick={() => addToCart(_id, color, amount, product)}
      >
        <Button>Add To Cart</Button>
      </NavLink>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    height: 2.5rem;
    width: 2.5rem;
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  }
`;
export default AddToCart;
