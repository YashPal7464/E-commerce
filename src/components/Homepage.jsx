import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [rating, setRating] = useState(0);
  const [sortOrder, setSortOrder] = useState("default");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Filter Logic
  useEffect(() => {
    let filtered = products;

    // Apply Filters
    if (searchQuery.trim()) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (category !== "all") {
      filtered = filtered.filter((product) => product.category === category);
    }

    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (rating > 0) {
      filtered = filtered.filter((product) => product.rating >= rating);
    }

    if (sortOrder === "price-low-high") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-high-low") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [searchQuery, category, priceRange, rating, sortOrder, products]);

  const resetPriceRange = () => {
    setPriceRange([0, 10000]);
  };

  if (loading) return <div>Loading products...</div>;

  return (
    <div className="homepage">
      {/* Site Header */}
      <header className="site-header">
        <div className="logo">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/e-commerce.png"
            alt="E-com Logo"
          />
          <h1>E-com</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* Sidebar for Filters */}
        <aside className="sidebar">
          <h2>Filters</h2>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar"
          />

          <h3>Category</h3>
          <select onChange={(e) => setCategory(e.target.value)} value={category}>
            <option value="all">All Categories</option>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
            <option value="fragrances">Fragrances</option>
            <option value="skincare">Skincare</option>
            <option value="groceries">Food</option>
            <option value="furniture">Furniture</option>
          </select>

          <h3>Price Range</h3>
          <input
            type="range"
            min="0"
            max="10000"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
          />
          <span>Max Price: ${priceRange[1]}</span>
          <button onClick={resetPriceRange} className="reset-button">
            Reset Price Range
          </button>

          <h3>Rating</h3>
          <select onChange={(e) => setRating(Number(e.target.value))} value={rating}>
            <option value="0">All Ratings</option>
            <option value="4">4 Stars & Up</option>
            <option value="3">3 Stars & Up</option>
            <option value="2">2 Stars & Up</option>
            <option value="1">1 Star & Up</option>
          </select>

          <h3>Sort By</h3>
          <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
            <option value="default">Default</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </aside>

        {/* Product Grid */}
        <section className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.thumbnail} alt={product.title} />
              <h2>{product.title}</h2>
              <p>${product.price}</p>
              <p className="product-rating">Rating: {product.rating} ★</p>
              <button onClick={() => navigate(`/product/${product.id}`)}>
                View Details
              </button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Homepage;
