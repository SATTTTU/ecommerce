import React, { useContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import AboutUs from "../Pages/AboutUs";
import Services from "../Pages/Services";
import Blog from "../Pages/Blog";
import ContactUs from "../Pages/ContactUs";
import "../Component/Header.css";
import "../index.css";
import Cart from "../Pages/Cart";
import { CartContext } from "../Pages/CartContext";
import ProductDetails from "../Pages/ProductDetails";

function Header() {
  let {state,dispatch}=useContext(CartContext);
  let [kal, setKal] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 100) {
        setKal("sticky");
      } else {
        setKal();
      }
    });
  }, []);
  return (
    <>
      <section className="hello py-3">
        <header className={kal}>
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div>
                  <h1 className="uppercase">
                    SA <span className="text-success">T</span>ISH
                  </h1>
                </div>
              </div>
              <div className="col-lg-8">
                <nav>
                  <ul className="d-flex justify-content-between gap-5 navbar-links">
                    <li>
                      <Link style={linkStyle} to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link style={linkStyle} to="/Shop">
                        Shop{" "}
                      </Link>
                    </li>
                    <li>
                      <Link style={linkStyle} to="/AboutUs">
                        AboutUs
                      </Link>
                    </li>
                    <li>
                      <Link style={linkStyle} to="/Services">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link style={linkStyle} to="/Blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link style={linkStyle} to="/ContactUs">
                        ContactUs
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-2 d-flex gap-2 justify-content-end ">
                <div>
                 <Link to='/Cart'> <button className="btn  position-relative">
                    <i className="fa-solid fa-cart-shopping  text-light" />
                    <span className="position-absolute top-5 start-100 translate-middle   ">
                      <span className="text-light"> {state.cartItems.length}</span>
                    </span>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/cat/:cid/" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        
      </Routes>
    </>
  );
}

const linkStyle = {
  color: "#fff",
  fontSize: "18px",
  textDecoration: "none",
  transition: "color 0.3s ease", 
};

linkStyle[":hover"] = {
  color: "#f00",
};

export default Header;
