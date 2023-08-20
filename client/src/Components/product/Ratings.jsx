// import React from 'react'
import styled from "styled-components";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsStar } from "react-icons/bs";
// eslint-disable-next-line react/prop-types
const Ratings = ({ stars, reviews }) => {
  //Logic for rating
  //will use array.from("osm");      o/p=>["o","s","m"]
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="icon" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <BsStar className="icon" />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div className="icon-style">
        {ratingStar}
        <p>({reviews} Customer reviews)</p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;
export default Ratings;
