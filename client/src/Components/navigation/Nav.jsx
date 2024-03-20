import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useCartContext } from "../../context/cartContext";
import { Button } from "../../styles/Button";
import { useNavigate } from "react-router-dom";
// import { useAuthContext } from "../../context/authContext";
import useFetch from "../../hooks/useFetch";
import { PiSignOut } from "react-icons/pi";
import { RiAccountCircleLine } from "react-icons/ri";


const Nav = () => {
  const [profileCard,setProfileCard] = useState(false);
  const [menuIcon, setMenuIcon] = useState();
  const navigate = useNavigate();
  // const {username} = useAuthContext();
  
  const [{ apiData }] = useFetch();

  const { cart } = useCartContext();
  const token = !!localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleProfile = ()=>{
    setProfileCard(!profileCard);
  }
  const Nav = styled.nav`
    .profile {
    position: relative;
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
      cursor: pointer;
    }

    .profile-img {
      height: 30px;
      width: 30px;
      border-radius: 999999px;
      border: 1px solid;
      border-color: ${({ theme }) => theme.colors.helper};
    }
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

    .cardContainer {
      display: flex;
      position: absolute;
      z-index: 10;
      top: 4rem;
      margin-top: 0.5rem;
      flex-direction: column;
      /* border-radius: 0.25rem; */
      /* border: 1px solid #31363c; */
      width: 15rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      box-shadow: 5px 20px 25px -2px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.3); 
      color: #161b21 ;
      background: #ffffff;

      .card {
        display: flex;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        flex-direction: column;
        gap: 1rem;
        justify-content: space-between;
        align-items: start;

        .card-btn{
          display: flex;
          align-items: center;
          gap:12px;
        padding-top: 0.25rem;
padding-bottom: 0.25rem; 
border: none;
width: 100%;
background-color: none;
cursor: pointer; 
:hover {
border-radius: 3px;
 background: #21262dc5;
 }
}
 .log-btn{
display: flex;
align-items: center;
gap: 12px;
padding-top: 0.25rem;
padding-bottom: 0.25rem; 
border: none;
width: 100%;
background-color: none;
cursor: pointer; 
color: ${({ theme }) => theme.colors.helper};
:hover {
border-radius: 3px;
 background: #21262dc5;
 }
}
       
      }
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
            {token ? (
              <li className="profile" onClick={handleProfile}>
              <span style={{fontSize:"14px",textTransform:"capitalize"}}>Hi {apiData?.firstname ||apiData?.username}</span>
                <img
                  src={apiData?.profile}
                  alt="user"
                  className="profile-img"
                />
                {profileCard && <div className="cardContainer">
                  <div className="card">
                  <NavLink to="/profile" style={{width:"100%"}}>
                  <button className="card-btn" >
                  <RiAccountCircleLine/> Profile
                  </button>
                  </NavLink>
                  <NavLink
                  // to="/login"
                  style={{width:"100%"}}
                  className=""
                  onClick={() => {
                    setMenuIcon(false);
                    handleLogout();
                  }}
                >
                  <button className="log-btn"><PiSignOut /> Logout</button>
                </NavLink>
                  </div>
                </div>}
                
                
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className="navbar-link home-link"
                  onClick={() => setMenuIcon(false)}
                >
                  <Button className="btn-login">Log In</Button>
                </NavLink>
              </li>
            )}

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
                <span className="cart-total--item">
                  {cart !== null ? cart.length : 0}
                </span>
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
            <MdClose
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
