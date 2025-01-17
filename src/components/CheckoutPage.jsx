// CheckoutPage.jsx
import React from "react";
import OrderSummary from "./OrderSummary";
import PlaceOrderButton from "./PlaceOrderButton";

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <OrderSummary />
      <PlaceOrderButton />
    </div>
  );
};

export default CheckoutPage;
