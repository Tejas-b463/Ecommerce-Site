import React from 'react'
import Header from "./common/Header"
import Footer from "./common/Footer"
import ProductList from "./ProductList"
const Home = () => {
  return (
    <div>
        <Header/>
        <ProductList/>
        <Footer/>
    </div>
  )
}

export default Home