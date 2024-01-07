import React, { useState } from "react";
import "./CardPage.css";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { RxCross2 } from "react-icons/rx";

const CartList = ({ data }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);


  const incrementQuantity = () => {
    if(quantity >= 1){
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-summary-page">
      {
        data.map((product) => (
          <div className="product-cart-main">
            <div className="product-card">
              <img src={product.image} alt={product.title} />
              <h2 className="product-title">{product.title}</h2>
              <p>Price: ${product.price.toFixed(2)}</p>
            </div>
            <div className="quantity-controls">
              <button onClick={decrementQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={incrementQuantity}>+</button>
              <button
                className="remove-btn"
                onClick={() => dispatch(removeItem(product.id))}
              >
                <RxCross2 />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CartList;
