// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import ProductDetailsPage from "./components/ProductDetailsPage";
import Cart from "./components/Cart";
import Navigation from "./components/Navigation";
import CheckoutPage from "./components/CheckoutPage";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
