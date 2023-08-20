/* eslint-disable react/prop-types */
// import React from 'react'
import styled from "styled-components";
import { FaMinus, FaPlus } from "react-icons/fa";
const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <Wrapper className="cart-button">
      <div className="amount-toggle">
        <button
          onClick={() => {
            setDecrease();
          }}
        >
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button
          onClick={() => {
            setIncrease();
          }}
        >
          <FaPlus />
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
.amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.2rem;
      color: ${({ theme }) => theme.colors.btn};
    }
`;

export default CartAmountToggle;
