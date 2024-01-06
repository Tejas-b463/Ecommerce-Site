import React from 'react'
import "./Payment.css"
import { Link } from 'react-router-dom'
// import successImage from 'https://cdn.dribbble.com/users/1751799/screenshots/5512482/check02.gif'
const PaymentSucess = () => {
  return (
    <div className="order-success">
    <img src='https://cdn.dribbble.com/users/1751799/screenshots/5512482/check02.gif' alt="Order Success" className="success-image" />
    <h1>Your Order Was Successful!</h1>
    <p>Thank you for shopping with us. Your order has been processed successfully.</p>
    <Link to="/" className="return-home-btn">Return Home</Link>
  </div>
  )
}

export default PaymentSucess