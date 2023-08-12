// import React from 'react'
import GridView from "./GridView";
import ListView from "./ListView";
import { useFilterContext } from "../context/FilterContext";

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();
  if (grid_view === true) {
    return <GridView products={filter_products} />;
  }
  if (grid_view === false) {
    return <ListView products={filter_products} />;
  }
};

export default ProductList;
