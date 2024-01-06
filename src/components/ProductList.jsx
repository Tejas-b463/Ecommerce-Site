import { useState, useEffect } from "react";
import Shimmer from "./pages/Shimmer";
import "./ProductList.css";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
// import { useParams } from "react-router-dom";
// import useProductList from "../utils/useProductList";

const ProductList = ({data}) => {
  const[product,setProducts] = useState()
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?limit=20`
      );
      const data = await response.json();
      setProducts(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (!data) {
      // If data prop is not provided, fetch data
      fetchData();
    } else {
      // If data prop is provided, use it directly
    setProducts(data);
    }
  }, [data]);


  // Write data
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return !product ? (
    <Shimmer />
  ) : (
    <div className="product-container">
      {product.map((item) => (
        <div key={item.id} className="product normal">
          <div className="product-header">
            <img src={item.image} alt="product" />
          </div>
          <div className="product-details">
            <h4 className="item-price">{item.title}</h4>
            <p className="item-price">{item.price}</p>
            <button className="btn" onClick={() => handleAddItem(item)}>
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
