import { useState, useEffect } from "react";


const useProductList = () =>{
    const [products, setProducts] = useState([]);
    
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products?limit=20`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
   return products;
}
export default useProductList;