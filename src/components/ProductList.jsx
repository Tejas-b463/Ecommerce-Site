import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Shimmer from "./pages/Shimmer";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?limit=20&page=${page}`
      );
      const data = await response.json();

      if (data.length === 0) {
        console.log("No more data");
        setHasMore(false);
        return;
      }

      setProducts((prevProducts) => [...prevProducts, ...data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<Shimmer />}
    >
      <div className="product-container">
        {products.map((item) => (
          <div key={item.id} className="product normal">
            <div className="product-header">
              <img src={item.image} alt="product" />
            </div>
            <div className="product-details">
              <h4 className="item-price">{item.title}</h4>
              <p className="item-price">{item.price}</p>
              <button className="btn">Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default ProductList;
