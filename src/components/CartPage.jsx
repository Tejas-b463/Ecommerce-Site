import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartList from "./CartList";
import EmptyCart from "./pages/EmptyCart";
import { Link } from "react-router-dom";

const CartPage = () => {
  const[quantity, setQuantity] = useState(1)
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotalPrice = () => {
   return cartItems.reduce((total, product)=>{
    const itemTotal = product.price * quantity;
    return total + itemTotal;
   },0).toFixed(2);
  };

  return (
    <>
      <div className="cart-summary">
        <h2>Product Details</h2>
        <p>Total Items - {cartItems.length}</p>
      </div>
      <div className="empty-cart">
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="check-out">
            <div className="clear-cart">
            <button className="clear-btn" onClick={handleClearCart}>
              Clear Cart
            </button>
            </div>
            <div className="place-order">
              <div className="total-price">
                Total Price: ${calculateTotalPrice(quantity, cartItems.price)}
              </div>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/paymentdetail"
                className="checkout-button"
              >
                place order
              </Link>
            </div>
          </div>
        )}
        <div>
          <CartList data={cartItems} />
        </div>
      </div>
    </>
  );
};

export default CartPage;
