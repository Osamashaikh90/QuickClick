// import React from 'react'

import { NavLink } from "react-router-dom";
import PriceFormator from "../../helpers/PriceFormator";

const Product = (curElem) => {
  //destructuring
  const { _id, name, image, price, category } = curElem;
  // console.log({ _id });
  return (
    <NavLink to={`/singleProduct/${_id}`}>
      <div className="card">
        <figure>
          <img src={image} alt="" />
          <figcaption className="caption">{category}</figcaption>
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">
              {<PriceFormator price={price} />}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
