import React, { Fragment } from "react";
import { Badge, FormControl, Nav, Dropdown, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { removeFromCart } from "../redux/Actions";

const HeaderNavbar = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.allItems.cart);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Home</Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              placeholder="Search a product"
              className="m-auto"
            />
          </Navbar.Text>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>{cartItems.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 370 }}>
                {cartItems.length > 0 ? (
                  <>
                    {cartItems.map((cartItem) => {
                      return (
                        <Fragment key={cartItem.id}>
                          <span className="cartitem">
                            <img
                              src={cartItem.images[0]}
                              alt={cartItem.title}
                              className="cartItemImg"
                            />
                            <div className="cartItemDetail">
                              <span>{cartItem.title}</span>
                            </div>
                            <div className="cartItemDetail">
                              <span>Qty : {cartItem.qty}</span>
                            </div>
                            <div className="cartItemDetail">
                              <span>${cartItem.price}</span>
                            </div>
                            <div className="cartItemDetail">
                              <span>${cartItem.price * cartItem.qty}</span>
                            </div>
                            <AiFillDelete
                              fontSize="16px"
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                dispatch(removeFromCart(cartItem.id))
                              }
                            />
                          </span>
                        </Fragment>
                      );
                    })}

                    <Button>Proceed to Checkout</Button>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is empty!</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderNavbar;
