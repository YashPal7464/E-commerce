import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="homepage">
      <h1>Product List</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button onClick={() => navigate(`/product/${product.id}`)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
