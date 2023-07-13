// import React from 'react'

import { NavLink } from "react-router-dom";
import PriceFormator from "../helpers/priceFormator";

const Product = (curElem) => {
  console.log(curElem);
  //destructuring
  const { id, name, image, price, category } = curElem;
  return (
    <NavLink to={`/singleProduct/${id}`}>
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
