// import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
// eslint-disable-next-line react/prop-types
const BreadCrumb = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>/{title}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  padding-left: 1.2rem;

  a {
    font-size: 2rem;
  }
`;

export default BreadCrumb;
