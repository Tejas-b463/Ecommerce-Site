import { useState, useEffect } from 'react';
import Shimmer from './pages/Shimmer';
import './ProductList.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import InfiniteScroll from 'react-infinite-scroll-component';

const ProductList = ({ data }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async (pageNumber) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?limit=20&page=${pageNumber}`
      );
      const newData = await response.json();

      // Update state with new data
      setProducts((prevData) => [...prevData, ...newData]);

      // If the fetched data is less than the limit, set hasMore to false
      if (newData.length < 20) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  // Write data
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={() => setPage(page + 1)}
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
              <div className="product-item">
              <p className="item-price">${item.price}</p>
              <p className='item-price'>{item.category}</p>
              </div>
              <button className="btn" onClick={() => handleAddItem(item)}>
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default ProductList;
