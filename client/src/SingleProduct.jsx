// import React from "react";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import styled from "styled-components";
import { useEffect } from "react";
import { useProductContext } from "./context/productContext";
import { useParams } from "react-router-dom";
import BreadCrumb from "./Components/BreadCrumb";
import SingleProductImg from "./Components/SingleProductImg";
import AddToCart from "./Components/AddToCart";
import PriceFormator from "./helpers/PriceFormator";
import Ratings from "./Components/Ratings";
const API = "https://api.pujakaitem.com/api/products";
const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  // console.log({ name });

  if (isSingleLoading) {
    return <div className="page_loading">loading....</div>;
  }

  return (
    <Wrapper>
      <BreadCrumb title={name} />
      <div className="container">
        <div className="grid grid-two-column">
          <div className="product_images">
            <SingleProductImg imgs={image} />
          </div>

          {/* Product data */}
          <div className="product-data">
            <h2>{name}</h2>
            <Ratings stars={stars} reviews={reviews} />

            <p className="product-data-price">
              MRP:
              <del>
                <PriceFormator price={price + 250000} />
              </del>
            </p>
            <p
              style={{ marginRight: "5px" }}
              className="product-data-price product-data-real-price"
            >
              Deal of the Day:
              <PriceFormator price={price} />
            </p>

            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>15 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Quick Shipment </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    /* padding: 0; */
    width: 100%;
    padding: 5rem 0rem;
  }
  .product_images {
    display: flex;
    align-items: center;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    .grid-two-column {
      grid-template-columns: repeat(2, 1fr);
    }
    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
