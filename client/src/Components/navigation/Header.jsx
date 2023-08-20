// import React from 'react'
//Navlink use to render w/o refreshing the page
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";
const Header = () => {
  return (
    <>
      <ParentHeader>
        <NavLink to="/">
          <img className="logo" src="./images/logo.png" alt="LOGO" />
        </NavLink>
        <Nav />
      </ParentHeader>
    </>
  );
};

const ParentHeader = styled.header`
  padding: 0 2rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;

export default Header;
