// import React from 'react'
import styled from "styled-components";
import { useFilterContext } from "../context/FilterContext";
import { FaCheck } from "react-icons/fa";
import PriceFormator from "../helpers/PriceFormator";
import { Button } from "../styles/Button";
const FilterSection = () => {
  const {
    filters: { text, colors, price, maxPrice, minPrice },
    updateFilterValue,
    clearFilters,
    all_products,
  } = useFilterContext();

  //get unique data
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });

    if (property === "colors") {
      return (newVal = ["all", ...new Set([].concat(...newVal))]);
      //can also use flat
      // return (newVal = newVal.flat());
    } else {
      //distinct value
      return (newVal = ["all", ...new Set(newVal)]);
    }
  };
  //to categorize the data
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorsOnlyData = getUniqueData(all_products, "colors");

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            placeholder="SEARCH"
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryOnlyData.map((curElem, index) => {
            return (
              <button
                key={index}
                value={curElem}
                type="button"
                name="category"
                onClick={updateFilterValue}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={updateFilterValue}
          >
            {companyOnlyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className="filter-colors colors">
        <h3>Colors</h3>

        <div className="filter-color-style">
          {colorsOnlyData &&
            colorsOnlyData.map((curColor, index) => {
              if (curColor === "all") {
                return (
                  <button
                    key={index}
                    type="button"
                    value={curColor}
                    name="colors"
                    // style={{ backgroundColor: curColor }}
                    className="color-all--style"
                    onClick={updateFilterValue}
                  >
                    all
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="colors"
                  style={{ backgroundColor: curColor }}
                  className={
                    colors === curColor ? "btnStyle active" : "btnStyle"
                  }
                  onClick={updateFilterValue}
                >
                  {colors === curColor ? (
                    <FaCheck className="checkStyle" />
                  ) : null}
                </button>
              );
            })}
        </div>
      </div>

      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <PriceFormator price={price} />
        </p>
        <input
          type="range"
          name="price"
          value={price}
          min={minPrice}
          max={maxPrice}
          onChange={updateFilterValue}
        />
      </div>
      <div className="filter-clear">
        <Button className="btn" onClick={clearFilters}>
          Clear Filter&apos;s
        </Button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.5rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: start;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    padding-bottom: 2px;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection;
