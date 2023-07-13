// import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
// eslint-disable-next-line react/prop-types
const HeroSection = (props) => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="grid grid-two-column">
            <div className="hero-section-data">
              <p>Welcome to</p>
              {/* eslint-disable-next-line react/prop-types */}
              <h1>{props.myData}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                veniam voluptatibus doloremque soluta reprehenderit ea
                praesentium, aspernatur minima non inventore corrupti
                voluptates, sapiente officiis molestiae iure velit dicta rem
                modi hic consequuntur.
              </p>
              <NavLink>
                <Button>Shop Now</Button>
              </NavLink>
            </div>
            <div className="hero-section-image">
              {/* eslint-disable-next-line react/no-unknown-property, react/prop-types */}
              <figure top={props.top}>
                {/* eslint-disable-next-line react/prop-types */}
                <img src={props.imgsrc} alt="" className="img-style" />
              </figure>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 10rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 100%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: ${(top) => {
        top;
      }};
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: -2%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
