import React from 'react';
import ProductList from '../components/ProductList';
export default function Home() {
  return (
    <div style={{
      background: "#FFF8EE",
      padding: "80px 20px",
      textAlign: "center"
    }}>
      <h1 style={{ color: "#7B2C2C", fontSize: "42px" }}>
        Fresh. Pure. Traditional.
      </h1>

      <p style={{ maxWidth: 600, margin: "20px auto" }}>
        Annapurna Bakery brings you the warmth of homemade sweets and baked
        goodness — prepared with love and purity.
      </p>

      <a href="/menu">
        <button style={{
          background: "#C9A14A",
          border: "none",
          padding: "12px 30px",
          fontSize: "16px",
          borderRadius: "20px"
        }}>
          View Menu
        </button>
      </a>
    </div>
    
  );
}
