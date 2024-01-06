import React from 'react'
import "./Payment.css"
import { Link } from 'react-router-dom'
import EmptyImg from "../../img/empty-cart.png"
// import successImage from 'https://cdn.dribbble.com/users/1751799/screenshots/5512482/check02.gif'
const PaymentSucess = () => {
  return (
    <div className="order-success">
    <img style={{width:"200px"}} src={EmptyImg} alt="Order Success" className="success-image" />
    <h1>Your shopping cart is empty.</h1>
    <p>Please add something soon, carts have feelings too.</p>
    <Link to="/" className="payment-btn ">Continue Shopping</Link>
  </div>
  )
}

export default PaymentSucess