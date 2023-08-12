import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useCartContext } from "../context/cartContext";
import { Button } from "../styles/Button";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();
  const { total_item } = useCartContext();
  const Nav = styled.nav`
    .btn-login {
      padding: 0.5rem 1.5rem;
      /* width: 100%; */
      border-radius: 6px;
      font-size: 1.2rem;
      font-weight: 500;
      text-transform: uppercase;
    }
    .navbar-lists {
      display: flex;
      gap: 4rem;
      align-items: center;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-icon--link {
      position: relative;

      .cart-icon {
        position: relative;
        font-size: 1.8rem;
      }

      .cart-total--item {
        width: 1.6rem;
        height: 1.6rem;
        font-size: 1rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }

    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 3rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 3rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
        top: 30%;
        right: 4%;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;

        .navbar-link {
          font-size: 3rem;
        }
      }
      .cart-icon--link {
        position: relative;

        .cart-icon {
          position: relative;
          font-size: 4rem;
        }

        .cart-total--item {
          width: 4rem;
          height: 4rem;
          font-size: 2rem;
        }
      }

      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;
  return (
    <>
      <Nav>
        <div className={menuIcon ? "navbar active" : "navbar"}>
          <ul className="navbar-lists">
            <li>
              <NavLink
                to="/"
                className="navbar-link home-link"
                onClick={() => setMenuIcon(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="navbar-link home-link"
                onClick={() => setMenuIcon(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="navbar-link home-link"
                onClick={() => setMenuIcon(false)}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="navbar-link home-link"
                onClick={() => setMenuIcon(false)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="navbar-link home-link"
                onClick={() => setMenuIcon(false)}
              >
                <Button className="btn-login">Log In</Button>
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/Login"
                className="navbar-link home-link"
                onClick={() => setMenuIcon(false)}
              >
                <Button>Log Out</Button>
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/cart"
                className="navbar-link  cart-icon--link "
                onClick={() => setMenuIcon(false)}
              >
                <FiShoppingCart className="cart-icon" />
                <span className="cart-total--item">{total_item}</span>
              </NavLink>
            </li>
          </ul>
          <div className="mobile-navbar-btn">
            {/* If we dont pass anonymous function it will render again and again */}
            <GiHamburgerMenu
              name="menu-outline"
              className="mobile-nav-icon"
              onClick={() => setMenuIcon(true)}
            />
            <AiOutlineClose
              name="close-outline"
              className="mobile-nav-icon close-outline"
              onClick={() => setMenuIcon(false)}
            />
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Nav;
