// CartItem.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    if (quantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity }));
    }
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Price: ${item.price.toFixed(2)}</p>
        <div className="cart-item-actions">
          <label>
            Quantity:
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={handleQuantityChange}
            />
          </label>
          <p>Total: ${item.totalPrice.toFixed(2)}</p>
          <button onClick={handleRemove} className="remove-button">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
