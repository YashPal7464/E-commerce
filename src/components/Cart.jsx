// Cart.jsx
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce((total, item) => total + item.totalPrice, 0);
  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
            <button
              onClick={() => navigate("/checkout")}
              className="checkout-button"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <p>Your cart is empty. Add some items!</p>
      )}
    </div>
  );
};

export default Cart;
