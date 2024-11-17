import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateSubtotal(state.cartItems);
    calculateTotal(state.cartItems);
  }, [state.cartItems]);

  const calculateSubtotal = (items) => {
    let sub = 0;
    items.forEach((item) => {
      sub += item.price;
    });
    setSubtotal(sub);
  };

  const calculateTotal = (items) => {
    let tot = 0;
    items.forEach((item) => {
      tot += item.price;
    });
    setTotal(tot);
  };

  return (
    <>
      <div className="container">
        <table id="cart" className="table table-hover table-condensed">
          <thead>
            <tr>
              <th style={{ width: "50%" }}>Product</th>
              <th style={{ width: "10%" }}>Price</th>
              <th style={{ width: "8%" }}>Quantity</th>
              <th style={{ width: "22%" }} className="text-center">
                Subtotal
              </th>
              <th style={{ width: "10%" }} />
            </tr>
          </thead>
          <tbody>
            {state.cartItems.map((a) => (
              <tr key={a.id}>
                <td data-th="Product">
                  <div className="row">
                    <div className="col-sm-2 hidden-xs">
                      <img
                        src={a.thumbnail}
                        alt="..."
                        className="img-responsive w-100"
                      />
                    </div>
                    <div className="col-sm-10">
                      <h4 className="nomargin"> {a.title}</h4>
                      <p>
                        Quis aute iure reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                        dolor sit amet.
                      </p>
                    </div>
                  </div>
                </td>
                <td data-th="Price">${a.price}</td>
                <td data-th="Quantity">
                  <input
                    type="number"
                    className="form-control text-center"
                    value={a.quantity}
                  />
                </td>
                <td data-th="Subtotal" className="text-center">
                  ${a.price}
                </td>
                <td className="actions" data-th="">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      dispatch({ type: "removefromcart", payload: a })
                    }
                  >
                    <i className="fa fa-trash-o" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="visible-xs">
              <td className="text-center">
                <strong>Total ${total}</strong>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/Shop" className="btn btn-warning">
                  <i className="fa fa-angle-left" /> Continue Shopping
                </Link>
              </td>
              <td colSpan="2" className="hidden-xs" />
              <td className="hidden-xs text-center">
                <strong>Total ${subtotal}</strong>
              </td>
              <td>
                <a href="#" className="btn btn-success btn-block">
                  Checkout <i className="fa fa-angle-right" />
                </a>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default Cart;
