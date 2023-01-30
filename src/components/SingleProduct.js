import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { addToCart, removeFromCart } from "../redux/Actions";
import { useDispatch, useSelector } from "react-redux";

const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.allItems.cart);

  return (
    <>
      <div className="products">
        <Card.Img variant="top" src={product.images[0]} alt={product.title} />
        <Card.Body>
          <Card.Title>
            {product.title} ({product.brand})
            <p className="product-desc">
              <span>{product.description}</span>
            </p>
            <p className="product-desc">
              <span>In Stock : {product.stock}</span>
            </p>
          </Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>${product.price} </span>
            <Rating rating={Math.round(product.rating)} />
          </Card.Subtitle>
          {cartItems.some((cartItem) => cartItem.id === product.id) ? (
            <Button
              variant="danger"
              className="cart-btn"
              onClick={() => dispatch(removeFromCart(product.id))}
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              variant="primary"
              className="cart-btn"
              disabled={product.stock > 0 ? false : true}
              onClick={() => dispatch(addToCart(product))}
            >
              {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
            </Button>
          )}
        </Card.Body>
      </div>
    </>
  );
};

export default SingleProduct;
