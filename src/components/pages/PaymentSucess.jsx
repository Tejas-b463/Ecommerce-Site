import React from 'react'
import "./Payment.css"
import { Link } from 'react-router-dom'
import {PAYMENT_SUCCESS_IMG} from "../../utils/constant"

const PaymentSucess = () => {
  return (
    <div className="order-success">
    <img src={PAYMENT_SUCCESS_IMG} alt="Order Success" className="success-image" />
    <h1>Your Order Was Successful!</h1>
    <p>Thank you for shopping with us. Your order has been processed successfully.</p>
    <Link  onClick={() => window.scrollTo(0, 0)} to="/" className="payment-btn ">Continue Shopping</Link>
  </div>
  )
}

export default PaymentSucess