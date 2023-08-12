// import React from 'react'
import { styled } from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          <div className="slide">
            <img src="./images/image2.png" alt="trusted-brands" />
          </div>
          <div className="slide">
            <img src="./images/image3.png" alt="trusted-brands" />
          </div>
          <div className="slide">
            <img src="./images/image4.png" alt="trusted-brands" />
          </div>
          <div className="slide">
            <img src="./images/image6.png" alt="trusted-brands" />
          </div>
          <div className="slide">
            <img src="./images/image8.png" alt="trusted-brands" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 8rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 10rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.8rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 9rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;
