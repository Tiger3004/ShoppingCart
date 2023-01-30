import React from "react";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <>
      <div className="main">
        <Filters />
        <ProductList />
      </div>
    </>
  );
};

export default Home;
