// AddToCartButton.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return <button onClick={handleAddToCart}>Add to Cart</button>;
};

export default AddToCartButton;
