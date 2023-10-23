// import React from 'react'
import { NavLink } from "react-router-dom";
import CartItem from "../Components/cart/CartItem";
import { useCartContext } from "../context/cartContext";
import styled from "styled-components";
import { Button } from "../styles/Button";
import PriceFormator from "../helpers/PriceFormator";
const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();

  return cart && cart.length == 0 ? (
    <EmptyCart className="mt-100">
      <img
        src="https://i.imgur.com/dCdflKN.png"
        width="130"
        height="130"
        className="ml-1"
      />
      <div>
        <h3>No Products in Cart🚀</h3>
        <NavLink to="/products">
          <Button className="btn-cart">Continue Shopping</Button>
        </NavLink>
      </div>
    </EmptyCart>
  ) : (
    cart && (
      <Wrapper>
        <div className="container ">
          <div className="cart_heading grid grid-five-column">
            <p>Item</p>
            <p className="cart-hide">Price</p>
            <p>Quantity</p>
            <p className="cart-hide">Subtotal</p>
            <p>Remove</p>
          </div>
          <hr />
          <div className="cart-item">
            {cart.map((curElem) => {
              return <CartItem key={curElem.id} {...curElem} />;
            })}
          </div>
          <hr />
          <div className="cart-two-button">
            <NavLink to="/products">
              <Button>Continue Shopping</Button>
            </NavLink>
            <Button className="btn btn-clear" onClick={() => clearCart()}>
              Clear Cart
            </Button>
          </div>

          <div className="order-total--amount">
            <div className="order-total--subdata">
              <div>
                <p>SubTotal:</p>
                <p>
                  <PriceFormator price={total_price} />
                </p>
              </div>
              <div>
                <p>Shipping Fee:</p>
                <p>
                  <PriceFormator price={shipping_fee} />
                </p>
              </div>
              <hr />
              <div>
                <p>Order Total:</p>
                <p>
                  <PriceFormator price={shipping_fee + total_price} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  );
};
const EmptyCart = styled.div`
  display: grid;
  place-items: center;
  height: 42vh;
  margin: 50px 0px;

  h3 {
    margin-top: 10px;

    font-size: 3.5rem;
    text-transform: capitalize;
    font-weight: 200;
  }

  .btn-cart {
    padding: 1rem 8rem;
    width: 100%;
    margin-top: 10px;
    border-radius: 10px;
    font-size: 1.5rem;
  }
  .ml-1 {
    margin-left: -1px;
  }
  .mt-100 {
    margin-top: 100px;
  }
`;
const Wrapper = styled.section`
  padding: 6rem 0rem;
  .container {
    max-width: 65vw;
    margin: auto;
  }
  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 0.8rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default Cart;
