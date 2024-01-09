import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import EmptyCart from "./pages/EmptyCart";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import "./CardPage.css";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState({});

  const handleClearCart = () => {
    dispatch(clearCart());
    setQuantities({}); // Clear quantities as well
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, product) => {
      const itemTotal = product.price * (quantities[product.id] || 1);
      return total + itemTotal;
    }, 0).toFixed(2);
  };

  const updateQuantity = (productId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  return (
    <div className="empty-cart">
      <div className="cart-summary">
        <h2>Product Details</h2>
        <p>Total Items - {cartItems.length}</p>
      </div>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="check-out">
          <div className="place-order">
            <div className="total-price">
              Total Price: ${calculateTotalPrice()}
            </div>
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/paymentdetail"
              className="checkout-button"
            >
              place order
            </Link>
          </div>
          <div className="clear-cart">
            <button className="clear-btn" onClick={handleClearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      )}
      <div className="product-summary-page">
        {cartItems.map((product) => (
          <div key={product.id} className="product-cart-main">
            <div className="product-card">
              <img src={product.image} alt={product.title} />
              <h2 className="product-title">{product.title}</h2>
              <p>Price: ${product.price.toFixed(2)}</p>
            </div>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(product.id, (quantities[product.id] || 1) - 1)}>-</button>
              <span>{quantities[product.id] || 1}</span>
              <button onClick={() => updateQuantity(product.id, (quantities[product.id] || 1) + 1)}>+</button>
              <button
                className="remove-btn"
                onClick={() => dispatch(removeItem(product.id))}
              >
                <CgClose />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
