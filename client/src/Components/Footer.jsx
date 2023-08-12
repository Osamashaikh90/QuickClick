// import React from 'react'
import { styled } from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const Wrapper = styled.section`
    .iSIFGq {
      margin: 0;
    }

    .contact-short {
      max-width: 60vw;
      margin: auto;
      padding: 3rem 6rem;
      background-color: ${({ theme }) => theme.colors.bg};
      border-radius: 1rem;
      box-shadow: ${({ theme }) => theme.colors.shadowSupport};
      transform: translateY(50%);

      .grid div:last-child {
        justify-self: end;
        align-self: center;
      }
    }

    footer {
      padding: 11rem 0 9rem 0;
      background-color: ${({ theme }) => theme.colors.footer_bg};
      h3 {
        color: ${({ theme }) => theme.colors.hr};
        margin-bottom: 2rem;
        font-weight: bold;
        font-size: x-large;
      }
      p {
        color: ${({ theme }) => theme.colors.white};
      }
      .footer-social--icons {
        display: flex;
        gap: 2rem;

        div {
          padding: 1rem;
          border-radius: 50%;
          border: 2px solid ${({ theme }) => theme.colors.white};

          .icons {
            color: ${({ theme }) => theme.colors.white};
            font-size: 2.4rem;
            position: relative;
            cursor: pointer;
          }
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 1.5rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
    .grid-four-column {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .contact-short {
        max-width: 80vw;
        margin: 4.8rem auto;
        transform: translateY(0%);
        text-align: center;

        .grid div:last-child {
          justify-self: center;
        }
      }

      footer {
        padding: 8rem 0 8rem 0;
      }

      .footer-bottom--section {
        padding-top: 4.8rem;
      }
    }
  `;

  return (
    <Wrapper>
      <div className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3 style={{ marginBottom: "1rem" }}>Ready to get Started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <Button>
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
          </div>
        </div>
      </div>
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Osama Shop</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam provident mollitia.
            </p>
          </div>
          <div className="footer-about">
            <h3>Categories</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam provident mollitia.
            </p>
          </div>
          <div className="footer-about">
            <h3>Informations</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam provident mollitia.
            </p>
          </div>
          <div className="footer-social">
            <h3>Connect with Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam provident mollitia.
            </p>
          </div>
        </div>
        <hr />
      </footer>
    </Wrapper>
  );
};

export default Footer;
