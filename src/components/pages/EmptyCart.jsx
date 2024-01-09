import React from 'react'
import "./Payment.css"
import { Link } from 'react-router-dom'
import EmptyImg from "../../img/empty-cart.png"


const EmptyCart = () => {
  return (
    <div className="order-success">
    <img style={{width:"200px"}} src={EmptyImg} alt="Order Success" className="success-image" />
    <h1>Your shopping cart is empty.</h1>
    <p>Please add something soon, carts have feelings too.</p>
    <Link onClick={()=>window.scrollTo(0,0)} to="/" className="payment-btn ">Continue Shopping</Link>
  </div>
  )
}

export default EmptyCart