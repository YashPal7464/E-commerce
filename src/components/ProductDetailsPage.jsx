import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles.css";

const ProductDetailsPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch product details based on the ID
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  if (!product) {
    return <div>Loading product details...</div>;
  }

  const handleAddToCart = () => {
    // Mock action for adding product to cart
    alert(`${product.title} added to the cart!`);
  };

  return (
    <div className="product-details-page">
      {/* Back to Homepage Button */}
      <button className="back-button" onClick={() => navigate("/")}>
        Back to Homepage
      </button>

      {/* Product Details Section */}
      <div className="product-details">
        <img src={product.thumbnail} alt={product.title} className="product-image" />
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ${product.price}</p>
          <p className="product-rating">Rating: {product.rating} ★</p>
          <p className="product-category">Category: {product.category}</p>

          {/* Add to Cart Button */}
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
