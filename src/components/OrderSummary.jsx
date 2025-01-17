// OrderSummary.jsx
import React from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce((total, item) => total + item.totalPrice, 0);

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      {cartItems.length > 0 ? (
        <ul className="order-list">
          {cartItems.map((item) => (
            <li key={item.id} className="order-item">
              <img src={item.image} alt={item.name} className="order-item-image" />
              <div className="order-item-details">
                <span className="order-item-name">{item.name}</span>
                <span>Quantity: {item.quantity}</span>
              </div>
              <span className="order-item-price">${item.totalPrice.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <h3>Total: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default OrderSummary;
