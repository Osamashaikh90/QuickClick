// import React from 'react'
import { styled } from "styled-components";
const Contact = () => {
  return (
    <>
      <Wrapper>
        <h3 className="common-heading" style={{ marginBottom: "3rem" }}>
          Feel Free to Contact us
        </h3>
        <div className="grid grid-two-column">
          <div className="container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.9533937129077!2d72.83638419165563!3d19.091496157087693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9a5b97284df%3A0xe2814d0190dc38e4!2sReliance%20SMART!5e0!3m2!1sen!2sin!4v1688063597489!5m2!1sen!2sin"
              width="620"
              height="425"
              style={{ border: 0 }}
              allowFullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="container">
            <div className="contact-form">
              <form
                action="https://formspree.io/f/maygwlwk"
                method="POST"
                className="contact-inputs"
              >
                <input
                  type="text"
                  placeholder="username"
                  name="username"
                  required
                  autoComplete="off"
                  value=""
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="Email"
                  required
                  autoComplete="off"
                />
                <textarea
                  name="message"
                  required
                  cols="30"
                  rows="10"
                  autoComplete="off"
                  placeholder="Enter your message"
                ></textarea>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0 3rem 0;
  text-align: center;
  .grid {
    display: grid;
    gap: 0rem;
  }
  .container {
    margin-top: 1rem;
    margin-left: 12rem;

    .contact-form {
      min-width: 60rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.4s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    iframe {
      width: 70vw;
    }
    .container-form {
      /* margin-top: 10rem; */
    }
  }
`;

export default Contact;
