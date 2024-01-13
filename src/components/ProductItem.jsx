
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import toast from 'react-hot-toast';

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(item));
    notify();
  };

  const notify = () => toast.success('Item has been added to cart');

  return (
    <div key={item.id} className="product normal">
      <div className="product-header">
        <img src={item.image} alt="product" />
      </div>
      <div className="product-details">
        <h4 className="item-price">{item.title}</h4>
        <div className="product-item">
          <p className="item-price">${item.price}</p>
          <p className="item-price">{item.category}</p>
        </div>
        <div>
          <button className="btn" onClick={handleAddItem}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
