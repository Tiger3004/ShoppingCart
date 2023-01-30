import React, { Fragment, useEffect } from "react";
import { fetchingData } from "../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "./SingleProduct";

const ProductList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.allItems.items.products);

  useEffect(() => {
    dispatch(fetchingData());
  }, [dispatch]);
  return (
    <>
      <div className="product-container">
        <div className="items-list">
          {items &&
            items.map((item) => {
              return <SingleProduct key={item.id} product={item} />;
            })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
