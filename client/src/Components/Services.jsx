// import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { styled } from "styled-components";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-three-column ">
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Super Fast ans Free Delivery</h3>
            </div>
          </div>
          <div className="services-2">
            <div className="services-column-2">
              <div>
                <MdSecurity className="icon" />
                <h3>Non-Contact Shipping</h3>
              </div>
            </div>
            <div className="services-column-2">
              <div>
                <GiReceiveMoney className="icon" />
                <h3>Money back gaurantee</h3>
              </div>
            </div>
          </div>
          <div className="services-3">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h3>Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 8rem 0;

  .grid {
    gap: 4rem;
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;

    .services-column-2 {
      background: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 1.6rem;
  }

  .icon {
    /* font-size: rem; */
    width: 6rem;
    height: 6rem;
    padding: 1.5rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
`;
export default Services;
