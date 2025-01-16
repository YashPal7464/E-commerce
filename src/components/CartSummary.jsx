import React from "react";

const CartSummary = ({ items }) => {
  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <p>Total Items: {items.length}</p>
      <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default CartSummary;
