import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Home";
import CartPage from "./CartPage";
import ProductList from "./ProductList";
import PaymentDetails from "./pages/PaymentDetails";
import PaymentSucess from "./pages/PaymentSucess";
import Header from "./common/Header";
import Footer from "./common/Footer";

const Body = () => {
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/paymentdetail" element={<PaymentDetails />} />
        <Route path="/paymentsucess" element={<PaymentSucess />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default Body;