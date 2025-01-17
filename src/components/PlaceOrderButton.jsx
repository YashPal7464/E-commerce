// PlaceOrderButton.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";

const PlaceOrderButton = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    dispatch(clearCart()); // Clear the cart
    setTimeout(() => {
      navigate("/"); // Redirect to the homepage
    }, 2000); // Wait for 2 seconds before redirecting
  };

  return (
    <div className="place-order">
      {!orderPlaced ? (
        <button onClick={handlePlaceOrder} className="place-order-button">
          Place Order
        </button>
      ) : (
        <div className="order-confirmation">
          <h3>Thank you for your order!</h3>
          <p>Your order has been placed successfully.</p>
        </div>
      )}
    </div>
  );
};

export default PlaceOrderButton;
