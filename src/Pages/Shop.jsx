import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Shop.css";
import ads from "../assets/couch.png";
import { CartContext } from "./CartContext";

function Shop() {
  let { state, dispatch } = useContext(CartContext);
  let { cid } = useParams();
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/furniture`)
      .then((a) => a.json())
      .then((b) => {
        console.log(b);
        setData(b.products);
      });
  }, []);
  return (
    <>
      <section className=" hero hello py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="intro-excerpt mt-4">
                <h1>
                  {" "}
                  <span clsas="d-block">Shop</span>
                </h1>
              </div>
            </div>
            <div className="col-lg-8">
              <img src={ads} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <h2>{cid}</h2>
          <div className="row">
            {data.map((a) => (
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 pb-5">
                    <div className="product-grid">
                      <div className="product-image">
                        <a href="#">
                          <img className="pic-1" src={a.thumbnail} />
                          <img className="pic-2" src={a.images[1]} />
                        </a>
                        <ul className="social">
                          <li>
                            <Link to="/ProductDetails" data-tip="Quick View">
                              <i className="fa fa-search" />
                            </Link>
                          </li>
                          <li>
                            <a href="" data-tip="Add to Wishlist">
                              <i className="fa fa-shopping-bag" />
                            </a>
                          </li>
                          <li>
                            <Link
                              to="/Cart"
                              data-tip="Add to Cart"
                              onClick={() =>
                                dispatch({ type: "addtocart", payload: a })
                              }
                            >
                              <i className="fa fa-shopping-cart" />
                            </Link>
                          </li>
                        </ul>
                        <span className="product-new-label">Sale</span>
                        <span className="product-discount-label">20%</span>
                      </div>
                      <ul className="rating">
                        <li className="fa fa-star" />
                        <li className="fa fa-star" />
                        <li className="fa fa-star" />
                        <li className="fa fa-star" />
                        <li className="fa fa-star disable" />
                      </ul>
                      <div className="product-content">
                        <h3 className="title">
                          <a href="#">{a.title}</a>
                        </h3>
                        <div className="price">
                          $16.00
                          <span>{a.price}</span>
                        </div>
                        <p
                          className="add-to-cart"
                          onClick={() =>
                            dispatch({ type: "addtocart", payload: a })
                          }
                        >
                          + Add To Cart
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 pb-5">
                    <div className="product-grid">
                      <div className="product-image">
                        <a href="#">
                          <img className="pic-1" src={a.thumbnail} />
                          <img className="pic-2" src={a.images[2]} />
                        </a>
                        <ul className="social">
                          <li>
                            <Link to="/ProductDetails" data-tip="Quick View">
                              <i className="fa fa-search" />
                            </Link>
                          </li>
                          <li>
                            <a href="" data-tip="Add to Wishlist">
                              <i className="fa fa-shopping-bag" />
                            </a>
                          </li>
                          <li>
                            <Link
                              to="/Cart"
                              data-tip="Add to Cart"
                              onClick={() =>
                                dispatch({ type: "addtocart", payload: a })
                              }
                            >
                              <i className="fa fa-shopping-cart" />
                            </Link>
                          </li>
                        </ul>
                        <span className="product-new-label">Sale</span>
                        <span className="product-discount-label">50%</span>
                      </div>
                      <ul className="rating">
                        <li className="fa fa-star" />
                        <li className="fa fa-star" />
                        <li className="fa fa-star" />
                        <li className="fa fa-star" />
                        <li className="fa fa-star" />
                      </ul>
                      <div className="product-content">
                        <h3 className="title">
                          <a href="#">{a.title}</a>
                        </h3>
                        <div className="price">
                          $5.00
                          <span>$10.00</span>
                        </div>
                        <p
                          className="add-to-cart"
                          onClick={() =>
                            dispatch({
                              type: "addtocart",
                              payload: { ...a, quantity: 1 },
                            })
                          }
                          href=""
                        >
                          + Add To Cart
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 pb-5">
                    <div className="product-grid">
                      <div className="product-image">
                        <a href="#">
                          <img className="pic-1" src={a.thumbnail} />
                          <img className="pic-2" src={a.images[3]} />
                        </a>
                        <ul className="social">
                          <li>
                            <Link to="/ProductDetails" data-tip="Quick View">
                              <i className="fa fa-search" />
                            </Link>
                          </li>
                          <li>
                            <a href="" data-tip="Add to Wishlist">
                              <i className="fa fa-shopping-bag" />
                            </a>
                          </li>
                          <li>
                            <Link
                              to="/Cart"
                              data-tip="Add to Cart"
                              onClick={() =>
                                dispatch({ type: "addtocart", payload: a })
                              }
                            >
                              <i className="fa fa-shopping-cart" />
                            </Link>
                          </li>
                        </ul>
                        <span className="product-new-label">Sale</span>
                        <span className="product-discount-label">50%</span>
                      </div>
                      <ul className="rating">
                        <li className="fa fa-star" />
                        <li className="fa fa-star" />
                        <li className="fa fa-star" />
                        <li className="fa fa-star" />
                        <li className="fa fa-star" />
                      </ul>
                      <div className="product-content">
                        <h3 className="title">
                          <a href="#">{a.title}</a>
                        </h3>
                        <div className="price">
                          $5.00
                          <span>$10.00</span>
                        </div>
                        <p
                          className="add-to-cart"
                          onClick={() =>
                            dispatch({ type: "addtocart", payload: a })
                          }
                        >
                          + Add To Cart
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 pb-5">
                    <div className="product-grid">
                      <div className="product-image">
                        <a href="#">
                          <img className="pic-1" src={a.thumbnail} />
                          <img className="pic-2" src={a.images[4]} />
                        </a>
                        <ul className="social">
                          <li>
                            <Link to="/ProductDetails" data-tip="Quick View">
                              <i className="fa fa-search" />
                            </Link>
                          </li>
                          <li>
                            <a href="" data-tip="Add to Wishlist">
                              <i className="fa fa-shopping-bag" />
                            </a>
                          </li>
                          <li>
                            <Link
                              to="/Cart"
                              data-tip="Add to Cart"
                              onClick={() =>
                                dispatch({ type: "addtocart", payload: a })
                              }
                            >
                              <i className="fa fa-shopping-cart" />
                            </Link>
                          </li>
                        </ul>
                        <span className="product-new-label">Sale</span>
                        <span className="product-discount-label">50%</span>
                      </div>
                      <ul className="rating">
                        <li className="fa fa-star" />
                        <li className="fa fa-star" />
                        <li className="fa fa-star" />
                        <li className="fa fa-star" />
                        <li className="fa fa-star" />
                      </ul>
                      <div className="product-content">
                        <h3 className="title">
                          <a href="#">Men's Plain Tshirt</a>
                        </h3>
                        <div className="price">
                          $5.00
                          <span>$10.00</span>
                        </div>
                        <p
                          className="add-to-cart"
                          onClick={() =>
                            dispatch({ type: "addtocart", payload: a })
                          }
                        >
                          + Add To Cart
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;
