import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles.css";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        navigate("/"); // Redirect if the product is not found
      });
  }, [id, navigate]);

  if (loading) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className="product-details-page">
      <button onClick={() => navigate("/")}>Back to Homepage</button>
      <div className="product-details">
        <img src={product.thumbnail} alt={product.title} />
        <h1>{product.title}</h1>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>{product.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
