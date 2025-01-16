import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "../styles.css";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  if (!product) return <div>Loading product details...</div>;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert(`${product.title} added to the cart!`);
  };

  return (
    <div className="product-details-page">
      <button className="back-button" onClick={() => navigate("/")}>
        Back to Homepage
      </button>
      <div className="product-details">
        <img src={product.thumbnail} alt={product.title} className="product-image" />
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ${product.price}</p>
          <p className="product-rating">Rating: {product.rating} ★</p>
          <p className="product-category">Category: {product.category}</p>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button onClick={() => navigate("/cart")}>Go to Cart</button>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

