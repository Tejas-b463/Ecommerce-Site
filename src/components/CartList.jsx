import React, { useState } from "react";
import "./CardPage.css";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const ProductSummaryPage = ({ data }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    title: "Product Name",
    price: 20.99,
    image: "product_image_url.jpg",
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calculateTotalPrice = () => {
    return (product.price * quantity).toFixed(2);
  };

  return (
    <div className="product-summary-page">
      {data &&
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
        <div key={product.id} className="check-out">
        <div className="total-price">Total Price: ${calculateTotalPrice()}</div>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="/paymentdetail"
          className="checkout-button"
        >
          place order
        </Link>
      </div>
       

      
    </div>
  );
};

export default ProductSummaryPage;
