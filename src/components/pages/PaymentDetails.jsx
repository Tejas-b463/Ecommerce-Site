import "./Payment.css";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
  return (
    <div className="checkout-form">
      <h1>Checkout ✅</h1>
      <form>
        <label>
          Name
          <input type="text" name="name" />
        </label>

        <label>
          Address
          <textarea name="address" />
        </label>

        <label>
          Card Number
          <input type="text" name="cardNumber" />
        </label>

        <div className="flex-container">
          <div className="flex-item">
            <label>
              Expiry Date
              <input type="text" name="expiryDate" />
            </label>
          </div>

          <div className="flex-item">
            <label>
              CVV
              <input type="text" name="cvv" />
            </label>
          </div>
        </div>

        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="/paymentsucess"
          type="button"
          className="payment-btn"
        >
          Payment
        </Link>
      </form>
    </div>
  );
};

export default CheckoutForm;
